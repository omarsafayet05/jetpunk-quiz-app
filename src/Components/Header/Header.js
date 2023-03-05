import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <span className="home-style">JetPunk Quizzes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex gap-3">
            <Link className="text-decoration-none" to="/">
              <span className="li-style">Home</span>
            </Link>
            <Link className="text-decoration-none" to="rechart">
              <span className="li-style">Rechart</span>
            </Link>
            <Link className="text-decoration-none" to="blog">
              <span className="li-style">Blog</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
