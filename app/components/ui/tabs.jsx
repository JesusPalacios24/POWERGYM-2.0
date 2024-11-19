'use client';
import React, { useState, useEffect } from "react";

export default function Tabs({username}) {
    const [userData,setUserData] = useState(null); // guardar datos del usuarop
    const [error,setError]= useState(null); // guardar el error

    const [activeTab, setActiveTab] = useState("seguimiento");
    const [userSeguimiento,setUserSeguimiento]= useState([]);

    const fecha = new Date();
    const fechaFormateada = fecha.toISOString().split("T")[0]; // Ejemplo: 2024-11-18
    

    //Obtner la INFO DEL USUARIO 
    const handleDatos = async () => {

        try {
            const response= await fetch(`/api/users/${username}`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
             
            });
            console.log(response);

            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.status}`);
            }

            const data = await response.json();
           // Accede al primer elemento del array
        if (data.length > 0) {
            setUserData(data[0]); // Almacenar el primer objeto del array
        }
            console.log(data)

        } catch (error) {
          
            setError(error.message);
            
        }
    
    };

    //OBTENER SEGUIMIENTO DE RUTINAS
    const handleSeguimiento = async () => {
     try {
        const response = await fetch(`api/users/${username}/rutinas/seguimiento`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response);

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.status}`);
        }

        const data = await response.json();
        setUserSeguimiento(data);
        console.log(data);

     } catch (error) {
        setError(error.message);
     }
    }

    //Llamar funcion al ejecutarse la pagina
    useEffect (()=> {
        handleDatos();
        handleSeguimiento();
    },[username]);



    const renderContent = () => {
        switch (activeTab) {
            case "seguimiento":
                return (
                    <div>
                        
                            {/* Renderizar la información del usuario*/}
                            <div>
                                <h1 className="text-2xl font-bold mb-4">Seguimiento de Rutina</h1>
                               
                                    <div className="flex items-center justify-center space-x-4 p-5 ">
                                        <label htmlFor="fecha" class="block mb-2 text-sm font-medium text-gray-900">Fecha</label>
                                        <input type="date" id="fecha" readOnly value={fechaFormateada} class="bg-colorIcons border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "placeholder="m/d/a" required />
                
                                        
                                        <label htmlFor="pesoactual" class="block mb-2 text-sm font-medium text-gray-900">Peso Actual</label>
                                        <input type="number" id="pesoactual" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 "placeholder="Peso" required />
                                        <button type="button" class="text-white bg-salmonColor hover:bg-naranjaLogo focus:outline-none focus:ring-4 focus:ring-colorIcons font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Registrar</button>
                                    </div>

                                

                                </div>
                             <div className="flex justify-center">
                            { /**TABLA DE SEGUIMIENTO*/ }
                            <table className=" text-sm text-left rtl:text-right text-black ">
                                <thead className="text-xs text-white uppercase bg-naranjaLogo ">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Semana
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Fecha
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Peso Actual
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            IMC
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {/**Mostar datos de seguimiento de rutina */}
                                    {userSeguimiento.length >0 ? (userSeguimiento.map((item,index) => (
                                        <tr key={index} 
                                        className="bg-white border  hover:bg-colorIcons ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.semana}
                                        </th>
                                        <td className="px-6 py-4">
                                            { new Date (item.fecha).toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric"})}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.pesoActual}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.imcActual}
                                        </td>
                                    
                                    </tr>
                                        ))) : (
                                            <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center">
                                                {error ? `Error: ${error}` : "No hay datos disponibles"}
                                            </td>
                                        </tr> )}
                                    
                                   
                                </tbody>
                            </table>
                            </div>
                            
                        
                    </div>
                );
            case "rutinas":
                return <p className="p-4">Este es el contenido de Rutinas.</p>;
            default:
                return null;
        }
    };
    return (
        <div className="w-full">
            {/* Para pantallas pequeñas */}
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select your option</label>
                <select
                    id="tabs"
                    className="border border-colorIcons text-sm rounded-lg focus:ring-colorIcons focus:border-colorIcons block w-full p-2.5"
                    onChange={(e) => setActiveTab(e.target.value)}
                >
                    <option value="seguimiento">Seguimiento de rutina</option>
                    <option value="rutinas">Rutinas</option>
                </select>
            </div>

            {/* Para pantallas grandes */}
            <ul
                className="hidden text-sm font-medium text-center rounded-lg shadow sm:flex"
                role="tablist"
            >
                <li className="w-full">
                    <button
                        onClick={() => setActiveTab("seguimiento")}
                        className={`inline-block w-full p-4 ${
                            activeTab === "seguimiento"
                                ? "text-white bg-naranjaLogo"
                                : "text-white bg-salmonColor hover:bg-colorIcons hover:text-naranjaLogo"
                        } border-r border-salmonColor focus:ring-colorIcons focus:outline-none`}
                    >
                        Seguimiento de rutina
                    </button>
                </li>
                <li className="w-full">
                    <button
                        onClick={() => setActiveTab("rutinas")}
                        className={`inline-block w-full p-4 ${
                            activeTab === "rutinas"
                                ? "text-white bg-naranjaLogo"
                                : "text-white bg-salmonColor hover:bg-colorIcons hover:text-naranjaLogo"
                        } border-r border-salmonColor focus:ring-colorIcons focus:outline-none`}
                    >
                        Rutinas
                    </button>
                </li>
            </ul>

            {/* Contenido dinámico */}
            <div className="mt-4">
                {renderContent()}
            </div>
        </div>
    );
}
