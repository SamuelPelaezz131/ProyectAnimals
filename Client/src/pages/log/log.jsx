import React from 'react'
import './log.css'
import { NavLink } from 'react-router-dom'

function Log() {
  return (
    <div className="  w-full">
      <div className=" flex justify-center">
        <div className=" conten-ppal-login flex justify-center h-[80vh] m-8 items-center w-[90%] ">
          <div className=" hidden md:block  conten-letf w-[50%] bg-white rounded-l-2xl ">
            <div className="FondoPerro hidden md:block  w-full bg-[#171824] h-[80vh] rounded-br-[60px] rounded-l-2xl">

            </div>
          </div>

          <div className=" conten-right w-[50%] FondoPerro  rounded-r-2xl shadow-[80px] ">
            <div className="  w-full bg-white h-[80vh] rounded-tl-[60px] rounded-r-2xl">

              <section class=" flex justify-center  md:rounded-2xl  h-[80vh] text-black">
                <div class="flex flex-col items-center justify-center w-[70%] ">
                  <div class="w-full bg-[#f8f8f8]  rounded-lg  items-center shadow-[0_0px_60px_25px_rgba(0,0,0,0.2)] dark:border md:mt-0 sm:max-w-md xl:p-0 text-black">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 h-[65vh]  flex flex-col  justify-center">
                      <h1 class="text-2xl font-bold leading-tight tracking-tight ">
                        INICIAR SESION
                      </h1>
                      <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-black"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg  block w-full p-2.5 "
                            placeholder="name@company.com"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-black"
                          >
                            Contraseña
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                            required=""
                          />
                        </div>
                        <div class="flex items-center justify-between">
                          <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input
                                id="remember"
                                aria-describedby="remember"
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded  "
                                required=""
                              />
                            </div>
                            <div class="ml-3 text-sm">
                              <label
                                for="remember"
                                class="text-gray-500 dark:text-gray-300"
                              >
                                Recuerdame
                              </label>
                            </div>
                          </div>
                          <a
                            href="#"
                            class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            Olvidaste tu contraseña?
                          </a>
                        </div>
                        <button
                          type="submit"
                          class="w-full text-white bg-[#459E66] font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:animate-pop "
                        >
                          Iniciar
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                          No tienes cuenta?{" "}
                          <a
                            href="#"
                            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                          >
                            <NavLink to="/createcount">
                              Registrarse
                            </NavLink>
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Log