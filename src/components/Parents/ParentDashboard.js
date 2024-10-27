import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/parentDashboard.css"; 

function ParentDashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
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
      </aside>

      {/* Main Content Area */}
      <div className="content-container">
        <Outlet /> {/* Renders the nested routed content */}
      </div>
    </div>
  );
}

export default ParentDashboard;
