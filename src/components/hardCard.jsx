import React from 'react';
import './hardCard.css';

const HardCard = ({ index, items, item, extraInfo, periodo }) => {
  return (
    <div className="cards-container">
      <div className="card border-success mb-3 bg-custom">
        <div className="card-body text-success">
          {/* Sección del título y período */}
          <h5 className="card-title c-black">{items}</h5>
          <p className="card-periodo">{periodo}</p>
        </div>

        {/* Sección del lugar de educación (en blanco pero mantiene el espacio) */}
        <div className="card-lugar">{item}</div>

        {/* Pie de la tarjeta con información adicional */}
        <div className="card-footer bg-w m-7">
          <div>{extraInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default HardCard;
