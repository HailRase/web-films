import React, {useEffect} from 'react';
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {fetchMovies} from "../../s1-main/m2-bll/movies-reducer";
import s from './Films.module.scss'
import {useNavigate} from "react-router-dom";

export const Films = () => {

    const movies = useAppSelector(state => state?.movies?.movies)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(fetchMovies())
    },[])
    const showFilmHandler = (id:number) => {
        navigate(`/films/film/${id}`)
    }

    return (
        <div className={s.moviesWrapper}>
            <div className={s.moviesContainer}>
                {movies?.map(movie => <div key={movie.id + movie.year} className={s.movieContainer}>
                    <img src={movie.posterUrl} sizes={"300"} alt="" onClick={() => showFilmHandler(movie.id)}/>
                    <div className={s.nameRu}>{movie.nameRu}</div>
                </div>)}

            </div>
        </div>
    );
};

export default Films;