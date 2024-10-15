import React from "react";

function Payment() {
  return (
    <div style={styles.container}>
      <h2>Make a Payment</h2>
      <p>Payment options will go here.</p>
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
  }
};

export default Payment;
