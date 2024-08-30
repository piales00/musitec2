import React, { Component } from "react";
import "./TiposConvenios.css";

function TarjetaComponente({ nombre, descripcion, img }) {
  return (
    <>
      <div className="tarjeta_tipos_convenios">
        <div className="imgTC">
          <img src={img} alt="vao" />
        </div>
        <div className="contenido_tipos_convenios">
          <div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <a href="./register">Saber más</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TarjetaComponente;
