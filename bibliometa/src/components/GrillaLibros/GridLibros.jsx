import { ItemTarjeta } from "../TarjetaItem/ItemTarjeta";
import libros from "../../informacion/libros.json";
import styles from "./GridLibros.module.css";
import { Navigate, Redirect } from "react-router-dom";

export function GridLibros() {


  return (
    <ul className={styles.gridLibros}>
      {libros.map((libro) => (
        <ItemTarjeta key={libro.id} libro={libro} />
      ))}
    </ul>
  );
}
