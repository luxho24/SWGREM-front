import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import clienteAxios from "../config/axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([email, password].includes("")) {
            // setAlerta({
            //     msg: "Todos los campos son obligatorios",
            //     error: true,
            // });
            console.log("Todos los campos son obligatorios");
            return;
        }

        try {
            const {data} = await clienteAxios.post("/usuarios/login", {
                email,
                password,
            });
            console.log(data);
            localStorage.setItem("token", data.token); // Almacena el token en localStorage
            // Redirecciona a una ruta protegida o a la página de inicio, por ejemplo
            navigate("/");
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900">
                            Slow-carb next level shoindcgoitch ethical
                            authentic, poko scenester
                        </h1>
                        <p className="leading-relaxed mt-4">
                            Poke slow-carb mixtape knausgaard, typewriter street
                            art gentrify hammock starladder roathse. Craies
                            vegan tousled etsy austin.
                        </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            Iniciar Sesión
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label
                                    for="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    for="password"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Button
                            </button>
                        </form>
                        <p className="text-sm text-gray-500 mt-3">
                            ¿No tienes una cuenta?{" "}
                            <Link
                                to="/registrar"
                                className="hover:text-indigo-400"
                            >
                                Crea una cuenta
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
