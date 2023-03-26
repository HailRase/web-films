import {moviesAPI} from "../m3-dal/api/movies";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./store";

const SET_MOVIES = "SET_MOVIES";
const SET_MOVIE = "SET_MOVIE";
const SET_MOVIES_STATUS = "SET_MOVIES_STATUS"

type MoviesThunkAction = ThunkAction<void,
    StoreType,
    void,
    ActionMoviesType>;

type ActionMoviesType = ReturnType<typeof setMovies>
    | ReturnType<typeof setMoviesStatus>
    | ReturnType<typeof setMovie>


export type MoviesStatusType =
    | 'init'
    | 'loading'
    | "success"
    | "error"

type MovieCategoryType = {
    id: number
    name: string
}

type MovieType = {
    id: number,
    nameRu: string,
    nameEn: string,
    posterUrl: string,
    trailerUrl: string,
    description: string,
    slogan: string,
    year: string,
    movieLength: number,
    genres: [],
    countries: [],
    ratingImdb: number
    ratingKinopoisk: number
    type: MovieCategoryType
    rating: number
}
type InitialStateType = {
    movies: MovieType[]
    status: MoviesStatusType
}
const initialState: InitialStateType = {
    movies: [],
    status: "init"
}


export const moviesReducer = (state: InitialStateType = initialState, action: ActionMoviesType): typeof initialState => {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies: action.movies,
            }
        }
        case SET_MOVIES_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_MOVIE: {
            return {
                ...state,
                movies: [action.movie]

            }
        }
        default:
            return state
    }
}
export const setMovies = (movies: MovieType[]) => {
    return {
        type: SET_MOVIES,
        movies
    } as const;
};
export const setMovie = (movie: MovieType) => {
    return {
        type: SET_MOVIE,
        movie
    } as const;
};

export const setMoviesStatus = (status: MoviesStatusType) => {
    return {
        type: SET_MOVIES_STATUS,
        status
    } as const
}


export const fetchMovies = (page: number = 0, size: number = 10, order: string = ''): MoviesThunkAction => async (dispatch) => {
    dispatch(setMoviesStatus("loading"))
    try {
        const movies = await moviesAPI.getMovies(page, size, order)
        dispatch(setMovies(movies.data.items))
        dispatch(setMoviesStatus("success"))

    } catch (e: any) {
        dispatch(setMoviesStatus("error"))
    }
}
export const fetchMovie = (id: number): MoviesThunkAction => async (dispatch) => {
    dispatch(setMoviesStatus("loading"))
    try {
        const movies = await moviesAPI.getMovie(id)
        dispatch(setMovie(movies.data))
        dispatch(setMoviesStatus("success"))
    } catch (e: any) {
        dispatch(setMoviesStatus("error"))
    }
}