import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './Pages/Services';  
import Nosotros from './Pages/Nosotros';  
import Contacto from './Pages/Contacto';  

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Nosotros />
      <Contacto />
    </>
  );
}

export default App;
