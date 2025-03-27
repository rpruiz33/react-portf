import React from 'react';
import './hardCard.css';

const HardCard = ({ index, items, item }) => {
  return (
    <div className="cards-container ">
      <div className="card border-success mb-3 bg-custom" style={{ maxWidth: '18rem' }}>
        <div className="card-body text-success color-black">
          <h5 className="card-title c-black">
            <div className="c-b" key={index}>
              {items}
            </div>
          </h5>
        </div>
        <div className="card-footer bg-w m-7">
          <div key={index}>{item}</div>
        </div>
      </div>
    </div>
  );
};

export default HardCard;
