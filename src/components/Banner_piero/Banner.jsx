import React, { useEffect, useRef } from "react";
import "./Banner.css";

// Importación de imágenes
import Banner1 from "../../assets/images/convenio/banner1.jpeg";
import Banner2 from "../../assets/images/convenio/banner4.jpg";
import Banner3 from "../../assets/images/convenio/banner8.jpg";

function Banner() {
  const sliderInnerRef = useRef(null);
  const carrusel = [Banner1, Banner2, Banner3, Banner1];
  let contador = 1;

  useEffect(() => {
    const sliderInner = sliderInnerRef.current;

    const intervalId = setInterval(() => {
      rotacion(sliderInner);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  function rotacion(sliderInner) {
    if (!sliderInner) return;

    const maxImages = carrusel.length;
    const porcentaje = contador * -100;
    sliderInner.style.transition = "transform 0.5s ease-in-out";
    sliderInner.style.transform = "translateX(" + porcentaje + "%)";

    contador++;

    if (contador === maxImages) {
      setTimeout(() => {
        sliderInner.style.transition = "none";
        sliderInner.style.transform = "translateX(0)";
        contador = 1;

        setTimeout(() => {
          sliderInner.style.transition = "transform 0.5s ease-in-out";
        }, 50);
      }, 500);
    }
  }

  return (
    <div className="slider_piero">
      <div className="slider_piero--inner" ref={sliderInnerRef}>
        {carrusel.map((imgSrc, idx) => (
          <section className="slider_piero_seccion" key={idx}>
            <img src={imgSrc} alt={`Slide ${idx + 1}`} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Banner;
