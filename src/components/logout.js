import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all data from localStorage
    localStorage.clear();
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="logout-container">
      <h2>You are logged in</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;