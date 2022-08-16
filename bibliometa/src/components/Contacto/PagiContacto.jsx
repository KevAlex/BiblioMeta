import styles from "./PagiContacto.module.css";
import Logo_img from "../../images/Lectores.png";
import NavbarComp from "../NabvarM/NavbarComp";
import Footer from "../Footer/footer";
import Button from "../Button/Button";

function PagiContacto() {
  // const { currentUser } = useContext(AuthContext);
  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  const handleSubmit = () => {
    alert("Gracias por tu mensaje, lo atenderemos muy pronto");
  };
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
                      <input className="form-control" id="floatingInput" />
                      <label>Nombre</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="floatingInput"
                        type="email"
                      />
                      <label>Email</label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4  ">
                  <div className="col">
                    <div className="form-floating">
                      <input className="form-control" id="floatingInput" />
                      <label>Telefono</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating">
                      <input className="form-control" id="floatingInput" />
                      <label>Celular</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <textarea className="form-control" id="floatingInput" />
                      <label>Descripcion</label>
                    </div>
                  </div>
                </div>
                <div className="container text-center mt-4">
                  <div className="row">
                    <div className="col">
                      <Button
                        text="Enviar peticion"
                        type="submit"
                        classN="p-2 btn btn-primary"
                        onClick={handleSubmit}
                      />
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PagiContacto;
