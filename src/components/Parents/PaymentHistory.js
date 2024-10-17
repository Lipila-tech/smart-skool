// src/components/parent/PaymentHistory.js
import React, { useEffect, useState } from "react";

function PaymentHistory() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    fetch("/api/parent/payments")
      .then(response => response.json())
      .then(data => setPayments(data))
      .catch(error => console.error("Error fetching payments:", error));
  }, []);

  return (
    <div style={styles.container}>
      <h2>Payment History</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (K)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>{payment.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "8px",
  },
};

export default PaymentHistory;
