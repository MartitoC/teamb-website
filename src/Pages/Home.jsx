import React, { useEffect, useState } from 'react';
import imagen1 from '../assets/imagenesSlider/imagen_1.jpg';
import imagen2 from '../assets/imagenesSlider/imagen_2.jpg';
import imagen3 from '../assets/imagenesSlider/imagen_3.jpg';

const images = [imagen1, imagen2, imagen3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);
    return (
        <div id= "home" className="relative">
            <div className="relative h-100-screen flex items-center justify-center">
                <div
                    className="absolute inset-0"
                    style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.35)',
                    transition: 'background-image 1s ease-in-out',
                    }}
                />
                <div className="mx-auto max-w-2xl py-32 px-10 sm:py-48 lg:py-56 z-10">
                    <div className="text-left">
                        <h1 className="z-10 text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">Lleva a la realidad tu visión con nosotros</h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                            En TeamB, transformamos tus ideas en soluciones digitales personalizadas. Somos expertos en diseño de software a medida, trabajando codo a codo contigo para crear herramientas innovadoras que impulsen tu negocio.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-white px-3.5 py-2.5 text-xl font-semibold  shadow-sm text-gray-700 hover:bg-sky-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Agenda una reunión
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Home;

