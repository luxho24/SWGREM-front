import Logo from "../../../assets/Reparacion-de-celulares.png";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col gap-y-16 pt-20">
            {/* Sección Banner Principal */}
            <section className="flex">
                <div className="w-1/2 flex flex-col justify-center p-20 gap-y-8">
                    <h1 className="text-4xl font-semibold">
                        Tu conexión a soluciones móviles confiables con
                        SERVICELL K&D
                    </h1>
                    <h3>
                        ¿Problemas con tu teléfono? ¡Nosotros lo solucionamos!
                        En SERVICELL K&D, ofrecemos reparaciones rápidas y
                        confiables para tu dispositivo favorito. Desde pantallas
                        rotas hasta problemas de software, ¡confía en nosotros
                        para devolverle la vida a tu smartphone!
                    </h3>
                    <p className="text-center">
                        Realiza una cotización de tu celular aquí
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-indigo-400 text-white px-8 py-2 rounded-lg hover:bg-indigo-500">
                            Cotizar
                        </button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img src={Logo} alt="" />
                </div>
            </section>

            {/* Sección  */}
            <section>
                <h1 className="text-center text-4xl font-semibold mb-16">Sobre Nosotros</h1>
                <div className="flex">
                    <div className="flex flex-col items-center">
                        <img
                            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            alt=""
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem modi fuga labore molestias harum aliquam
                            rerum odio error velit quasi. Exercitationem,
                            consectetur ratione quis nobis sit explicabo ut
                            aliquid pariatur.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            alt=""
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem modi fuga labore molestias harum aliquam
                            rerum odio error velit quasi. Exercitationem,
                            consectetur ratione quis nobis sit explicabo ut
                            aliquid pariatur.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            alt=""
                            className="w-64 h-64 rounded-full object-cover"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Autem modi fuga labore molestias harum aliquam
                            rerum odio error velit quasi. Exercitationem,
                            consectetur ratione quis nobis sit explicabo ut
                            aliquid pariatur.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
