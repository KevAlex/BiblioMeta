import React, { Component } from "react";
//import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//<img src="./Logo horizontal.png" width="200px"/>

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <Navbar bg="black" variant={"dark"} expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                src="/Logo_horizontal2-sf.png"
                width="180px"
                height="50px"
                className="d-inline-block align-top"
                alt="Bibliometa logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/inicio">Libros</Nav.Link>
                <Nav.Link href="#action3">Alquiler</Nav.Link>
                <Nav.Link href="/login">Inicio sesión</Nav.Link>
                <Nav.Link href="/perfil">Mi perfil</Nav.Link>
                <Nav.Link href="/contact">Contactanos</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
