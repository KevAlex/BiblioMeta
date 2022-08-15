import { ItemTarjeta } from "../TarjetaItem/ItemTarjeta";
import libros from "../../informacion/libros.json";
import styles from "./GridLibros.module.css";
import { AppContext } from "../../services/ReferenceDataContext";
import { useContext } from "react";
import { Navigate, Redirect } from "react-router-dom";

export function GridLibros() {
  const [state, setState] = useContext(AppContext);

  if (state.name === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <ul className={styles.gridLibros}>
      {libros.map((libro) => (
        <ItemTarjeta key={libro.id} libro={libro} />
      ))}
    </ul>
  );
}
