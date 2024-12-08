import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/parentDashboard.css";

function ParentDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [username, setUsername] = useState(""); // State to hold username
  const navigate = useNavigate(); // For navigation after logout

  // Toggle sidebar open/close state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Parent logged out");
    localStorage.removeItem("userType"); // Clear user type from localStorage
    localStorage.removeItem("loggedInUser"); // Clear logged-in user info
    navigate("/login"); // Redirect to the login page
  };

  // Fetch logged-in username
  useEffect(() => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser && loggedInUser.username) {
        setUsername(loggedInUser.username);
      } else {
        console.warn("No logged-in user found. Redirecting to login...");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error parsing logged-in user data:", error);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="dashboard-layout">
      {/* Toggle Button */}
      <button
        className="toggle-button"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        title="Toggle sidebar"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <h2>Parent Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="make-payment">Make a Payment</Link>
            </li>
            <li>
              <Link to="payment-history">Payment History</Link>
            </li>
            <li>
              <Link to="student-progress">Student Progress</Link>
            </li>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="communication">Communication</Link>
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
          <button
            className="logout-button"
            onClick={handleLogout}
            aria-label="Logout"
            title="Logout"
          >
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

export default ParentDashboard;
