import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]); // Store user data
  const navigate = useNavigate();

  // Load user data from JSON
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/data/sample-user-data.json'); // Fetch JSON from public/data folder
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUsers(data.users); // Assuming JSON has a "users" array
      } catch (error) {
        setError('Error loading user data');
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        // Store user type and username in localStorage
        localStorage.setItem('userType', user.type);
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        if (user.type === 'parent') {
          navigate('/dashboard');
        } else if (user.type === 'admin') {
          navigate('/admin/dashboard');
        }
      } else {
        setError('Invalid email or password');
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
          placeholder="Email"
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
