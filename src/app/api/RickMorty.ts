import api from "../lib/axios";

export const getCharacters = async (Id : number) => {
  try {
    const response = await api.get('/'+Id);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}