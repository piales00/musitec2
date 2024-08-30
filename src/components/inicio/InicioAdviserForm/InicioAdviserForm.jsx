import React from 'react';

const InicioAdviserForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  return (
    <>
    <section className="section__container adviser__container">
      <form onSubmit={handleSubmit} className="adviser__form">
        <div className="input__group">
          <span><i className="ri-user-fill"></i></span>
          <div>
            <label htmlFor="name-lastname">NOMBRE Y APELLIDO</label>
            <input type="text" id="name-lastname" placeholder="Escribir aquí" />
          </div>
        </div>
        <div className="input__group">
          <span><i className="ri-id-card-fill"></i></span>
          <div>
            <label htmlFor="dni">DNI</label>
            <input type="text" id="dni" placeholder="Escribir aquí" />
          </div>
        </div>
        <div className="input__group">
          <span><i className="ri-phone-fill"></i></span>
          <div>
            <label htmlFor="celular">CELULAR</label>
            <input type="text" id="celular" placeholder="Escribir aquí" />
          </div>
        </div>
        <div className="input__group input__btn">
          <button type="submit" className="btn">QUIERO UN ASESOR</button>
        </div>
      </form>
    </section>

    </>
  );
};

export default InicioAdviserForm;