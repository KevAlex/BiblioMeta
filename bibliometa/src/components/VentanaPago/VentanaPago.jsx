import styles from "./VentanaPago.module.css";
import Logo_img from "../../images/PagosElectronicos.png";
import NavbarComp from "../NabvarM/NavbarComp";
import Footer from "../Footer/footer";
import tarjetas from "../../images/TarjetasCredito.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export function VentanaPago({ libro }) {
  console.log("salida");
  console.log("info recogida: " + libro);
  console.log("termino");

  return (
    <div>
      <header>
        <NavbarComp />
      </header>

      <main>
        <div className={styles.divContenedor}>
          <div className={styles.main}>
            <div className="d-flex flex-row">
              <div className="container">
                <div className="row mb-4">
                  <div className="col">
                    <img
                      src={Logo_img}
                      alt="Imagen pagos"
                      className={styles.imagen}
                    />
                  </div>

                  <div className="col">
                    <div>
                      <br />
                      <h1 className={styles.titulo}>
                        Módulo de pagos BiblioMeta
                      </h1>
                      <h1 className={styles.titulo}>-</h1>
                      <h1 className={styles.texto}>
                        Bienvenido a nuestro módulo de pagos, sientase seguro de
                        hacer sus pagos con el respaldo de nuestras politicas de
                        seguridad.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p color="black" align-content="center">
            Por favor introduzca los datos requeridos.
          </p>

          <br />

          <div className="container">
            <div className="row mb-4">
              <div className="col">
                <div className={styles.divCentrado2}>
                  <img
                    src={tarjetas}
                    alt="Imagen tarjetas de credito"
                    className={styles.imagen2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.margen}>
            <div className="d-flex flex-row">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control "
                        id="floatingInput"
                        value={libro.title}
                      />
                      <label>Numero de tarjeta de credito</label>
                    </div>
                  </div>
                </div>

                <br />

                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Nombre del titular</label>
                    </div>
                  </div>
                </div>

                <br />

                <div className="row mb-4  ">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Fecha de vencimiento</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Codigo de seguridad</label>
                    </div>
                  </div>
                </div>
                <div className={styles.divCentrado}>
                  <Link to={"/"}>
                    <Button variant="success">Hacer pago</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default VentanaPago;
