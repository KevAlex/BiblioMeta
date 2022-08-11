import styles from "./DetallesLibros.module.css";
import libros from "../../informacion/libros.json";
import Button from 'react-bootstrap/Button';

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
        <p>
          <strong>Autor:</strong> {xdlibro.author}
        </p>
        <p>
          <strong>Idioma:</strong> {xdlibro.language}
        </p>
        <p>
          <strong>Año:</strong> {xdlibro.year}
        </p>

        {xdlibro.alquiler === "si" ? <Button variant="success" style={{width:"100px", margin:"50px", }}>Alquilar</Button> : <></>}
        {xdlibro.venta === "si" ? <Button variant="info" style={{width:"100px", margin:"50px", }}>Comprar</Button> : <></>}

      </div>
    </div>
  );
}

export default DetallesLibros;
