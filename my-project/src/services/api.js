import axios from 'axios';

const api = axios.create({
  baseURL: "LibraryALBForBackEnd-673259919.us-east-1.elb.amazonaws.com",  // Adjust if needed for production
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
