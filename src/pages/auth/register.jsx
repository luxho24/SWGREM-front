import { Link, useNavigate } from "react-router-dom";
import clienteAxios from "../../config/axios";
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState(""); // Estado para los apellidos
    const [sex, setSex] = useState(""); // Estado para el sexo
    const [birthdate, setBirthdate] = useState(""); // Estado para el día de nacimiento
    const [phone, setPhone] = useState(""); // Estado para el teléfono
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            [
                name,
                lastname,
                sex,
                birthdate,
                phone,
                email,
                password,
                confirmPassword,
            ].includes("")
        ) {
            console.log("Hay campos vacios");
            return;
        }

        if (password !== confirmPassword) {
            console.log("Los Password no son iguales");
            return;
        }

        if (password.length < 6) {
            console.log("El Password es muy corto, agrega minimo 6 caracteres");
            return;
        }

        //Crear el usuario en la api
        try {
            // const url = '/veterinarios';
            await clienteAxios.post("/usuarios/register", {
                name,
                lastname,
                sex,
                birthdate,
                phone,
                email,
                password,
                confirmPassword,
            });
            navigate("/");
            console.log("Creado correctamente");
        } catch (error) {
            console.log("error: ", error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-300 to-gray-100">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center object-cover h-300 w-full">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-5xl text-black-900">
                            "Reparaciones móviles, soluciones ágiles para tu
                            tecnología en movimiento."
                        </h1>
                        <p className="leading-relaxed mt-4 text-lg">
                            Averigua con tan solo un click
                        </p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 shadow-lg">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                            Crear Cuenta
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="full-name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="full-name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={lastname}
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative flex gap-4 mb-4">
                                <label className="leading-7 text-sm text-gray-600">
                                    Sexo
                                </label>
                                <div className="flex justify-around w-full">
                                    <div className="flex items-center mt-1">
                                        <input
                                            type="radio"
                                            id="masculino"
                                            name="sexo"
                                            value="masculino"
                                            checked={sex === "masculino"}
                                            onChange={() => setSex("masculino")}
                                            className="mr-2 cursor-pointer"
                                        />
                                        <label
                                            htmlFor="masculino"
                                            className="text-sm text-gray-700"
                                        >
                                            Masculino
                                        </label>
                                    </div>
                                    <div className="flex items-center mt-1">
                                        <input
                                            type="radio"
                                            id="femenino"
                                            name="sexo"
                                            value="femenino"
                                            checked={sex === "femenino"}
                                            onChange={() => setSex("femenino")}
                                            className="mr-2 cursor-pointer"
                                        />
                                        <label
                                            htmlFor="femenino"
                                            className="text-sm text-gray-700"
                                        >
                                            Femenino
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="full-name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    value={birthdate}
                                    onChange={(e) =>
                                        setBirthdate(e.target.value)
                                    }
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="age-phone"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Teléfono
                                </label>
                                <input
                                    type="number"
                                    id="age-phone"
                                    name="age-phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
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
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="relative mb-4">
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Confirma contraseña
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg font-bold mt-8">
                                Registrar
                            </button>
                        </form>
                        <p className="text-sm text-center text-gray-900 mt-5">
                            ¿Ya tienes una cuenta?{" "}
                            <Link to="/login" className="hover:text-indigo-400">
                                Inicia Sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register