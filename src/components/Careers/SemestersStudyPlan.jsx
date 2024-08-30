import { Fragment } from "react";
import { useEffect } from "react";
import './SemestersStudyPlan.css';

function SemestersStudyPlan({ semestersStudyPlan, pdfUrlStudyPlan, fileNameStudyPlan }) {

    /* Para que al pasar el mouse sobre un cuadro de ciclo se visualicen
    los cursos del ciclo correspondiente y el cuadro se agrande un poco, 
    y al dejar de pasar el mouse se vuelva a ver solo el ciclo y el tamaño
    del cuadro regrese a su tamaño original*/

    useEffect(() => {
        const cajas = document.querySelectorAll(".boxSemesterStudyPlan");

        cajas.forEach(caja => {
            const ciclo = caja.querySelector(".SemesterStudyPlan");
            const cursos = caja.querySelector(".coursesStudyPlan");

            caja.addEventListener("mouseover", function () {
                caja.style.transform = 'scale(1.08)';
                ciclo.style.display = "none"; //para ocultar el ciclo al pasar el mouse
                cursos.style.display = "block"; //para mostrar la lista de cursos
            });

            caja.addEventListener("mouseout", function () {
                caja.style.transform = 'none';
                ciclo.style.display = "block"; //para mostrar el ciclo al dejar de pasar el mouse
                cursos.style.display = "none"; //para ocultar la lista de cursos
            });
        });


        /* Para que el botón cambie de color al pasar el mouse*/
        const boton = document.querySelector('.buttonDownloadSemesterStudyPlan');

        boton.addEventListener('mouseover', () => {
            boton.style.backgroundColor = '#bd283e';
        });

        boton.addEventListener('mouseout', () => {
            boton.style.backgroundColor = '#e62f4a';
        });
    }, []);


    /* Para que al hacer click en el botón "descargar malla aquí" se descargue
    el pdf de la malla curricular correspondiente de la carrera*/
    const descargarPDF = () => {
        const link = document.createElement('a');
        link.href = pdfUrlStudyPlan;
        link.target = '_blank';
        link.download = fileNameStudyPlan;

        // Añadir el enlace al documento y activarlo
        document.body.appendChild(link);
        link.click();

        // Eliminar el enlace del documento
        document.body.removeChild(link);
    }


    return (
        <>
            <div className="containerSemestersStudyPlan">
                {semestersStudyPlan.map((semesterStudyPlan, index) => (
                    <div key={index} className="boxSemesterStudyPlan">
                        <h2 className="SemesterStudyPlan">{semesterStudyPlan.numberSemesterStudyPlan}</h2>
                        <ul className="coursesStudyPlan">
                            {semesterStudyPlan.coursesSemesterStudyPlan.map((courseSemesterStudyPlan, i) => (
                                <li key={i}>{courseSemesterStudyPlan}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="containerButtonSemesterStudyPlan">
                <button className="buttonDownloadSemesterStudyPlan" onClick={descargarPDF}>
                    DESCARGAR MALLA AQUÍ
                </button>
            </div>
        </>
    );
}

export default SemestersStudyPlan;