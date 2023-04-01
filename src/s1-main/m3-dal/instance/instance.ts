import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://movies-cloud.onrender.com/api/v1/',
});
