import React, {useEffect} from 'react';
import {useAppSelector} from "../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {getMovies} from "../../s1-main/m2-bll/movies-reducer";
import s from './Films.module.scss'

export const Films = () => {

    const movies = useAppSelector(state => state?.movies?.movies)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(getMovies())
    },[])

    return (
        <div className={s.moviesContainer}>
            {movies?.map(movie => <div className={s.movieContainer}>
                <img src={movie.posterUrl} sizes={"300"} alt=""/>
                <div className={s.nameRu}>{movie.nameRu}</div>
            </div>)}

        </div>
    );
};

export default Films;