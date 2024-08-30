import React from 'react';
import Tecnica1 from '../../components/Cursos/tecnica1';
import Tecnica2 from '../../components/Cursos/tecnica2';
import Tecnica3 from '../../components/Cursos/tecnica3';
import "../../components/Cursos/estructura.css";
function Tecnica() {
  return (
    <div className="wrapper">
     <Tecnica1 />
     <Tecnica2 />
     <Tecnica3 />

     
    </div>
  );
}

export default Tecnica;