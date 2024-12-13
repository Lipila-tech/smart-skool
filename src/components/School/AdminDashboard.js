import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/adminDashboard.css";
import AdminLinks from "./AdminLinks";
import { Outlet } from 'react-router-dom';
import axiosInstance from '../../api/axios';


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
    <div className="dashboard-layout">
      {/* Sidebar for navigation */}
      <div className="sidebar">
        <Link to="/admin/dashboard/" className='admin-link'>Dashboard</Link>
        <AdminLinks />
      </div>

      {/* Main content area */}
      <div className="content-container">
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
        
      </div>
    </div>
  );
}

export default AdminDashboard;
