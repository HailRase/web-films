import {instance} from "./instance"

export const moviesAPI = {
    getMovie(id: number) {
        return instance.get(`movies/${id}`)
    },
}