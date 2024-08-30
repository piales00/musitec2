import './AboutContenido.css'
import productoImage from './productor3.png';
import './AboutContenido.css'


function AboutContenido() {
    return (<>

        <div className="wrapper">
            <div className="titulo">
                <h1 id="tituloNosotros">NOSOTROS</h1>
                <div className="subrayado"></div>
            </div>

            <div className="container" >
                <div className="contenedorImagen" style={{
                    backgroundImage: `url(${productoImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',

                }} >
                </div>
                <div className="separador"></div>
                <div className="text">
                    <h2>¿Quiénes somos?</h2>

                    <p style={{ paddingTop: '10px', paddingBottom: '10px' }}>

                        Somos un instituto de música dedicado a la formación integral
                        de músicos profesionales. Nuestro equipo está compuesto por
                        profesores altamente calificados y apasionados por la enseñanza.
                        Ofrecemos una educación de excelencia, combinando teoría y práctica
                        en un entorno que inspira la creatividad, el desarrollo artístico y con
                        la promoción de la cultura musical en todas sus formas.
                        Somos una institución que no solo enseña música, sino que vive y respira
                        música, comprometida con el desarrollo integral de nuestros estudiantes
                        para que puedan sacar adelante su carrera profesional.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="box">
                    <h2>Misión</h2>
                    <p>
                        Ofrecer una educación musical excepcional que fomente
                        el desarrollo artístico y personal de nuestros estudiantes.
                        A través de una metodología innovadora buscamos despertar la
                        pasión por la música y proporcionar las herramientas necesarias
                        para que nuestros alumnos alcancen su máximo potencial.
                    </p>
                </div>
                <div className="box">
                    <h2>Visión</h2>
                    <p>
                        Ser reconocidos como un instituto líder en la enseñanza musical,
                        donde la excelencia, la creatividad y la dedicación son los pilares
                        fundamentales. Aspiramos a formar músicos talentosos y comprometidos,
                        capaces de influir positivamente en la comunidad y de contribuir al
                        enriquecimiento cultural de la sociedad.
                    </p>
                </div>
                <div className="box">
                    <h2>Valores</h2>
                    <ul>
                        <li>Pasión por la música</li>
                        <li>Excelencia académica</li>
                        <li>Innovación</li>
                        <li>Compromiso y dedicación</li>
                        <li>Respeto</li>
                    </ul>
                </div>
            </div>

        </div>

    </>);
}
export default AboutContenido;