const Cotizacion = () => {
  return (
    <section>
      <div class="flex flex-col items-center justify-center px-6 py-8 lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Registra tu cotización...
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="marca"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Marca
                </label>
                <select
                  id="marca"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Seleccionar</option>
                  <option value="US">Samsung</option>
                  <option value="CA">Iphone</option>
                  <option value="FR">Redmi</option>
                  <option value="DE">Xiomi</option>
                </select>
              </div>
              <div>
                <label
                  for="modelo"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Modelo
                </label>
                <select
                  id="modelo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Seleccionar</option>
                  <option value="US">A50</option>
                  <option value="CA">A70</option>
                  <option value="FR">A80</option>
                  <option value="DE">S23</option>
                </select>
              </div>
              <div>
                {" "}
                <label
                  for="problema"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Ingresa aquí tu consulta...
                </label>
                <input
                  type="text"
                  placeholder=" "
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-20 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>

              <div class="flex">   
              </div>
              <button
                type="submit"
                class=" bg-cyan-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Enviar
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cotizacion;
