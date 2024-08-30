import React from 'react';
import "./estructura.css";

function Tecnica2() {
  return (
    <div className="contenido2">
      <div className="boxt">
        <h2>BÁSICO</h2>
        <ul>
          <li>Microfonía stereo</li>
          <li>Historia de la Música I</li>
          <li>Estilos de mezcla</li>
          <li>Sonoridad</li>
          <li>Ecualización</li>
          <li>Lenguaje Musical I</li>
        </ul>
      </div>
      <div className="boxt">
        <img src="./src/assets/images/imagenleo/t1.PNG" alt="Sala 2" />
      </div>
      <div className="boxt">
        <h2>INTERMEDIO</h2>
        <ul>
          <li>Mezcla por matriz</li>
          <li>Técnicas de Edición</li>
          <li>Organización y ajustes</li>
          <li>Entrenamiento Auditivo III</li>
          <li>Escogiendo el micrófono correcto</li>
          <li>Lenguaje Musical II</li>
        </ul>
      </div>
    </div>
  );
}

export default Tecnica2;
