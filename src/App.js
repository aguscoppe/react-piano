import React, { useState } from "react";
import "./App.css";

function App() {
  const [estaSonando, setEstaSonando] = useState("");

  const notas = [
    { nombre: "do", link: require("./notas/do.wav"), tieneSostenido: true },
    { nombre: "re", link: require("./notas/re.wav"), tieneSostenido: true },
    { nombre: "mi", link: require("./notas/mi.wav") },
    { nombre: "fa", link: require("./notas/fa.wav"), tieneSostenido: true },
    { nombre: "sol", link: require("./notas/sol.wav"), tieneSostenido: true },
    { nombre: "la", link: require("./notas/la.wav"), tieneSostenido: true },
    { nombre: "si", link: require("./notas/si.wav") },
  ];

  const handleClick = (nota) => {
    setEstaSonando(nota.nombre);
    const sonido = new Audio(nota.link);
    sonido.play();

    setTimeout(() => {
      setEstaSonando(null);
    }, 100);
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con REACT</h1>
        <p>Hecho por: Agus</p>
      </div>

      <div className="contenedor">
        {notas.map((nota) => {
          return (
            <div
              className={`nota ${
                estaSonando === nota.nombre && "estaSonando"
              } `}
              onClick={() => handleClick(nota)}
            >
              {nota.tieneSostenido && <div className="negra"></div>}
            </div>
          );
        })}
      </div>
      <div className="notaActual">
        {estaSonando && <h3> {estaSonando} </h3>}
      </div>
    </div>
  );
}

export default App;
