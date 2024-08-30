import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import "./cursos123.css";


function Cursosf1() {
    return (
        <div className="containj">
            <div
                className="contenedorImagent"
                style={{
                    background: "url('./src/assets/images/imagenleo/vocal.jpg')",
                    height: "150px",
                    width: "100%",
                }}
            >
                <div className="textoImagen">Vocal Coach</div>
            </div>
            <p className="text-inter">
                Nuestro programa de entrenamiento vocal en línea ha ayudado a muchas personas a convertirse en
                cantantes profesionales, liberar cantantes, convertirse en profesores de canto, trabajar en estudios,
                administrar estudios, cantar en el West End como profesionales y más. Puede tener la confianza de que
                este entrenador vocal ha cumplido en el pasado y tiene las habilidades holísticas para cuidar de usted
                como individuo para que florezca vocalmente. Ya sea que estés buscando convertirte en cantante
                profesional o simplemente disfrutar cantando en casa con amigos y familiares, tenemos un programa
                diseñado específicamente para ti. Los entrenadores vocales de calidad mejoran significativamente su
                confianza en sí mismo y su sensación de bienestar.
            </p>
            <button className="buttont">
                <Link to="/vocal" className="link-button">VER PROGRAMA</Link>
            </button>
        </div>
    );
}

export default Cursosf1;
