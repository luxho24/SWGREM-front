const Registrar = () => {
  // Generar opciones de día, mes y año
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  return (
      <div className="bg-gradient-to-b from-gray-300 to-gray-100">
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap items-center object-cover h-300 w-full" style={{backgroundImage: 'url("./src/images/Fondo.jpg")'} }>
             
                  <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                      <h1 className="title-font font-medium text-5xl text-black-900">"Reparaciones móviles, soluciones ágiles para tu tecnología en movimiento."</h1>
                      <p className="leading-relaxed mt-4 text-lg">Averigua con tan solo un click</p>

                  </div>
                  <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
                      <div className="relative mb-4">
                          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Nombres</label>
                          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Apellidos</label>
                          <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label className="leading-7 text-sm text-gray-600">Sexo</label>
                          <div className="flex items-center mt-1">
                              <input type="radio" id="masculino" name="sexo" value="masculino" className="mr-2" />
                              <label htmlFor="masculino" className="text-sm text-gray-700">Masculino</label>
                          </div>
                          <div className="flex items-center mt-1">
                              <input type="radio" id="femenino" name="sexo" value="femenino" className="mr-2" />
                              <label htmlFor="femenino" className="text-sm text-gray-700">Femenino</label>
                          </div>
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="birthdate" className="leading-7 text-sm text-gray-600">Fecha de Nacimiento</label>
                          <div className="flex">
                              <select id="day" name="day" className="w-1/3 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                  {days.map(day => (
                                      <option key={day} value={day}>{day}</option>
                                  ))}
                              </select>
                              <select id="month" name="month" className="w-1/3 mr-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                  {months.map((month, index) => (
                                      <option key={index} value={index + 1}>{month}</option>
                                  ))}
                              </select>
                              <select id="year" name="year" className="w-1/3 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                  {years.map(year => (
                                      <option key={year} value={year}>{year}</option>
                                  ))}
                              </select>
                          </div>
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="age-phone" className="leading-7 text-sm text-gray-600">Teléfono</label>
                          <input type="text" id="age-phone" name="age-phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Contraseña</label>
                          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="relative mb-4">
                          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Confirma contraseña</label>
                          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                      <div className="flex justify-between">
                          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-bold">Regresar</button>
                          <button className="text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg font-bold">Registrar</button>
                          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg font-bold">¿Ya cuenta con una cuenta?</button>
                      </div>
                      <p className="text-lg font-bold text-gray-900 mt-3">"La solución de tus equipos a un modico precio"</p>
                  </div>


              </div>
          </section>
      </div>
  )
}

export default Registrar