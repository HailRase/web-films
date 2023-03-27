import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://64.226.97.69:8080/api/v1/',
});
