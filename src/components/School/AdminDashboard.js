// src/components/School/AdminDashboard.js

import React from "react";
import { Link } from "react-router-dom";
import "../css/adminDashboard.css";
import AdminLinks from "./AdminLinks";
import { Outlet } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <AdminLinks />
        
      </div>

      {/* Main content area */}
      <div className="content-container">
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </div>
  );
}

export default AdminDashboard;
