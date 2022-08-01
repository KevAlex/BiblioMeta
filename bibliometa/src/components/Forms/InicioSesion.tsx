import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import BiblioLogo from "../../images/Logo_horizontal2-sf.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebasebd/firebase";
import { AuthContext } from "../BD/Auth";
import { Navigate } from "react-router-dom";

type Values = {
  name: string;
  password: string;
};

type VariableGlobal = {
  referencia: string;
};

function InicioSesion({ referencia }: VariableGlobal) {
  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);

    try {
      signInWithEmailAndPassword(auth, values.name, values.password);
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/contact" />;
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
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Inserte su usuario"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="mt-2 mb-2">
              <TextInput
                classN="h-75 p-2"
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
            <div className="mt-4">
              <Button text="Iniciar sesion" type="submit" classN="p-2" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
