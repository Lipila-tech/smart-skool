import React from "react";

function Communication() {
  return (
    <div style={styles.container}>
      <h2>Communication</h2>
      <p>Communication will go here.</p>
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

export default Communication;
