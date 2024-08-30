import { Fragment } from "react";
import { useEffect } from "react";
import './SliderCareer.css';
import ImageSliderCareer1 from '../../assets/images/careers/alumna-tocando-guitarra.png';
import ImageSliderCareer2 from '../../assets/images/careers/productor5.png';
import ImageSliderCareer3 from '../../assets/images/careers/auditorioinst.png';
import ImageSliderCareer4 from '../../assets/images/careers/alumnos-tocando.png';
import ImageSliderCareer5 from '../../assets/images/careers/saladeensayo.png';
import ImageSliderCareer6 from '../../assets/images/careers/concierto4.png';

function SliderCareer() {

    useEffect(() => {
        const slides = document.querySelector('.slidesCareer');
        const imagenes = document.querySelectorAll('.slidesCareer img');
        const botonAnterior = document.getElementById('prevSliderCareer');
        const botonSgte = document.getElementById('nextSliderCareer');
        const indicadores = document.querySelectorAll('.indexSliderCareer');

        let indice = 0;

        function mostrarSlide(i) {
            indice = (i + imagenes.length) % imagenes.length;
            var desplazamiento = -indice * 100;
            slides.style.transform = 'translateX(' + desplazamiento + '%)';
            indicadores.forEach(indicador => indicador.classList.remove('active'));
            indicadores[indice].classList.add('active');
        }

        botonAnterior.addEventListener('click', (event) => {
            event.preventDefault(); //anulo todas las acciones por defecto
            mostrarSlide(indice - 1); //mostrar el slide anterior
        });

        botonSgte.addEventListener('click', (event) => {
            event.preventDefault(); //anulo todas las acciones por defecto
            mostrarSlide(indice + 1); //mostrar el siguiente slide
        });

        indicadores.forEach(indicador => {
            indicador.addEventListener('click', () => mostrarSlide(parseInt(indicador.dataset.index)));
        });

        mostrarSlide(indice);
    }, []);


    return (
        <>
            <div className="containerSliderCareer">
                <h2 id="titleSliderCareer">NUESTRAS CARRERAS ESTÁN ALTAMENTE CAPACITADAS</h2>
                <p id="textSliderCareer">Procuramos brindarle lo mejor a nuestros alumnos</p>

                <div className="sliderCareer">
                    <div className="slidesCareer">
                        <img src={ImageSliderCareer1} alt="Slide 1" />
                        <img src={ImageSliderCareer2} alt="Slide 2" />
                        <img src={ImageSliderCareer3} alt="Slide 3" />
                        <img src={ImageSliderCareer4} alt="Slide 4" />
                        <img src={ImageSliderCareer5} alt="Slide 5" />
                        <img src={ImageSliderCareer6} alt="Slide 6" />
                    </div>

                    <div className="navigationSliderCareer">
                        <button id="prevSliderCareer" style={{ marginLeft: "10px" }}>&#10094;</button>
                        <button id="nextSliderCareer" style={{ marginRight: "10px" }}>&#10095;</button>
                    </div>
                </div>

                <div className="navigationIndexSliderCareer">
                    <div className="indexSliderCareer" data-index="0"></div>
                    <div className="indexSliderCareer" data-index="1"></div>
                    <div className="indexSliderCareer" data-index="2"></div>
                    <div className="indexSliderCareer" data-index="3"></div>
                    <div className="indexSliderCareer" data-index="4"></div>
                    <div className="indexSliderCareer" data-index="5"></div>
                </div>
            </div>
        </>
    );
}

export default SliderCareer;