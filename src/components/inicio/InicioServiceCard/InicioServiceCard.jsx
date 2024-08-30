import React from 'react';
import './InicioServiceCard.css'
const InicioServiceCard = ({ imageSrc, altText, title, description, discount, link }) => {
  return (
    <div className="services__card">
      <div className="services__card__image">
        <img src={imageSrc} alt={altText} />
      </div>
      <div className="services__card__details">
        <h4>{title}</h4>
        <p>{description}</p>
        <h5>{discount}</h5>
        <a href={link}>
          <button className="btn">Leer más</button>
        </a>
      </div>
    </div>
  );
};

export default InicioServiceCard;
