import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <nav class="sticky top-0 z-50 bg-azul-muy-oscuro">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                    <img className="h-8 w-auto text-white img-negativo" src={logo} alt="logo" />
                    <div className="h-8 w-auto text-xl tracking-tight text-white">TeamB</div>
                </div>
                <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Home</a>
                    <a href="#services" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Servicios</a>
                    <a href="#about " class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Nosotros</a>
                    <a href="#contactos" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-sky-900 hover:text-white">Contactos</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};


export default Navbar