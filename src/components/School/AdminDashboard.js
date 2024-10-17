import React from "react";

function AdminDashboard() {
  return (
    <div style={styles.container}>
      <h2>Admin Dashboard</h2>
      <p>Admin Dashboard will go here.</p>
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
  }
};

export default AdminDashboard;
