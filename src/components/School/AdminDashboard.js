<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
=======
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
>>>>>>> 920a28e (Fetch dashboard data from API)
import "../css/adminDashboard.css";

<<<<<<< HEAD
function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [username, setUsername] = useState(""); // State to hold username
  const navigate = useNavigate(); // For navigation after logout

  // Toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Admin logged out");
    localStorage.removeItem("userType"); // Clear user type from localStorage
    localStorage.removeItem("loggedInUser"); // Clear logged-in user info
    navigate("/login"); // Redirect to the login page
  };

  // Fetch logged-in username
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.username) {
      setUsername(loggedInUser.username);
    } else {
      console.warn("No logged-in user found. Redirecting to login...");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard-layout">
      {/* Toggle Button */}
      <button className="toggle-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
=======
function AdminDashboard({ schoolId }) {
  const [dashboardData, setDashboardData] = useState({
    students: 0,
    teachers: 0,
    sponsors: 0,
    classrooms: 0,
    outstandingPayments: 0,
    receivedPayments: 0,
  });


  const location = useLocation(); // Hook to get the current location

  // Check if the current path is for the dashboard or some other component
  const isDashboardPage = location.pathname === '/admin/dashboard/';


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/smartskool/schools/dashboard/${schoolId}/`
        );
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [schoolId]);

  return (
    <div className="dashboard-layout">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <Link to="/admin/dashboard/" className='admin-link'>Dashboard</Link>
        <AdminLinks />
      </div>
>>>>>>> 920a28e (Fetch dashboard data from API)

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

        {/* Username and Logout */}
        <div className="user-logout-container">
          {username && (
            <p className="username-display">
              Username: <strong>{username}</strong>
            </p>
          )}
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="content-container">
<<<<<<< HEAD
        <Outlet />
=======
        <p className="dashboard-path">{location.pathname}</p>
        <Outlet />
        <h1 className={`dashboard-header ${!isDashboardPage ? 'hidden-header' : ''}`}>Summary</h1>

        {/* Conditionally render the cards or reduce their size */}
        <div
          className={`dashboard-cards-container ${!isDashboardPage ? 'reduced-size' : ''}`}
        >
          <div className="dashboard-card students-card">
            <h3>Students</h3>
            <p>{dashboardData.students}</p>
          </div>
          <div className="dashboard-card teachers-card">
            <h3>Teachers</h3>
            <p>{dashboardData.teachers}</p>
          </div>
          <div className="dashboard-card sponsors-card">
            <h3>Sponsors</h3>
            <p>{dashboardData.sponsors}</p>
          </div>
          <div className="dashboard-card outstanding-payments-card">
            <h3>Outstanding Payments</h3>
            <p>K{dashboardData.outstandingPayments.toLocaleString()}</p>
          </div>
          <div className="dashboard-card received-payments-card">
            <h3>Received Payments</h3>
            <p>K{dashboardData.receivedPayments.toLocaleString()}</p>
          </div>
          <div className="dashboard-card classrooms-card">
            <h3>Classrooms</h3>
            <p>{dashboardData.classrooms.toLocaleString()}</p>
          </div>
        </div>
        
>>>>>>> 920a28e (Fetch dashboard data from API)
      </div>
    </div>
  );
}

export default AdminDashboard;
