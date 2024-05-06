import Bloques from "./components/bloques";
import NavBar from "./components/navbar";
import Layaut from "./components/layaut";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Pages/inicio";
import Productos from "./Pages/productos";
import Login from "./Pages/login";
import Registrar from "./Pages/registrar";
import Repuestos from "./Pages/repuestos";
import Footer from "./components/footer";
import Marca from "./Pages/marca";
import { AuthProvider } from './context/AuthProvider';

function App() {
    return (
        <>
            <AuthProvider>
                <div className="bg-primary min-h-screen">
                    <NavBar />
                    <Layaut>
                        <Routes>
                            <Route path="/" element={<Inicio></Inicio>}></Route>
                            <Route
                                path="/productos"
                                element={<Productos></Productos>}
                            ></Route>
                            <Route
                                path="/login"
                                element={<Login></Login>}
                            ></Route>
                            <Route
                                path="/registrar"
                                element={<Registrar></Registrar>}
                            ></Route>
                        </Routes>
                    </Layaut>
                    <Footer />
                </div>
            </AuthProvider>
        </>
    );
}

export default App;
