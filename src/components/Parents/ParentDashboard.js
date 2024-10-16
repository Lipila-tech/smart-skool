import React from "react";
import { Link } from "react-router-dom";

function ParentDashboard() {
  return (
    <div style={styles.container}>
      <h2>Parent Dashboard</h2>
      <p>Welcome to Smart Skool! What would you like to do today?</p>
      <Link to="/make-payment">
        <button style={styles.button}>Make a Payment</button>
      </Link>

      <Link to="/payment-history">
        <button style={styles.button}>Payment History</button>
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

export default ParentDashboard;
