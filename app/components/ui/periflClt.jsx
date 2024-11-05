import React from "react";
import BotonLogO from "../btnLOUT";

export default function Perfil() {
    return (
        <div className="flex h-screen pt-16">
            {/* Menú lateral alineado a la izquierda sin fixed */}
            <div className="w-1/5 bg-black text-white p-4 h-full">
                <BotonLogO />
            </div>

            {/* Contenido principal con espacio para el menú lateral */}
            <div className="flex-grow p-5 overflow-y-auto">
                <h1 className="mb-1 font-bold text-2xl">TODA LA INFO DEL USUARIO</h1>
                <p className="mt-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque unde impedit exercitationem, eveniet, fugit sint accusamus nostrum inventore iste voluptates sit quia id at. Quos voluptatum corporis quaerat eligendi.
                </p>
            </div>
        </div>
    );
}


