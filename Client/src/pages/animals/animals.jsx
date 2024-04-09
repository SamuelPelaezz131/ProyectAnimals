import React from 'react'
import Error from "../../assets/img/FondoHorse.png"

function Animales() {
  return (
    <div className='primary w-full flex flex-col  items-center  mt-10  '>
      <div className="container1 flex flex-wrap justify-center ">
        <div class="max-w-[70%] h-auto  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
          <div class="p-5">
          <img src={Error} className=' pb-5'/>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Para acceder a esta vista informacion necesitas estar registrado</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            <a href="/log" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#459E66] rounded-lg">
            Click aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Animales