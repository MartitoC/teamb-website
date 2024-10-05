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
    <div className="w-3/4 mx-auto">
        <div id="services" className="flex justify-center items-center mb-24 text-4xl text-gray-900 font-semibold">
            Servicios
        </div>
        <div className="grid grid-cols-3 gap-4 justify-center items-center"> 
            <Card title="Software" image={softwareImg}/>
            <Card title="Diseño" image={designImg}/>
            <Card title="Desarrollo Web" image={webImg}/>
            <Card title="Aplicaciones Móviles" image={mobileImg}/>
            <Card title="Consultoría" image={consultingImg}/>
            <Card title="Soporte" image={supportImg}/>
        </div>
    </div>
  );
};

export default Services;
