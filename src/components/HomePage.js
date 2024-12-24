import React from 'react';
import { Link } from 'react-router-dom';
import './css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Smart Skool</h1>
        <p>Your one-stop solution for streamlined school management</p>
      </header>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Effortless Fee Management</h3>
            <p>Enable parents to pay fees on time with options like LearnNow PayLater and mobile money payments.</p>
          </div>
          <div className="feature">
            <h3>Real-Time Payment Tracking</h3>
            <p>Track all payments instantly and reduce administrative workload.</p>
          </div>
          <div className="feature">
            <h3>Student & Teacher Management</h3>
            <p>Keep all student and teacher records organized and accessible.</p>
          </div>
          <div className="feature">
            <h3>Communication Hub</h3>
            <p>Facilitate seamless communication between parents, teachers, and administrators.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Started Today!</h2>
        <p>Join the growing community of schools benefiting from Smart Skool.</p>
        <div className="cta-buttons">
          <Link to="/member-login" className="btn primary">Login</Link>
          <Link to="/register" className="btn secondary">Sign Up</Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Smart Skool. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
