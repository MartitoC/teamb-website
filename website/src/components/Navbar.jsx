import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-azul-muy-oscuro">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto text-white img-negativo" src={logo} alt="logo" />
                    <div className="h-8 w-auto text-xl tracking-tight text-white">TeamB</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Home</a>
                    <a href="#services" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Servicios</a>
                    <a href="#about " className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Nosotros</a>
                    <a href="#contacto" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Contacto</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};


export default Navbar