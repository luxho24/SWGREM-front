import { NavLink } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center fixed w-full">
            <NavLink to={"/"} className="flex items-center">
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
                <h1 className="text-white text-lg font-semibold">
                    Servicell -- KDC
                </h1>
            </NavLink>

            <div className="flex justify-center">
                <NavLink
                    to={"/"}
                    className="text-white hover:text-gray-300 px-4"
                >
                    Inicio
                </NavLink>
                <NavLink
                    to={"/quotation"}
                    className="text-white hover:text-gray-300 px-4"
                >
                    Cotización
                </NavLink>
                <NavLink
                    to={"/contact"}
                    className="text-white hover:text-gray-300 px-4"
                >
                    Contacto
                </NavLink>
                <NavLink
                    to={"/about"}
                    className="text-white hover:text-gray-300 px-4"
                >
                    Sobre Nosotros
                </NavLink>
                {isLoggedIn && (
                    <NavLink
                        to={"/dashboard"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Dashboard
                    </NavLink>
                )}
            </div>

            <div>
                {isLoggedIn ? (
                    <a href="#" className="text-white hover:text-gray-300 px-4">
                        Perfil del Usuario
                    </a>
                ) : (
                    <NavLink
                        to={"login"}
                        className="text-white hover:text-gray-300 px-4"
                    >
                        Acceder
                    </NavLink>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
