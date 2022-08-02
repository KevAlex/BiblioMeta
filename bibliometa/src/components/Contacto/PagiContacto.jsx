import styles from "./PagiContacto.module.css";
import Logo_img from "../../images/Lectores.png";
import NavbarComp from "../NabvarM/NavbarComp";
import { useContext } from "react";
import { AuthContext } from "../BD/Auth";
import { Navigate } from "react-router-dom";

function PagiContacto() {
  // const { currentUser } = useContext(AuthContext);
  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div>
      <header>
        <NavbarComp />
      </header>
      <main>
        <div>
          <div className={styles.main}>
            <div className="d-flex flex-row">
              <div className="container">
                <div className="row mb-4">
                  <div className="col">
                    <img
                      src={Logo_img}
                      alt="Bibliometa logo"
                      className={styles.imagen}
                    />
                  </div>

                  <div className="col">
                    <div>
                      <br />
                      <h1 className={styles.titulo}>Contáctanos</h1>
                      <h1 className={styles.titulo}>-</h1>
                      <h1 className={styles.texto}>
                        Escríbenos tu inquietud y nuestro equipo de soporte te
                        ayudara a aclararla o resolverla lo más pronto posible.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />

          <p color="black" align-content="center">
            ¿En que podemos ayudarte?
          </p>

          <br />

          <div className={styles.margen}>
            <div className="d-flex flex-row">
              <div className="container">
                <div className="row mb-4">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Nombre</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                        type="email"
                      />
                      <label>Email</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4  ">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value="-"
                      />
                      <label>Telefono</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Celular</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="floatingInput"
                        value=""
                      />
                      <label>Descripcion</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </main>
    </div>
  );
}

export default PagiContacto;
