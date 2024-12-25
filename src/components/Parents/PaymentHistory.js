import React, { useState, useEffect } from 'react';
import '../css/PaymentHistory.css';
import axiosInstance from '../../api/axios';


function PaymentHistory({ userId }) {
  const [transactions, setTransactionsData] = useState([]);
  
  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axiosInstance.get(
          `transaction/history/?sponsor-id=${userId}`
        );
        console.log(response.data);
        setTransactionsData(response.data);
      } catch (error) {
        console.error('Error fetching transaction data:', error.response.data);
      }
    };

    fetchTransactionData();
  }, [userId]);

  return (
    <div className="history-container">
      <h2>Payment History</h2>
      <p>Here is a record of your recent activities:</p>

      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Reference</th>
            <th>Description</th>
            <th>Wallet Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((payment, index) => (
            <tr key={index}>
              <td>{payment.created_at}</td>
              <td>{payment.amount}</td>
              <td>{payment.reference}</td>
              <td>{payment.description}</td>
              <td>{payment.wallet_type}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentHistory;