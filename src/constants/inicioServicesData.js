import carrerasImg from '/src/assets/images/inicio/carreras.jpg';
import cursosImg from '/src/assets/images/inicio/cursos.jpg';
import estudianteGraduacionImg from '/src/assets/images/inicio/estudiantes-graduancion.jpg';


const inicioServicesData = [
    {
      imageSrc: carrerasImg,
      altText: 'Productor musical',
      title: 'Nuestras carreras técnicas',
      description: 'Inscríbete ahora y aprovecha los descuentos exclusivos que tenemos.',
      discount: 'Descuento en la primera cuota: 80%',
      link: 'page_carreras/carreras.html'
    },
    {
      imageSrc: cursosImg,
      altText: 'Cantante',
      title: 'Nuestros cursos especiales',
      description: 'Inscríbete ahora en nuestros cursos totalmente actualizados.',
      discount: 'Descuento especial: 30%',
      link: 'page_cursos/cursos.html'
    },
    {
      imageSrc: estudianteGraduacionImg ,
      altText: 'Estudiantes graduandose',
      title: 'Nuestros convenios',
      description: 'Ser alumno de Musitec te abre una serie de oportunidades.',
      discount: '¿Qué esperas para unirte?',
      link: 'page_convenios/convenios.html'
    }
  ];
  
  export default inicioServicesData;
