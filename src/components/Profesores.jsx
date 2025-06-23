import React from "react";
import "../styles/Profesores.css";
// Datos de ejemplo para los profesores

const profesores = [
  {
    nombre: "Juan Martínez",
    especialidad: "Musculación",
    horarios: "Lunes a Viernes - 08:00 a 11:00",
    imagen:
      "https://escueladfitness.com/wp-content/uploads/2022/09/entrenador.jpg",
    enlace: "/profesores/juan-martinez",
  },
  {
    nombre: "Carla López",
    especialidad: "Entrenamiento Funcional",
    horarios: "Martes y Jueves - 17:00 a 20:00",
    imagen:
      "https://img.freepik.com/foto-gratis/atractiva-chica-deportiva-entrenadora-personal-medio-moderno-gimnasio-plan-entrenamiento-sus-manos_496169-2795.jpg",
    enlace: "/profesores/carla-lopez",
  },
  {
    nombre: "Luis Ramírez",
    especialidad: "Pliometría",
    horarios: "Lunes, Miércoles y Viernes - 19:00 a 21:00",
    imagen:
      "https://www.sevilladisonante.es/wp-content/uploads/2024/12/Preguntas-que-debe-hacer-un-entrenador-personal.jpg",
    enlace: "/profesores/luis-ramirez",
  },
];

const Profesores = () => {
  return (
    <section className="profesores-section">
      <h2 className="text-center text-danger mb-5">Nuestros Entrenadores</h2>
      <div className="container">
        <div className="row justify-content-center">
          {profesores.map((prof, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="card-profesor">
                <img
                  src={prof.imagen}
                  alt={prof.nombre}
                  className="img-profesor"
                />
                <div className="contenido-profesor">
                  <h4>{prof.nombre}</h4>
                  <p className="especialidad">{prof.especialidad}</p>
                  <p className="horario">{prof.horarios}</p>
                  <a href={prof.enlace} className="btn-vermas">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profesores;
