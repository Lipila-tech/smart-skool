// src/components/School/AdminDashboard.js

import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../css/adminDashboard.css";

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // For navigation after logout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="dashboard-layout">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="add-student">Add Student</Link>
            </li>
            <li>
              <Link to="manage-students">Manage Students</Link>
            </li>
            <li>
              <Link to="teacher-management">Manage Teachers</Link>
            </li>
            <li>
              <Link to="payment-management">Payment Management</Link>
            </li>
            <li>
              <Link to="announcements">Announcements</Link>
            </li>
            <li>
              <Link to="class-management">Class Management</Link>
            </li>
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
