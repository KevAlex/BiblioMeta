import React from "react";
import NavbarComp from "../components/NabvarM/NavbarComp";
import PerfilUsuario from "../components/Usuario/PerfilUsuario";
import Footer from "../components/Footer/footer";
import { AppContext } from "../services/ReferenceDataContext";
import { useContext } from "react";
function PerfilUsuarioContainer() {
  const [state, setState] = useContext(AppContext);
  console.log("Alias del usuario Perfil", state);
  return (
    <>
      <header>
        <NavbarComp />
      </header>
      <main>
        <PerfilUsuario />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PerfilUsuarioContainer;
