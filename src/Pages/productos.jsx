const Productos = () => {
  return (
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="float-left " src="src/imagenes/s9p.jpg"/>
          <div className="lg:h-48 md:h-36 w-full object-cover object-center" src="s9p.jpg" alt="blog"></div>
          <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Pantallas</h1>
            <p className="leading-relaxed mb-3">Amplia Variedad de modelos al mejor precio.</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Modulos de Carga</h1>
            <p className="leading-relaxed mb-3">Tipo C ó Universal.</p>
          </div>
          <img className="float-left " src="src/imagenes/placacarga.jpg"/>
        </div>
      </div>

      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Baterias</h1>
            <p className="leading-relaxed mb-3">Baterias de 2000mA a 6000mA.</p>
          </div>
          <img className="float-left " src="src/imagenes/bateria.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default Productos