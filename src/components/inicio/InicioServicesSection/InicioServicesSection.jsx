import React from 'react';
import ServiceCard from '../InicioServiceCard/InicioServiceCard';
import servicesData from '../../../constants/inicioServicesData';  // Importa los datos

const InicioServicesSection = () => {
  return (<>
    <section className="section__container services__container" id="services">
      <p className="section__subheader">TÚ DECIDES EL CAMINO</p>
      <h2 className="section__header">Iniciar una carrera o curso</h2>
      <div className="services__grid">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            imageSrc={service.imageSrc}
            altText={service.altText}
            title={service.title}
            description={service.description}
            discount={service.discount}
            link={service.link}
          />
        ))}
      </div>
    </section>
    </>
  );
};

export default InicioServicesSection;
