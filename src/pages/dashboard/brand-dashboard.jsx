import React, { useState } from 'react';

const BrandDashboard = () => {
    const [equipos, setEquipos] = useState([]);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleRegistrar = () => {
        setEquipos([...equipos, { marca, modelo, descripcion }]);
        setMarca('');
        setModelo('');
        setDescripcion('');
    };

    const handleModificar = (index) => {
		const nuevaMarca = prompt('Ingrese el nueva marca:');
        const nuevoModelo = prompt('Ingrese el nuevo modelo:');
        const nuevaDescripcion = prompt('Ingrese la nueva descripción:');
        if (nuevaMarca && nuevoModelo && nuevaDescripcion) {
			equiposModificados[index].marca = nuevaMarca;
			equiposModificados[index].modelo = nuevoModelo;
			equiposModificados[index].descripcion = nuevaDescripcion;
			setEquipos(equiposModificados);
		}
    };

    const handleEliminar = (index) => {
        const equiposActualizados = equipos.filter((_, i) => i !== index);
        setEquipos(equiposActualizados);
    };

    const handleEliminarTodos = () => {
        setEquipos([]);
    };

    const handleVerDetalles = (equipo) => {
        alert(`Marca: ${equipo.marca}\nModelo: ${equipo.modelo}\nDescripción: ${equipo.descripcion}`);
    };

    return (
        <div className="flex justify-center items-start h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full flex flex-col md:flex-row">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Equipo</h2>
                    <div className="mb-4">
                        <label htmlFor="marca" className="block font-medium mb-2">Marca</label>
                        <input
                            type="text"
                            id="marca"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Ingrese la marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="modelo" className="block font-medium mb-2">Modelo</label>
                        <input
                            type="text"
                            id="modelo"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Ingrese el modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="descripcion" className="block font-medium mb-2">Descripción</label>
                        <textarea
                            id="descripcion"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Ingrese una descripción del equipo"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleRegistrar}
                        >
                            Registrar
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleEliminarTodos}
                        >
                            Eliminar Todos
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-8">
                    <h2 className="text-2xl font-bold mb-6">Equipos Registrados</h2>
                    {equipos.length === 0 ? (
                        <p>No hay equipos registrados</p>
                    ) : (
                        <ul>
                            {equipos.map((equipo, index) => (
                                <li key={index} className="flex justify-between items-center mb-2">
                                    <span>{equipo.marca} - {equipo.modelo}</span>
                                    <div>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleModificar(index)}
                                        >
                                            Modificar
                                        </button>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleVerDetalles(equipo)}
                                        >
                                            Ver Detalles
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                            onClick={() => handleEliminar(index)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BrandDashboard;