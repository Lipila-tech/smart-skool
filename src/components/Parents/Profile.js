import React from "react";

function Profile() {
  return (
    <div style={styles.container}>
      <h2>Profile</h2>
      <p>Parent profile will go here.</p>
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

export default Profile;
