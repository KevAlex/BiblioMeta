import styles from "./DetallesLibros.module.css";
import libros from "../../informacion/libros.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import Prueba from "../VentanaPago/VentanaPago";

//import libros from "./libros.json";
import { useParams } from "react-router-dom";

export function DetallesLibros() {
  //const rutaImagen = "/" + libroinf.imageLink;

  let params = useParams();
  let xdlibro = libros.find((libro) => libro.id == params.id);

  const rutaImagen = "/" + xdlibro.imageLink;
  //console.log(rutaImagen);

  //Estudiar funcion ternaria vagos :*

  return (
    <div className={styles.contenedorDetalles}>
      <img
        className={styles.col + " " + styles.imagenLibro}
        src={rutaImagen}
        alt={xdlibro.title}
      />
      <div className={styles.col + " " + styles.detallesLibro}>
        <p className={styles.primero}>
          <strong>Titulo:</strong> {xdlibro.title}
        </p>
        <p className={styles.pColor}>
          <strong>Autor:</strong> {xdlibro.author}
        </p>
        <p className={styles.pColor}>
          <strong>Idioma:</strong> {xdlibro.language}
        </p>
        <p className={styles.pColor}>
          <strong>Año:</strong> {xdlibro.year}
        </p>

        {/* <Prueba libro = {xdlibro}/> */}

        {xdlibro.alquiler === "si" ? (
          <Link to={"/ventanapagos"} libro = {xdlibro}>
            <Button variant="success">Alquilar</Button>
          </Link>
        ) : (
          <></>
        )}
        {xdlibro.venta === "si" ? (
          <Link to={"/ventanapagos"} libro = {xdlibro}>
            <Button variant="info">Comprar</Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default DetallesLibros;
