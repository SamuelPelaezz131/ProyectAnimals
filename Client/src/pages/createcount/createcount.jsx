import React from "react";
import { NavLink } from "react-router-dom";
import "./createcount.css";

function Createcount() {
  return (
    <div className="  w-full">
    <div className=" flex justify-center">
      <div className=" conten-ppal-login flex justify-center h-[80vh] m-8 items-center w-[90%] ">
      <div className=" conten-right w-[50%] FondoVaca rounded-l-2xl shadow-[80px] ">
          <div className="  w-full bg-white h-[80vh] rounded-tr-[60px] rounded-l-2xl ">
            <section class="flex flex-col items-center pt-6 h-[80vh]  justify-center ">
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-[0_0px_60px_25px_rgba(0,0,0,0.2)] h-[70vh]  rounded-lg flex flex-col justify-center ">
                  <h1 class="text-2xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                    CREAR CUENTA
                  </h1>
                  <form class="space-y-4 md:space-y-6" method="POST">
                    <div>
                      <label
                        for="name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                        placeholder="Emelia Erickson"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        for="username"
                        class="block mb-2 text-sm font-medium text-black "
                      >
                        Nombre de Usuario
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                        placeholder="emelia_erickson24"
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
                        class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full text-white hover:animate-pop focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#459E66]"
                    >
                      Crear Cuenta
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Tienes Cuenta?{" "}
                      <a
                        class="font-medium hover:underline "
                      >
                        <NavLink to="/log">
                        Iniciar Sesion
                        </NavLink>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className=" hidden md:block  conten-letf w-[50%] bg-white rounded-r-2xl ">
          <div className=" FondoVaca  hidden md:block  w-full bg-[#171824] h-[80vh] rounded-bl-[60px] rounded-r-2xl"></div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Createcount;
