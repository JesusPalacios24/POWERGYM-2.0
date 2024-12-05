"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAuth } from "./AuthContext";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#f7ecee] p-4 sm:p-6 lg:p-8 shadow-lg rounded-lg z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/">
                        <img src="/powergym.png" alt="Logo" className="h-20 rounded-md" />
                    </a>
                </div>

                {/* Enlaces (pantallas grandes) */}
                <div className="hidden md:flex gap-5 ml-auto">
                    {isAuthenticated ? (
                        <a href="../perfilE" className="hover:text-black text-navText font-bold text-xl">
                            <img src="/userdefecto.png" alt="Perfil" className="h-12 rounded-full" />
                        </a>
                    ) : (
                        <a href="../login" className="hover:text-black text-navText font-bold text-xl">Login</a>
                    )}
                </div>

                {/* Botón hamburguesa (pantallas pequeñas) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none text-3xl" aria-label="Toggle menu">
                        {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </button>
                </div>
            </div>

            {/* Menú desplegable (pantallas pequeñas) */}
            {isOpen && (
                <div className="md:hidden mt-4 text-black transition-all duration-300">
                    <div className="flex flex-col gap-5">
                        <a href="/" className="hover:text-black text-navText font-bold text-2xl">Inicio</a>
                        <a href="#" className="hover:text-black text-navText font-bold text-2xl">Servicios</a>
                        {isAuthenticated ? (
                            <a href="../perfilC" className="hover:text-black text-navText font-bold text-xl">
                                <img src="user.png" alt="Perfil" className="h-12 rounded-md" />
                            </a>
                        ) : (
                            <a href="../login" className="hover:text-black text-navText font-bold text-2xl">Login</a>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
