import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        < Navbar bg="light" expand="lg" >
            <Navbar.Brand>
                <h1 style={{ color: "green" }}>Smart Skool</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/" exact>
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
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;