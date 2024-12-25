import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./css/main.css";
import axiosInstance from '../../src/api/axios';
import Header from './common/Header';
import Footer from './common/Footer';


const RootUserLogin = () => {
  const [adminEmail, setadminEmail] = useState('');
  const [adminPassword, setadminPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRootLogin = async (e) => {
    e.preventDefault();

    if (!adminEmail || !adminPassword) {
      alert('Please enter both email and password for Admin login');
      return;
    }

    try {
      const data = {
        username: adminEmail,
        password: adminPassword,
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

      localStorage.setItem('userRole', 'admin');
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('school', response.data.school_name);
      localStorage.setItem('schoolId', response.data.school_id);
      navigate('/admin/dashboard/');

    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || 'Invalid credentials');
        alert(`Login failed: ${error.response.data.message || 'Invalid credentials'}`);
      } else {
        setError('An unexpected error occurred');
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-form">
          <h3>Admin Login</h3>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleRootLogin}>
            <input
              type="username"
              placeholder="Username"
              value={adminEmail}
              onChange={(e) => setadminEmail(e.target.value)}
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setadminPassword(e.target.value)}
              className="login-input"
            />
            <button type="submit" className="lr-button">Login</button>
          </form>
          <div className="links">
            <Link to="/member-login">Member Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootUserLogin;