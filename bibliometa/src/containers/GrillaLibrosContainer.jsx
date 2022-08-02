import Footer from "../components/Footer/footer";
import { GridLibros } from "../components/GrillaLibros/GridLibros";
import NavbarComp from "../components/NabvarM/NavbarComp";

export function GrillaLibrosContainer() {
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <div className="mt-2">
          <h1 className="text-center">Colección de libros</h1>
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
