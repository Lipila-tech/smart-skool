import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Smart Skool is a platform dedicated to providing quality education resources.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="https://lipila.tech/contact-us/">Contact Us</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@lipila.com</p>
            <p>Phone: +260 969 620 939</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Smart Skool. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;