import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../css/adminDashboard.css";

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
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
