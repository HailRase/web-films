import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://64.226.97.69:433/api/v1',
});
