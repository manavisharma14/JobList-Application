import axios from 'axios';


const API_URL = "http://localhost:8000";


export const saveData = async (data) => {
    try {
        await axios.post(`${API_URL}/save`, data);
    }
    catch (error) {
        console.error("Error saving data", error);
    }
}

export const getData = async () => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    }
    catch (error) {
        console.error("Error getting data", error);
    }
}