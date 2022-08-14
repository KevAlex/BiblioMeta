import { GridLibros } from "../components/GrillaLibros/GridLibros";
import NavbarComp from "../components/NabvarM/NavbarComp";
import Footer from "../components/Footer/footer";
import Buscar from "../components/BuscarElemento/Buscar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { AppContext } from "../services/ReferenceDataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function GrillaLibrosContainer() {
  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  // const [state, setState] = useContext(AppContext);
  // console.log("Alias del usuario Grid ", state);
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <Buscar />
        <div>
          <Link to="/perfil" className="btn btn-primary">
            Inicia sesión
          </Link>
        </div>
        <GridLibros />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default GrillaLibrosContainer;
