import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaInfoCircle, FaTrash } from 'react-icons/fa';

const BrandDashboard = () => {
    const [equipos, setEquipos] = useState([]);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [modelosDisponibles, setModelosDisponibles] = useState([]);
    const [detallesEquipo, setDetallesEquipo] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const [error, setError] = useState('');

    useEffect(() => {
        if (marca) {
            setModelosDisponibles(modelosPorMarca[marca] || []);
        } else {
            setModelosDisponibles([]);
        }
    }, [marca]);

    const modelosPorMarca = {
        Xiaomi: ["Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 12T Pro", "Xiaomi 12T", "Xiaomi 12 Lite", "Redmi Note 12 Pro Speed Edition", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 12 5G", "Redmi 12C"],
        Samsung: ["Samsung Galaxy S23 Ultra", "Samsung Galaxy S23+", "Samsung Galaxy S23", "Samsung Galaxy Z Fold5", "Samsung Galaxy Z Flip5", "Samsung Galaxy S22 Ultra", "Samsung Galaxy S22+", "Samsung Galaxy S22", "Samsung Galaxy A34", "Samsung Galaxy A54"],
        Motorola: ["Motorola Edge 30 Ultra", "Motorola Edge 30 Fusion", "Motorola Edge 30", "Motorola G200", "Motorola G71", "Motorola G51", "Motorola G41", "Motorola G31", "Motorola G22", "Motorola E13"],
        Honor: ["HONOR Magic5 Pro", "HONOR Magic5", "HONOR 80 Pro", "HONOR 80", "HONOR X9a", "HONOR 70", "HONOR X8", "HONOR 50", "HONOR X7", "HONOR X6"],
        Oppo: ["OPPO Find X6 Pro", "OPPO Find X6", "OPPO Reno9 Pro+", "OPPO Reno9 Pro", "OPPO Reno9", "OPPO A98", "OPPO A78", "OPPO A77s", "OPPO A57", "OPPO A17"],
        Apple: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 mini", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE (3ra generación)", "iPhone SE (2da generación)"]
    };

    const validateInput = () => {
        if (!marca.trim() || !modelo.trim() || !descripcion.trim()) {
            setError('Todos los campos son obligatorios');
            return false;
        }
        setError('');
        return true;
    };

    const handleRegistrar = () => {
        if (validateInput()) {
            const nuevoEquipo = { marca, modelo, descripcion };
            fetch('http://localhost:3000/api/marcas', { // Cambia esto a la URL correcta
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoEquipo),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setEquipos([...equipos, data]);
                setMarca('');
                setModelo('');
                setDescripcion('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

    const handleModificar = (index) => {
        setEditIndex(index);
        setMarca(equipos[index].marca);
        setModelo(equipos[index].modelo);
        setDescripcion(equipos[index].descripcion);
    };

    const handleGuardarModificacion = () => {
        if (validateInput()) {
            const equipoModificado = { marca, modelo, descripcion };
            fetch(`http://localhost:3000/api/marcas/${equipos[editIndex]._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(equipoModificado),
            })
            .then(response => response.json())
            .then(data => {
                const equiposModificados = [...equipos];
                equiposModificados[editIndex] = data;
                setEquipos(equiposModificados);
                cancelarEdicion();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

    const cancelarEdicion = () => {
        setEditIndex(-1);
        setMarca('');
        setModelo('');
        setDescripcion('');
    };

    const handleEliminar = (index) => {
        const equipo = equipos[index];
        fetch(`http://localhost:3000/api/marcas/${equipo._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(() => {
            const equiposActualizados = equipos.filter((_, i) => i !== index);
            setEquipos(equiposActualizados);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="flex flex-col items-center h-screen bg-gray-900 text-white p-8">
            <h2 className="text-2xl font-bold mb-6">{editIndex === -1 ? "Registrar Equipo" : "Modificar Equipo"}</h2>
            {error && <p className="text-red-400">{error}</p>}
            <div className="mb-4 w-full max-w-md">
                <label htmlFor="marca" className="block font-medium mb-2">Marca</label>
                <input list="marcas" type="text" id="marca" className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700" placeholder="Ingrese la marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                <datalist id="marcas">
                    {Object.keys(modelosPorMarca).map(marca => <option key={marca} value={marca} />)}
                </datalist>
            </div>
            <div className="mb-4 w-full max-w-md">
                <label htmlFor="modelo" className="block font-medium mb-2">Modelo</label>
                <input list="modelos" type="text" id="modelo" className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700" placeholder="Ingrese el modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                <datalist id="modelos">
                    {modelosDisponibles.map(modelo => <option key={modelo} value={modelo} />)}
                </datalist>
            </div>
            <div className="mb-6 w-full max-w-md">
                <label htmlFor="descripcion" className="block font-medium mb-2">Descripción</label>
                <textarea
                    id="descripcion"
                    className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700"
                    placeholder="Ingrese una descripción del equipo"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className="flex justify-end space-x-4 mb-6">
                {editIndex === -1 ? (
                    <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={handleRegistrar}>
                        Registrar
                    </button>
                ) : (
                    <>
                        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleGuardarModificacion}>
                            Guardar
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={cancelarEdicion}>
                            Cancelar
                        </button>
                    </>
                )}
            </div>
            <h2 className="text-2xl font-bold mb-6">Equipos Registrados</h2>
            {equipos.length === 0 ? (
                <p>No hay equipos registrados</p>
            ) : (
                <table className="table-auto w-full max-w-4xl">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Marca</th>
                            <th className="px-4 py-2">Modelo</th>
                            <th className="px-4 py-2">Descripción</th>
                            <th className="px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipos.map((equipo, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{equipo.marca}</td>
                                <td className="border px-4 py-2">{equipo.modelo}</td>
                                <td className="border px-4 py-2">{equipo.descripcion}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleModificar(index)}>
                                        <FaPencilAlt />
                                    </button>
                                    <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-2 rounded" onClick={() => handleEliminar(index)}>
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default BrandDashboard;