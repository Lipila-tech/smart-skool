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
  const [paymentStatus, setPaymentStatus] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");
  const [students, setStudents] = useState([
    { id: 1, name: "Wilson Chisenga", outstandingFees: 500 },
    { id: 2, name: "Barnabas Mwaipaya", outstandingFees: 400 },
    { id: 3, name: "Kombe Mwape", outstandingFees: 300 }
  ]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [totalAmountDue, setTotalAmountDue] = useState(0);

  useEffect(() => {
    if (paymentStatus === "pending") {
      const reminderInterval = setInterval(() => {
        setReminderMessage("Reminder: Your loan payment is still pending.");
      }, 10000);

      return () => clearInterval(reminderInterval);
    }
  }, [paymentStatus]);

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === "LearnNow PayLater") {
      setShowLoanTerms(true);
    } else {
      setIsConfirming(true);
    }
  };

  const handleBack = () => {
    setIsConfirming(false);
    setAmount("");
    setPaymentMethod("MTN Momo");
    setShowLoanTerms(false);
    setPaymentStatus("");
    setReminderMessage("");
    setSelectedStudents([]);
    setTotalAmountDue(0);
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    if (paymentMethod === "MTN Momo" || paymentMethod === "Airtel Money") {
      setShowModal(true);
    } else {
      alert("Loan application submitted! Await confirmation.");
      setPaymentStatus("pending");
    }
  };

  const handleStudentSelection = (student) => {
    const updatedSelection = selectedStudents.includes(student.id)
      ? selectedStudents.filter((id) => id !== student.id)
      : [...selectedStudents, student.id];

    setSelectedStudents(updatedSelection);

    const total = students
      .filter((student) => updatedSelection.includes(student.id))
      .reduce((sum, student) => sum + student.outstandingFees, 0);

    setTotalAmountDue(total);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value <= totalAmountDue) {
      setAmount(value);
    }
  };

  const isContinueDisabled = selectedStudents.length === 0 || !amount;

  const closeModal = () => setShowModal(false);

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>

      {!isConfirming && !showLoanTerms ? (
        <>
          <div className="student-selection">
            <h3>Select Students</h3>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Select</th>
                  <th>Student Name</th>
                  <th>Outstanding Fee</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedStudents.includes(student.id)}
                        onChange={() => handleStudentSelection(student)}
                      />
                    </td>
                    <td>{student.name}</td>
                    <td>K{student.outstandingFees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="total-amount">Total Amount Due: K{totalAmountDue}</p>
          </div>
          <form onSubmit={handlePayment} className="payment-form">
            <lable>Enter amount to pay:
              <input
                type="number"
                placeholder="Enter Amount to Pay"
                value={amount}
                onChange={handleAmountChange}
                className="payment-input"
                required
              />

            </lable>

            <label>Select Payment Method:
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

            </label>

            <button type="submit" className="payment-button" disabled={isContinueDisabled}>
              Continue
            </button>
          </form>
        </>
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
          {(paymentMethod === "MTN Momo" || paymentMethod === "Airtel Money") && (
            <input
              type="tel"
              placeholder="Enter MoMo Number"
              value={momoNumber}
              onChange={(e) => setMomoNumber(e.target.value)}
              className="payment-input"
              required
            />
          )}
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
