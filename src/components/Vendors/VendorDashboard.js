import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/adminDashboard.css";
import VendorLinks from "./VendorLinks";
import { Outlet } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { Navbar, Nav } from "react-bootstrap";


function VendorDashboard({ schoolId }) {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedUserRole = localStorage.getItem('userRole');
    setUserRole(storedUserRole);
  }, []);
  const [dashboardData, setDashboardData] = useState({
    students: 0,
    teachers: 0,
    sponsors: 0,
    classrooms: 0,
    outstandingPayments: 0,
    receivedPayments: 0,
  });
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavLinkClick = () => {
    if (isNavCollapsed) {
      setIsNavCollapsed(false); // Close the menu
    }
  };


  const location = useLocation(); // Hook to get the current location

  // Check if the current path is for the dashboard or some other component
  const isDashboardPage = location.pathname === '/vendor/';


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/dashboard/${schoolId}/`
        );
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [schoolId]);

  return (
    <>
      <div className="dashboard-layout">
        {/* Sidebar Navbar */}
        <Navbar
          bg="primary"
          variant="dark"
          expand="lg"
          className="sidebar-navbar"
          expanded={isNavCollapsed}
        >
          <Navbar.Brand className="text-center w-100 py-3 d-flex align-items-center justify-content-center">
            <img
              src="/ss-logo.png"
              alt="Smart Skool Logo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                objectFit: "contain",
              }}
            />
            <h1 style={{ fontSize: "1.2rem", color: "white", margin: 0 }}>Smart Skool</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="sidebar-nav" onClick={handleToggle} />
          <Navbar.Collapse id="sidebar-nav">
            <Nav className="flex-column w-100" onClick={handleNavLinkClick}>
              <Nav.Link as={Link} to="/vendor/" className="text-white">
                Dashboard
              </Nav.Link>
              <VendorLinks />
            </Nav>
          </Navbar.Collapse>
          <div className="mt-auto text-center text-white p-3">
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>{userRole}</p>
          </div>
        </Navbar>

        {/* Main Content */}
        <div className="content-area">
          <div className="content-container">
            <p className="dashboard-path">{location.pathname}</p>
            <Outlet />
            <h1
              className={`dashboard-header ${!isDashboardPage ? "hidden-header" : ""}`}
            >
              Summary
            </h1>

            {/* Dashboard Cards */}
            <div
              className={`dashboard-cards-container ${!isDashboardPage ? "reduced-size" : ""
                }`}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorDashboard;
