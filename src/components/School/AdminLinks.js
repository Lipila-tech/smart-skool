import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const AdminLinks = () => {
  return (
    <nav>
      
        
          <Nav.Link to="/admin/dashboard/payment-management">Payment Management</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/add-student">Add Student</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/add-user">Add User</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/manage-students">Manage Students</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/teacher-management">Teacher Management</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/class-management">Class Management</Nav.Link>
        
        
          <Nav.Link to="/admin/dashboard/announcements">Announcements</Nav.Link>
        
        
          <Nav.Link to="logout">Logout</Nav.Link>
        
      
    </nav>
  );
};

export default AdminLinks;
