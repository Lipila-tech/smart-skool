import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import "../css/Header.css";

function Header() {
    return (
        <Navbar bg="light" expand="lg">
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
                <h1 style={{ fontSize: "1.2rem", color: "green", margin: 0 }}>Smart Skool</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-na">
                <Nav className="navbar-nav">
                    <Nav.Link as={Link} to="/" exact="true" id="nav-link">
                        Home
                    </Nav.Link>

                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/solutions">
                        Solutions
                    </Nav.Link>
                    <Nav.Link as={Link} to="https://lipila.tech/contact-us/">
                        Contact Us
                    </Nav.Link>
                    <Nav.Link as={Link} to="/member-login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;