import styles from "./ItemTarjeta.module.css";
import { Link } from "react-router-dom";


export function ItemTarjeta({ pelicula }) {
  const rutaImagen = "https://image.tmdb.org/t/p/w300"+pelicula.poster_path;
  
  return (
    <li className={styles.itemTarjeta}>
      <Link to={"/inicio/" + pelicula.id}>
        <img
          width={230}
          height={345}
          className={styles.itemImagen}
          src={rutaImagen}
          alt={pelicula.title}
        />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}
