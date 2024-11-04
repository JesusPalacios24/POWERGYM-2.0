"use client";
import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-fondoEX p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg z-50">
            <div className="flex items-center justify-between">

                <div className="flex items-center">
                    <img src="logo.png" alt="Logo" className="h-10 md:h-8 rounded-md" />
                </div>

                <div className="hidden md:flex gap-5 ml-auto">
                    <a href="/" className="hover:text-black text-navText font-bold text-xl">Inicio</a>
                    <a href="/" className="hover:text-black text-navText font-bold text-xl">Servicios</a>
                    <a href="../login" className="hover:text-black text-navText font-bold text-xl">Login</a>
                </div>

                {/* Botón de menú para pantallas pequeñas */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none text-3xl"
                        aria-label="Toggle menu"
                    >
                        {/* Icono de hamburguesa */}
                        <svg className="w-8 h-8" fill="none" stroke="black" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Enlaces del menú en modo móvil */}
            <div className={`mt-4 ${isOpen ? "block" : "hidden"} md:hidden text-black transition-all duration-300`}>
                <div className="flex flex-col gap-5">
                    <a href="#" className="hover:text-black text-navText font-bold text-2xl">Inicio</a>
                    <a href="#" className="hover:text-black text-navText font-bold text-2xl">Servicios</a>
                    <a href="/prueba" className="hover:text-black text-navText font-bold text-2xl">Login</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;







