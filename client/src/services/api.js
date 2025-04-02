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