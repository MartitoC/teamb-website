import React from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';  
import Nosotros from './Pages/Nosotros';  
import Contacto from './Pages/Contacto';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Nosotros />
      <Contacto />
    </>
  );
}

export default App;
