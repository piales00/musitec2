import React from 'react';
import "./estructura.css";

function Teoria2() {
  return (
    <div className="contenido3">
      <div className="boxt">
        <h2>BÁSICO</h2>
        <ul>
          <li>Foniatría</li>
          <li>Fundamentos de la teoría musical</li>
          <li>Cómo escribir música</li>
          <li>Tiempo y duración de una canción</li>
          <li>Armonía y melodía</li>
        </ul>
      </div>
      <div className="boxt">
        <img src="./src/assets/images/imagenleo/teoria musical.jpg" alt="Teoría musical básica" />
      </div>
      <div className="boxt">
        <h2>INTERMEDIO</h2>
        <ul>
          <li>Figuras y silencios musicales</li>
          <li>Lectura rítmica</li>
          <li>Compases simples y compuestos</li>
          <li>Entrenamiento Auditivo I</li>
          <li>Armonía I</li>
          <li>Establecer tonalidad en una canción</li>
        </ul>
      </div>
    </div>
  );
}

export default Teoria2;