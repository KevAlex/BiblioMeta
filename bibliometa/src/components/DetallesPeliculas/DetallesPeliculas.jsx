import styles from "./DetallesPeliculas.module.css";
import peliculas from "../../informacion/movies.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavbarComp from "../NabvarM/NavbarComp";
import Footer from "../Footer/footer";

export function DetallesPeliculas() {

  let params = useParams();
  let xdpelicula = peliculas.find((pelicula) => pelicula.id == params.id);

  const rutaImagen = "/" + xdpelicula.imageLink;
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
              className={styles.col + " " + styles.imagenPelicula}
              src={rutaImagen}
              alt={xdpelicula.title}
            />
            <div className={styles.col + " " + styles.detallesPelicula}>
              <p className="text-black">
                <strong>Titulo:</strong> {xdpelicula.title}
              </p>
              <p className="text-black">
                <strong>Autor:</strong> {xdpelicula.author}
              </p>
              <p className="text-black">
                <strong>Idioma:</strong> {xdpelicula.language}
              </p>
              <p className="text-black">
                <strong>Año:</strong> {xdpelicula.year}
              </p>
              <p className="text-black">
                <strong>Precio:</strong> {xdpelicula.precio}
              </p>


              {xdpelicula.alquiler === "si" ? (
                <Link to={"/ventanapagos"} pelicula={xdpelicula}>
                  <Button variant="success">Alquilar</Button>
                </Link>
              ) : (
                <></>
              )}
              {xdpelicula.venta === "si" ? (
                <Link to={"/ventanapagos"} pelicula={xdpelicula}>
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

export default DetallesPeliculas;
