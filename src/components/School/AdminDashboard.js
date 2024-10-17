import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Welcome to Smart Skool! What would you like to do today?</p>
      <Link to="/admin/add-student">
        <button style={styles.button}>Add Student</button>
      </Link>

      <Link to="/admin/manage-students">
        <button style={styles.button}>Manage students</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginBottom: '10px'
  }
};

export default AdminDashboard;
