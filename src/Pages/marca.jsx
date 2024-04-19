const Marca = () => {
  return (

    <div className=" mx-auto lg:w-2/6 md:w-1/2 bg-blue-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-1">
     <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Samsung</h2>

      <div className="relative mb-2">
       <label htmlFor="marca-celular" className="leading-7 text-sm text-gray-600">Marca del Telefono</label>
       <input type="text" id="marca-celular" name="marca-celular" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="relative mb-2">
       <label htmlFor="marca-celular" className="leading-7 text-sm text-gray-600">Modelo del Telefono</label>
       <input type="text" id="marca-celular" name="marca-celular" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <div className="flex justify-around mt-4">
        <button className="text-black bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-60 rounded text">Registrar</button>

        <button className="text-black bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-60 rounded text">Modificar</button>
        
        <button className="text-black bg-orange-400 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-60 rounded text">Cancelar</button>
     </div>

      <div className="flex justify-center mt-5">
      <input type="text" id="marca-celular" name="marca-celular" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <p className="text-xs text-gray-500 mt-3">Sugerencias y correciónes al @gerente.</p>
    </div>
    
    )
  }
  
  export default Marca;
  