import React from 'react';
import './css/About.css';
import Header from './common/Header';
import Footer from './common/Footer';
import CallToAction from './common/CallToAction';

const About = () => {
    return (
        <div>
            <Header />
            <div className="about-page">
                <header className="about-header">
                    <h1>About Smart Skool</h1>
                    <p>Empowering Private Education Institutions with Innovative Solutions</p>
                </header>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At Smart Skool, our mission is to provide private education institutions with the tools they need to streamline their operations, enhance communication, and improve the overall educational experience for students, teachers, and parents.
                    </p>

                    <h2>Our Story</h2>
                    <p>
                        Smart Skool was founded by a group of passionate educators and technologists who recognized the unique challenges faced by private schools. With a deep understanding of the education sector, our founders set out to create a platform that addresses these challenges and supports the growth and success of private education institutions.
                    </p>

                    <h2>How We Help</h2>
                    <ul>
                        <li>Providing comprehensive fee management solutions to ensure timely payments and reduce financial stress for parents.</li>
                        <li>Offering real-time payment tracking to help schools maintain accurate financial records and reduce administrative workload.</li>
                        <li>Enabling efficient student and teacher management to keep records organized and accessible.</li>
                        <li>Facilitating seamless communication between teachers, students, and parents to foster a collaborative learning environment.</li>
                        <li>Delivering detailed reports and analytics to help school administrators make informed decisions.</li>
                    </ul>

                    <h2>Our Vision</h2>
                    <p>
                        We envision a future where private education institutions can focus on what they do best – educating students – while Smart Skool takes care of the administrative and operational tasks. By leveraging technology, we aim to create a more efficient, transparent, and supportive educational ecosystem.
                    </p>
                </section>
            </div>
            <CallToAction/>
            <Footer />
        </div>
    );
};

export default About;