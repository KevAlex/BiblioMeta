import React from "react";

function PerfilUsuario() {
  return (
    <div className="d-flex flex-row">
      <div className="me-4">
        <p>Panel izquierdo</p>
      </div>

      <div className="container">
        <div>
          <h2>1. Información personal</h2>
        </div>

        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="floatingInput"
                value="test@example.com"
              />
              <label> Correo</label>
            </div>
            <p>Correo</p>
          </div>
          <div className="col">
            <div></div>
            <p>Fecha</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Nombre</p>
          </div>
          <div className="col">
            <p>Apellido</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Telefono fijo</p>
          </div>
          <div className="col">
            <p>Celular</p>
          </div>
        </div>
        <div className="row">
          <h2>2. Contraseña</h2>
        </div>
        <div className="row">
          <div className="col">
            <p>Nueva contraseña</p>
          </div>
          <div className="col">
            <p>Repetir contraseña</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
