import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/tableStyles.css";
import "../css/paymentHistory.css";

function PaymentHistory() {
  const [payments] = useState([
    { id: 1, date: "2024-10-10", transaction: "Tuition Payment", amount: 500, status: "Completed" },
    { id: 2, date: "2024-09-15", transaction: "Library Fee", amount: 80, status: "Pending" },
    { id: 3, date: "2024-08-20", transaction: "Sports Equipment", amount: 125, status: "Completed" },
  ]);

  return (
    <div className="history-container">
      <h2>Payment History</h2>
      <p>Here is a record of your recent activities:</p>
      {payments.length > 0 ? (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{new Date(payment.date).toLocaleDateString()}</td>
                  <td>{payment.transaction}</td>
                  <td>K{payment.amount}</td>
                  <td>
                    <span className={`status-badge ${payment.status.toLowerCase()}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No payment history found.</p>
      )}
    </div>
  );
}

export default PaymentHistory;
