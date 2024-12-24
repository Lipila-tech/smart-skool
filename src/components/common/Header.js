import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import "../css/Header.css";

function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="brand">
            <img
              src="/ss-logo.png"
              alt="Smart Skool Logo"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
                objectFit: "contain",
              }}
            />
            <h1 style={{ fontSize: "1.2rem", color: "white", margin: 0 }}>Smart Skool</h1>
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
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;