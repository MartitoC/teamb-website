import React from "react";
import Card from "../components/Card"; 
import softwareImg from '../assets/pc.png';
import designImg from '../assets/desing.png';
import webImg from '../assets/web.png';
import mobileImg from '../assets/mobile.png';
import consultingImg from '../assets/consultoria.png';
import supportImg from '../assets/support.png';

const Services = () => {
  return (
    <div className="w-3/4 mx-auto mb-24">
      <div id="services" className="flex justify-center items-center mb-24 text-4xl text-gray-900 font-semibold">
        Servicios
      </div>
      <div className="flex flex-wrap justify-center gap-4"> {/* Cambiado a flex y flex-wrap */}
        <Card title="Software" image={softwareImg} text="Creamos aplicaciones de escritorio personalizadas que maximizan la eficiencia de tu negocio. Nuestro equipo desarrolla soluciones robustas y seguras." />
        <Card title="Desarrollo Web" image={webImg} text="Diseñamos páginas web innovadoras y funcionales que destacan tu marca en el entorno digital. Nuestro equipo se especializa en crear sitios web atractivos y optimizados para la experiencia del usuario." />
        <Card title="Aplicaciones Móviles" image={mobileImg} text="Desarrollamos aplicaciones móviles que conectan y empoderan a los usuarios. Nuestro equipo se dedica a crear soluciones intuitivas y funcionales, adaptadas a las necesidades específicas de tu negocio." />
      </div>
    </div>
  );
};

export default Services;
