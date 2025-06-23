import React from 'react';
import '../styles/ProfesorDetalle.css';

const LuisRamirez = () => {
  return (
    <div className="profesor-detalle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://www.sevilladisonante.es/wp-content/uploads/2024/12/Preguntas-que-debe-hacer-un-entrenador-personal.jpg"
              alt="Luis Ramírez"
              className="detalle-img"
            />
          </div>
          <div className="col-md-6 text-white">
            <h2>Luis Ramírez</h2>
            <h4 className="text-danger">Entrenador de Pliometría</h4>
            <p><strong>Días:</strong> Lunes, Miércoles y Viernes</p>
            <p><strong>Horario:</strong> 19:00 a 21:00</p>
            <p>Entrenador especializado en pliometría, velocidad y explosividad. Clases ideales para mejorar rendimiento deportivo y coordinación.</p>

            <h5 className="mt-4 text-warning">Reserva tu clase</h5>
            <form className="form-reserva">
              <input type="date" className="form-control mb-2" required />
              <input type="time" className="form-control mb-2" required />
              <button type="submit" className="btn-reservar">Reservar Turno</button>
            </form>

            <h5 className="mt-4 text-warning">Pago Mensualidad</h5>
            <button className="btn-reservar">Pagar ahora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuisRamirez;
