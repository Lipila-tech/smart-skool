import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      if (email === 'parent') {
        localStorage.setItem('userType', 'parent');
        navigate('/dashboard');
      } else if (email === 'admin') {
        localStorage.setItem('userType', 'admin');
        navigate('/admin/dashboard');
      } else {
        setError('Use "parent" or "admin" as email');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="container-fluid login-container">
      <h2 className="text-center">Smart Skool Login</h2>
      <form onSubmit={handleLogin} className="form-container">
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
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
