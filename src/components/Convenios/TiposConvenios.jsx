import React, { useEffect } from "react";
import "./TiposConvenios.css";
import Viaje from "../../assets/images/convenio/viaje.svg";
import Casa from "../../assets/images/convenio/casa.svg";
import Musica from "../../assets/images/convenio/musica.svg";
import TarjetaComponente from "./TarjetaComponente";

function TiposConvenios() {
  useEffect(() => {
    const tarjetas = document.querySelectorAll(".tarjeta_tipos_convenios");

    tarjetas.forEach((tarjeta) => {
      const imgTC = tarjeta.querySelector(".imgTC");
      const img = imgTC.querySelector("img");

      tarjeta.addEventListener("mouseenter", () => {
        imgTC.style.height = "150px";
        imgTC.style.width = "150px";
        imgTC.style.left = "-75px";
        imgTC.style.top = "calc(30% - 75px)";
        img.style.maxWidth = "75px";
      });

      tarjeta.addEventListener("mouseleave", () => {
        imgTC.style.height = "calc(100% - 20px)";
        imgTC.style.width = "calc(100% - 20px)";
        imgTC.style.left = "10px";
        imgTC.style.top = "10px";
        img.style.maxWidth = "100px";
      });
    });

    return () => {
      tarjetas.forEach((tarjeta) => {
        tarjeta.removeEventListener("mouseenter", () => {});
        tarjeta.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <section className="seccion_body_tipos">
        <div className="contenedor_tipos_convenios">
          <TarjetaComponente
            nombre="Académicos"
            descripcion="Intercambio estudiantil y programas conjuntos de investigación musical global."
            img={Viaje}
          />
          <TarjetaComponente
            nombre="Industria Musical"
            descripcion="Prácticas, alianzas con sellos discográficos, producción y promoción musical profesional."
            img={Musica}
          />
          <TarjetaComponente
            nombre="Cultural y Comunitarios"
            descripcion="Conciertos educativos y colaboraciones orquestales para promover la música comunitaria."
            img={Casa}
          />
        </div>
      </section>
    </>
  );
}

export default TiposConvenios;
