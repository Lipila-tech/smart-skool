import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/admin/dashboard/payment-management">Payment Management</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/add-student">Add Student</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/manage-students">Manage Students</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/teacher-management">Teacher Management</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/class-management">Class Management</Link>
        </li>
        <li>
          <Link to="/admin/dashboard/announcements">Announcements</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminLinks;
