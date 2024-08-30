import React from "react";
import "./cursos123.css";
import { Link } from "react-router-dom"; // Importa Link

function Cursosf3() {
  return (
    <div className="containj">
      <div
        className="contenedorImagen_leo"
        style={{
          backgroundImage: `url("./src/assets/images/imagenleo/vocal.jpg")`,
          height: "150px",
          width: "100%",
        }}
      >
        <div className="textoImagent">Teoría Musical</div>
      </div>
      <p className="text-inter">
        En este curso de teoría musical aprenderás de forma práctica a elaborar
        tonos, melodías y acordes, así podrás crear y escribir tus propias
        expresiones musicales con libertad y originalidad. Así mismo, aprenderás
        a entender la música desde un punto de vista sensitivo y teórico,
        explorando el lenguaje musical. La teoría musical es esencial para
        cualquier músico que desee comprender y comunicar su música de manera
        efectiva, así como para aquellos que deseen componer y crear nuevas
        obras musicales.
      </p>
      <button className="buttont">
        <Link to="/teoria" className="link-button">
          VER PROGRAMA
        </Link>
      </button>
    </div>
  );
}

export default Cursosf3;
