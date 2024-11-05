"use client";
import React from "react";
import { useAuth } from "./ui/AuthContext"; // Importa el hook de autenticación
import { useRouter } from 'next/navigation'; // Importa useRouter para redirección

function LogoutButton() {
    const { logout } = useAuth(); // Accede a la función logout desde el contexto
    const router = useRouter(); // Para redirigir

    // Función de logout que también redirige
    const handleLogout = () => {
        logout();  // Llama a logout para cerrar sesión
        router.push("/");  // Redirige al usuario a la página de inicio
    };

    return (
        <button 
            onClick={handleLogout} 
            className="p-2 bg-red-500 text-white rounded-lg w-full"
        >
            Logout
        </button>
    );
}

export default LogoutButton;
