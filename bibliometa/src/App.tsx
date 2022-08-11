import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { AuthProvider } from "./components/BD/Auth";
import RegistroUsuario from "./components/Registro/RegistroUsuario";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioSesionContainer from "./containers/InicioSesionContainer";
import ContactoContainer from "./containers/ContactoContainer";
import PlayContainer from "./containers/DummyContainer";
import PerfilUsuarioContainer from "./containers/PerfilUsuarioContainer";
import GrillaLibrosContainer from "./containers/GrillaLibrosContainer";
import DetallesLibros from "./components/DetallesLibros/DetallesLibros";

function App() {
  return (
    // <RegistroUsuario referencia="/sa" />

    <BrowserRouter>
      <AuthProvider>
        <Routes>

          <Route path="/login" element={<InicioSesionContainer />} />
          <Route path="/contact" element={<ContactoContainer />} />
          <Route
            path="/signup"
            element={<RegistroUsuario referencia="/ss" />}
          />
          <Route path="/perfil" element={<PerfilUsuarioContainer />} />
          <Route path="/" element={<GrillaLibrosContainer />} />
          <Route path="/inicio/:id" element={<DetallesLibros />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;
