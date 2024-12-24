import React from 'react';
import './css/Solutions.css';
import Header from './common/Header';
import Footer from './common/Footer';
import CallToAction from './common/CallToAction';


const Solutions = () => {
    return (
        <div>
            <Header />
            <div className="solutions-page">
                <header className="solutions-header">
                    <h1>Our Solutions</h1>
                    <p>Discover how Smart Skool can help streamline your school management processes.</p>
                </header>

                <section className="solutions-section">
                    <div className="solution">
                        <h2>Effortless Fee Management</h2>
                        <ul>
                            <li>Enable parents to pay fees on time with flexible payment options.</li>
                            <li>Offer LearnNow PayLater plans to ease financial burdens.</li>
                            <li>Support mobile money payments for convenience.</li>
                            <li>Automate fee reminders to ensure timely payments.</li>
                        </ul>
                    </div>

                    <div className="solution">
                        <h2>Real-Time Payment Tracking</h2>
                        <ul>
                            <li>Track all payments instantly with real-time updates.</li>
                            <li>Reduce administrative workload with automated tracking.</li>
                            <li>Generate detailed payment reports for transparency.</li>
                            <li>Monitor payment statuses and send alerts for overdue payments.</li>
                        </ul>
                    </div>

                    <div className="solution">
                        <h2>Student & Teacher Management</h2>
                        <ul>
                            <li>Keep all student and teacher records organized and accessible.</li>
                            <li>Manage student enrollments and class assignments efficiently.</li>
                            <li>Track teacher performance and attendance.</li>
                            <li>Facilitate communication between teachers, students, and parents.</li>
                        </ul>
                    </div>
                </section>
            </div>
            <CallToAction />
            <Footer />
        </div>
    );
};

export default Solutions;