import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='Fondo h-[55vh] flex items-end justify-center'>
      <div className=' flex  flex-col'>
        <h1 className='Titulo text-white m-32 mb-0  font-sans font-semibold uppercase text-center'>¡Descubre la vida en la granja!</h1>
        <div className=' flex justify-center '>
          <ul className=' flex gap-10 m-12 uppercase'>
            <NavLink to="/animals">
              <li className=' text-[0.9rem] font-sans font-semibold rounded-full border-4 border-white w-32  text-white h-12 flex items-center justify-center hover:animate-pop  hover:bg-white hover:text-[#459E66]  hover:border-[#459E66] hover:border-2'>Animales</li>
            </NavLink>
            <NavLink to="/health">
              <li className=' text-[0.9rem]  font-sans font-semibold rounded-full border-4 border-white w-32  text-white h-12 flex items-center justify-center hover:animate-pop  hover:bg-white hover:text-[#459E66]  hover:border-[#459E66] hover:border-2'>Salud</li>
            </NavLink>
            <NavLink to="/food">
              <li className=' text-[0.9rem]  font-sans font-semibold rounded-full border-4 border-white w-32 text-white  h-12 flex items-center justify-center hover:animate-pop  hover:bg-white hover:text-[#459E66]  hover:border-[#459E66] hover:border-2'>Alimentacion</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <section>
        <div>
          <div>

          </div>
        </div>
      </section>
    </div>
  )
}


export default Home