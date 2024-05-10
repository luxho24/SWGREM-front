import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                // setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                // const { data } = await clienteAxios(
                await clienteAxios(
                    "/usuarios/register",
                    config
                ); // Por defecto es clienteAxios.get(), pero se puede simplificar de la siguiente manera: clienteAxios()
                // setAuth(data);
            } catch (error) {
                console.log(error.response.data.msg);
                // setAuth({});
            }

            // setCargando(false);
        };

        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        // setAuth({});
    };

    return (
        <AuthContext.Provider value={{ user, cerrarSesion }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };

export default AuthContext;
