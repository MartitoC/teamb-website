import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-3 bg-white ">
            <div className="container px-4  my-0 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-12 w-12 mr-1" src={logo} alt="logo" />
                        <div className="text-xl tracking-tight">TeamB</div>
                    </div>
                    <ul className="hidden lg:flex ml-18 space-x-12 list-none">
                    <li>
                        <a href="#home" className="text-lg mx-5  text-gray-800 hover:text-gray-500 font-medium">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-lg mx-5  text-gray-800 hover:text-gray-500 font-medium">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="text-lg mx-5  text-gray-800 hover:text-gray-500 font-medium">
                            Nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-lg mx-5  text-gray-800 hover:text-gray-500 font-medium">
                            Contacto
                        </a>
                    </li>
                </ul>

                </div>
            </div>
        </nav>
    );
};


export default Navbar