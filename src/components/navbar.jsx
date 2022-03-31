import React, { Component } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">House Price Predictor</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link href="/model">
                            Model
                        </Nav.Link>
                        <Nav.Link href="/quality-page">
                            Quality Page
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
