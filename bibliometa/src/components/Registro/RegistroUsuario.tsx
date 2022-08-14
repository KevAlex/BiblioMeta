import React, { ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import BiblioLogo from "../../images/Logo_horizontal2-sf.png";
import {
  getAllUsers,
  postBookUser,
  postCreateUser,
} from "../../services/LibraryServices";
import { useState, useEffect } from "react";
// const db = getFirestore();
// const auth = getAuth();

type Values = {
  name: string;
  password: string;
};

type VariableGlobal = {
  referencia: string;
};

function RegistroUsuario({ referencia }: VariableGlobal) {
  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(`https://localhost:7188/api/User/GetUsers`)
  //     .then((response) => response.json())
  //     .then((actualData) => console.log(actualData));
  // }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postCreateUser().then((res) => {
      console.log(res.data);
    });
    // console.log(values);
    // getAllUsers()
    // getAllUsers().then((users) => {
    //   console.log(users);
    //   setUsers(users);
    // });
  };

  // if (currentUser) {
  //   return <Navigate to="/login" />;
  // }

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
              <Button text="Registrarme" type="submit" classN="p-2" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroUsuario;
