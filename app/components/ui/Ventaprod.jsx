'use client';
import React, { useState } from 'react';

function VentaProductos() {
    const [cliente, setCliente] = useState({ id: '', nombre: '' });
    const [producto, setProducto] = useState({ id: '', nombre: '', precio: 0, stock: 0 });
    const [cantidad, setCantidad] = useState(1);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const agregarAlCarrito = () => {
        if (producto.stock >= cantidad) {
            const item = {
                idProducto: producto.id,
                nombre: producto.nombre,
                cantidad,
                precio: producto.precio,
                total: cantidad * producto.precio,
            };
            setCarrito([...carrito, item]);
            setTotal(total + item.total);
            setProducto({ ...producto, stock: producto.stock - cantidad });
        } else {
            alert('Stock insuficiente');
        }
    };

    const generarVenta = () => {
        alert(`Venta generada con un total de ${total}`);
        setCliente({ id: '', nombre: '' });
        setProducto({ id: '', nombre: '', precio: 0, stock: 0 });
        setCantidad(1);
        setCarrito([]);
        setTotal(0);
    };

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 h-screen">
            {/* Título */}
            <div className="mb-6 text-center">
                <h1 className="text-2xl w-screen font-bold text-white bg-orange-600 p-4 rounded-md">
                    Venta de Productos
                </h1>
            </div>

            {/* Formulario principal */}
            <div className="flex flex-col w-full max-w-4xl space-y-6 bg-white p-6 rounded-lg shadow-md">
                {/* Información del cliente */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ID Cliente:</label>
                        <input
                            type="text"
                            value={cliente.id}
                            onChange={(e) => setCliente({ ...cliente, id: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cliente:</label>
                        <input
                            type="text"
                            value={cliente.nombre}
                            onChange={(e) => setCliente({ ...cliente, nombre: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                </div>

                {/* Información del producto */}
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ID Producto:</label>
                        <input
                            type="text"
                            value={producto.id}
                            onChange={(e) =>
                                setProducto({ ...producto, id: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Producto:</label>
                        <input
                            type="text"
                            value={producto.nombre}
                            onChange={(e) =>
                                setProducto({ ...producto, nombre: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Precio:</label>
                        <input
                            type="number"
                            value={producto.precio}
                            onChange={(e) =>
                                setProducto({ ...producto, precio: parseFloat(e.target.value) })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Stock:</label>
                        <input
                            type="number"
                            value={producto.stock}
                            onChange={(e) =>
                                setProducto({ ...producto, stock: parseInt(e.target.value) })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />
                    </div>
                </div>

                {/* Cantidad */}
                <div>
                            <label className="block text-sm font-medium text-gray-700">Cantidad:</label>
                            <input
                                type="number"
                                value={cantidad}
                                min="1" // Evita valores menores a 1 en el input
                                onChange={(e) => {
                                    const nuevaCantidad = parseInt(e.target.value);
                                    if (nuevaCantidad >= 1) { // Solo actualiza si es >= 1
                                        setCantidad(nuevaCantidad);
                                    }
                                }}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            />
                        </div>


                {/* Botones */}
                <div className="flex space-x-4">
                    <button
                        onClick={agregarAlCarrito}
                        className="px-6 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600"
                    >
                        Agregar al carrito
                    </button>
                    <button
                        onClick={generarVenta}
                        className="px-6 py-2 bg-green-500 text-white font-bold rounded-md hover:bg-green-600"
                    >
                        Generar Venta
                    </button>
                </div>

                {/* Tabla del carrito */}
                <div>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">ID Prod</th>
                                <th className="px-4 py-2 border border-gray-300">Producto</th>
                                <th className="px-4 py-2 border border-gray-300">Cantidad</th>
                                <th className="px-4 py-2 border border-gray-300">Precio Unitario</th>
                                <th className="px-4 py-2 border border-gray-300">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 border border-gray-300">{item.idProducto}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.nombre}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.cantidad}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.precio}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Total */}
                <div className="text-right font-bold text-lg">
                    Total a pagar: ${total.toFixed(2)}
                </div>
            </div>
        </div>
    );
}

export default VentaProductos;
