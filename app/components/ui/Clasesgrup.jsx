'use client'
import React from 'react';

function RegistroClasesGrupales() {
    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 h-screen">
            {/* Título */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl w-screen font-bold text-white bg-naranjaLogo p-4 rounded-md">
                    REGISTRO DE CLASES GRUPALES
                </h1>
            </div>

            {/* Formulario principal */}
            <div className="flex flex-col w-full max-w-4xl space-y-6 bg-white p-6 rounded-lg shadow-md">
                {/* Información del cliente */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ID Cliente:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Membresía:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido Paterno:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido Materno:</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Selección de la clase grupal */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Datos de la clase grupal:</label>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>Body Combat</option>
                        <option>Yoga</option>
                        <option>CrossFit</option>
                        <option>Spinning</option>
                    </select>
                </div>

                {/* Tabla de detalles */}
                <div>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Horario</th>
                                <th className="px-4 py-2 border border-gray-300">Empleado</th>
                                <th className="px-4 py-2 border border-gray-300">Participantes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">08:00 - 09:00</td>
                                <td className="px-4 py-2 border border-gray-300">Juan Pérez</td>
                                <td className="px-4 py-2 border border-gray-300">15</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">10:00 - 11:00</td>
                                <td className="px-4 py-2 border border-gray-300">María López</td>
                                <td className="px-4 py-2 border border-gray-300">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Botón Aceptar */}
                <div className="flex justify-end">
                    <button className="px-6 py-2 bg-naranjaLogo text-white font-bold rounded-full hover:bg-orange-600">
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistroClasesGrupales;
