import { ItemTarjeta } from "../TarjetaItem/ItemTarjeta";
import peliculas from "../../informacion/movies.json";
import styles from "./GridPeliculas.module.css";
import { Navigate, Redirect } from "react-router-dom";

export function GridPeliculas() {


  return (
    <ul className={styles.gridPeliculas}>
      {peliculas.map((pelicula) => (
        <ItemTarjeta key={pelicula.id} pelicula={pelicula} />
      ))}
    </ul>
  );
}
