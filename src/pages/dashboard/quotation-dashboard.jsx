import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { getQuotations } from "../../services/quotation-service";
import ExportExcelButton from "../../shared/exportExcelButton";
import ExportPDFButton from "../../shared/exportPDFButton";
import Pagination from "../../shared/pagination";
import QuotationModalDashboard from "./modals/quotation-modal-dashboard";

const QuotationDashboard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const [quotations, setQuotations] = useState([]);

    useEffect(() => {
        // Cuando el componente carga, obtener las cotizaciones
        const fetchQuotations = async () => {
            const data = await getQuotations();
            setQuotations(data); // Actualizar el estado con las cotizaciones recibidas
        };

        fetchQuotations();
    }, []); // Ejecutar solo una vez al cargar el componente

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(quotations.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Calcular los índices del primer y último item de la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = quotations.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Gestionar Cotizaciones</h2>
            <div className="py-6">
                <div className="flex justify-between mb-6">
                    <div className="flex justify-between items-center border rounded-md p-2">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="outline-none"
                        />
                        <CiSearch />
                    </div>
                    <div className="flex gap-x-3">
                        <ExportPDFButton
                            data={quotations}
                            fileName="cotizaciones.pdf"
                        />
                        <ExportExcelButton
                            data={quotations}
                            fileName="cotizaciones.xlsx"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Marca
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Modelo
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Nombre
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Correo Electrónico
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Teléfono
                                </th>
                                <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-white border-b-2 border-gray-200"
                                >
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.brand}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.model}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.name}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.email}
                                    </td>
                                    <td className="py-2 px-4 text-sm text-gray-700">
                                        {item.phone}
                                    </td>
                                    {/* <td className="py-2 px-4 text-sm text-gray-700">
                                        <img
                                            src={item.foto}
                                            alt={item.nombre}
                                            className="h-10 w-10 object-cover"
                                        />
                                    </td> */}
                                    <td className="py-2 px-4 text-sm text-gray-700 flex gap-x-2">
                                        {/* <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                        >
                                            <MdEdit />
                                        </button>
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                        >
                                            <FaTrash />
                                        </button> */}
                                        <button
                                            type="button"
                                            className="rounded-md p-2 hover:shadow-md"
                                            onClick={() => openModal(item)}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={pageNumbers.length}
                    paginate={paginate}
                />
                <QuotationModalDashboard
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    modalContent={modalContent}
                />
            </div>
        </div>
    );
};

export default QuotationDashboard;
