import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/parentDashboard.css";

function ParentDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); // For navigation after logout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Add logout logic here, e.g., clearing tokens or user data
    console.log("User logged out");
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
        {/* Logout Button */}
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

export default ParentDashboard;
