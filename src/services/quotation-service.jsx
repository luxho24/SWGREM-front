import clienteAxios from "../config/axios";

export const createQuotation = async (formData) => {
    try {
      const response = await clienteAxios.post("/cotizaciones/register", formData);
      return response.data; 
    } catch (error) {
      if (error.response) {
        console.error("Error de respuesta:", error.response.data);
      } else if (error.request) {
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        console.error("Error al procesar la solicitud:", error.message);
      }
      throw error; 
    }
  };

export const getQuotations = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        console.error("No token found");
        return;
    }

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const { data } = await clienteAxios.get("/cotizaciones/getCotizaciones", config);
        return data;
    } catch (error) {
        console.error("Error getting quotations", error);
    }
};

export const getQuotation = async (id) => {
    try {
        const { data } = await clienteAxios.get(`/cotizaciones/${id}`);
        return data;
    } catch (error) {
        console.error("Error getting quotation", error);
    }
};

export const updateQuotation = async (id, form) => {
    try {
        const { data } = await clienteAxios.put(`/cotizaciones/${id}`, form);
        return data;
    } catch (error) {
        console.error("Error updating quotation", error);
    }
};

export const deleteQuotation = async (id) => {
    try {
        const { data } = await clienteAxios.delete(`/cotizaciones/${id}`);
        return data;
    } catch (error) {
        console.error("Error deleting quotation", error);
    }
};


// ----------------------------------------------
// Con FETCH

// export const createQuotation = async (quotation) => {
//     try {
//         const response = await fetch(`${API_URL}/cotizaciones`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(quotation),
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error creating quotation", error);
//     }
// };
