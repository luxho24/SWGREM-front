import { useState } from "react";

const Quotation = () => {
    // Estados para los campos del formulario
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [problema, setProblema] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar la cotización
        // Por ejemplo, enviar los datos a un servidor
        console.log("Formulario enviado");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-20">
            <h1 className="text-3xl font-semibold mb-4">
                Cotiza la Reparación de tu Equipo
            </h1>
            <p className="mb-8 text-center w-[30%]">
                ¿Tienes problemas con tu dispositivo? Cuéntanos qué le sucede y te
                ayudaremos a resolverlo. ¡Estamos aquí para ayudarte!
            </p>
            <hr className="w-[40%] h-[2px] bg-gray-500 mb-6" />
            <form onSubmit={handleSubmit} className="w-[40%] mx-auto">
                <div className="mb-4">
                    <label
                        htmlFor="marca"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Marca del celular
                    </label>
                    <input
                        type="text"
                        id="marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        placeholder="Ingrese la marca"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="modelo"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Modelo del celular
                    </label>
                    <input
                        type="text"
                        id="modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        placeholder="Ingrese el modelo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="problema"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Descripción del problema
                    </label>
                    <textarea
                        id="problema"
                        value={problema}
                        onChange={(e) => setProblema(e.target.value)}
                        placeholder="Describa el problema"
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                        style={{ resize: "none" }}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Nombre completo
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingrese su nombre completo"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ingrese su correo electrónico"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="telefono"
                        className="block text-gray-700 text-sm font-bold mb-2"
                    >
                        Número de teléfono
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ingrese su número de teléfono"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="w-full flex justify-center">
                    <button
                        type="submit"
                        className="w-[40%] bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                    >
                        Enviar cotización
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Quotation;
