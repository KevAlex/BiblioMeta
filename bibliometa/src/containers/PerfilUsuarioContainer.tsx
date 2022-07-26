import React from "react";
import NavbarComp from "../components/NabvarM/NavbarComp";
import PerfilUsuario from "../components/Usuario/PerfilUsuario";

function PerfilUsuarioContainer() {
  return (
    <>
      <header>
        <NavbarComp />
      </header>
      <PerfilUsuario />
    </>
  );
}

export default PerfilUsuarioContainer;
