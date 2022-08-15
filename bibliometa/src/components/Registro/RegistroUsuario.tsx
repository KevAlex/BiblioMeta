import React, { ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import BiblioLogo from "../../images/Logo_horizontal2-sf.png";
import { postCreateUser } from "../../services/LibraryServices";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

type Values = {
  name: string;
  password: string;
  alias: string;
  email: string;
  birth: string;
  lastName: string;
};

type VariableGlobal = {
  referencia: string;
};

function RegistroUsuario({ referencia }: VariableGlobal) {
  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
    alias: "",
    email: "",
    birth: "",
    lastName: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // const [registerState, setRegisterState] = useState([]);
  const [registerState, setRegisterState] = useState(0);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    postCreateUser(values).then((res) => {
      console.log(res.data);
      setRegisterState(res.data);
    });
  };

  if (registerState > 0) {
    alert("Usuario registrado satisfactoriamente");
    return <Navigate to="/login" />;
  } else if (registerState === 101) {
    alert(
      "El usuario con estos datos no pudo ser registrado. Verifique los datos"
    );
    setRegisterState(0);
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
      <div>
        <img src={BiblioLogo} width="270" height="90"></img>
      </div>
      <div className="">
        <h1>Registra Sesión en BiblioMeta</h1>
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
                name={"alias"}
              />
            </div>
            <div className="mt-2 h-100">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Inserte su nombre"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="mt-2 h-100">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Inserte su apellido"
                onChange={handleChange}
                name={"lastName"}
              />
            </div>
            <div className="mt-2 mb-2">
              <TextInput
                classN="h-75 p-2"
                type="text"
                label="Inserte su E-mail"
                onChange={handleChange}
                name={"email"}
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
            <div className="mt-2 mb-2">
              <TextInput
                classN="h-75 p-2"
                type="password"
                label="Confirme su contraseña"
                onChange={handleChange}
                name={"password"}
              />
            </div>
            <div className="mt-2 mb-2">
              <TextInput
                classN="h-75 p-2"
                type="text"
                label="Fecha de nacimiento"
                onChange={handleChange}
                name={"birth"}
              />
            </div>
            <div></div>
            <div className="mt-4">
              <Button
                text="Registrarme"
                type="submit"
                classN="p-2 btn btn-primary"
              />
            </div>
            <div className="mt-2">
              <Link to="/login" className="btn btn-primary">
                Iniciar sesión
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroUsuario;
