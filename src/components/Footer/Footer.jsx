import './Footer.css';
import facebookIcon from "../../assets/icons/social/facebook.png";
import instagramIcon from "../../assets/icons/social/instagram.png";
import youtubeIcon from "../../assets/icons/social/youtube.png";
import twitterIcon from "../../assets/icons/social/twitter.png";
import logoIcon from "../../assets/icons/logo/logo.png";

function Footer() {
  return (<>
<footer className="footer" id="contact">
    <div className="footer__container">
      <div className="footer__col">
        <div className="footer__logo">
          <a href="#"><img src={logoIcon} alt="logo de Instituto Musitec" /></a>
        </div>
        <p className="footer__section__description">
          Descubre nuestra malla exclusiva de carreras, cursos y programas que enriquecen cada experiencia con
          creatividad,
          innovación y pasión.
        </p>
        <a href="page_inscribirse/inscripcion.html"><button className="btn">Inscribirse</button></a>
      </div>
      <div className="footer__col">
        <h4>ENLACES RÁPIDOS</h4>
        <ul className="footer__links">
          <li><a href="page_convenios/convenios.html">Convenios especiales</a></li>
          <li><a href="#">Conciertos y eventos</a></li>
          <li><a href="#">Consejos musicales</a></li>
          <li><a href="#">Términos y condiciones</a></li>
          <li><a href="#">Libro de reclamaciones virtual</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>TRÁMITES</h4>
        <ul className="footer__links">
          <li><a href="#">Convalidación</a></li>
          <li><a href="#">Duplicado de título</a></li>
          <li><a href="#">Becas académicas</a></li>
          <li><a href="#">Otros trámites administrativos</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>CONTACTO</h4>
        <ul className="footer__links">
          <li><a href="#">musitec@info.com</a></li>
        </ul>
        <div className="footer__socials">
          <a href="#"><img src={facebookIcon} alt="facebook" /></a>
          <a href="#"><img src={instagramIcon} alt="instagram" /></a>
          <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
          <a href="#"><img src={twitterIcon} alt="twitter" /></a>
        </div>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2024 Todos los derechos reservados | PAG. PRINCIPAL.
    </div>
  </footer>

  </>
  );
}

export default Footer;
