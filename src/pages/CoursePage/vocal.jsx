import React from 'react';
import Vocal1 from '../../components/Cursos/vocal1';
import Vocal2 from '../../components/Cursos/vocal2';
import Vocal3 from '../../components/Cursos/vocal3';
import "../../components/Cursos/estructura.css";
function Vocal() {
  return (
    <div className="wrapper">
      <Vocal1 />
      <Vocal2 />
      <Vocal3 />
    </div>
  );
}

export default Vocal;

