import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/login.css";
import axiosInstance from '../../src/api/axios';


const Login = () => {
  const [parentEmail, setParentEmail] = useState('');
  const [parentPassword, setParentPassword] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [schoolUsername, setSchoolUsername] = useState('');
  const [schoolPassword, setSchoolPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRootLogin = async (e) => {
    e.preventDefault();

    // Ensure both fields are filled
    if (!parentEmail || !parentPassword) {
      alert('Please enter both email and password for Parent login');
      return;
    }

    try {
      // API request configuration
      const data = {
        username: parentEmail, // Map email to username as per your API requirement
        password: parentPassword,
      };

      const response = await axiosInstance.post(
        '/authentication/login/root/',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle successful login
      console.log('Login Successful:', response.data);

      // Store user type or token if needed
      localStorage.setItem('userType', 'admin'); // Adjust based on API response
      localStorage.setItem('token', response.data.token); // Save token if provided
      localStorage.setItem('school', response.data.school_name); // Save school name
      localStorage.setItem('schoolId', response.data.school_id);
      navigate('/admin/dashboard/');

    } catch (error) {
      // Handle error scenarios
      setError(error.response.data.detail)
      if (error.response && error.response.data) {
        alert(`Login failed: ${error || 'Invalid credentials'}`);
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleSchoolLogin = (e) => {
    e.preventDefault();

    // School login logic
    if (schoolId && schoolUsername && schoolPassword) {
      if (schoolUsername === 'admin') {
        localStorage.setItem('userType', 'admin');
        navigate('/dashboard');
      } else {
        alert('Use "admin" as username for School login');
      }
    } else {
      alert('Please fill all fields for School login');
    }
  };

  return (
    <div className="login-container">
      <h2>Smart Skool Login</h2>
      <div className="login-forms">
        {/* Parent Login Form */}
        <div className="login-form">
          <h3>Admin User Login</h3>
          <form onSubmit={handleRootLogin}>
            <input
              type="text"
              placeholder="example@email.com"
              value={parentEmail}
              onChange={(e) => setParentEmail(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={parentPassword}
              onChange={(e) => setParentPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>

        <div className="divider"></div>

        {/* School Login Form */}
        <div className="login-form">
          <h3>Student or Teacher Login</h3>
          <form onSubmit={handleSchoolLogin}>
            <input
              type="text"
              placeholder="ID Ex. 123456"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="USERNAME"
              value={schoolUsername}
              onChange={(e) => setSchoolUsername(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={schoolPassword}
              onChange={(e) => setSchoolPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;
