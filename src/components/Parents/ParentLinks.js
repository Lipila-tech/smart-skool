import React from 'react';
import { Link } from 'react-router-dom';

const ParentLinks = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="make-payment">Make a Payment</Link>
                </li>
                <li>
                    <Link to="payment-history">Payment History</Link>
                </li>
                <li>
                    <Link to="student-progress">Student Progress</Link>
                </li>
                <li>
                    <Link to="profile">Profile</Link>
                </li>
                <li>
                    <Link to="communication">Communication</Link>
                </li>
                <li>
                    <Link to="logout">Logout</Link>
                </li>
            </ul>
        </nav>
    );
};

export default ParentLinks;
