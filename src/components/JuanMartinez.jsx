import React from 'react';
import '../styles/ProfesorDetalle.css';

const JuanMartinez = () => {
  return (
    <div className="profesor-detalle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://escueladfitness.com/wp-content/uploads/2022/09/entrenador.jpg" alt="Juan Martinez" className="detalle-img" />
          </div>
          <div className="col-md-6 text-white">
            <h2>Juan Martinez</h2>
            <h4 className="text-danger">Entrenador de Musculacion</h4>
            <p><strong>Días:</strong> Lunes a Viernes </p>
            <p><strong>Horario:</strong> 08:00 a 11:00</p>
            <p>Especialista en fuerza e hipertrofia. Clases orientadas a progresión en cargas, técnica avanzada y desarrollo muscular.</p>

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

export default JuanMartinez;