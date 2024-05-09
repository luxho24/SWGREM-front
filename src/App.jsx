import Bloques from "./components/bloques";
import NavBar from "./components/navbar";
import Layaut from "./components/layaut";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./pages/inicio";
import Productos from "./pages/productos";
import Login from "./pages/auth/login";
import Registrar from "./pages/auth/register";
import Repuestos from "./pages/repuestos";
import Footer from "./components/footer";
import Marca from "./pages/marca";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/landing/home/home";
import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";
import Register from "./pages/auth/register";
import LandingLayout from "./layout/LandingLayout";
import Quotation from "./pages/landing/quotation/quotation";
import Contact from "./pages/landing/contact/contact";
import About from "./pages/landing/about/about";
import HomeDashboard from "./pages/dashboard/home-dashboard";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Autenticacion */}
                    <Route path="/" element={<AuthLayout />}>
                        <Route index path="/login" element={<Login />}></Route>
                        <Route path="/register" element={<Register />}></Route>
                    </Route>

                    {/* Rutas publicas */}
                    <Route path="/" element={<LandingLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route
                            path="/quotation"
                            element={<Quotation />}
                        ></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Route>

                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route
                            index
                            element={<HomeDashboard />}
                        ></Route>
                        {/* <Route
                            path="/productos"
                            element={<Productos />}
                        ></Route>
                        <Route
                            path="/repuestos"
                            element={<Repuestos />}
                        ></Route>
                        <Route path="/marca" element={<Marca />}></Route> */}
                    </Route>
                    {/* <Route
                                path="/productos"
                                element={<Productos></Productos>}
                            ></Route> */}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
