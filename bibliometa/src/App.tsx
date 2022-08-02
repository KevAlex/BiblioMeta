import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { AuthProvider } from "./components/BD/Auth";
import RegistroUsuario from "./components/Registro/RegistroUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioSesionContainer from "./containers/InicioSesionContainer";
import ContactoContainer from "./containers/ContactoContainer";
import PlayContainer from "./containers/DummyContainer";

function App() {
  return (
    // <RegistroUsuario referencia="/sa" />

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ContactoContainer />} />
          <Route path="/login" element={<InicioSesionContainer />} />
          <Route path="/contact" element={<ContactoContainer />} />
          <Route
            path="/signup"
            element={<RegistroUsuario referencia="/ss" />}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
