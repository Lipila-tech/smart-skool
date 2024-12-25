import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    schoolName: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <div className='login-container'>
        <div className="login-form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} className=''>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>
            <div>
              <label>School Name:</label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="login-input"
              />
            </div>
            <button type="submit" className='lr-button'>Register</button>
          </form>
          <div className="links">
            <Link to="/root-login">Root User Login</Link>
            <Link to="/member-login">Member Login</Link>
          </div>
        </div>
      </div>
      <Footer />

    </div>

  );
};

export default Register;