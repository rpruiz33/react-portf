import React from 'react';
import HardCard from './hardCard.jsx';

const formacion = [
  {
    title: "🎓 Estudiante de Licenciatura en Sistemas",
    description: "💻 Especialización en desarrollo de software"
  },
  {
    title: "🚀 Desarrollador Full Stack Web",
    description: "🌐 MERN Stack (MongoDB, Express, React, Node.js)"
  },
  {
    title: "🛠️ Técnico electrónico",
    description: "⚡ Sistemas embebidos y circuitos digitales"
  }
];

const LugaresEstudio = [
  {
    lugar: "🏛️ Universidad Nacional De Lanús",
    periodo: "📅 2020 - Presente"
  },
  {
    lugar: "💻 Digital House",
    periodo: "📅 2022 - 2023"
  },
  {
    lugar: "🏫 Escuela Técnica N°9 Lanús",
    periodo: "📅 2014 - 2019"
  }
];

const Cards = () => {
  return (
    <div className="d-flex justify-content-center align-items-center m-1 row row-cols-1 row-cols-md-4 g-2 p-4 m-8">
      <HardCard 
        key={1} 
        items={formacion[0].title} 
        item={LugaresEstudio[0].lugar} 
        extraInfo={formacion[0].description}
        periodo={LugaresEstudio[0].periodo}
        emoji="👨‍💻"
      />
      <HardCard 
        key={2} 
        items={formacion[1].title} 
        item={LugaresEstudio[1].lugar}
        extraInfo={formacion[1].description}
        periodo={LugaresEstudio[1].periodo}
        emoji="🖥️"
      />
      <HardCard 
        key={3} 
        items={formacion[2].title} 
        item={LugaresEstudio[2].lugar}
        extraInfo={formacion[2].description}
        periodo={LugaresEstudio[2].periodo}
        emoji="🔌"
      />
    </div>
  );
};

export default Cards;