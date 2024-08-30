import { Fragment } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CareerCards.css";
import ImageCareer1 from "../../assets/images/careers/Cantante1.png";
import ImageCareer2 from "../../assets/images/careers/productor2.jpg";
import ImageCareer3 from "../../assets/images/careers/pedagogiaMusical.png";

function CareerCards() {

  const navigate = useNavigate();

  const handleRedirect = (id) => {
    navigate(`/studyPlan/${id}`);
  };

  useEffect(() => {
    
    /* Para que el botón cambie de color al pasar el mouse*/
    const buttonsCareer = document.querySelectorAll(".buttonCareer");

    const addCareerButtonHover = (button) => {
      button.style.backgroundColor = "#bd283e";
    };

    const removeCareerButtonHover = (button) => {
      button.style.backgroundColor = "#e62f4a";
    };

    buttonsCareer.forEach((button) => {
      button.addEventListener("mouseover", () => addCareerButtonHover(button));
      button.addEventListener("mouseout", () => removeCareerButtonHover(button));
    });

    /* Para que al pasar el mouse sobre las tarjetas estas aumenten su tamaño
      y al dejar de pasar el mouse tengan su tamaño inicial */
    const careerCards = document.querySelectorAll(".containerCareer");

    const addCareerCardHover = (card) => {
      card.style.transform = "scale(1.05)";
    };

    const removeCareerCardHover = (card) => {
      card.style.transform = "none";
    };

    careerCards.forEach((card) => {
      card.addEventListener("mouseover", () => addCareerCardHover(card));
      card.addEventListener("mouseout", () => removeCareerCardHover(card));
    });

  }, [])

  return (
    <>
      <div className="containerCareerCards">
        <div className="containerCareer">
          <div
            className="containerImageCareer"
            style={{
              backgroundImage: `url(${ImageCareer1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="textImageCareer">Interpretación Musical</div>
          </div>
          <p className="textCareer">
            La interpretación musical es el proceso de producir música, y el
            licenciado en esta disciplina es un profesional especializado en el
            arte musical, con conocimientos teóricos y prácticos, y formación en
            22 especialidades.
          </p>
          <button className="buttonCareer" onClick={() => handleRedirect(1)}>
            VER MALLA CURRICULAR
          </button>
        </div>

        <div className="containerCareer">
          <div
            className="containerImageCaree"
            style={{
              backgroundImage: `url(${ImageCareer2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="textImageCareer">Producción y Composición</div>
          </div>
          <p className="textCareer">
            La producción musical abarca la creación y perfeccionamiento de
            canciones. La composición combina sonidos y ritmos. Un licenciado en
            Producción y Composición domina todo el proceso y su contexto.
          </p>
          <button className="buttonCareer" onClick={() => handleRedirect(2)}>
            VER MALLA CURRICULAR
          </button>
        </div>

        <div className="containerCareer">
          <div
            className="containerImageCaree"
            style={{
              backgroundImage: `url(${ImageCareer3})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="textImageCareer">Pedagogia Musical</div>
          </div>
          <p className="textCareer">
            La pedagogía musical estudia y enseña música con métodos adaptados a
            cada alumno. Un licenciado en esta área es experto en enseñanza
            musical y su contexto.
          </p>
          <button className="buttonCareer" onClick={() => handleRedirect(3)}>
            VER MALLA CURRICULAR
          </button>
        </div>
      </div>
    </>
  );
}

export default CareerCards;
