import React from "react";

const DashboardLayout = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* Barra de navegación */}
            <nav className="bg-blue-500 p-4">
                <h1 className="text-white text-2xl font-semibold">Dashboard</h1>
            </nav>

            {/* Contenedor principal */}
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold mb-2">Usuarios</h2>
                        <p className="text-gray-600">Total: 100</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold mb-2">Ventas</h2>
                        <p className="text-gray-600">Total: $10,000</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold mb-2">
                            Productos
                        </h2>
                        <p className="text-gray-600">Total: 50</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-4 shadow-md rounded-md">
                        <h2 className="text-xl font-semibold mb-2">Pedidos</h2>
                        <p className="text-gray-600">Total: 20</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
