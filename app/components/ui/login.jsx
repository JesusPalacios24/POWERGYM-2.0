"use client"; // Debe estar en la primera línea para habilitar el uso del cliente

import React, { useState } from "react";

// Lista de usuarios con nombre de usuario y contraseña
const users = [
  { username: "user1", password: "123" },
  { username: "user2", password: "456" }
];

export default function Login() {
  // Estados para manejar el nombre de usuario, contraseña y posibles errores
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Maneja el evento de envío del formulario
  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    // Verifica si el usuario existe y las credenciales son correctas
    if (user) {
      alert("Successful login");
      window.location.href = '/'; // Redirige al home después de iniciar sesión
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-8 rounded-lg  w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">User:</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password:</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          {/* Muestra el mensaje de error si las credenciales son incorrectas */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex justify-center">
            <button>
                LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}