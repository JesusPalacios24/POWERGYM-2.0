'use client'
import React from "react";
import GestionEmpleado from "@/app/components/gestionEm";

function GestionEmpleados() {
    
    return(
        <div className="pt-10">
            <h1 className="text-9xl text-center text-naranjaLogo font-mono font-bold ">Gestion de Empleados</h1>
        <div >
             
            <GestionEmpleado />
       
         </div>
         </div>
    )
}

export default GestionEmpleados;