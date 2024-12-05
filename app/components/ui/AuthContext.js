// AuthContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);


    const login = (data) => {
        setIsAuthenticated(true);
        setUserData(data); //Guarda los datos del empelado
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userData', JSON.stringify(data));
    };
    
    const logout = () => {
        setIsAuthenticated(false);
        setUserData(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('userData');
    };
    
    React.useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        const storedData = localStorage.getItem('userData');

        console.log("storedAuth:", storedAuth);
        console.log("storedData:", storedData);

        if (storedAuth === 'true' && storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setIsAuthenticated(true);
                setUserData(parsedData); // Solo parsea si storedData no es null
            } catch (error) {
                console.error("Error parsing storedData:", error);
                setIsAuthenticated(false);
                setUserData(null);
            }
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
