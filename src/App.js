// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Inicio from "./components/pages/Inicio";
import Caracteristica from "./components/pages/Caracteristicas"; // Importa la nueva página

function App() {
  return (
    <Router>
      <div className="scroll-smooth">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Ruta para Inicio */}
          <Route path="/caracteristicas" element={<Caracteristica />} /> {/* Ruta para Caracteristica */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
