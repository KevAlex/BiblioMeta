import React from "react";
import Perfil from "../../images/Perfil.png";
function PerfilUsuario() {
  return (
    <div className="d-flex flex-row">
      <div className="me-4">
        <div className="d-flex flex-col">
          <div className="me-4">
            <img src={Perfil} width="110" height="110"></img>
          </div>
          <div>
            <h2>Hola, Brayan!</h2>
            <p>Bienvenido a tu cuenta</p>
          </div>
        </div>
        <div>
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action active"
              aria-current="true"
            >
              Mi cuenta
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Historial de compras
            </a>
            <a href="#" className="list-group-item list-group-item-action">
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
                value="test@example.com"
              />
              <label> Correo</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value="12/05/1999"
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
                value="Brayan Alonso"
              />
              <label>Nombre</label>
            </div>
          </div>

          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value="Pipa Hernandez"
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
