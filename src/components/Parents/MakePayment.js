import React, { useState } from "react";
import "../css/makePayment.css"; // Ensure you have the CSS file for consistent styling

function MakePayment() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePayment = (e) => {
    e.preventDefault();
    // Handle payment logic here (connect to API, payment gateway, etc.)
    console.log(`Payment of ${amount} via ${paymentMethod}`);
    alert("Payment submitted!");
  };

  return (
    <div className="payment-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          placeholder="Amount"
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
          <option value="Credit Card">Credit Card</option>
          <option value="Mobile Money">Mobile Money</option>
        </select>
        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
}

export default MakePayment;
