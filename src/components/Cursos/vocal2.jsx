import React from 'react';
import "./estructura.css";

function Vocal2() {
  return (
    <div className="contenidooo">
      <div className="boxt">
        <h2>BÁSICO</h2>
        <ul>
          <li>Introducción a la Audioperceptiva</li>
          <li>Ejercicio de tracto vocal</li>
          <li>Introducción a la interpretación</li>
          <li>Foniatría (cuidados de la Voz)</li>
        </ul>
      </div>
      <div className="boxt">
        <img src="./src/assets/images/imagenleo/v1.PNG" alt="Sala de vocalización" />
      </div>
      <div className="boxt">
        <h2>INTERMEDIO</h2>
        <ul>
          <li>Canto y técnica vocal 1</li>
          <li>Audioperceptiva 1</li>
          <li>Interpretación 1</li>
          <li>Repertorio 1</li>
          <li>Prácticas</li>
        </ul>
      </div>
    </div>
  );
}

export default Vocal2;
