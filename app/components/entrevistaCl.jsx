'use client'
import Image from 'next/image';
import React from 'react';
import { useState,useEffect } from 'react';
export default function EntrevistaCliente() {

    const [peso,setPeso] = useState('');
    const [imc,setImc] = useState(null);
    const [estatura,setEstatura] = useState('');
    const [categoria,setCategoria]=useState();
    const [imagen,setImagen]=useState("/verde.png");


    //Calcular IMC y la categoria de manera dinamica

    useEffect (()=> {
        if (peso > 0 && estatura > 0) {
            const nuevoIMC = (peso / (estatura * estatura)).toFixed(2);
            setImc(nuevoIMC);  
            
            
            if (nuevoIMC < 18.5) {    
                setCategoria("Bajo de Peso");        
              setImagen('/flaco.png');
            } else if (nuevoIMC > 18.5 && nuevoIMC <= 24.9) {      
                setCategoria("Normal");
                setImagen('/verde.png');
              
            } else if (nuevoIMC >= 25 && nuevoIMC <= 29.9) {         
                setCategoria("Sobrepeso");
                setImagen('/sobrepeso.png');
              
            } else if (nuevoIMC >= 30 && nuevoIMC <= 34.9) {
                setCategoria("Obesidad I");
                setImagen('/obeso.png');
              
            }else{
                setCategoria("Obesidad II");
                setImagen('/extremoPeso.png');
                
            }
          } else {
            setImc(null);
            setCategoria('');
            setImagen('/verde.png');
          }
        }, [peso, estatura]);



    



  return (
    <div className="flex h-screen bg-gray-100">
      {/* Panel izquierdo */}
      <div className="w-3/4 bg-white p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-orange-600 mb-2">
          Generador de Rutinas: <span className="text-orange-400">Diseña tu Plan de Ejercicio</span>
        </h1>

        <form className="space-y-6">
          {/* ID y Nombre */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-semibold">ID:</label>
              <input
                type="text"
                value="C202450"
                readOnly
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200"
              />
            </div>
            <div>
              <label className="font-semibold">Nombre del cliente:</label>
              <input
                type="text"
                value="Martha Salazar Ochoa"
                readOnly
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200"
              />
            </div>
          </div>

          {/* Sexo, Peso, Altura, IMC */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="font-semibold">Sexo:</label>
              <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200">
                <option>Femenino</option>
                <option>Masculino</option>
              </select>
            </div>
            <div>
              <label className="font-semibold">Peso:</label>
              <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200"
              />
            </div>
            <div>
              <label className="font-semibold">Altura:</label>
              <input
                type="number"
                step="0.01"
                value={estatura}
                onChange={(e) => setEstatura(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200"
              />
            </div>
            <div>
              <label className="font-semibold">IMC:</label>
              <input
                type="text"
                value={imc || ''}
                readOnly
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200"
              />
            </div>
          </div>

          {/* Nivel de condición física */}
          <div>
            <label className="font-semibold">Nivel de condición física:</label>
            <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-orange-200">
              <option>Principiante</option>
              <option>Intermedio</option>
              <option>Avanzado</option>
            </select>
          </div>

          {/* Objetivos de fitness */}
          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="font-semibold">Objetivos de fitness</legend>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <input type="checkbox" className="mr-2" /> Perder peso
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Mejorar mi salud
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Ganar masa muscular
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Mejorar mi rendimiento deportivo
              </label>
            </div>
          </fieldset>

          {/* Lesiones previas */}
          <fieldset className="border border-gray-300 rounded-md p-4">
            <legend className="font-semibold">Lesiones previas</legend>
            <div className="grid grid-cols-2 gap-2">
              <label>
                <input type="checkbox" className="mr-2" /> Esguince de tobillo
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Tendinitis rotuliana
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Fractura de muñeca
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Fractura de clavícula
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Distensión muscular del cuello
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Dislocación del hombro
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Desgarro del tendón de Aquiles
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Ninguno
              </label>
            </div>
          </fieldset>

          {/* Botón de guardar */}
          <div className="text-center">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
              Guardar
            </button>
          </div>
        </form>
      </div>

      {/* Panel derecho */}
      <div className="w-1/4 bg-imagenCamuflaje flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-orange-600">{categoria || 'Sin categoría'}</h2>
        <div className="flex flex-col items-center mt-4">
          {/* Imagen (silueta del cuerpo) */}
          <Image
            src={imagen} // Cambia por la imagen correspondiente
            alt="Indice de Masa Corporal"
            width={250}
            height={300}
          />
          
        </div>
      </div>
    </div>
  );
}
