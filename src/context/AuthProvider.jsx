import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const { data } = await clienteAxios.get(
                    "/usuarios/perfil",
                    config
                );
                setAuth(data);
            } catch (error) {
                // console.log("Token inválido o expirado");
                // console.log(error.response.data.msg);
                localStorage.removeItem("token");
                setAuth(null);
            }

            setCargando(false);
        };

        autenticarUsuario();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        setAuth(null);
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, cerrarSesion, cargando }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };

export default AuthContext;
