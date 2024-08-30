import React, { useEffect } from "react";
import "./AgreementPage.css";

import TiposConvenios from "../../components/Convenios/TiposConvenios";
import Seccion2 from "../../assets/images/convenio/seccion2.png";
import Flecha from "../../assets/images/convenio/flecha.svg";
import Banner from "../../components/Banner_piero/Banner";
import GrupoImagen from "../../components/Ima_piero/GrupoImagen";
function AgreementPage() {
  useEffect(() => {
    let numero = document.querySelectorAll(".numero_piero");
    numero.forEach((contador) => {
      let numeroInicio = 0;
      let numeroFin = parseInt(contador.getAttribute("data-val"));
      let intervalo = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;

      let duracion = Math.floor(intervalo / numeroFin);
      let contador1 = setInterval(function () {
        numeroInicio += 1;
        contador.textContent = numeroInicio;

        if (numeroInicio === numeroFin) {
          clearInterval(contador1);
        }
      }, duracion);
    });

    const titleQuestions = [
      ...document.querySelectorAll(".questions__title_piero"),
    ];

    titleQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle("questions__padding_piero--add");
        question.children[0].classList.toggle("questions__arrow--rotate_piero");

        if (answer.clientHeight === 0) {
          height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
      });
    });

    const priceElements = document.querySelectorAll(".price__element_piero");
    priceElements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.add("scale-color");
      });
      element.addEventListener("mouseout", () => {
        element.classList.remove("scale-color");
      });
    });

    const boton1 = document.querySelectorAll(".cta_piero");

    boton1.forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.classList.add("setColor");
      });

      e.addEventListener("mouseout", () => {
        e.classList.remove("setColor");
      });
    });
  }, []);

  return (
    <>
      <main>
        <section className="container_piero about_piero">
          <h2 className="subtitle_piero">Nuestros tipos de convenios</h2>
          <p className="about__parrafo_piero">
            Innovación en colaboraciones educativas y musicales.
          </p>
        </section>

        <div className="tiposConvenios_piero">
          <TiposConvenios />
        </div>

        <section className="conocimiento_piero">
          <div className="conocimiento__container_piero container_piero">
            <div className="conocimiento__texts_piero">
              <h2 className="subtitle_piero">
                ¡Aplica ya con estos requisitos!
              </h2>
              <p className="conocimiento__parrafo_piero">
                Para aplicar a nuestro programa de intercambio, es necesario ser
                un estudiante matriculado con un buen rendimiento académico,
                cumplir con los requisitos de idioma del país de destino, y
                presentar una solicitud completa que incluya cartas de
                recomendación, un ensayo personal, y pruebas de suficiencia
                financiera. Te invitamos a revisar los detalles específicos y
                los plazos en nuestra sección de requisitos para garantizar una
                postulación exitosa.
              </p>
              <a href="./register" className="cta_piero">
                Inscríbete
              </a>
            </div>
            <GrupoImagen />
          </div>
        </section>

        <section className="price_piero container_piero">
          <h2 className="subtitle_piero">Cubrimos tus gastos</h2>
          <div className="price__table_piero">
            <div className="price__element_piero">
              <p className="price__name_piero">España</p>
              <h3 className="price__price_piero">Universidad de España</h3>
              <div className="price__items_piero">
                <p className="price__features_piero">Hospedaje</p>
                <p className="price__features_piero">Comida</p>
                <p className="price__features_piero">Prácticas</p>
              </div>
              <a href="./register" className="price__cta_piero">
                Aplica ahora
              </a>
            </div>

            <div className="price__element_piero">
              <p className="price__name_piero">Italia</p>
              <h3 className="price__price_piero">Universidad de Italia</h3>
              <div className="price__items_piero">
                <p className="price__features_piero">
                  Cubrimos el 50% de la pensión
                </p>
                <p className="price__features_piero">
                  Centro de idiomas gratuito
                </p>
                <p className="price__features_piero">Talleres gratuitos</p>
              </div>
              <a href="./register" className="price__cta_piero">
                Aplica ahora
              </a>
            </div>

            <div className="price__element_piero">
              <p className="price__name_piero">Hawai</p>
              <h3 className="price__price_piero">
                Universidad Nacional de Hawai
              </h3>
              <div className="price__items_piero">
                <p className="price__features_piero">Hospedaje</p>
                <p className="price__features_piero">
                  30% de la matrícula cubierta
                </p>
                <p className="price__features_piero">Prácticas</p>
              </div>
              <a href="./register" className="price__cta_piero">
                Aplica ahora
              </a>
            </div>
          </div>
        </section>

        <Banner />

        <div className="cuadro_piero">
          <div className="contenedor1_piero">
            <span className="numero_piero" data-val="35" data-interval="2000">
              000
            </span>
            <span className="texto_piero">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
          <div className="contenedor2_piero">
            <span className="numero_piero" data-val="150" data-interval="2000">
              000
            </span>
            <span className="texto_piero">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
          <div className="contenedor3_piero">
            <span className="numero_piero" data-val="800" data-interval="3000">
              000
            </span>
            <span className="texto_piero">
              Estudiantes en Programas de Doble Grado
            </span>
          </div>
        </div>

        <section className="questions_piero container_piero">
          <h2 className="subtitle_piero">Preguntas frecuentes</h2>
          <p className="questions__paragraph_piero">
            Resuelve todas tus dudas en nuestra sección de preguntas y
            respuestas
          </p>
          <section className="questions__container_piero">
            <article className="questions__padding_piero">
              <div className="questions__answer_piero">
                <h3 className="questions__title_piero">
                  ¿Necesito estar en el tercio superior para acceder a los
                  beneficios de los convenios de Musitec?
                  <span className="questions__arrow_piero">
                    <img
                      src={Flecha}
                      className="questions__img_piero"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show_piero">
                  Los requisitos pueden variar según el convenio específico.
                  Algunos convenios pueden exigir que los estudiantes estén en
                  el tercio superior de su clase, mientras que otros están
                  abiertos a todos los estudiantes independientemente de su
                  posición académica. Te recomendamos revisar los requisitos
                  específicos de cada convenio.
                </p>
              </div>
            </article>

            <article className="questions__padding_piero">
              <div className="questions__answer_piero">
                <h3 className="questions__title_piero">
                  ¿Los convenios incluyen oportunidades de prácticas
                  profesionales?
                  <span className="questions__arrow_piero">
                    <img
                      src={Flecha}
                      className="questions__img_piero"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show_piero">
                  Sí, muchos de nuestros convenios incluyen la posibilidad de
                  realizar prácticas profesionales en empresas y organizaciones
                  colaboradoras. Las plazas suelen ser limitadas y pueden
                  requerir cumplir con ciertos requisitos académicos y de
                  habilidades.
                </p>
              </div>
            </article>

            <article className="questions__padding_piero">
              <div className="questions__answer_piero">
                <h3 className="questions__title_piero">
                  ¿Puedo participar en más de un convenio a la vez?
                  <span className="questions__arrow_piero">
                    <img
                      src={Flecha}
                      className="questions__img_piero"
                      alt="Arrow"
                    />
                  </span>
                </h3>
                <p className="questions__show_piero">
                  Depende de las políticas específicas de cada convenio. Algunos
                  convenios permiten la participación simultánea en otros
                  programas, mientras que otros pueden requerir un compromiso
                  exclusivo. Revisa los términos y condiciones de cada convenio
                  para obtener más detalles.
                </p>
              </div>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default AgreementPage;
