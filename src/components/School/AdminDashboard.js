// src/components/School/AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/adminDashboard.css";

function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="/admin/add-student">Add Student</Link></li>
            <li><Link to="/admin/manage-students">Manage Students</Link></li>
            <li><Link to="/admin/teacher-management">Manage Teachers</Link></li>
            <li><Link to="/admin/payment-management">Payment Management</Link></li>
            <li><Link to="/admin/announcements">Announcements</Link></li>
            <li><Link to="/admin/class-management">Class Management</Link></li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="content-container">
        <p>Welcome to the Smart Skool Admin Dashboard! Select an option from the menu to get started.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
