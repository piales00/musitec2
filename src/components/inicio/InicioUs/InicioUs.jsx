import React from "react";
import imgFrontisInstituto from "../../../assets/images/inicio/frontis-instituto.jpg";

function InicioUs(){
return(<>
  <section className="section__container us__container" id="us">
    <div className="us__image">
      <img src={imgFrontisInstituto} alt="Frontis del instituto Musitec" />
    </div>
    <div className="us__content">
      <p className="section__subheader">DESDE HOY,</p>
      <h2 className="section__header">¡Tu viaje musical comienza aquí!</h2>
      <p className="section__description">
        Con un compromiso hacia la excelencia educativa, experiencias personalizadas y un ambiente inspirador, nuestro
        instituto está dedicado a asegurar que cada estudiante explore su pasión por la música con confianza y
        entusiasmo.
      </p>
      <div className="us__btn">
        <a href="page_nosotros/nosotros.html"><button className="btn">Leer más</button></a>
      </div>
    </div>
  </section>
</>);

}

export default InicioUs;