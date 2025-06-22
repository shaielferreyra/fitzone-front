import React from 'react';
import '../styles/MarcasScroll.css';

const logos = [
  '/public/imagenes/marca1.jpg',
  '/public/imagenes/marca2.jpg',
  '/public/imagenes/marca3.jpg',
  '/public/imagenes/marca4.jpg',
  '/public/imagenes/marca5.jpg',
  '/public/imagenes/marca6.jpg',
  '/public/imagenes/marca1.jpg',
  '/public/imagenes/marca2.jpg',
  '/public/imagenes/marca3.jpg',
  '/public/imagenes/marca4.jpg',
  '/public/imagenes/marca5.jpg',
  '/public/imagenes/marca6.jpg'
];

const MarcasScroll = () => {
  return (
    <div className="marcas-scroll">
      <div className="marcas-contenido">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`marca-${index}`} />
        ))}
        {/* Duplicación para animación continua */}
        {logos.map((logo, index) => (
          <img key={`dup-${index}`} src={logo} alt={`marca-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default MarcasScroll;
