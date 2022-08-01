import React from "react";
//import logo from './logo.svg';
import "./App.css";
import { AuthProvider } from "./components/BD/Auth";
import RegistroUsuario from "./components/Registro/RegistroUsuario";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioSesionContainer from "./containers/InicioSesionContainer";
import ContactoContainer from "./containers/ContactoContainer";
import PlayContainer from "./containers/DummyContainer";

function App() {
  return (
    // <RegistroUsuario referencia="/sa" />

    <Router>
      <Routes>
        <Route path="/" element={<PlayContainer />} />
        <Route path="/login" element={<InicioSesionContainer />} />
        <Route path="/contact" element={<ContactoContainer />} />
        <Route path="/signup" element={<RegistroUsuario referencia="/ss" />} />
      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //     <div className="alert alert-info" role="alert">
    //       A simple info alert—check it out!
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
