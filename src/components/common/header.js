import React from "react";
import { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
    Link
} from "react-router-dom";

function Header() {
    const [schoolName, setSchoolName] = useState(null);
    const [schoolId, setSchoolId] = useState(null);

    useEffect(() => {
        // Retrieve schoolName from localStorage on component mount
        const storedSchoolName = localStorage.getItem('school');
        const storedSchoolId = localStorage.getItem('schoolId');
        setSchoolName(storedSchoolName);
        setSchoolId(storedSchoolId);
    }, []);
    return (
        < Navbar bg="light" expand="lg" >
            <Navbar.Brand>
                <h1 style={{ color: "green" }}>Smart Skool</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" exact="true">
                        Home
                    </Nav.Link>
                    <NavDropdown title="Resources">
                        <NavDropdown.Item as={Link} to="/articles">
                            Articles
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/courses">
                            Courses
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">
                        Contact
                    </Nav.Link>

                    <h4>Welcome: {schoolName} </h4>
                    <p>Id: {schoolId}</p>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;