'use client'
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../ui/AuthContext"; // Importa el hook de autenticación
import EntrevistaCliente from "../entrevistaCl";


export default function Perfil({username}) {
    const [userData,setUserData] = useState(null); // guardar datos del usuarop
    const [error,setError]= useState(null); // guardar el error

    const { logout } = useAuth(); // Accede a la función logout desde el contexto
    const router = useRouter(); // Para redirigir

    const rute = useRouter();


    const handleEntrevista = () =>{
        rute.push("perfilC/entrevista")
    };

    // Función de logout que también redirige
    const handleLogout = () => {
        logout();  // Llama a logout para cerrar sesión
        router.push("/");  // Redirige al usuario a la página de inicio
    };


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

    //Llamar funcion al ejecutarse la pagina
    useEffect (()=> {
        handleDatos();
    },[username]);

    return (
        
        <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow ">
             {error && (
                    <p className="text-red-500 mt-4">
                        Error al cargar los datos: {error}
                    </p>
                )}
        <a href="#">
       
            {userData? (
                //IMAGEN DEL USUARIO
                <img className="rounded-t-lg" 
                src={`data:image/jpeg;base64,${Buffer.from(userData.foto.data).toString('base64')}`} 

                alt="" /> 
            ):(!error && <p className="mt-4 text-lg">Cargando datos...</p>)}

                

        </a>
        {userData? (//Infor del USUARIO
                <div className="p-5">
                        
                            <a href="#">
                                <h1 className="mb-5  text-5xl font-bold tracking-tight text-gray-900 ">Hola {userData.nombreC} !!!
                                </h1>
                                
                            </a>
                            <p className="mb-3 font-normal text-gray-700">{`${userData.nombreC} ${userData.apellidoPC} ${userData.apellidoMC}`}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Membresia:</strong>{` ${userData.membresia}  `}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Sexo:</strong>{` ${userData.sexo}  `}<strong>Estudiante:</strong>{`${userData.estudiante}`}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Peso:</strong>{` ${userData.peso_inicial} kg  ` || "0 kg"}
                                <strong>Estatura:</strong>{`${userData.estatura} cm ` || "0 cm"}
                                <strong>IMC:</strong>{`${userData.imc}` || "0"}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Nivel de Condicion Fisica:</strong>{` ${userData.NivelCondicionFisica}  ` || "0"}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Correo:</strong>{` ${userData.correoC}  `}</p>
                            <p className="mb-3 font-normal text-gray-700"><strong>Telefono:</strong>{` ${userData.celularC}`}</p>

                            {/* BOTON PARA LA ENTREVISTA, QUE DEPENDIENDO SI ESTA LA INFO*/}
                            <div className=" py-4 w-full flex justify-center">
                            <a href="#" onClick= {handleEntrevista} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
                            Realizar entrevista
                            </a>
                        </div>


                    <div className="flex items-center justify-between">

                        {/** BOTON DE CERRAR SESION */}
                        <a href="#" onClick= {handleLogout} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
                            Cerrar Sesion
                            
                            <svg className="h-5 w-5 text-white"  width="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />  <polyline points="16 17 21 12 16 7" />  <line x1="21" y1="12" x2="9" y2="12" /></svg>
                        </a>

                        {/** BOTON DE Configuracion */}
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-salmonColor rounded-lg hover:bg-naranjaLogo focus:ring-4 focus:outline-none focus:ring-colorIcons">
                            Ajustes 
                            <svg className= "h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>                        </a>
                    </div>

                </div>
         ):(!error && <p className="mt-4 text-lg">Cargando datos...</p>)}
    </div>
    );
}


