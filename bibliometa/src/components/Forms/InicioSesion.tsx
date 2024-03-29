import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import BiblioLogo from "../../images/Logo_horizontal2-sf.png";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getLoginUser } from "../../services/LibraryServices";
import { AppContext } from "../../services/ReferenceDataContext";

type Values = {
  name: string;
  password: string;
};

type VariableGlobal = {
  referencia: string;
};

function InicioSesion({ referencia }: VariableGlobal) {
  const { user } = useContext(AppContext);
  const [state, setState] = user;

  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);

    // Production
    getLoginUser(values).then((response) => {
      console.log(response);
      setLoginStatus(response.status);
    });
    setState(values);

    // Test without DB
    // setLoginStatus(200);
    // values.name = "Pepito";
    // values.password = "123";
    // setState(values);
  };

  if (loginStatus === 200) {
    return <Navigate to="/" />;
  } else if (loginStatus === 204) {
    alert("Datos erroneos");
    setLoginStatus(0);
  }
  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
      <div>
        <img src={BiblioLogo} width="270" height="90"></img>
      </div>
      <div className="">
        <h1>Inicia Sesión en BiblioMeta</h1>
      </div>
      <div className="">
        <form className="" onSubmit={(e) => handleSubmit(e)}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mt-2 h-100">
              <TextInput
                classN="h-75 flex-grow-1 p-2  form-control"
                type="text"
                label="Inserte su usuario"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="mt-2 mb-2 ">
              <TextInput
                classN="h-75 p-2  form-control"
                type="password"
                label="Inserte su contraseña"
                onChange={handleChange}
                name={"password"}
              />
            </div>
            <div>
              <a
                className="App-link "
                href={referencia}
                target="_blank"
                rel="noopener noreferrer"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="mt-4 ">
              <Button
                text="Iniciar sesion"
                type="submit"
                classN="p-2 btn btn-primary"
              />
              <div className="mt-2">
                <Link to="/signup" className="btn btn-primary">
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
