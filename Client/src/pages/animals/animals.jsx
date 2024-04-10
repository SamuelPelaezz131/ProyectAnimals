import React from 'react'
import Profile from "../../assets/img/ImgProfile.png"


function Animales() {
  return (
      
    <div className=" w-full flex rounded-lg">
    <div className="profiles w-[20%] h-[75vh] m-5 flex">
      <div className=' infoProfile flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg'>
      <img src={Profile} alt="" className=' rounded-sm justify-center w-[60%]' />
        <p className=' text-center pb-8'><b>Nombre:</b> <br />Samuel Pelaez Torres</p>
        <p className=' text-center pb-8'><b>Rol:</b> <br />Administrador</p>
        <p className=' text-center pb-8'><b>Correo:</b> <br />samuel_pelez23231@elpoli.edu.co</p>
      </div>
    </div>
    
<div class=" flex  items-center w-[70%] ml-14 ">
    <table class="w-full text-sm text-left text-white h-[74vh] border border-collapse">
        <thead class="text-xs  uppercase bg-[#459E66] text-white rounded-2xl">
            <tr className='rounded-xl'>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600
                         bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                          dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                            dark:border-gray-600" />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    ID DE ANIMAL
                </th>
                <th scope="col" class="px-6 py-3">
                    TIPO DE ANIMAL
                </th>
                <th scope="col" class="px-6 py-3">
                    EDAD
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 text-black">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input  id="checkbox-table-1" type="checkbox" class="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                          dark:focus:ring-blue-600
                           focus:ring-2" />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    001
                </th>
                <td class="px-6 py-4">
                   Vaca
                </td>
                <td class="px-6 py-4">
                    15 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                         <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    002
                </th>
                <td class="px-6 py-4">
                    Caballo
                </td>
                <td class="px-6 py-4">
                    10 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    003
                </th>
                <td class="px-6 py-4">
                    Cerdo
                </td>
                <td class="px-6 py-4">
                    4 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    004
                </th>
                <td class="px-6 py-4">
                    Vaca
                </td>
                <td class="px-6 py-4">
                    9 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    005
                </th>
                <td class="px-6 py-4">
                    Cerdo
                </td>
                <td class="px-6 py-4">
                    5 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white text-black  hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    006
                </th>
                <td class="px-6 py-4">
                    Gallina
                </td>
                <td class="px-6 py-4">
                    5 años
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


  </div>

      
  )
}

export default Animales