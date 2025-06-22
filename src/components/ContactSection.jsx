import React from "react";
import "../styles/ContactSection.css";
// Componente de sección de contacto con información y formulario de comentarios

const ContactSection = () => {
  return (
    <section className="contacto-section">
      <div className="info-contacto">
        <h2>Contáctanos</h2>
        <p>Dirección: Av. Fitness 123, Ciudad Salud</p>
        <p>Teléfono: +123 456 789</p>
        <p>Email: info@fitzone.com</p>
      </div>

      <div className="mapa">
        <iframe
          title="ubicacion"
          src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49247.13842196889!2d-77.14709590521875!3d39.51570502634635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c836c5d0af6afd%3A0xf171c0f353398804!2sNarnia%2C%20Maryland%2021776%2C%20EE.%20UU.!5e0!3m2!1ses!2sar!4v1749742775106!5m2!1ses!2sar" 
          width="3000" 
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="comentarios">
        <h3>Deja tu comentario</h3>
        <textarea placeholder="Escribe tu experiencia..."></textarea>
        <button className="btn-comentario">Enviar</button>
      </div>
    </section>
  );
};

export default ContactSection;
