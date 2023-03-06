import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

//<img src="./Logo horizontal.png" width="200px"/>

export default function NavbarComp() {

  return (
    <div>
      <Navbar bg="black" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
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
              {/* <Nav.Link href="#action3">Alquiler</Nav.Link>
              <Nav.Link href="#action4">Venta</Nav.Link> */}
              <Link to="/" className="text-white mx-4">
                Inicio
              </Link>
              <Link to="/perfil" className="text-white mx-4">
                Mi Perfil
              </Link>
              <Link to="/contacto" className="text-white mx-4">
                Contactanos
              </Link>
              {/* <Nav.Link href="/contacto"></Nav.Link> */}
            </Nav>
            <p className="text-white mt-2"> Bienvenido </p>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
