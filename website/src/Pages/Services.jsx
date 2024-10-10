import React from "react";
import Card from "../components/Card"; 
import softwareImg from '../assets/pc.png';
import designImg from '../assets/desing.png';
import webImg from '../assets/web.png';
import mobileImg from '../assets/mobile.png';
import consultingImg from '../assets/consultoria.png';
import supportImg from '../assets/support.png';
import number1 from "../assets/number1.png";
import number2 from "../assets/number2.png";
import number3 from "../assets/number3.png";

const Services = () => {
  return (
    <div id="services">
      <div class="bg-gray-50 height-screen content-center">
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-center text-base/7 font-semibold text-indigo-600">Tecnología personalizada</h2>
          <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">Servicios</p>
          <div class="mt-10 grid gap-4 lg:grid-cols-3">
            <Card number={number1} title="Software" image={softwareImg} text="Creamos aplicaciones de escritorio personalizadas que maximizan la eficiencia de tu negocio. Nuestro equipo desarrolla soluciones robustas y seguras." />
            <Card number={number2} title="Desarrollo Web" image={webImg} text="Diseñamos páginas web innovadoras y funcionales que destacan tu marca en el entorno digital. Nuestro equipo se especializa en crear sitios web atractivos y optimizados para la experiencia del usuario." />
            <Card number={number3} title="Aplicaciones Móviles" image={mobileImg} text="Desarrollamos aplicaciones móviles que conectan y empoderan a los usuarios. Nuestro equipo se dedica a crear soluciones intuitivas y funcionales, adaptadas a las necesidades específicas de tu negocio." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

