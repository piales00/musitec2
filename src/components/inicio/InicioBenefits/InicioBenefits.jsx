import './InicioBenefits.css'
function InicioBenefits(){
    return(<>
    <section className="benefits" id="benefits">
    <div className="section__container benefits__container">
      <div className="benefits__content">
        <p className="section__subheader">TE OFRECEMOS</p>
        <h2 className="section__header">Todo lo que necesitas.</h2>
        <ul className="benefits__list">
          <li>
            <span><i className="ri-shield-star-line"></i></span>
            Docentes calificados
          </li>
          <li>
            <span><i className="ri-24-hours-line"></i></span>
            Acceso a plataformas virtuales
          </li>
          <li>
            <span><i className="ri-headphone-line"></i></span>
            Salas de conciertos y recitales
          </li>
          <li>
            <span><i className="ri-map-2-line"></i></span>
            Asesoría y guía de carrera musical
          </li>
        </ul>
      </div>
    </div>
  </section>


    </>);
}

export default InicioBenefits;