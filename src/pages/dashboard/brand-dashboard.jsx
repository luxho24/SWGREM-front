import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { registrarMarca, listarMarcas, eliminarMarca } from "../../services/brand.service.jsx";

const BrandDashboard = () => {
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [modelos, setModelos] = useState([]);
    const [error, setError] = useState('');
    const [campoVacio, setCampoVacio] = useState(null);

    // Función para manejar el envío del formulario de registro de modelo
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación de campos obligatorios
        if (!marca || !modelo) {
            if (!marca) setCampoVacio('marca');
            else if (!modelo) setCampoVacio('modelo');
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            // Llamar al servicio para registrar el modelo
            await registrarMarca(marca, modelo);
            // Actualizar la lista de modelos después de registrar uno nuevo
            await actualizarListaModelos();
            // Limpiar los campos del formulario
            setMarca('');
            setModelo('');
            setError('');
            setCampoVacio(null);
        } catch (error) {
            console.error("Error al registrar el modelo:", error);
        }
    };

    // Función para actualizar la lista de modelos
    const actualizarListaModelos = async () => {
        try {
            const listaModelos = await listarMarcas();
            setModelos(listaModelos);
        } catch (error) {
            console.error("Error al obtener la lista de modelos:", error);
            setError("No se pudo cargar la lista de modelos");
        }
    };

    // Llamar a la función de actualizar lista de modelos al montar el componente
    useEffect(() => {
        actualizarListaModelos();
    }, []);

    // Función para manejar la eliminación de un modelo
    const handleEliminar = async (id) => {
        try {
            // Llamar al servicio para eliminar el modelo por su ID
            await eliminarMarca(id);
            // Actualizar la lista de modelos después de eliminar uno
            await actualizarListaModelos();
        } catch (error) {
            console.error("Error al eliminar el modelo:", error);
        }
    };

    return (
        <div className="flex justify-center items-start h-screen bg-gray-900 text-white">
            <div className="flex w-full max-w-6xl">
                <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg shadow-lg p-8 flex-1 mr-4">
                    <h2 className="text-2xl font-bold mb-6">Registrar Modelo</h2>
                    {error && <p className="text-red-400">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="marca" className="block font-medium mb-2">Marca</label>
                        <input type="text" id="marca" className={`w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 ${campoVacio === 'marca' && 'border-red-500'}`} placeholder="Ingrese la marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="modelo" className="block font-medium mb-2">Modelo</label>
                        <input type="text" id="modelo" className={`w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700 ${campoVacio === 'modelo' && 'border-red-500'}`} placeholder="Ingrese el modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                    </div>
                    <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Registrar Modelo</button>
                </form>
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex-1">
                    <h2 className="text-2xl font-bold mb-6">Lista de Modelos</h2>
                    {error && <p className="text-red-400">{error}</p>}
                    <table className="table-fixed w-full">
                        <thead>
                            <tr>
                                <th className="w-1/2">Marca</th>
                                <th className="w-1/2">Modelo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(modelos) && modelos.map((modelo, index) => (
                                <tr key={index}>
                                    <td>{modelo.Marca}</td>
                                    <td>{modelo.Modelo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrandDashboard;
