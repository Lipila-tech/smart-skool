import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/parentDashboard.css";
import ParentLinks from "./ParentLinks";
import { Outlet } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { Navbar, Nav } from "react-bootstrap";


function ParentDashboard({ userId }) {
  const [schoolName, setSchoolName] = useState(null);
  const [userNames, setUserNames] = useState(null);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Retrieve schoolName from localStorage on component mount
    const storedSchoolName = localStorage.getItem('school');
    const storedUserName = localStorage.getItem('fullname');
    const storedUserRole = localStorage.getItem('userRole');
    setSchoolName(storedSchoolName);
    setUserNames(storedUserName);
    setUserRole(storedUserRole);
  }, []);
  const [dashboardData, setDashboardData] = useState({
    students: 0,
    communications: 0,
    outstandingPayments: 0,
    outstandingLoans: 0,
    payments: 0,
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
  const isDashboardPage = location.pathname === '/sponsor/dashboard/';


  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get(
          `/members/dashboard/${userId}/`
        );
        setDashboardData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [userId]);

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
              <Nav.Link as={Link} to="/sponsor/dashboard/" className="text-white">
                Dashboard
              </Nav.Link>
              <ParentLinks />
            </Nav>
          </Navbar.Collapse>
          <div className="mt-auto text-center text-white p-3">
            <h4 className="mb-1" style={{ fontSize: "1rem" }}>Welcome to: {schoolName}</h4>
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>User: {userNames}</p>
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>{ userRole }</p>
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
                <h3>Outstanding Loans</h3>
                <p>{dashboardData.outstandingLoans}</p>
              </div>
              <div className="dashboard-card outstanding-payments-card">
                <h3>Outstanding Payments</h3>
                <p>K{dashboardData.outstandingPayments.toLocaleString()}</p>
              </div>
              <div className="dashboard-card received-payments-card">
                <h3>Total Payments</h3>
                <p>K{dashboardData.payments.toLocaleString()}</p>
              </div>
              <div className="dashboard-card classrooms-card">
                <h3>Communications</h3>
                <p>{dashboardData.communications.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentDashboard;
