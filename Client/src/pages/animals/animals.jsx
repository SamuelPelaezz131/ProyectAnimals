import React from 'react'
import Error from "../../assets/img/ImgError.jpg"

function Animales() {
  return (
    <div className='primary w-full flex flex-col  items-center  mt-10  '>
      <div className="container1 flex flex-wrap justify-center ">
        <div class="max-w-[70%] h-auto rounded-lg shadow-3xl">
          <div class="p-5">
            <div className='flex justify-center'>
          <img src={Error} className=' pb-5 h-[45vh] items-center'/>
            </div>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Para acceder a esta vista informacion necesitas iniciar sesion</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            <a href="/log" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#459E66] rounded-lg">
            Ingresar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Animales