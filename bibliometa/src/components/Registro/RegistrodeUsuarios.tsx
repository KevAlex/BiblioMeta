import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from 'react-bootstrap/Button';
import TextInput from "../TextInput/TextInput";
import BiblioLogo from "../../images/Logo_horizontal2-sf.png";
import { auth, db } from "../../firebasebd/firebase";
import { Navigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { getFirestore, addDoc, collection } from "firebase/firestore";
// const db = getFirestore();
// const auth = getAuth();

type Values = {
  name: string;
  password: string;
};

type VariableGlobal = {
  referencia: string;
};

function RegistrodeUsuarios({ referencia }: VariableGlobal) {
  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.name,
        values.password
      );
      setCurrentUser(true);
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      });
    } catch (error) {
      alert(error);
    }

    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err.message));
  };

  // if (currentUser) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
      <div>
        <img src={BiblioLogo} width="270" height="90"></img>
      </div>
      <br></br>
      <div className="Titulo" style={{color:"#B9BFBCFF"}}>
        <h1>Regístrate en BiblioMeta</h1>
      </div>
      <br></br>
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
            <br></br>
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
              <Button variant="success"  className="p-2">Registrarme</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrodeUsuarios;