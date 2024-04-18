import React, { useState } from 'react';

const Repuestos = () => {
    const [repuesto, setRepuesto] = useState([]);
    const [idRepuesto, setIdProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [idMarca, setIdMarca] = useState('');

    const handleRegistrar = () => {
        setRepuesto([...repuesto, { idProducto: idRepuesto, descripcion, precio, cantidad, idMarca }]);
        setIdProducto('');
        setDescripcion('');
        setPrecio('');
        setCantidad('');
        setIdMarca('');
    };

    const handleModificar = (index) => {
        const nuevaDescripcion = prompt('Ingrese la nueva descripción:');
        const nuevoPrecio = prompt('Ingrese el nuevo precio:');
        const nuevaCantidad = prompt('Ingrese la nueva cantidad:');
        const nuevoIdMarca = prompt('Ingrese el nuevo ID de la Marca:');
        if (nuevaDescripcion && nuevoPrecio && nuevaCantidad && nuevoIdMarca) {
            const repuestosModificados = [...repuesto];
            repuestosModificados[index].descripcion = nuevaDescripcion;
            repuestosModificados[index].precio = nuevoPrecio;
            repuestosModificados[index].cantidad = nuevaCantidad;
            repuestosModificados[index].idMarca = nuevoIdMarca;
            setRepuesto(repuestosModificados);
        }
    };

    const handleEliminar = (index) => {
        const nuevosRepuestos = [...repuesto];
        nuevosRepuestos.splice(index, 1);
        setRepuesto(nuevosRepuestos);
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
        const value = e.target.value.replace(/\D/, ''); // Remover todo lo que no sea un dígito
        setIdMarca(value);
    };

    return (
            <div className=" bg-white mx-auto rounded-lg px-8 pt-10 flex ">
                <div className="mb-8 md:mb-0 md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Repuesto</h2>
                    <div className="mb-4">
                        <label htmlFor="idProducto" className="block font-medium mb-2">
                            ID del Repuesto
                        </label>
                        <input
                            type="text"
                            id="idProducto"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
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
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
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
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
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
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Ingrese la cantidad"
                            value={cantidad}
                            onChange={handleChangeCantidad}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="idMarca" className="block font-medium mb-2">
                            ID de la Marca
                        </label>
                        <input
                            type="text"
                            id="idMarca"
                            className="w-full border border-gray-300 rounded-md py-2 px-4"
                            placeholder="Ingrese el ID de la Marca"
                            value={idMarca}
                            onChange={handleChangeIdMarca}
                        />
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
                            onClick={() => setRepuesto([])}
                        >
                            Eliminar Todos
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 md:ml-8">
                    <h2 className="text-2xl font-bold mb-6">Repuestos Registrados</h2>
                    {repuesto.length === 0 ? (
                        <p>No hay repuestos registrados</p>
                    ) : (
                        <ul>
                            {repuesto.map((repuesto, index) => (
                                <li key={index} className="flex justify-between items-center mb-2">
                                    <span>{repuesto.descripcion} - Precio: {repuesto.precio} - Cantidad: {repuesto.cantidad} - ID de la Marca: {repuesto.idMarca}</span>
                                    <div>
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                                            onClick={() => handleModificar(index)}
                                        >
                                            Modificar
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
    );
};

export default Repuestos;