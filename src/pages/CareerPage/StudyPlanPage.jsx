import { Fragment } from "react";
import { useParams } from "react-router-dom";
import TitleStudyPlan from "../../components/Careers/TitleStudyPlan";
import TextStudyPlan from "../../components/Careers/TextStudyPlan";
import SemestersStudyPlan from "../../components/Careers/SemestersStudyPlan";

function StudyPlanPage() {

    const { id } = useParams();

    const getTitleCareerStudyPlan = () => {
        switch (id) {
            case '1':
                return 'Interpretación Musical';
            case '2':
                return 'Producción y Composición';
            case '3':
                return 'Pedagogía Musical';
            default:
                return 'Carrera no encontrada';
        }
    };

    const getTextStudyPlan = () => {
        switch (id) {
            case '1':
                return `La interpretación musical es el proceso o acción de hacer música,
                    de producirla con la voz, instrumentos u otros objetos capaces de
                    producir sueños musicales.
                    El licenciado o licenciada en Interpretación Musical es un/a profesional
                    especialista en el conocimiento aplicado del arte musical, ya sea a través
                    del canto, instrumento o dirección coral; formado/a para dominar 22 especialidades.
                    Posee conocimientos teóricos de la disciplina musical, también un manejo integral
                    de las artes, el medio social e histórico de su contexto.`;
            case '2':
                return `La producción musical es el proceso de preproducción,
                creación y perfeccionamiento de una canción o pieza sonora
                grabada para su difusión pública. La composición musical es el arte de combinar
                sonidos y ritmos para crear una pieza única.
                El licenciado o licenciada en Producción y Composición es un/a profesional
                especialista en el conocimiento aplicado del arte musical, ya sea a través
                de la elaboración de piezas musicales que parte de la composición hasta la
                masterización de las mismas. Posee conocimientos teóricos de la disciplina musical,
                también un manejo integral de las artes, el medio social e histórico de su contexto.`;
            case '3':
                return `La pedagogía musical es una disciplina que se enfoca en el estudio y
                la enseñanza de la música. Esta disciplina tiene como objetivo desarrollar
                métodos y estrategias de enseñanza que permitan a los estudiantes aprender
                y disfrutar la música de manera efectiva.Los pedagogos musicales utilizan
                diferentes enfoques y técnicas para enseñar música, adaptándose a las necesidades
                y características de cada estudiante.
                El licenciado o licenciada en Pegagogía Musical es un/a profesional
                especialista en el conocimiento aplicado del arte de la enseñanza musical.
                Posee conocimientos teóricos de las disciplinas de enseñanza,
                también un manejo integral de las artes, el medio social e histórico de su contexto.`;
            default:
                return 'Texto no encontrado';
        }
    };

    const getSemestersStudyPlan = () => {
        switch (id) {
          case '1':
            return [
              { numberSemesterStudyPlan: 'CICLO 01', coursesSemesterStudyPlan: ['Teoría Musical I', 'Historia de la Música I', 'Técnica Instrumental I', 'Entrenamiento Auditivo I', 'Armonía I', 'Lenguaje Musical I'] },
              { numberSemesterStudyPlan: 'CICLO 02', coursesSemesterStudyPlan: ['Teoría Musical II', 'Historia de la Música II', 'Técnica Instrumental II', 'Entrenamiento Auditivo II', 'Armonía II', 'Lenguaje Musical II'] },
              { numberSemesterStudyPlan: 'CICLO 03', coursesSemesterStudyPlan: ['Teoría Musical III', 'Historia de la Música III', 'Técnica Instrumental III', 'Entrenamiento Auditivo III', 'Armonía III', 'Lenguaje Musical III'] },
              { numberSemesterStudyPlan: 'CICLO 04', coursesSemesterStudyPlan: ['Análisis Musical I', 'Historia de la Música IV', 'Técnica Instrumental IV', 'Entrenamiento Auditivo IV', 'Armonía IV', 'Lenguaje Musical IV'] },
              { numberSemesterStudyPlan: 'CICLO 05', coursesSemesterStudyPlan: ['Análisis Musical II', 'Historia de la Música V', 'Técnica Instrumental V', 'Música de Cámara I', 'Improvisación I', 'Pedagogía Musical I'] },
              { numberSemesterStudyPlan: 'CICLO 06', coursesSemesterStudyPlan: ['Análisis Musical III', 'Historia de la Música VI', 'Técnica Instrumental VI', 'Música de Cámara II', 'Improvisación II', 'Pedagogía Musical II'] }
            ];
          case '2':
            return [
                { numberSemesterStudyPlan: 'CICLO 01', coursesSemesterStudyPlan: ['Teoría Musical I', 'Historia de la Música I', 'Solfeo I', 'Fundamentos de la Producción Musical', 'Instrumento Principal I', 'Técnicas de Grabación I'] },
                { numberSemesterStudyPlan: 'CICLO 02', coursesSemesterStudyPlan: ['Teoría Musical II', 'Historia de la Música II', 'Solfeo II', 'Composición I', 'Instrumento Principal II', 'Técnicas de Grabación II'] },
                { numberSemesterStudyPlan: 'CICLO 03', coursesSemesterStudyPlan: ['Armonía I', 'Historia de la Música III', 'Solfeo III', 'Composición II', 'Instrumento Principal III', 'Producción Musical I'] },
                { numberSemesterStudyPlan: 'CICLO 04', coursesSemesterStudyPlan: ['Armonía II', 'Historia de la Música IV', 'Solfeo IV', 'Composición III', 'Instrumento Principal IV', 'Producción Musical II'] },
                { numberSemesterStudyPlan: 'CICLO 05', coursesSemesterStudyPlan: ['Contrapunto', 'Análisis Musical', 'Instrumento Principal V', 'Técnicas de Composición I', 'Producción Musical III', 'Tecnología de la Música I'] },
                { numberSemesterStudyPlan: 'CICLO 06', coursesSemesterStudyPlan: ['Orquestación', 'Análisis de Producción Musical', 'Instrumento Principal VI', 'Técnicas de Composición II', 'Tecnología de la Música II', 'Proyecto Final de Producción y Composición'] }
            ];
          case '3':
            return [
                { numberSemesterStudyPlan: 'CICLO 01', coursesSemesterStudyPlan: ['Teoría Musical I', 'Historia de la Música I', 'Solfeo I', 'Instrumento Principal I', 'Psicología de la Educación', 'Introducción a la Pedagogía Musical'] },
                { numberSemesterStudyPlan: 'CICLO 02', coursesSemesterStudyPlan: ['Teoría Musical II', 'Historia de la Música II', 'Solfeo II', 'Instrumento Principal II', 'Didáctica de la Música I', 'Tecnología Musical'] },
                { numberSemesterStudyPlan: 'CICLO 03', coursesSemesterStudyPlan: ['Armonía I', 'Historia de la Música III', 'Solfeo III', 'Instrumento Principal III', 'Pedagogía General', 'Educación Auditiva I'] },
                { numberSemesterStudyPlan: 'CICLO 04', coursesSemesterStudyPlan: ['Armonía II', 'Historia de la Música IV', 'Solfeo IV', 'Instrumento Principal IV', 'Didáctica de la Música II', 'Educación Auditiva II'] },
                { numberSemesterStudyPlan: 'CICLO 05', coursesSemesterStudyPlan: ['Contrapunto', 'Metodología de la Investigación en Música', 'Instrumento Principal V', 'Enseñanza de la Música en Educación Primaria', 'Coral y Dirección I', 'Seminario de Pedagogía Musical I'] },
                { numberSemesterStudyPlan: 'CICLO 06', coursesSemesterStudyPlan: ['Análisis Musical', 'Técnicas de Composición', 'Instrumento Principal VI', 'Enseñanza de la Música en Educación Secundaria', 'Coral y Dirección II', 'Seminario de Pedagogía Musical II'] }
            ];
          default:
            return [];
        }
      };

    const getPDFUrlStudyPlan = () => {
        switch (id) {
          case '1':
            return 'files/mallaInterpretacionMusical.pdf';
          case '2':
            return 'files/mallaProduccionComposicion.pdf';
          case '3':
            return 'files/mallaPedagogiaMusical.pdf';
          default:
            return '';
        }
      };

      const getFileNameStudyPlan = () => {
        switch (id) {
          case '1':
            return 'mallaInterpretacionMusical.pdf';
          case '2':
            return 'mallaProduccionComposicion.pdf';
          case '3':
            return 'mallaPedagogiaMusical.pdf';
          default:
            return '';
        }
      };

    return (
        <>
            <div>
                <TitleStudyPlan titleCareerStudyPlan={getTitleCareerStudyPlan()} />
                <TextStudyPlan textCareerStudyPlan={getTextStudyPlan()}/>
                <SemestersStudyPlan semestersStudyPlan={getSemestersStudyPlan()} pdfUrlStudyPlan={getPDFUrlStudyPlan()} fileNameStudyPlan={getFileNameStudyPlan()} />
            </div>
        </>
    );
}

export default StudyPlanPage;