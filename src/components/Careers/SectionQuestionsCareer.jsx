import { Fragment } from "react";
import './SectionQuestionsCareer.css';

function SectionQuestionsCareer() {

    /* Para desplegar las respuestas de las preguntas frecuentes*/
    function desplegarRespuesta(id, element) {
        const respuestas = document.querySelectorAll('.answerCareer');
        const flechas = document.querySelectorAll('.arrowCareer');

        respuestas.forEach(respuesta => {
            if (respuesta.id !== id) {
                respuesta.classList.remove('openCareer');
            }
        });

        flechas.forEach(flecha => {
            if (flecha !== element.querySelector('.arrowCareer')) {
                flecha.classList.remove('upCareer');
                flecha.classList.add('downCareer');
            }
        });

        const respuesta = document.getElementById(id);
        const flecha = element.querySelector('.arrowCareer');

        if (respuesta.classList.contains('openCareer')) {
            respuesta.classList.remove('openCareer');
            flecha.classList.remove('upCareer');
            flecha.classList.add('downCareer');
        } else {
            respuesta.classList.add('openCareer');
            flecha.classList.remove('downCareer');
            flecha.classList.add('upCareer');
        }
    }

    return (
        <>
            <div className="containerQuestionsCareer">

                <div className="questionsCareer">
                    <h2 id="titlePrincipalQuestionCareer">¿Aún con dudas?</h2>
                    <p id="textPrincipalQuestionCareer">
                        Queremos que tu experiencia con nosotros sea lo más fluida
                        posible; por eso, hemos recopilado las preguntas más comunes
                        que nuestros estudiantes suelen hacer.
                    </p>
                </div>

                <div className="questionsCareer">
                    <div className="questionCareer" onClick={(e) => desplegarRespuesta('answerCareer1', e.currentTarget)}>
                        ¿Qué es una carrera de pregrado?
                        <span className="arrowCareer downCareer">&#9660;</span>
                    </div>
                    <div id="answerCareer1" className="answerCareer">
                        Es un programa académico que proporciona una formación integral en una disciplina específica.
                        En Musitec, nuestras carreras de pregrado ofrecen conocimientos especializados y habilidades
                        prácticas para preparar a los estudiantes para sus futuras carreras profesionales.
                    </div>

                    <div className="questionCareer" onClick={(e) => desplegarRespuesta('answerCareer2', e.currentTarget)}>
                        Razones para estudiar una carrera de pregrado
                        <span className="arrowCareer downCareer">&#9660;</span>
                    </div>
                    <div id="answerCareer2" className="answerCareer">
                        Optar por estudiar una carrera profesional de pregrado en Musitec proporciona acceso
                        a una educación de calidad respaldada por profesionales destacados en sus campos.
                        Con varios años de experiencia, nuestra institución se enorgullece de ofrecer programas
                        académicos que se centran en la excelencia creativa y en la preparación efectiva para
                        el competitivo mundo laboral.
                        Estos programas proporcionan a los estudiantes una base sólida que los impulsa hacia
                        el éxito en sus futuras carreras, sean éstas de bachiller o técnicas.
                    </div>

                    <div className="questionCareer" onClick={(e) => desplegarRespuesta('answerCareer3', e.currentTarget)}>
                        ¿Qué carreras profesionales hay en Musitec?
                        <span className="arrowCareer downCareer">&#9660;</span>
                    </div>
                    <div id="answerCareer3" className="answerCareer">
                        Musitec ofrece carreras profesionales enfocadas en el área de la música como
                        interpretación musical, Producción y composición y Pedagogía. Explora nuestra
                        oferta académica para descubrir programas que se alíneen con tus intereses y metas
                        profesionales.
                    </div>
                </div>

            </div>
        </>
    );
}

export default SectionQuestionsCareer;