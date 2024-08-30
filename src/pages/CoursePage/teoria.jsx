import React from 'react';
import Teoria1 from '../../components/Cursos/teoria1';
import Teoria2 from '../../components/Cursos/teoria2';
import Teoria3 from '../../components/Cursos/teoria3';
import "../../components/Cursos/estructura.css";
function Teoria() {
  return (
    <div className="wrapper">
      <Teoria1 />
      <Teoria2 />
      <Teoria3 />
    </div>
  );
}

export default Teoria;