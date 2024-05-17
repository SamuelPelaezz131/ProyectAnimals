import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'
import Vaca from '../../assets/img/HomeVaca.jpg'
import Vaca1 from '../../assets/img/Home2Vaca.jpg'

function Home() {
  return (
    <div className='w-full'>
      <div className='Fondo h-[80vh] flex items-end justify-center'>
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
      </div>
      <div className='w-full bg-white'>
        <div className='w-full bg-white flex'>
          <div className='w-[50%] flex items-center justify-center'>
            <img src={Vaca} alt='Vaca' className='w-[80%] p-10 flex animate-fade-in-down' />
          </div>
          <div className='w-[50%] m-10'>
            <h1 className='font-bold text-[3rem] text-center'>
              Bienvenidos a Finca Primavera
            </h1>
            <p className=' m-10 text-[1.3rem]'>
              En Finca Primavera, la naturaleza y la tranquilidad se unen para ofrecerte una experiencia única. Ubicada en un entorno privilegiado, nuestra finca es el lugar ideal para desconectar del bullicio de la ciudad y disfrutar de la serenidad del campo.
            </p>
            <p className=' m-10 text-[1.3rem]'>
              Descubre la esencia de la vida rural con Finca Primavera, donde la calidad y la sostenibilidad son nuestras principales prioridades.
            </p>
          </div>
        </div>
        <div>
          <div className='w-full flex flex-col justify-center items-center'>
            <img src={Vaca1} alt='Vaca' className='w-[70%] p-10' />
            <div className='flex-col flex justify-center items-center'>
              <h2 className='font-bold text-[3rem] text-center'>
                Nuestros servicios
              </h2>
              <p className=' text-[1.3rem] m-5 text-center justify-center items-center w-[70%]'>
                En Finca El Encanto, nos especializamos en la cría y cuidado de animales, aplicando las mejores prácticas de manejo y bienestar animal. Nuestros servicios se enfocan en mantener altos estándares de calidad y sostenibilidad en nuestras operaciones.
              </p>
              <p className=' text-[1.3rem] m-5 text-center justify-center items-center  w-[70%]'>
                Proveemos una alimentación balanceada y nutritiva para todos nuestros animales, asegurando su bienestar y desarrollo óptimo.
                Ofrecemos espacios amplios y adecuados para que nuestros animales se desarrollen en un entorno que favorece su bienestar.
              </p>
              <p className=' text-[1.3rem] m-5 text-center justify-center items-center  w-[70%]'>
                Servicios de una finca que se dedica exclusivamente a la cría de animales, enfocándose en el manejo, la genética, el bienestar animal y la sostenibilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home