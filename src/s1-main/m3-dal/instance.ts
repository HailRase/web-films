import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://movies-cloud.herokuapp.com/',
});
