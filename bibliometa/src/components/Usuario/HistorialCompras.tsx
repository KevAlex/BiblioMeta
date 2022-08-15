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
    <div className="d-flex flex-row mt-4 bg-white mb-5">
      <div className="me-4">
        <div className="d-flex flex-col">
          <div className="me-4">
            <img src={Perfil} width="110" height="110"></img>
          </div>
          <div>
            <h2 className="mt-2 text-center">Hola, {state.name}!</h2>
          </div>
        </div>
        <div>
          <div className="list-group mt-4">
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
          <h2 className="text-center">Historial de compras o alquiler</h2>
        </div>
        {bookData === undefined || bookData.length === 0 ? (
          <div className="mb-4">
            Resumen: No hay libros comprados o alquilados
          </div>
        ) : (
          <div>Resumen:</div>
        )}
        <div className="row mb-4">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th className="text-center" scope="col">
                  Libro
                </th>
                <th className="text-center" scope="col">
                  Tipo de operación
                </th>
              </tr>
            </thead>
            <tbody>
              {bookData.map((item) => {
                return (
                  <tr key={item.title}>
                    <td className="text-center">{item.title}</td>
                    <td className="text-center">{item.operationType}</td>
                  </tr>
                  // <div className="row mb-4">
                  //   <div key={item.title} className="col">
                  //     <p>{item.title}</p>
                  //   </div>
                  //   <div className="col">
                  //     <p> {item.operationType}</p>
                  //   </div>
                  // </div>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default HistorialCompras;
