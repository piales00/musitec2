import React from 'react';
import InicioUs from '../../components/inicio/InicioUs/InicioUs';
import InicioServicesSection from '../../components/inicio/InicioServicesSection/InicioServicesSection';
import InicioBenefits from '../../components/inicio/InicioBenefits/InicioBenefits';
import InicioData from '../../components/inicio/InicioData/InicioData';
import InicioNew from '../../components/inicio/InicioNew/InicioNew';
import ScrollRevealComponent from './ScrollRevealComponent'; // Ruta al archivo ScrollRevealComponent.js
import InicioAdviserForm from '../../components/inicio/InicioAdviserForm/InicioAdviserForm';
import InicioSlider from '../../components/inicio/InicioSlider/InicioSlider';


function HomePage() {
  return (
    <div>
      <InicioAdviserForm/>
      <InicioUs/>
      <InicioServicesSection/>
      <InicioBenefits/>
      <InicioData/>
      <InicioNew/>
      <ScrollRevealComponent />

    </div>
  );
}

export default HomePage;
