import React from "react";
import "./cursos123.css";
import { Link } from "react-router-dom"; // Importa Link
function Cursosf2() {
    return (
        <div className="containj">
            <button className="buttont">
                <Link to="/tecnical" className="link-button">VER PROGRAMA</Link>
            </button>
            <p className="text-inter">
                En este curso, Tom te enseñará a grabar voces de principio a fin para tus proyectos. Aprenderás a
                registrar locuciones de calidad para los medios de comunicación, las editarás con un programa de audio y
                compartirás tu trabajo final con el mundo. ¡Prepárate para sacar lo mejor de cualquier voz!. La clave del
                éxito al grabar una voz es conseguir que el intérprete sea capaz de contar una historia. Ingeniero de
                sonido, coach de voice-over y compositor, a Tom Hambleton le apasiona crear sonidos que conmuevan al
                público.
            </p>
            <div
                className="contenedorImagent"
                style={{
                    background: "url('./src/assets/images/imagenleo/tecnicas de grabacion.jpg') no-repeat center center/cover",
                    height: "150px",
                    width: "100%",
                }}
            >
                <div className="textoImagen">Técnicas de Grabación</div>
            </div>
        </div>
    );
}

export default Cursosf2;

