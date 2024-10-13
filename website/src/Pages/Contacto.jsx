
import React, { useState } from 'react';

const Contacto = () => {

  return (
    <div id='contacto'>
      <div className="min-height-screen pt-16 sm:pt-0 content-center bg-slate-100 ">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">Contacto</p>
        </div>
        <form autoComplete="off">
          <div className='p-6 w-full max-w-3xl my-6 mx-auto shadow bg-white'>
            <div className="">
              <div className="col-span-full">
                <label htmlFor="nombre-completo" className="block text-sm font-medium leading-6 text-gray-900">Nombre Completo *</label>
                <div className="mt-2">
                  <input 
                    type="text"
                    name="nombre-completo" 
                    id="nombre-completo" 
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="mt-2">
                <div className="col-span-full">
                  <label htmlFor="correo-electronico" className="block text-sm font-medium leading-6 text-gray-900">Correo electrónico *</label>
                  <div className="mt-2">
                    <input 
                      type="email" 
                      name="correo-electronico" 
                      id="correo-electronico" 
                      className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="col-span-full">
                  <label htmlFor="telefono" className="block text-sm font-medium leading-6 text-gray-900">Teléfono (Opcional)</label>
                  <div className="mt-2">
                    <input type="text" name="telefono" id="telefono" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="col-span-full">
                <label htmlFor="mensaje" className="block text-sm font-medium leading-6 text-gray-900">Mensaje *</label>
                <div className="mt-2">
                  <textarea id="mensaje" name="mensaje" rows="3" placeholder="Escribe aquí..." className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
            </div>
            <div className='mt-4 flex justify-center'>
              <button className="mx-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacto;
