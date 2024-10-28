// src/components/Parents/MakePayment.js

import React, { useState, useEffect } from "react";
import "../css/makePayment.css";

function MakePayment() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("MTN Momo");
  const [isConfirming, setIsConfirming] = useState(false);
  const [momoNumber, setMomoNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLoanTerms, setShowLoanTerms] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(""); // Track payment status
  const [reminderMessage, setReminderMessage] = useState("");

  useEffect(() => {
    // Reminder logic if payment status is pending
    if (paymentStatus === "pending") {
      const reminderInterval = setInterval(() => {
        setReminderMessage("Reminder: Your loan payment is still pending.");
      }, 10000); // Every 10 seconds

      return () => clearInterval(reminderInterval); // Cleanup on unmount
    }
  }, [paymentStatus]);

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === "LearnNow PayLater") {
      setShowLoanTerms(true); // Show loan terms if "LearnNow PayLater" is selected
    } else {
      setIsConfirming(true); // Move to confirmation for other methods
    }
  };

  const handleBack = () => {
    setIsConfirming(false);
    setAmount("");
    setPaymentMethod("MTN Momo");
    setShowLoanTerms(false);
    setPaymentStatus("");
    setReminderMessage("");
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    if (paymentMethod === "MTN Momo" || paymentMethod === "Airtel Money") {
      setShowModal(true); // Show modal for Mobile Money confirmation
    } else {
      alert("Loan application submitted! Await confirmation.");
      setPaymentStatus("pending"); // Set status to pending for loan payment
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>

      {!isConfirming && !showLoanTerms ? (
        <form onSubmit={handlePayment} className="payment-form">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="payment-input"
            required
          />
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="payment-select"
            required
          >
            <option value="MTN Momo">MTN Momo</option>
            <option value="Airtel Money">Airtel Money</option>
            <option value="LearnNow PayLater">LearnNow PayLater</option>
          </select>
          <button type="submit" className="payment-button">Proceed</button>
        </form>
      ) : showLoanTerms ? (
        <div className="loan-terms">
          <h3>LearnNow PayLater Terms</h3>
          <p>Interest Rate: 5% per month</p>
          <p>Repayment Period: 6 months</p>
          <p>Confirm to proceed with the loan registration.</p>
          <div className="button-group">
            <button type="button" onClick={handleBack} className="back-button">Back</button>
            <button onClick={() => setIsConfirming(true)} className="payment-button">Accept Terms</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleConfirmation} className="confirmation-form">
          <h3>Confirm Payment Details</h3>
          <p>Amount: <span className="highlight">{amount}</span></p>
          <p>Payment Method: <span className="highlight">{paymentMethod}</span></p>
          {paymentMethod === "MTN Momo" || paymentMethod === "Airtel Money" ? (
            <input
              type="tel"
              placeholder="Enter MoMo Number"
              value={momoNumber}
              onChange={(e) => setMomoNumber(e.target.value)}
              className="payment-input"
              required
            />
          ) : null}
          <div className="button-group">
            <button type="button" onClick={handleBack} className="back-button">Back</button>
            <button type="submit" className="payment-button">Confirm Payment</button>
          </div>
        </form>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Payment Confirmation</h4>
            <p>Please confirm the payment on your phone.</p>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}

      {paymentStatus === "pending" && (
        <div className="payment-status">
          <p>Payment Status: <span className="status-highlight">{paymentStatus}</span></p>
          {reminderMessage && <p className="reminder-message">{reminderMessage}</p>}
        </div>
      )}
    </div>
  );
}

export default MakePayment;
