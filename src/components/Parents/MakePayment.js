import React from "react";

function MakePayment() {
  return (
    <div style={styles.container}>
      <h2>MakePayment</h2>
      <p>MakePayment options will go here.</p>
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

export default MakePayment;
