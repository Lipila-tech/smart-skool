import React from "react";
import { Link } from "react-router-dom";

function ParentDashboard() {
  return (
    <div style={styles.container}>
      <h2>ParentDashboard</h2>
      <p>Welcome to Smart Skool! What would you like to do today?</p>
      <Link to="/makepayment">
        <button style={styles.button}>Make a MakePayment</button>
      </Link>

      <Link to="/paymenthistory">
        <button style={styles.button}>Check PaymentHistory</button>
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
