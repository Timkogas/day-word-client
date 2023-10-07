import axios, { InternalAxiosRequestConfig } from 'axios';

export const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});


instance.interceptors.request.use((req: InternalAxiosRequestConfig) => {
    req.headers.search = window.location.search
    return req
})