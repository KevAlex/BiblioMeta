import styles from "./ItemTarjeta.module.css";
import { Link } from "react-router-dom";

//console.log("/inicio/" + libro.id)

export function ItemTarjeta({ libro }) {
  const rutaImagen = "/" + libro.imageLink;
  
  return (
    <li className={styles.itemTarjeta}>
      <Link to={"/inicio/" + libro.id}>
        <img
          width={230}
          height={345}
          className={styles.itemImagen}
          src={rutaImagen}
          alt={libro.title}
        />
        <div>{libro.title}</div>
      </Link>
    </li>
  );
}
