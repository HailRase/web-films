import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://movies-cloud.herokuapp.com/api/v1/',
});
