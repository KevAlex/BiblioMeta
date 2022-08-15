import { useContext } from "react";
import Footer from "../components/Footer/footer";
import NavbarComp from "../components/NabvarM/NavbarComp";
import HistorialCompras from "../components/Usuario/HistorialCompras";
import { AppContext } from "../services/ReferenceDataContext";

function HistorialContainer() {
  const { user } = useContext(AppContext);
  const [state, setState] = user;
  // console.log("Alias del usuario Perfil", state);
  return (
    <>
      <header>
        <NavbarComp />
      </header>
      <main>
        <HistorialCompras />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HistorialContainer;
