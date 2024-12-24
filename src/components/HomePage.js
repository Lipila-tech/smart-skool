import React from 'react'
import './css/HomePage.css';
import Header from './common/Header';
import Footer from './common/Footer';
import CallToAction from './common/CallToAction';


const HomePage = () => {
    return (
        <div>
            <Header />
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
            </div>
            <CallToAction/>
            <Footer />
        </div>
    );
};

export default HomePage;
