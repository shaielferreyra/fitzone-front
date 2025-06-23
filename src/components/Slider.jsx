import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Slider.css"; 
// Componente de slider para mostrar imágenes destacadas

const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            src="https://www.ceupe.mx/images/pexelslisun2294361.jpg"
            alt="Primera"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Entrena desde casa</h3>
            <p>Programas adaptados a tu rutina diaria.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.fresha.com/lead-images/placeholders/gym-and-fitness-14.jpg?class=venue-gallery-large&dpr=2"
            alt="Segunda"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Mejora tu fuerza</h3>
            <p>Rutinas profesionales con resultados reales.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/15d1cbbb-18d6-4dfa-a234-2e96b3bb3b25.__CR0,0,970,600_PT0_SX970_V1___.jpg"
            alt="Tercera"
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Salud y bienestar</h3>
            <p>Porque tu cuerpo es tu templo.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
