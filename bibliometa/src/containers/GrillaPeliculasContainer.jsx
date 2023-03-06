import { GridPeliculas } from "../components/GrillaPeliculas/GridPeliculas";
import NavbarComp from "../components/NabvarM/NavbarComp";
import Footer from "../components/Footer/footer";
import Buscar from "../components/BuscarElemento/Buscar";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function GrillaPeliculasContainer() {
  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <Buscar />
        <GridPeliculas />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default GrillaPeliculasContainer;
