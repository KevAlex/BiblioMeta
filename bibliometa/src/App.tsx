import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactoContainer from "./containers/ContactoContainer";

import GrillaPeliculasContainer from "./containers/GrillaPeliculasContainer";
import DetallesPeliculas from "./components/DetallesPeliculas/DetallesPeliculas";
import VentanaPago from "./components/VentanaPago/VentanaPago"; 

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GrillaPeliculasContainer />} />
          <Route path="/inicio/:id" element={<DetallesPeliculas />} />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="/ventanapagos" element={<VentanaPago />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
