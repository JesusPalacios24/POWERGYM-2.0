"use client";
import React, { useState } from "react";
import { useAuth } from "./AuthContext"; // Importa el hook personalizado


const users = [
  { username: "user1", password: "123" },
  { username: "user2", password: "456" }
];

export default function Login() {

  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud de login al backend
      const response = await fetch("/api/users/login",{
        method: "POST", //especificar metodo
        headers: {
          "Content-Type": "application/json", //cuerpo de la solicitud
        },
        body: JSON.stringify({username,password}), // convertir los datos del formulario en JSON
      });

      //Solicitud de todos los datos

      

      //obtneer respuesta
      const data = await response.json();

      if (response.ok && data.success) { // verificar respuesta exitosa

        const userData ={
          id: username,
        }

        login(userData);//llamada al login del contexto
        if (username.charAt(0) =="C"){
          window.location.href = '/perfilC';  // Redirige al Perfil cleinte después de iniciar sesión
        }else{
          window.location.href = '/pelfilEmpleado';  // Redirige al Perfil empelado después de iniciar sesión
        }
       // Redirige al home después de iniciar sesión
    } else {
      //Respuesta NO exitosa
      setError(data.message||"Error Inicio Sesion");
    }

    } catch (error) {
      setError("Ocurrio un problema de autentificacion")
    }


/*
PARTE DE JESUS
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      login(); // Llama a login del contexto
      window.location.href = '/'; // Redirige al home después de iniciar sesión
    } else {
      setError("Incorrect username or password");
    }*/
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8 rounded-lg w-full max-w-md">
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

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex justify-center">
            <button type="submit">
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

