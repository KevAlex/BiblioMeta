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
  lname: string;
  password: string;
  email: string;
  phone: string;
  ID: string;

};

type VariableGlobal = {
  referencia: string;
};

function RegistrodeUsuarios({ referencia }: VariableGlobal) {
  const [values, setValues] = useState<Values>({
    name: "",
    password: "",
    lname: "",
    phone: "",
    ID: "",
    email: ""
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
        values.email,
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
      <form className="" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-row">
          <div className="">
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Ingrese sus nombres"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 p-2"
                type="password"
                label="Ingrese sus apellidos"
                onChange={handleChange}
                name={"lname"}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Ingrese su email"
                onChange={handleChange}
                name={"email"}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Ingrese su número de ID"
                onChange={handleChange}
                name={"id"}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Inserte su usuario"
                onChange={handleChange}
                name={"name"}
              />
            </div>
            <div className="col-md-4 mb-3">
              <TextInput
                classN="h-75 flex-grow-1 p-2"
                type="text"
                label="Ingrese su número de teléfono"
                onChange={handleChange}
                name={"phone"}
              />
            </div>
            <div className="" >
              <button className="btn btn-primary" style={{ margin: "0",
                  position: "relative",
                  top: "50%",
                  left: "20%"}} type="submit">Resgistrarme</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrodeUsuarios;