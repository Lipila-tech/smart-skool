import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/login.css";

const Login = () => {
  const [parentEmail, setParentEmail] = useState('');
  const [parentPassword, setParentPassword] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [schoolUsername, setSchoolUsername] = useState('');
  const [schoolPassword, setSchoolPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleParentLogin = (e) => {
    e.preventDefault();

    // Parent login logic
    if (parentEmail && parentPassword) {
      if (parentEmail === 'parent') {
        localStorage.setItem('userType', 'parent');
        navigate('/dashboard');
      } else {
        alert('Use "parent" as email for Parent login');
      }
    } else {
      alert('Please enter both email and password for Parent login');
    }
  };

  const handleSchoolLogin = (e) => {
    e.preventDefault();

    // School login logic
    if (schoolId && schoolUsername && schoolPassword) {
      if (schoolUsername === 'admin') {
        localStorage.setItem('userType', 'admin');
        navigate('/admin/dashboard');
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
          <h3>Parent or Student Login</h3>
          <form onSubmit={handleParentLogin}>
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
          <h3>School Login</h3>
          <form onSubmit={handleSchoolLogin}>
            <input
              type="text"
              placeholder="Ex. 123456"
              value={schoolId}
              onChange={(e) => setSchoolId(e.target.value)}
              className="login-input"
            />
            <input
              type="text"
              placeholder="example@school.com"
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
