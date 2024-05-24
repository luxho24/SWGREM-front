import { createContext, useState, useEffect } from "react";
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
                // const { data } = await clienteAxios(
                const { data } = await clienteAxios.get(
                    "/usuarios/perfil",
                    config
                ); // Por defecto es clienteAxios.get(), pero se puede simplificar de la siguiente manera: clienteAxios()
                setAuth(data);
                // console.log(auth);
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }

            setCargando(false);
        };

        autenticarUsuario();
    }, []);

    //     useEffect(() => {
    //     console.log(auth); // Este console.log imprimirá auth cada vez que cambie
    // }, [auth]);

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
