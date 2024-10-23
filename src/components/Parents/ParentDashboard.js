import React from "react";
import { Link } from "react-router-dom";
import "../css/parentDashboard.css"; // Import the CSS file for consistent styling

function ParentDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Parent Dashboard</h2>
      <p>Welcome to Smart Skool! What would you like to do today?</p>
      
      <Link to="/make-payment">
        <button className="dashboard-button">Make a Payment</button>
      </Link>

      <Link to="/payment-history">
        <button className="dashboard-button">Payment History</button>
      </Link>
    </div>
  );
}

export default ParentDashboard;
