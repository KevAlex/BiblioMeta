import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactoContainer from "./containers/ContactoContainer";

import GrillaLibrosContainer from "./containers/GrillaLibrosContainer";
import DetallesLibros from "./components/DetallesLibros/DetallesLibros";
import VentanaPago from "./components/VentanaPago/VentanaPago";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GrillaLibrosContainer />} />
          <Route path="/inicio/:id" element={<DetallesLibros />} />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="/ventanapagos" element={<VentanaPago />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
