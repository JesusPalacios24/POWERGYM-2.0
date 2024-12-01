'use client'
import React from 'react';

function GestionHorarios() {
    return (
        <div className="flex flex-col md:flex-row space-x-8 p-8">
            {/* Columna izquierda */}
            <div className="flex-1">
                <div className="flex items-center space-x-2">
                    <label className="block text-base font-medium text-gray-700">
                        Gestión de Horarios
                    </label>
                </div>
                <form>
                    {/* Clave del Empleado */}
                    <div className="pb-4 space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Clave del Empleado:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="flex space-x-4">
                            <button className="w-full py-2 bg-salmonColor text-white rounded-full hover:bg-naranjaLogo">Buscar</button>
                            <button className="w-full py-2 bg-gray-500 text-white rounded-full hover:bg-gray-700">Reingresar Clave</button>
                        </div>
                    </div>

                    {/* Estado del Horario */}
                    <div className="pb-4 space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Estado del Horario:</label>
                        <textarea
                            readOnly
                            className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            defaultValue="Información del horario actual"
                        ></textarea>
                    </div>
                </form>
            </div>

            {/* Columna derecha */}
            <div className="flex-1 space-y-4">
                {/* Cambiar Horario */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ingresar nueva clave de horario:</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex space-x-4">
                        <button className="w-full py-2 bg-salmonColor text-white rounded-full hover:bg-naranjaLogo">Claves Disponibles</button>
                        <button className="w-full py-2 bg-salmonColor text-white rounded-full hover:bg-naranjaLogo">Confirmar</button>
                    </div>
                </div>

                {/* Información Adicional */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Datos Generales:</label>
                    <textarea
                        readOnly
                        className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Información del empleado"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default GestionHorarios;
