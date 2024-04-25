import React from 'react'
import Profile from "../../assets/img/ImgProfile.png"
import Añadir from "../../assets/img/AgregarAnimal.png"
import Cordero from "../../assets/img/CorderoAdmin.png"

function Animales() {
    return (

        <div className=" w-full flex rounded-lg m-5 gap-5">
            <div className="profiles w-[20%] h-[75vh] flex">
                <div className=' infoProfile flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg'>
                    <img src={Profile} alt="" className=' rounded-sm justify-center w-[60%]' />
                    <p className=' text-center pb-8'><b>Nombre:</b> <br />Samuel Pelaez Torres</p>
                    <p className=' text-center pb-8'><b>Rol:</b> <br />Administrador</p>
                    <p className=' text-center pb-8'><b>Correo:</b> <br />samuel_pelez23231@elpoli.edu.co</p>
                </div>
            </div>
            <div>
                <div className="flex item-center w-[80%] gap-5 justify-center"> 
                    <div className="rounded-t-lg w-[50%] h-[65 vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
                        <a href="#">
                            <img src={Añadir} alt="" className="rounded-t-lg w-[100%]"/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">AGREGAR ANIMAL</h5>
                            </a>

                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#459E66] rounded-lg hover:bg-[#459E66] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#459E66] dark:hover:bg-[#459E66] dark:focus:ring-[#459E66]">
                                Añadir
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="rounded-t-lg w-[50%] h-[65 vh] bg-white border border-gray-200 rounded-lg shadow dark:bg-white">
                        <a href="#">
                            <img src={Cordero} alt="" className="rounded-t-lg w-[100%]"/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">ADMINISTRAR ANIMAL</h5>
                            </a>

                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#459E66] rounded-lg hover:bg-[#459E66] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#459E66] dark:hover:bg-[#459E66] dark:focus:ring-[#459E66]">
                                Administrar
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>



        </div>


    )
}

export default Animales