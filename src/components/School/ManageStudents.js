import React from "react";

function ManageStudents() {
  return (
    <div style={styles.container}>
      <h2>ManageStudents</h2>
      <p>ManageStudents will go here.</p>
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

export default ManageStudents;
