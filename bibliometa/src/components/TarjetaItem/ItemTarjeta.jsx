import styles from "./ItemTarjeta.module.css";

export function ItemTarjeta({ libro }) {
  const rutaImagen = "/" + libro.imageLink;
  console.log(rutaImagen)
  return (
    <li className={styles.itemTarjeta}>
      <img
        width={230}
        height={345}
        className={styles.itemImagen}
        src={rutaImagen}
        alt={libro.title}
      />
      <div>{libro.title}</div>
    </li>
  );
}
