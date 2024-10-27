import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // test email
    // email=parent or admin password=<any>

    // Authentication logic goes here
    // Check if email and password are provided
    if (email && password) {
      if (email === 'parent') {
        // Store user type in localStorage
        localStorage.setItem('userType', 'parent');
        navigate('/dashboard');
      } else if (email === 'admin') {
        // Store user type in localStorage
        localStorage.setItem('userType', 'admin');
        navigate('/admin/dashboard');
      } else {
        alert('user parent or admin as email');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="login-container">
      <h2>Smart Skool Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email (e.g. parent or admin)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
