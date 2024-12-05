'use client';
import React, { useState } from 'react';

function EncuestaEntrenador() {
    const [entrenador, setEntrenador] = useState({
        id: '',
        nombre: '',
    });
    const [respuestas, setRespuestas] = useState({
        atencionAdecuada: '',
        ayuda: '',
        rutina: '',
        seguimiento: '',
        recomendar: '',
    });
    const [calificacion, setCalificacion] = useState(0);

    // Función para guardar las respuestas y calcular la calificación
    const guardarRespuestas = () => {
        const valores = Object.values(respuestas);
        const respuestasValidas = valores.filter((respuesta) => respuesta === 'Si').length;
        const totalPreguntas = valores.length;

        // Calcular la calificación como un promedio (1-5)
        const nuevaCalificacion = Math.round((respuestasValidas / totalPreguntas) * 5);
        setCalificacion(nuevaCalificacion);

        alert('¡Respuestas guardadas con éxito!');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEntrenador({ ...entrenador, [name]: value });
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setRespuestas({ ...respuestas, [name]: value });
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 h-screen">
            {/* Título */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl w-screen font-bold text-white bg-orange-600 p-4 rounded-md">
                    Evaluación
                </h1>
            </div>

            {/* Formulario de encuesta */}
            <div className="flex flex-col w-full max-w-4xl space-y-6 bg-white p-6 rounded-lg shadow-md">
                {/* Información del entrenador */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ID del Entrenador:</label>
                        <input
                            type="text"
                            name="id"
                            value={entrenador.id}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre del entrenador:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={entrenador.nombre}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                </div>

                {/* Preguntas de la encuesta */}
                <div className="space-y-4">
                    {[
                        { key: 'atencionAdecuada', text: '¿La atención del entrenador ha sido adecuada?' },
                        { key: 'ayuda', text: 'Cuando tienes problemas o dudas, ¿el entrenador te ayuda?' },
                        { key: 'rutina', text: '¿El entrenador te asignó una rutina de acuerdo con tu condición?' },
                        { key: 'seguimiento', text: '¿El entrenador te da un correcto seguimiento?' },
                        { key: 'recomendar', text: '¿Recomendarías a este entrenador?' },
                    ].map((pregunta) => (
                        <div key={pregunta.key} className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700">{pregunta.text}</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={pregunta.key}
                                        value="Si"
                                        onChange={handleRadioChange}
                                        className="text-orange-600 focus:ring-orange-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Sí</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={pregunta.key}
                                        value="No"
                                        onChange={handleRadioChange}
                                        className="text-orange-600 focus:ring-orange-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">No</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Calificación */}
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Calificación:</label>
                    <div className="flex justify-center items-center w-20 h-20 text-2xl font-bold border border-gray-300 rounded-md bg-gray-100">
                        {calificacion}
                    </div>
                </div>

                {/* Botón guardar */}
                <div className="flex justify-center">
                    <button
                        onClick={guardarRespuestas}
                        className="px-6 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
                    >
                        Guardar respuestas
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EncuestaEntrenador;
