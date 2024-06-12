import axios from 'axios';

export const registrarMarca = async (marca, modelo) => {
    try {
        // Realizar la solicitud POST para registrar una nueva marca
        const response = await axios.post('/api/Marcas/Registrar', { Marca: marca, Modelo: modelo });
        return response.data;
    } catch (error) {
        throw new Error('Error al registrar la marca');
    }
};

export const listarMarcas = async () => {
    try {
        // Realizar la solicitud GET para obtener todas las marcas
        const response = await axios.get('/api/Marcas/Listar');
        return response.data;
    } catch (error) {
        throw new Error('Error al obtener la lista de marcas');
    }
};

export const modificarMarca = async (id, marca, modelo) => {
    try {
        // Realizar la solicitud PUT para modificar una marca por su ID
        const response = await axios.put(`/api/Marcas/ModificarId/${id}`, { Marca: marca, Modelo: modelo });
        return response.data;
    } catch (error) {
        throw new Error('Error al modificar la marca');
    }
};

export const eliminarMarca = async (id) => {
    try {
        // Realizar la solicitud DELETE para eliminar una marca por su ID
        const response = await axios.delete(`/api/Marcas/Eliminar/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error al eliminar la marca');
    }
};
