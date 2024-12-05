'use client'
import React from "react";

function ComprasProductos() {


    const handleNOhaceNADA = () =>{

    }


    return(
        <div className="flex flex-col md:flex-row space-x-8 p-8 ">
        {/* Columna izquierda  */}
        <div className="flex-1">
        <div className="flex items-center space-x-2">
            <label className="block text-base font-medium text-gray-700">
                Compras de Productos
                
            </label>
        </div>
            <form >

                {/**NOMBRE DEL PRODUCTO */}
                <div className="pb-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ingresar el nombre del producto:</label>
                    <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full py-2 bg-salmonColor text-white rounded-full hover:bg-naranjaLogo">Buscar Producto</button>
                </div>

                {/**ID DEL PROVEEDOR */}
                <div className="pb-4 space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Ingrese el ID del Proveedor:</label>
                    <input 
                        type="number" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full py-2 bg-salmonColor text-white rounded-full hover:bg-naranjaLogo">Buscar Producto</button>
                </div>

                {/* LISTA `PROVEEDORES` */}

                <div className="pb-4">
                    <label className="pt-5 pr-5 text-sm font-medium text-gray-700">Lista de Proveedores:</label>
                    <button className="text-white bg-salmonColor hover:bg-naranjaLogo py-1 px-4 rounded-full" >Mostrar</button>
                </div>

                {/**LISTA DE PRODUCTOS */}

                <div className="pb-4">
                    <label className="block pr-5 text-sm font-medium text-gray-700">Lista de Productos:</label>
                    <textarea 
                    defaultValue={"Lista de productos"}
                    type="text" className="w-full h-80 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "/>
                </div>

            </form>

        </div>

        {/* Columna derecha ********************************************************* */}
        <div className="flex-1 space-y-4 ">
            <div className="text-center">
                <label className="">Proceso de compra</label>
            </div>
            
            {/**CARRITO DE COMPRAS */}
            <div className="space-y-2">
                {/*INPUT Y BOTN PARA COMPRAR*/}
                <div className="flex items-center justify-center space-x-4 ">
                <label className="block text-sm font-medium text-gray-700">Ingresa el ID del producto:</label>
                <input 
                    type="text"
                    className=" px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                
                <button className="text-white bg-salmonColor hover:bg-naranjaLogo py-1 px-4 rounded-md" >
                <svg className="h-8 w-8 text-white" alt="Agregar al carrito"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>
                
                </button>   
                </div>

                
                <table className="text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs text-white uppercase bg-naranjaLogo">
                        <tr>
                            <th scope="col" className="px-6 py-3">Articulo</th>
                            <th scope="col" className="px-6 py-3">No. Unidades</th>
                            <th scope="col" className="px-6 py-3">Precio x unidad</th>
                            <th scope="col" className="px-6 py-3">Stock Actual</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="bg-white border hover:bg-colorIcons">
                            <td className="px-6 py-4">Barra Energia</td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">2.50</td>
                            <td className="px-6 py-4">35</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex items-center justify-center space-x-4 ">
                    <label className="block text-sm font-medium text-gray-700">TOTAL: </label>
                    <input 
                        disabled
                        type="text"
                        className=" px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                    
                    <button className="text-white font-bold bg-salmonColor hover:bg-naranjaLogo py-1 px-4 rounded-md" >
                      Confirmar compra
                    </button>

                    <button className="text-white font-bold bg-salmonColor hover:bg-naranjaLogo py-1 px-4 rounded-md" >
                      Eliminar articulo
                    </button>
                </div>
                
                 
            </div>
        </div>
    </div>
    )
    
}
export default ComprasProductos;