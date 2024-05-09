import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleItemClick = (path) => {
        navigate(path);
    };

    const sidebarItems = [
        {
            itemName: "Inicio",
            path: "/dashboard",
            icon: <AiFillHome className="text-xl" />,
        },
        {
            itemName: "Marca",
            path: "brand",
            icon: <IoMdPricetags className="text-xl" />,
        },
        {
            itemName: "Contacto",
            path: "contacto",
            icon: <AiFillHome className="text-xl" />,
        },
        {
            itemName: "Sobre Nosotros",
            path: "sobre-nosotros",
            icon: <AiFillHome className="text-xl" />,
        },
        {
            itemName: "Dashboard",
            path: "dashboard",
            icon: <AiFillHome className="text-xl" />,
        },
    ];

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white ease-in duration-200 ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                {isSidebarOpen ? (
                    <NavLink to={"/"} className="p-4 flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10 text-white p-2 mr-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <h2 className="text-lg font-semibold">Servicell -- KDC</h2>
                    </NavLink>
                ) : (
                    <div className="p-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-10 h-10 text-white p-2 mr-2 bg-indigo-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                    </div>
                )}
                <ul>
                    {sidebarItems.map((item, index) => (
                        <li
                            key={index}
                            className="p-4 hover:bg-gray-700 cursor-pointer flex items-center gap-x-2"
                            onClick={() => handleItemClick(item.path)}
                        >
                            {item.icon}
                            {item.itemName}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contenido */}
            <div className="flex-grow flex flex-col">
                {/* Barra superior */}
                <div className="bg-gray-900 p-4 flex justify-between items-center">
                    <button className="text-white" onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    <h1 className="text-white text-xl font-bold">
                        Mi Dashboard
                    </h1>
                    <div></div>
                </div>

                {/* Contenido del dashboard */}
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
