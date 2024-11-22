import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../css/parentDashboard.css"; 
import ParentLinks from "./ParentLinks";


function ParentDashboard() {
  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Parent Dashboard</h2>
        <ParentLinks />
      </aside>

      {/* Main Content Area */}
      <div className="content-container">
        <Outlet /> {/* Renders the nested routed content */}
      </div>
    </div>
  );
}

export default ParentDashboard;
