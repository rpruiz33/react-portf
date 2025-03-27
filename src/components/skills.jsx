import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SkillPieChart = ({ data, title }) => (
  <div className="chart-wrapper">
    <h3>{title}</h3>
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            paddingAngle={2}
            dataKey="value"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // Solo porcentaje
            labelLine={true}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name) => [`${value}%`, name]} // Tooltip con nombre y porcentaje
            contentStyle={{
              borderRadius: '8px',
              padding: '10px',
              border: 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const SectionDivider = () => (
  <div className="section-divider">
    <div className="divider-line"></div>
    <div className="divider-icon">✦</div>
    <div className="divider-line"></div>
  </div>
);

export default function SkillsCharts() {
  return (
    <div className="app-container">
      {/* Hard Skills */}
      <h2 className="title">Hard Skills</h2>
      <div className="charts-grid">
        <SkillPieChart 
          data={[
            { name: "Java", value: 34 },
            { name: "NodeJS", value: 33 },
            { name: "PHP", value: 33 }
          ]} 
          title="Backend" 
        />
        <SkillPieChart 
          data={[
            { name: "React", value: 85 },
            { name: "Angular", value: 15 }
          ]} 
          title="Frontend" 
        />
        <SkillPieChart 
          data={[
            { name: "Bases Datos", value: 30 },
            { name: "Ing. Software", value: 40 },
            { name: "Git/GitHub", value: 30 }
          ]} 
          title="Otras Habilidades" 
        />
      </div>

      <SectionDivider />

      {/* Soft Skills */}
      <h2 className="title">Soft Skills</h2>
      <div className="charts-grid">
        <SkillPieChart 
          data={[
            { name: "Persuasión", value: 34 },
            { name: "Escucha Activa", value: 33 },
            { name: "Claridad", value: 33 }
          ]} 
          title="Comunicación" 
        />
        <SkillPieChart 
          data={[
            { name: "Adaptabilidad", value: 40 },
            { name: "Resolución", value: 30 },
            { name: "Sinergia", value: 30 }
          ]} 
          title="Colaboración" 
        />
        <SkillPieChart 
          data={[
            { name: "Visión Estratégica", value: 45 },
            { name: "Empoderamiento", value: 30 },
            { name: "Resiliencia", value: 25 }
          ]} 
          title="Liderazgo" 
        />
      </div>

      <style jsx>{`
  .app-container {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-size: clamp(55%, 1vw, 100%); /* Se ajusta dinámicamente */
  }
  
  .title {
    margin: 0 0 25px 0;
    text-align: center;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: white;
    font-weight: 600;
  }
  
  .charts-grid {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    justify-items: center;
  }
  
  .chart-wrapper {
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .chart-wrapper h3 {
    margin: 0 0 15px 0;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    text-align: center;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .chart-container {
    width: 100%;
    height: 320px;
  }
  
  .section-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 900px;
    margin: 40px 0;
  }
  
  .divider-line {
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, transparent, #FFBB28, transparent);
  }
  
  .divider-icon {
    margin: 0 25px;
    font-size: 1.8rem;
    color: #FFBB28;
  }

  @media (max-width: 768px) {
    .app-container {
      font-size: 55%;
    }
    
    .charts-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    
    .chart-container {
      height: 280px;
    }
  }
  
  @media (max-width: 480px) {
    .chart-container {
      height: 250px;
    }
    
    .chart-wrapper h3 {
      font-size: 1.2rem;
    }
  }
`}</style>

    </div>
  );
}