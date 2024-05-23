import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import BrandDashboard from "./pages/dashboard/brand-dashboard";
import HomeDashboard from "./pages/dashboard/home-dashboard";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";
import Home from "./pages/landing/home/home";
import Quotation from "./pages/landing/quotation/quotation";
import { AuthProvider } from "./context/AuthProvider";
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import LandingLayout from "./layout/LandingLayout";
import SparePartsDashboard from "./pages/dashboard/spare-parts-dashboard";
import QuotationDashboard from "./pages/dashboard/quotation-dashboard";

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
                        <Route
                            path="quotation"
                            element={<QuotationDashboard />}
                        ></Route>
                        <Route
                            path="spare-parts"
                            element={<SparePartsDashboard />}
                        ></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
