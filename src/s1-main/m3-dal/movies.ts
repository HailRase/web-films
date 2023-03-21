import {instance} from "./instance"

export const moviesAPI = {
    getMovies(page?:number, size?:number, order?: string) {
        /*let path = ''
        switch (path) {

        }*/
        return instance.get(`movies?page=${page}&size=${size}&order=${order}`)
    },
}