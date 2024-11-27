'use client'
import React from "react";
import { useRouter } from "next/navigation";


function GestionCliente() {
    //fecha Actual
    const hoy = new Date();
    const fechaActual = hoy.toISOString().split('T')[0];
    const route = useRouter();


    const handleBack = () =>{
        route.push("/perfilE");
    }
    
    return(
        <div className="flex flex-col md:flex-row space-x-8 p-8">
        {/* Columna izquierda con imagen */}
        <div className="flex-1">
            <div className="flex justify-center">
                <img 
                    src="/userdefecto.png"
                    alt="Empleado" 
                    className="w-48 h-48 rounded-full object-cover mb-4"
                />
            </div>
            <div className="text-center">
                <button className="text-white bg-salmonColor hover:bg-naranjaLogo py-2 px-4 rounded-full">
                    Cambiar imagen
                </button>
            </div>
            <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Fecha de cumpleanos:</label>
                <input 
                    type="date" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-between mt-6">
                <button className="px-16 py-2 bg-red-500 text-white rounded-md hover:bg-red-700">Eliminar</button>
                <button className="px-16 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">Modificar</button>
                <button className="px-16 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">Registrar</button>
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={handleBack} className="w-full py-2 bg-salmonColor text-white rounded-md hover:bg-naranjaLogo">Regresar</button>
            </div>
        </div>

        {/* Columna derecha con formulario */}
        <div className="flex-1 space-y-4">
            <form className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">ID</label>
                    <input 
                        disabled
                        type="text" 
                        defaultValue="S202451" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Fecha</label>
                    <input 
                        disabled
                        type="date" 
                        defaultValue={fechaActual}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input 
                        type="text" 
                        defaultValue="Maria" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                    <input 
                        type="text" 
                        defaultValue="Antonia" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                    <input 
                        type="text" 
                        defaultValue="Y su hermanita" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Sexo</label>
                    <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Masculino">H</option>
                        <option value="Femenino">M</option>
                    </select>
                </div>

                
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Tipo de Membresia</label>
                    <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Secretaria">Premium</option>
                        <option value="Entrenador">StudentPack</option>
                        <option value="Instructor">Normal</option>
                    </select>
                </div>
                
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input 
                        type="email" 
                        defaultValue="limpitato.Roy@gmail.com" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input 
                        type="tel" 
                        defaultValue="6145658" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Dirección</label>
                    <input 
                        type="text" 
                        defaultValue="Enrique segoviano" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="col-span-2 md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Estudiante?</label>
                    <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="SI">SI</option>
                        <option value="NO">NO</option>
                    </select>
                </div>
            </form>
            
        </div>
    </div>
    )
}

export default GestionCliente;