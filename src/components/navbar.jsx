import {NavLink } from "react-router-dom";

const NavBar = () => {
    const btnLink = "block inline-block py-1 text-white hover:text-accent cursor-pointer mr-5"
    const activeLink = "block inline-block py-1 text-accent mr-5"
    return(
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-8 text-white ">Servicell -- KDC</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            
          <NavLink to="/" className={({isActive}) => isActive?activeLink:btnLink}> Quienes Somos </NavLink>
          <NavLink to="/productos" className={({isActive}) => isActive?activeLink:btnLink}>Productos</NavLink>
          <NavLink to="/repuestos" className={({isActive}) => isActive?activeLink:btnLink}>Repuestos</NavLink>
          <NavLink to="/marca" className={({isActive}) => isActive?activeLink:btnLink}>Marca</NavLink>
          <NavLink to="/cotizacion" className={({isActive}) => isActive?activeLink:btnLink}>Cotización</NavLink>
            
          </nav>

          <NavLink to="/login" className={({isActive}) => isActive?activeLink:btnLink}>Iniciar Sesion</NavLink>
          <NavLink to="/registrar" className={({isActive}) => isActive?activeLink:btnLink}>Registro</NavLink>

        </div>
      </header>
    )
}

export default NavBar;