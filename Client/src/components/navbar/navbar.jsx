import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { IoIosMenu } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";


function Navbar() {
  return (
    <div>
      <div className='h-5 bg-[#459E66]' />
      <div className="text-[0.8rem] navbar w-full flex justify-between pl-20 pr-8 items-center h-20 bg-white shadow-md">
        <NavLink className='' to="/">
          <img src={Logo} alt="" className='w-[50px]' />
        </NavLink>
        <div className="hidden lg:flex gap-10">
          <NavLink to="/" className=" text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">INICIO</span>
          </NavLink>
          <NavLink to="/animals" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">ANIMALES</span>
          </NavLink>
          <NavLink to="/health" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">SALUD</span>
          </NavLink>
          <NavLink to="/food" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">ALIMENTACIÓN</span>
          </NavLink>
          <NavLink to="/log" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">INICIAR SESIÓN</span>
          </NavLink>
          <NavLink to="/createcount" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
            <span className="font-sans font-semibold">REGISTRARSE</span>
          </NavLink>
          <NavLink to="/remember" className="text-gray-800 hover:text-[#459E66] hover:animate-pulsing">
          <LuCalendarClock className="font-sans font-semibold text-[1.2rem]"/>
          </NavLink>
        </div>
        <div className="lg:hidden">
          <IoIosMenu className="text-[2rem] text-gray-800 cursor-pointer hover:text-[#459E66]" />
        </div>
      </div>
    </div>
  );
}

export default Navbar