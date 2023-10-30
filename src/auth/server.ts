// https://github.com/casmdz/DigitalLibrary_Render/blob/main/app/authentication/routes.py 
import axios from "axios";
// const BASE_URL = 'https://check-meowt.onrender.com'

const BASE_URL = 'https://check-meowt.onrender.com'
// const CSRF_TOKEN = 'YOUR_CSRF_TOKEN';

export const u_server_calls = {

    getUsers: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users`);
            console.log(response.data.results[0])
            return response.data;
        } catch (error) {
            throw new Error(`failed to get user. error: ${error}`)
        }
    },
    // NOTE TODO DEBUG i'm experimenting with axios 'POST' versus using /register 
    register: async (data: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, data,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true,
                }
            )
            return response.data;
        } catch (error) {
            throw error
        }
    },

    post: async (url: string, data: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/${url}`, data, {
                headers: { 'Content-Type': 'application/json' },
                // 'X-CSRFToken': CSRF_TOKEN,
            }) 
            return response.data;
        } catch (error) {
            throw error
        }
    },
    // TODO update has a token required 
    //https://github.com/casmdz/DigitalLibrary_Render/blob/233c69b782723a3186767e0925352bc81ad894bb/app/authentication/routes.py#L186 

    put: async (url: string, data: any) => {
        try {
            const response = await axios.put(`${BASE_URL}/${url}`, data)
            return response.data;
        } catch (error) {
            throw error
        }
    },

    delete: async (url: string) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${url}`)
            return response.data;
        } catch (error) {
            throw error
        }
    }

};