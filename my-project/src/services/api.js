import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',  // Adjust if needed for production
});

export const getLibraryData = async () => {
  try {
    const response = await api.get('/library');  // Call the /library endpoint
    return response.data;
  } catch (error) {
    console.error("Error fetching library data:", error);
    throw error;
  }
};
