import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/logo/logo.png";

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="header__logo">
              <a href="#">
                <img src={logoIcon} alt="logo" />
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>

          <ul className="nav__links" id="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/career">Carreras</Link>
            </li>
            <li>
              <Link to="/course">Cursos</Link>
            </li>
            <li>
              <Link to="/agreement">Convenios</Link>
            </li>
          </ul>
          <Link to="/register">
            <button className="btn nav__btn">Inscribirse</button>
          </Link>
        </nav>
        <div className="section__container header__container" id="home">
          <h1>
            Sumérgete en la industria
            <br />
            con <span>Musitec</span>.
          </h1>
          <p>Somos el único Instituto Superior de Música avalado por MINEDU.</p>
        </div>
      </header>
    </>
  );
}

export default Header;
