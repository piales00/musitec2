import React, { useState } from "react";
import Nota1 from "../../assets/images/Inscribirse/Cantante1.png";
import Nota2 from "../../assets/images/Inscribirse/interpretacionMusical.png";
import Nota3 from "../../assets/images/Inscribirse/peda.jpg";
import "./GrupoImage.css";

function GrupoImagen() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="body__grupoIma_piero">
      <div className="opciones_piero">
        <div
          className={`opcion_ima_piero ${activeIndex === 0 ? "active" : ""}`}
          style={{ backgroundImage: `url(${Nota1})` }}
          onClick={() => handleClick(0)}
        >
          <div className="sombra_ima_piero"></div>
          <div className="label_ima_piero">
            <div className="info_ima_piero">
              <div className="principal_texto_piero">Habilidad</div>
              <div className="subtitulo_texto_piero">
                Con nosotros desarrolla esa habilidad que tienes dentro
              </div>
            </div>
          </div>
        </div>

        <div
          className={`opcion_ima_piero ${activeIndex === 1 ? "active" : ""}`}
          style={{ backgroundImage: `url(${Nota2})` }}
          onClick={() => handleClick(1)}
        >
          <div className="sombra_ima_piero"></div>
          <div className="label_ima_piero">
            <div className="info_ima_piero">
              <div className="principal_texto_piero">Profesionalismo</div>
              <div className="subtitulo_texto_piero">
                Aprende con los mejores profesores y músicos
              </div>
            </div>
          </div>
        </div>

        <div
          className={`opcion_ima_piero ${activeIndex === 2 ? "active" : ""}`}
          style={{ backgroundImage: `url(${Nota3})` }}
          onClick={() => handleClick(2)}
        >
          <div className="sombra_ima_piero"></div>
          <div className="label_ima_piero">
            <div className="info_ima_piero">
              <div className="principal_texto_piero">Instrumentos</div>
              <div className="subtitulo_texto_piero">
                Disfruta de la variedad de nuestros Instrumentos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrupoImagen;
