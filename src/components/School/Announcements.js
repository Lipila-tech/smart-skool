import React from "react";

function Announcements() {
  return (
    <div style={styles.container}>
      <h2>Announcements</h2>
      <p>Announcements will go here.</p>
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

export default Announcements;
