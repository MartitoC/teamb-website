
import { useState } from 'react'


const Contacto = () => {
  return (
    <div id='contacto'>
      <div className="height-screen content-center bg-slate-100 ">
        
        <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-gray-950 sm:text-5xl">Contacto</p>
        </div>
        <div className='p-6 w-full max-w-3xl my-6 mx-auto shadow bg-white'>
          <div class="">
            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
          <div class="mt-2">
            <div class="col-span-full">
              <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
              <div class="mt-2">
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-0 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto;
