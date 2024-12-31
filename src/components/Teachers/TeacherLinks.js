import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
const ParentLinks = () => {
    return (
        <nav>
            <Nav.Link as={Link} to="make-payment">Salary Advance</Nav.Link>

            <Nav.Link as={Link} to="payment-history">Pay Statement</Nav.Link>

            <Nav.Link as={Link} to="student-progress">Student Progress</Nav.Link>

            <Nav.Link as={Link} to="profile">Profile</Nav.Link>

            <Nav.Link as={Link} to="communication">Communication</Nav.Link>

            <Nav.Link as={Link} to="logout">Logout</Nav.Link>

        </nav>
    );
};

export default ParentLinks;