import axios from "axios";

export const HOST_IP = "51.250.73.253"
export const API_URL = "http://" + HOST_IP + ":8080";

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
});

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        localStorage.removeItem('token');
        originalRequest._isRetry = true;
        return $api.request(originalRequest);/*
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            throw error;
        }*/
    }
    throw error;
});

export default $api;