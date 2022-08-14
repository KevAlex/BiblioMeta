import React from "react";
//import logo from './logo.svg';
import "./App.css";
import RegistroUsuario from "./components/Registro/RegistroUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioSesionContainer from "./containers/InicioSesionContainer";
import ContactoContainer from "./containers/ContactoContainer";
import PlayContainer from "./containers/DummyContainer";
import PerfilUsuarioContainer from "./containers/PerfilUsuarioContainer";
import GrillaLibrosContainer from "./containers/GrillaLibrosContainer";
import DetallesLibros from "./components/DetallesLibros/DetallesLibros";
import VentanaPago from "./components/VentanaPago/VentanaPago";
import librojson from "./informacion/libros.json";

function App() {
  return (
    // <RegistroUsuario referencia="/sa" />

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<InicioSesionContainer />} />
        <Route path="/contacto" element={<ContactoContainer />} />
        <Route path="/signup" element={<RegistroUsuario referencia="/ss" />} />
        <Route path="/perfil" element={<PerfilUsuarioContainer />} />
        <Route path="/" element={<GrillaLibrosContainer />} />
        <Route path="/inicio/:id" element={<DetallesLibros />} />
        <Route
          path="/ventanapagos"
          element={<VentanaPago libro={librojson} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
