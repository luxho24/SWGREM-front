import React, { useState } from 'react';
import { FaPencilAlt, FaInfoCircle, FaTrash } from 'react-icons/fa';

const SparePartsDashboard = () => {
    const [repuestos, setRepuestos] = useState([]);
    const [idRepuesto, setIdProducto] = useState('');
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

    const handleRegistrar = () => {
        setRepuestos([...repuestos, { idProducto: idRepuesto, descripcion, precio, cantidad, idMarca, modelo: modeloSeleccionado }]);
        setIdProducto('');
        setDescripcion('');
        setPrecio('');
        setCantidad('');
        setIdMarca('');
        setModeloSeleccionado('');
    };

    const handleModificar = (index) => {
        const nuevaDescripcion = prompt('Ingrese la nueva descripción:');
        const nuevoPrecio = prompt('Ingrese el nuevo precio:');
        const nuevaCantidad = prompt('Ingrese la nueva cantidad:');
        const nuevaIdMarca = prompt('Ingrese la nueva Marca:');
        const nuevoModelo = prompt('Ingrese el nuevo Modelo:');
        if (nuevaDescripcion && nuevoPrecio && nuevaCantidad && nuevaIdMarca && nuevoModelo) {
            const repuestosModificados = [...repuestos];
            repuestosModificados[index].descripcion = nuevaDescripcion;
            repuestosModificados[index].precio = nuevoPrecio;
            repuestosModificados[index].cantidad = nuevaCantidad;
            repuestosModificados[index].idMarca = nuevaIdMarca;
            repuestosModificados[index].modelo = nuevoModelo;
            setRepuestos(repuestosModificados);
        }
    };

    const handleEliminar = (index) => {
        const nuevosRepuestos = [...repuestos];
        nuevosRepuestos.splice(index, 1);
        setRepuestos(nuevosRepuestos);
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
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full flex flex-col md:flex-row">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Repuesto</h2>
                    <div className="mb-4">
                        <label htmlFor="idProducto" className="block font-medium mb-2">
                            ID del Repuesto
                        </label>
                        <input
                            type="text"
                            id="idProducto"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 text-white"
                            placeholder="Ingrese el ID del Repuesto"
                            value={idRepuesto}
                            onChange={handleChangeIdRepuesto}
                        />
                    </div>
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-6">
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
                    <div className="mb-6">
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
                    <div className="flex justify-between">
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
                </div>
                <div className="md:w-1/2 md:ml-8">
                    <h2 className="text-2xl font-bold mb-6">Repuestos Registrados</h2>
                    {repuestos.length === 0 ? (
                        <p>No hay repuestos registrados</p>
                    ) : (
                        <ul>
                            {repuestos.map((repuesto, index) => (
                                <li key={index} className="flex justify-between items-center mb-2">
                                    <span>{repuesto.descripcion} - Precio: {repuesto.precio} - Cantidad: {repuesto.cantidad} - Marca: {repuesto.idMarca} - Modelo: {repuesto.modelo}</span>
                                    <div>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleModificar(index)}
                                        ><FaPencilAlt></FaPencilAlt>
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleEliminar(index)}
                                        ><FaTrash></FaTrash>
                                        </button>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                            onClick={() => handleMostrarInformacion(repuesto)}
                                        ><FaInfoCircle></FaInfoCircle>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
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