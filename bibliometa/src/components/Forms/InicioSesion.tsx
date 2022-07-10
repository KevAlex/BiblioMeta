import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

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
  };

  return (
    <div className="d-flex flex-column mt-4 ">
      <div>
        <h1>Inicia Sesión en BiblioMeta</h1>
      </div>
      <div className="">
        <form className="" onSubmit={(e) => handleSubmit(e)}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mt-2 ">
              <TextInput
                classN=""
                type="text"
                label="Inserte su usuario"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="mt-2">
              <TextInput
                classN=""
                type="password"
                label="Inserte su contraseña"
                onChange={handleChange}
                name={"password"}
              />
            </div>
            <div>
              <a
                className="App-link"
                href={referencia}
                target="_blank"
                rel="noopener noreferrer"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="mt-4">
              <Button text="Iniciar sesion" type="submit" classN="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
