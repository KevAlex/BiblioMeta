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
  const { user } = useContext(AppContext);
  const [state, setState] = user;
  const [bookData, setBookData] = useState<Array<Values>>([]);

  // const [bookData, setBookData] = useState<Values>({
  //   title: "",
  //   operationType: "",
  // });
  console.log("Alias del usuario Perfil", state);

  useEffect(() => {
    getBookUser(state.name).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
      } else {
        setBookData(response.data);
      }
    });
  }, []);

  return (
    <div className="d-flex flex-row mt-4 bg-white">
      <div className="me-4">
        <div className="d-flex flex-col">
          <div className="me-4">
            <img src={Perfil} width="110" height="110"></img>
          </div>
          <div>
            <h2>Hola, {state.name}!</h2>
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
        {bookData === undefined || bookData.length === 0 ? (
          <div>Resumen: No hay libros comprados o alquilados</div>
        ) : (
          <div>Resumen:</div>
        )}
        <div className="row mb-4">
          <div className="col">
            <p>Libro</p>
          </div>
          <div className="col">
            <p>Operación</p>
          </div>

          {bookData.map((item) => {
            return (
              <div className="row mb-4">
                <div key={item.title} className="col">
                  <p>{item.title}</p>
                </div>
                <div className="col">
                  <p> {item.operationType}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HistorialCompras;
