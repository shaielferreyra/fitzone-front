import React from 'react';
import '../styles/ProfesorDetalle.css';

const CarlaLopez = () => {
  return (
    <div className="profesor-detalle">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="https://img.freepik.com/foto-gratis/atractiva-chica-deportiva-entrenadora-personal-medio-moderno-gimnasio-plan-entrenamiento-sus-manos_496169-2795.jpg" alt="Carla López" className="detalle-img" />
          </div>
          <div className="col-md-6 text-white">
            <h2>Carla López</h2>
            <h4 className="text-danger">Entrenadora Funcional</h4>
            <p><strong>Días:</strong> Martes y Jueves</p>
            <p><strong>Horario:</strong> 17:00 a 20:00</p>
            <p>Profesora enfocada en movilidad, core, resistencia funcional y prevención de lesiones. Ideal para todo público.</p>

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

export default CarlaLopez;
