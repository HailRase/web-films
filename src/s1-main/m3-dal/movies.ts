import {instance} from "./instance"

export const moviesAPI = {
    getMovies(page?:number, size?:number, order?: string) {
        return instance.get(`movies?page=${page}&size=${size}&order=${order}`)
    },
    getMovie(id:number) {
        return instance.get(`movies/${id}`)
    },
}