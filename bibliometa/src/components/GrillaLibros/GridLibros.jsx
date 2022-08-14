import { ItemTarjeta } from "../TarjetaItem/ItemTarjeta";
import libros from "../../informacion/libros.json";
import styles from "./GridLibros.module.css";
import { AppContext } from "../../services/ReferenceDataContext";
import { useContext } from "react";

export function GridLibros() {
  return (
    <ul className={styles.gridLibros}>
      {libros.map((libro) => (
        <ItemTarjeta key={libro.id} libro={libro} />
      ))}
    </ul>
  );
}
