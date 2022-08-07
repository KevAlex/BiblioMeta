import { GridLibros } from "../components/GrillaLibros/GridLibros";
import NavbarComp from "../components/NabvarM/NavbarComp";
import Footer from "../components/Footer/footer";

export function GrillaLibrosContainer() {
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <GridLibros />
      </main>
      <footer><Footer/></footer>

    </div>
  );
}

export default GrillaLibrosContainer;