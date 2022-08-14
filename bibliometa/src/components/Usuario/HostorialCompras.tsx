import React, { useEffect, useState } from "react";
import Perfil from "../../images/Perfil.png";
import { AppContext } from "../../services/ReferenceDataContext";
import { useContext } from "react";
import { getBookUser } from "../../services/LibraryServices";
import { Link } from "react-router-dom";

type Values = {
  title: string;
  operationType: string;
};

function HistorialCompras() {
  const [state, setState] = useContext(AppContext);
  const [bookData, setBookData] = useState<Values>({
    title: "",
    operationType: "",
  });
  console.log("Alias del usuario Perfil", state);

  useEffect(() => {
    getBookUser(state.name).then((response) => {
      console.log(response.data);
      //   setUserData(response.data);
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
              className="list-group-item list-group-item-action "
            >
              Mi cuenta
            </Link>
            <Link
              to="/historial"
              className="list-group-item list-group-item-action active "
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
          <h2>1. Historial de compras o alquiler</h2>
        </div>

        <div className="row mb-4">
          <div className="col">Libro</div>
          <div className="col">Estado</div>
        </div>
      </div>
    </div>
  );
}

export default HistorialCompras;
