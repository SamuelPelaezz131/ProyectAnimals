import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <div>
        <div className=' h-6 bg-[#459E66]'>

        </div>
        <div className="navbar w-full flex justify-around h-24   bg-white items-center shadow-md">
    <NavLink className=' ' to="/">
        <img src={Logo} alt="" className=' w-[70px] ' />
    </NavLink>
  <ul className="flex gap-10 ">
    <NavLink to="/" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
      <li className="   font-sans font-semibold">INICIO</li>
    </NavLink>
    <NavLink to="/animals" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className="  font-sans font-semibold">ANIMALES</li>
    </NavLink>
    <NavLink to="/health" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className="  font-sans  font-semibold">SALUD</li>
    </NavLink>
    <NavLink to="/food" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className="  font-sans font-semibold">ALIMENTACION</li>
    </NavLink>
    <NavLink to="/remember" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className="  font-sans  font-semibold">RECORDATORIOS</li>
    </NavLink>
    <NavLink to="/log" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className=" font-sans  font-semibold">INICIAR SESION</li>
    </NavLink>
    <NavLink to="/createcount" className="text-gray-800 hover:text-[#459E66]  hover:animate-pulsing">
      <li className=" font-sans  font-semibold">REGISTRARSE</li>
    </NavLink>
  </ul>
</div>
 </div>


  )
}

export default Navbar