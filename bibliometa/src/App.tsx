import React from "react";
//import logo from './logo.svg';
import "./App.css";
import RegistroUsuario from "./components/Registro/RegistroUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioSesionContainer from "./containers/InicioSesionContainer";
import ContactoContainer from "./containers/ContactoContainer";
import PerfilUsuarioContainer from "./containers/PerfilUsuarioContainer";
import GrillaLibrosContainer from "./containers/GrillaLibrosContainer";
import DetallesLibros from "./components/DetallesLibros/DetallesLibros";
import VentanaPago from "./components/VentanaPago/VentanaPago";

import Provider from "./services/ReferenceDataContext";
import HistorialContainer from "./containers/HistorialContainer";
function App() {
  return (
    // <RegistroUsuario referencia="/sa" />
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={<RegistroUsuario referencia="/ss" />}
          />
          <Route path="/login" element={<InicioSesionContainer />} />
          <Route path="/" element={<GrillaLibrosContainer />} />
          <Route path="/inicio/:id" element={<DetallesLibros />} />
          <Route path="/perfil" element={<PerfilUsuarioContainer />} />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="/historial" element={<HistorialContainer />} />

          <Route path="/ventanapagos" element={<VentanaPago />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
