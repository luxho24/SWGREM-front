import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const QuotationDashboard = () => {
    // Datos de ejemplo de cotizaciones
    const [quotations, setQuotations] = useState([
        { id: 1, marca: 'Samsung', modelo: 'A32', imei: '123456789012345', estado: 'Activo', descripcion: 'Descripción 1' },
        { id: 2, marca: 'Samsung', modelo: 'A52', imei: '234567890123456', estado: 'Inactivo', descripcion: 'Descripción 2'  },
        { id: 3, marca: 'Iphone', modelo: '14 PRO',  imei: '345678901234567', estado: 'Activo', descripcion: 'Descripción 3'},
    ]);

    const [searchMarca, setSearchMarca] = useState('');
    const [searchModelo, setSearchModelo] = useState('');
    const [searchEstado, setSearchEstado] = useState('');
    const [filteredQuotations, setFilteredQuotations] = useState([]);
    const [selectedQuotationId, setSelectedQuotationId] = useState(null);
    const [selectedQuotationDetails, setSelectedQuotationDetails] = useState(null);

    useEffect(() => {
        let filtered = quotations;
        if (searchMarca) {
            filtered = filtered.filter(quotation => quotation.marca.toLowerCase().includes(searchMarca.toLowerCase()));
        }
        if (searchModelo) {
            filtered = filtered.filter(quotation => quotation.modelo.toLowerCase().includes(searchModelo.toLowerCase()));
        }
        if (searchEstado) {
            filtered = filtered.filter(quotation => quotation.estado.toLowerCase().includes(searchEstado.toLowerCase()));
        }
        setFilteredQuotations(filtered);
    }, [searchMarca, searchModelo, searchEstado, quotations]);

    const handleDeleteConfirmation = (quotationId) => {
        setSelectedQuotationId(quotationId);
    };

    const handleDelete = () => {
        const updatedQuotations = quotations.filter((quotation) => quotation.id !== selectedQuotationId);
        setQuotations(updatedQuotations);
        setSelectedQuotationId(null);
    };

    const handleViewDetails = (quotationId) => {
        const selectedQuotation = quotations.find((quotation) => quotation.id === quotationId);
        setSelectedQuotationDetails(selectedQuotation);
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Buscar por marca..."
                    value={searchMarca}
                    onChange={(e) => setSearchMarca(e.target.value)}
                    className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Buscar por modelo..."
                    value={searchModelo}
                    onChange={(e) => setSearchModelo(e.target.value)}
                    className="w-1/3 mx-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <input
                    type="text"
                    placeholder="Buscar por estado..."
                    value={searchEstado}
                    onChange={(e) => setSearchEstado(e.target.value)}
                    className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            
            <div className="mt-4 relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">ID</th>
                            <th scope="col" className="px-6 py-3">Marca</th>
                            <th scope="col" className="px-6 py-3">Modelo</th>
                            <th scope="col" className="px-6 py-3">IMEI</th>
                            <th scope="col" className="px-6 py-3">Estado</th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuotations.map((quotation, index) => (
                            <tr key={index} className="bg-white">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{quotation.id}</td>
                                <td className="px-6 py-4">{quotation.marca}</td>
                                <td className="px-6 py-4">{quotation.modelo}</td>
                                <td className="px-6 py-4">{quotation.imei}</td>
                                <td className="px-6 py-4">{quotation.estado}</td>
                                
                                <td className="px-6 py-4">
                                    <Link to={`/modify/${quotation.id}`} className="mr-2 text-blue-500">Evaluar</Link>
                                    <button onClick={() => handleViewDetails(quotation.id)} className="mr-2 text-green-500">Ver</button>
                                    <button onClick={() => handleDeleteConfirmation(quotation.id)} className="text-red-500">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal de confirmación de eliminación*/}
            {selectedQuotationId && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium text-gray-900" id="modal-title">Eliminar cotización</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">¿Está seguro de que desea eliminar esta cotización? Esta acción no se puede deshacer.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Eliminar
                                </button>
                                <button
                                    onClick={() => setSelectedQuotationId(null)}
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Modal de detalles de cotización */}
            {selectedQuotationDetails && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg
/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg font-medium text-gray-900" id="modal-title">Detalles de la cotización</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500"><strong>Marca:</strong> {selectedQuotationDetails.marca}</p>
                                            <p className="text-sm text-gray-500"><strong>Modelo:</strong> {selectedQuotationDetails.modelo}</p>
                                            <p className="text-sm text-gray-500"><strong>Estado:</strong> {selectedQuotationDetails.estado}</p>
                                            <p className="text-sm text-gray-500"><strong>Descripción:</strong> {selectedQuotationDetails.descripcion}</p>
                                            <p className="text-sm text-gray-500"><strong>IMEI:</strong> {selectedQuotationDetails.imei}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    onClick={() => setSelectedQuotationDetails(null)}
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuotationDashboard;

