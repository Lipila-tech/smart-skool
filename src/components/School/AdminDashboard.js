import React from "react";
import { Link } from "react-router-dom";
import "../css/adminDashboard.css"; 

function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <h2>Admin Dashboard</h2>
      <p>Welcome to Smart Skool! What would you like to do today?</p>
      <Link to="/admin/add-student">
        <button className="admin-dashboard-button">Add Student</button>
      </Link>

      <Link to="/admin/manage-students">
        <button className="admin-dashboard-button">Manage Students</button>
      </Link>
    </div>
  );
}

export default AdminDashboard;
