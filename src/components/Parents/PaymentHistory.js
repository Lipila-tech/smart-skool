import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/paymentHistory.css";

function PaymentHistory() {
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const parentId = "P12345"; // Example parent ID (this would come from authentication)

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      try {
        const parentResponse = await fetch("/data/sample-parent-data.json");
        const paymentResponse = await fetch("/data/sample-payment-data.json");

        if (!parentResponse.ok || !paymentResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const parentData = await parentResponse.json();
        const paymentData = await paymentResponse.json();

        const parent = parentData.find((p) => p.parentId === parentId);
        if (!parent) {
          throw new Error("Parent data not found");
        }

        const parentPayments = paymentData.filter((payment) =>
          parent.paymentHistory.includes(payment.id)
        );        

        if (parentPayments.length === 0) {
          setErrorMessage("No payment history available.");
        } else {
          setPaymentHistory(parentPayments);
        }
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchPaymentHistory();
  }, [parentId]);

  return (
    <div className="payment-history-container">
      <h2>Payment History</h2>
      {errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : paymentHistory.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.paymentId}>
                  <td>{payment.date}</td>
                  <td>{payment.transaction}</td>
                  <td>K{payment.amount}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading payment history...</p>
      )}
    </div>
  );
}

export default PaymentHistory;
