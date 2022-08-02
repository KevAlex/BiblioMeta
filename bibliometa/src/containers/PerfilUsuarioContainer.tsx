import React from "react";
import NavbarComp from "../components/NabvarM/NavbarComp";
import PerfilUsuario from "../components/Usuario/PerfilUsuario";
import Footer from "../components/Footer/footer";
function PerfilUsuarioContainer() {
  return (
    <>
      <header>
        <NavbarComp />
      </header>
      <PerfilUsuario />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PerfilUsuarioContainer;
