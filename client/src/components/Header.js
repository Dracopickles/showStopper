import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

// import DisplayModal from "./components/DisplayModal"
// import "./App.css";

// By extending the React.Component class, Counter inherits functionality from it
class Header extends React.Component {
  // Setting the initial state of the Counter component
  // The render method returns the JSX that should be rendered
  
  
  render() {
    return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="#home">Show Stopper</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Movies</Nav.Link>
      <Nav.Link href="#pricing">TV Shows</Nav.Link>
      <NavDropdown title="What's New?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Service #1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Service #2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Service #3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Etc.</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.5">Link to movie theater?</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Register</Nav.Link>
      <Button onClick={this.props.handleShow}>
        Login
      </Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default Header;
