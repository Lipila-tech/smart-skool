// src/components/parent/PaymentHistory.js
import React, { useEffect, useState } from "react";
import "../css/paymentHistory.css";

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
    <div className="history-container">
      <h2>History</h2>
      <p>Here is a record of your recent activities:</p>

      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-10-10</td>
            <td>Tuition Payment</td>
            <td>K500</td>
            <td>Completed</td>
          </tr>
          <tr>
            <td>2024-09-15</td>
            <td>Library Fee</td>
            <td>K80</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>2024-08-20</td>
            <td>Sports Equipment</td>
            <td>K125</td>
            <td>Completed</td>
          </tr>
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
