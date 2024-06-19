import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/axios';

const ShoppingCart = () => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [categoria, setCategoria] = useState('Todos');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await clienteAxios.get('/productos');
                setProductos(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProductos();
    }, []);

    const agregarAlCarrito = (producto, cantidad) => {
        const productoEnCarrito = carrito.find((item) => item.id === producto.id);
        if (productoEnCarrito) {
            productoEnCarrito.cantidad += cantidad;
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, { ...producto, cantidad }]);
        }
    };

    const filtrarPorCategoria = (categoria) => {
        setCategoria(categoria);
    };

    const handleFinalizarCompra = () => {
        navigate('/confirmacion', { state: { carrito } });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Carrito de Compras</h2>
            <div className="mb-4">
                <label htmlFor="categoria" className="block text-gray-700 text-sm font-bold mb-2">
                    Filtrar por Categoría
                </label>
                <select
                    id="categoria"
                    value={categoria}
                    onChange={(e) => filtrarPorCategoria(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                >
                    <option value="Todos">Todos</option>
                    <option value="Pantallas">Pantallas</option>
                    <option value="Baterias">Baterias</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {productos
                    .filter(producto => categoria === 'Todos' || producto.categoria === categoria)
                    .map((producto) => (
                        <div key={producto.id} className="border p-4 rounded-md">
                            <img src={producto.imagen} alt={producto.nombre} className="w-full h-32 object-cover mb-4" />
                            <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                            <p className="text-gray-700">Precio: ${producto.precio}</p>
                            <input
                                type="number"
                                min="1"
                                defaultValue="1"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 mb-4"
                                onChange={(e) => agregarAlCarrito(producto, parseInt(e.target.value, 10))}
                            />
                            <button
                                onClick={() => agregarAlCarrito(producto, 1)}
                                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    ))}
            </div>
            <button
                onClick={handleFinalizarCompra}
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 mt-4"
            >
                Finalizar Compra
            </button>
        </div>
    );
};

export default ShoppingCart;
