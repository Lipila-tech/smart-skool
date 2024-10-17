import React from "react";

function StudentProgress() {
  return (
    <div style={styles.container}>
      <h2>StudentProgress</h2>
      <p>StudentProgress options will go here.</p>
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

export default StudentProgress;
