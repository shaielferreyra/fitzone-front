import React from "react";
import "../styles/RoutinePacks.css";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "Gratuito",
    description: "Acceso limitado a rutinas básicas. Ideal para empezar.",
    link: "gratis",
  },
  {
    title: "Estándar",
    description: "Acceso a más rutinas y guías personalizadas.",
    link: "estandar",
  },
  {
    title: "Premium",
    description: "Acceso completo a todas las rutinas y contenido exclusivo.",
    link: "premium",
  },
  {
    title: "Personalizado",
    description: "Plan hecho 100% para vos según tus objetivos.",
    link: "personalizado",
  },
];

const categories = [
  "Perdida de peso",
  "Hipertrofia",
  "Resistencia",
  "Movilidad",
  "Fuerza",
];

const RoutinePacks = () => {
  return (
    <section id="packs" className="routine-packs-section">
      <div className="container text-white">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Planes de Rutinas</h2>
            <div className="row">
              {plans.map((plan, i) => (
                <div className="col-md-6 mb-4" key={i}>
                  <div className="plan-card">
                    <h4>{plan.title}</h4>
                    <p>{plan.description}</p>
                    <Link to={`/categoria/${plan.link}`}>
                      <button className="btn btn-danger">Ver más</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="text-center">Categorías</h4>
            <ul className="list-group">
              {categories.map((cat, i) => (
                <li key={i} className="list-group-item bg-dark text-white">
                  <Link
                    to={`/categoria/${cat.toLowerCase()}`}
                    className="text-danger text-decoration-none"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutinePacks;
