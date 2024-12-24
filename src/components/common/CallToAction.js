import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2>Get Started Today!</h2>
      <p>Join the growing community of schools benefiting from Smart Skool.</p>
      <div className="cta-buttons">
        <Link to="/member-login" className="btn primary">Login</Link>
        <Link to="/register" className="btn secondary">Sign Up</Link>
      </div>
    </section>
  );
};

export default CallToAction;