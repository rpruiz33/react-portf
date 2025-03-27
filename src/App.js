import { useState } from 'react';
import './App.css';
import Skills from './components/skills.jsx';
import NavBar from './components/navBar.jsx';
import Footer from './components/footer.jsx';
import Cards from './components/cards.jsx';
import Carusel from './components/carusel.jsx';

function App() {


  return (
    <div className="bg-black" >

    <NavBar />
    
    <Carusel />
    <Cards/>
    <Skills/>
  
    <Footer />
  </div>
  )
}

export default App