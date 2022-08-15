import React, { useEffect, useState } from "react";
import Perfil from "../../images/Perfil.png";
import { AppContext } from "../../services/ReferenceDataContext";
import { useContext } from "react";
import { getLoginUser } from "../../services/LibraryServices";
import { Link } from "react-router-dom";

type Values = {
  alias: string;
  firstName: string;
  lastName: string;
  email: string;
  birth: string;
};

function PerfilUsuario() {
  const { user } = useContext(AppContext);
  const [state, setState] = user;
  const [userData, setUserData] = useState<Values>({
    alias: "",
    firstName: "",
    lastName: "",
    email: "",
    birth: "",
  });
  console.log("Alias del usuario Perfil", state);

  useEffect(() => {
    getLoginUser(state).then((response) => {
      console.log(response);
      setUserData(response.data);
    });
  }, []);
  return (
    <div className="d-flex flex-row mt-4">
      <div className="me-4">
        <div className="d-flex flex-col">
          <div className="me-4">
            <img src={Perfil} width="110" height="110"></img>
          </div>
          <div>
            <h2>Hola, {state.name}!</h2>
            <p>Bienvenido a tu cuenta</p>
          </div>
        </div>
        <div>
          <div className="list-group">
            <Link
              to="/perfil"
              className="list-group-item list-group-item-action active"
            >
              Mi cuenta
            </Link>
            <Link
              to="/historial"
              className="list-group-item list-group-item-action "
            >
              Historial de compras
            </Link>
            <a href="/login" className="list-group-item list-group-item-action">
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h2>1. Información personal</h2>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value={userData.email}
              />
              <label> Correo</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value={userData.birth}
              />
              <label>Fecha de nacimiento</label>
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value={userData.firstName}
              />
              <label>Nombre</label>
            </div>
          </div>

          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value={userData.lastName}
              />
              <label>Apellido</label>
            </div>
          </div>
        </div>
        <div className="row mb-4  ">
          <div className="col">
            <div className="form-floating">
              <input className="form-control" id="floatingInput" value="-" />
              <label>Telefono</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value="+ 57 320445879"
              />
              <label>Celular</label>
            </div>
          </div>
        </div>
        <div className="row">
          <h2>2. Contraseña</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value="+ 57 320445879"
                type="password"
              />
              <label>Contraseña</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
