import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import clienteAxios from "../config/axios";

const Marca = () => {
	const [nameMar, setNameMar] = useState("");
	const [ModelMar, setModelMar] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([nameMar, ModelMar].includes("")) {
			// setAlerta({
			//     msg: "Todos los campos son obligatorios",
			//     error: true,
			// });
			console.log("Todos los campos son obligatorios");
			return;
		}

		try {
			await clienteAxios.post("/marca/registrar", {
				nameMar,
				ModelMar,
			});
		} catch (error) {
			console.error("Error al iniciar sesión:", error);
		}
	};
	return (
		<div className="lg:w-2/6 md:w-1/2 bg-cyan-400 rounded-lg p-8 flex flex-col mx-auto mt-10 md:mt-1">

			<h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registrar Marca de Dispositivo</h2>

			<form onSubmit={handleSubmit}>
				<div className="relative mb-2">
					<label for="nombre-celular" className="leading-7 text-sm text-gray-600">Nombre del Cliente</label>
					<input type="text" id="nombre-celular" value={nameMar} onChange={(e) => setNameMar(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
				</div>

				<div className="relative mb-2">
					<label for="marca-celular" className="leading-7 text-sm text-gray-600">Marca del Telefono</label>
					<input type="text" id="marca-celular" value={ModelMar} onChange={(e) => setModelMar(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
				</div>

				<div className="flex justify-around mt-4">
					<button className="text-black bg-blue-100 border-4 border-black py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Registrar</button>

					<button className="text-black bg-yellow-100 border-4 border-black py-2 px-5 focus:outline-none hover:bg-yellow-400 rounded text">Modificar</button>

					<button className="text-black bg-orange-100 border-4 border-black py-2 px-5 focus:outline-none hover:bg-red-600 rounded text">Cancelar</button>
				</div>
			</form>

			<p className="text-xs text-gray-500 mt-3">Sugerencias y correciónes al @gerente.</p>
		</div>
	)
}

export default Marca