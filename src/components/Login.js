import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        alert('User not found');
      }
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2>Smart Skool Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email (e.g. parent or admin)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    maxWidth: '300px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default Login;
