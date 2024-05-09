import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import BrandDashboard from "./Pages/dashboard/brand-dashboard";
import HomeDashboard from "./Pages/dashboard/home-dashboard";
import About from "./Pages/landing/about/about";
import Contact from "./Pages/landing/contact/contact";
import Home from "./Pages/landing/home/home";
import Quotation from "./Pages/landing/quotation/quotation";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import LandingLayout from "./layout/LandingLayout";

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

                    {/* Rutas Públicas */}
                    <Route path="/" element={<LandingLayout />}>
                        <Route index element={<Home />}></Route>
                        <Route
                            path="/quotation"
                            element={<Quotation />}
                        ></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Route>

                    {/* Rutas Privadas */}
                    <Route path="/dashboard" element={<DashboardLayout />}>
                        <Route index element={<HomeDashboard />}></Route>
                        {/* <Route path="/user" element={<UserDashboard />}></Route> */}
                        <Route
                            path="brand"
                            element={<BrandDashboard />}
                        ></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
