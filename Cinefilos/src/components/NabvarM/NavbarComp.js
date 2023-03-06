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

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="text-white mx-4">
                Inicio
              </Link>
              <Link to="/perfil" className="text-white mx-4">
                Mi Perfil
              </Link>
              <Link to="/contacto" className="text-white mx-4">
                Contactanos
              </Link>

            </Nav>
            <p className="text-white mt-2"> Bienvenido </p>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
