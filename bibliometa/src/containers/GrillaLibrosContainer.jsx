import { GridLibros } from "../components/GrillaLibros/GridLibros";
import NavbarComp from "../components/NabvarM/NavbarComp";

export function GrillaLibrosContainer() {
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <GridLibros />
      </main>
    </div>
  );
}

export default GrillaLibrosContainer;