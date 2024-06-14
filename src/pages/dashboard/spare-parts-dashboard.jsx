import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaInfoCircle, FaTrash } from 'react-icons/fa';

const SparePartsDashboard = () => {
    const [repuestos, setRepuestos] = useState([]);
    const [idProducto, setIdProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [idMarca, setIdMarca] = useState('');
    const [modelosDisponibles, setModelosDisponibles] = useState([]);
    const [modeloSeleccionado, setModeloSeleccionado] = useState('');
    const [repuestoSeleccionado, setRepuestoSeleccionado] = useState(null);

    const marcas = ['Samsung', 'Apple', 'Xiaomi', 'Honor'];

    const modelosPorMarca = {
        Samsung: ['Galaxy S21', 'Galaxy Note 20', 'Galaxy A52'],
        Apple: ['iPhone 13', 'iPhone 12', 'iPhone SE'],
        Xiaomi: ['Mi 11', 'Redmi Note 10', 'POCO X3'],
        Honor: ['Honor 50', 'Honor 30', 'Honor 20']
    };

    useEffect(() => {
        const fetchRepuestos = async () => {
            try {
                const response = await fetch('/api/repuestos');
                const data = await response.json();
                setRepuestos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchRepuestos();
    }, []);

    const handleRegistrar = async () => {
        try {
            const newRepuesto = { 
                idProducto, 
                descripcion, 
                precio, 
                cantidad, 
                idMarca, 
                modelo: modeloSeleccionado 
            };
    
            const response = await fetch('http://localhost:3000/api/repuestos', { // Ajusta el puerto y la URL si es necesario
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRepuesto)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setRepuestos([...repuestos, data]);
            
            // Limpiar los campos después de registrar
            setIdProducto('');
            setDescripcion('');
            setPrecio('');
            setCantidad('');
            setIdMarca('');
            setModeloSeleccionado('');
        } catch (error) {
            console.error('Error registering repuesto:', error);
        }
    };    

    const handleModificar = async (index) => {
        const repuesto = repuestos[index];
        const nuevaDescripcion = prompt('Ingrese la nueva descripción:', repuesto.descripcion);
        const nuevoPrecio = prompt('Ingrese el nuevo precio:', repuesto.precio);
        const nuevaCantidad = prompt('Ingrese la nueva cantidad:', repuesto.cantidad);
        const nuevaIdMarca = prompt('Ingrese la nueva Marca:', repuesto.idMarca);
        const nuevoModelo = prompt('Ingrese el nuevo Modelo:', repuesto.modelo);

        if (nuevaDescripcion && nuevoPrecio && nuevaCantidad && nuevaIdMarca && nuevoModelo) {
            try {
                const updatedRepuesto = { ...repuesto, descripcion: nuevaDescripcion, precio: nuevoPrecio, cantidad: nuevaCantidad, idMarca: nuevaIdMarca, modelo: nuevoModelo };
                const response = await fetch(`/api/repuestos/${repuesto.idProducto}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedRepuesto)
                });
                const data = await response.json();
                const repuestosModificados = [...repuestos];
                repuestosModificados[index] = data;
                setRepuestos(repuestosModificados);
            } catch (error) {
                console.error('Error updating repuesto:', error);
            }
        }
    };

    const handleEliminar = async (index) => {
        const repuesto = repuestos[index];
        try {
            await fetch(`/api/repuestos/${repuesto.idProducto}`, {
                method: 'DELETE'
            });
            const nuevosRepuestos = [...repuestos];
            nuevosRepuestos.splice(index, 1);
            setRepuestos(nuevosRepuestos);
        } catch (error) {
            console.error('Error deleting repuesto:', error);
        }
    };

    const handleChangeIdRepuesto = (e) => {
        const value = e.target.value.replace(/\D/, ''); // Remover todo lo que no sea un dígito
        setIdProducto(value);
    };

    const handleChangePrecio = (e) => {
        const value = e.target.value.replace(/\D/, ''); // Remover todo lo que no sea un dígito
        setPrecio(value);
    };

    const handleChangeCantidad = (e) => {
        const value = e.target.value.replace(/\D/, ''); // Remover todo lo que no sea un dígito
        setCantidad(value);
    };

    const handleChangeIdMarca = (e) => {
        const value = e.target.value; // No se restringe a dígitos
        setIdMarca(value);
        setModelosDisponibles(modelosPorMarca[value] || []);
        setModeloSeleccionado('');
    };

    const handleChangeModelo = (e) => {
        const value = e.target.value;
        setModeloSeleccionado(value);
    };

    const handleMostrarInformacion = (repuesto) => {
        setRepuestoSeleccionado(repuesto);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Registrar Repuesto</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div>
                        <label htmlFor="idProducto" className="block font-medium mb-2">
                            ID del Repuesto
                        </label>
                        <input
                            type="text"
                            id="idProducto"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            placeholder="Ingrese el ID del Repuesto"
                            value={idProducto}
                            onChange={handleChangeIdRepuesto}
                        />
                    </div>
                    <div>
                        <label htmlFor="descripcion" className="block font-medium mb-2">
                            Descripción
                        </label>
                        <input
                            type="text"
                            id="descripcion"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            placeholder="Ingrese la descripción"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="precio" className="block font-medium mb-2">
                            Precio
                        </label>
                        <input
                            type="text"
                            id="precio"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            placeholder="Ingrese el precio"
                            value={precio}
                            onChange={handleChangePrecio}
                        />
                    </div>
                    <div>
                        <label htmlFor="cantidad" className="block font-medium mb-2">
                            Cantidad
                        </label>
                        <input
                            type="text"
                            id="cantidad"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            placeholder="Ingrese la cantidad"
                            value={cantidad}
                            onChange={handleChangeCantidad}
                        />
                    </div>
                    <div>
                        <label htmlFor="idMarca" className="block font-medium mb-2">
                            Marca
                        </label>
                        <select
                            id="idMarca"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            value={idMarca}
                            onChange={handleChangeIdMarca}
                        >
                            <option value="">Seleccione una marca</option>
                            {marcas.map((marca, index) => (
                                <option key={index} value={marca}>
                                    {marca}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="modelo" className="block font-medium mb-2">
                            Modelo
                        </label>
                        <select
                            id="modelo"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            value={modeloSeleccionado}
                            onChange={handleChangeModelo}
                        >
                            <option value="">Seleccione un modelo</option>
                            {modelosDisponibles.map((modelo, index) => (
                                <option key={index} value={modelo}>
                                    {modelo}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex justify-between mb-8">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleRegistrar}
                    >
                        Registrar
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setRepuestos([])}
                    >
                        Eliminar Todos
                    </button>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Repuestos Registrados</h2>
                {repuestos.length === 0 ? (
                    <p className="text-center">No hay repuestos registrados</p>
                ) : (
                    <table className="w-full bg-gray-700 text-white rounded-md overflow-hidden">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="py-2 px-4">Descripción</th>
                                <th className="py-2 px-4">Precio</th>
                                <th className="py-2 px-4">Cantidad</th>
                                <th className="py-2 px-4">Marca</th>
                                <th className="py-2 px-4">Modelo</th>
                                <th className="py-2 px-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repuestos.map((repuesto, index) => (
                                <tr key={index} className="border-b border-gray-600">
                                    <td className="py-2 px-4">{repuesto.descripcion}</td>
                                    <td className="py-2 px-4">{repuesto.precio}</td>
                                    <td className="py-2 px-4">{repuesto.cantidad}</td>
                                    <td className="py-2 px-4">{repuesto.idMarca}</td>
                                    <td className="py-2 px-4">{repuesto.modelo}</td>
                                    <td className="py-2 px-4 flex justify-center">
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleModificar(index)}
                                        >
                                            <FaPencilAlt />
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleEliminar(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                            onClick={() => handleMostrarInformacion(repuesto)}
                                        >
                                            <FaInfoCircle />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {repuestoSeleccionado && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-xl font-bold mb-4">Detalles del Repuesto</h3>
                        <p><strong>ID del Repuesto:</strong> {repuestoSeleccionado.idProducto}</p>
                        <p><strong>Descripción:</strong> {repuestoSeleccionado.descripcion}</p>
                        <p><strong>Precio:</strong> {repuestoSeleccionado.precio}</p>
                        <p><strong>Cantidad:</strong> {repuestoSeleccionado.cantidad}</p>
                        <p><strong>Marca:</strong> {repuestoSeleccionado.idMarca}</p>
                        <p><strong>Modelo:</strong> {repuestoSeleccionado.modelo}</p>
                        <button
                            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setRepuestoSeleccionado(null)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SparePartsDashboard;