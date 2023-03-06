import styles from "./DetallesLibros.module.css";
import libros from "../../informacion/libros.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarComp from "../NabvarM/NavbarComp";
import Footer from "../Footer/footer";

export function DetallesLibros() {

  let params = useParams();
  let xdlibro = libros.find((libro) => libro.id == params.id);

  const rutaImagen = "/" + xdlibro.imageLink;
  //console.log(rutaImagen);

  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <div>
          <div className={styles.contenedorDetalles}>
            <img
              className={styles.col + " " + styles.imagenLibro}
              src={rutaImagen}
              alt={xdlibro.title}
            />
            <div className={styles.col + " " + styles.detallesLibro}>
              <p className="text-black">
                <strong>Titulo:</strong> {xdlibro.title}
              </p>
              <p className="text-black">
                <strong>Autor:</strong> {xdlibro.author}
              </p>
              <p className="text-black">
                <strong>Idioma:</strong> {xdlibro.language}
              </p>
              <p className="text-black">
                <strong>Año:</strong> {xdlibro.year}
              </p>
              <p className="text-black">
                <strong>Precio:</strong> {xdlibro.precio}
              </p>

              {/* <Prueba libro = {xdlibro}/> */}

              {xdlibro.alquiler === "si" ? (
                <Link to={"/ventanapagos"} libro={xdlibro}>
                  <Button variant="success">Alquilar</Button>
                </Link>
              ) : (
                <></>
              )}
              {xdlibro.venta === "si" ? (
                <Link to={"/ventanapagos"} libro={xdlibro}>
                  <Button variant="info">Comprar</Button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default DetallesLibros;
