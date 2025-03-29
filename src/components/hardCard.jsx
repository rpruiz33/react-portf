import React from 'react';
import './hardCard.css';

const HardCard = ({ index, items, item, extraInfo, periodo }) => {
  return (
    <div className="cards-container">
      <div className="card border-success mb-3 bg-custom" style={{ maxWidth: '18rem' }}>
        <div className="card-body text-success">
          <h5 className="card-title c-black">
            <div className="c-b">
              {items} - {periodo} {/* Corrige la forma de mostrar los datos */}
            </div>
          </h5>
        </div>
        <div className="card-footer bg-w m-7">
          <div>{item} {extraInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default HardCard;
