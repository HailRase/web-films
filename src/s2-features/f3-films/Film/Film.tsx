import React, {useEffect} from 'react';
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchMovie} from "../../../s1-main/m2-bll/movies-reducer";
import s from "./Film.module.scss";


type FilmCountriesType = {
    id: number
    name: string
}
type FilmGenresType = {
    id: number
    name: string
}


const Film = () => {

    const movies = useAppSelector(state => state?.movies?.movies)
    const status = useAppSelector(state => state?.movies?.status)
    const {id} = useParams()
    const filmId = id ? Number(id) : 0

    const dispatch = useDispatch<any>()
    useEffect(() => {
        if (movies?.length === 0 && filmId)
            dispatch(fetchMovie(filmId))
    }, [filmId, movies])
    const film = movies?.length > 5 ? movies[filmId - 1] : movies[0]

    return (
        <div className={s.filmWrapper}>
            <div className={s.filmContainer}>
                <div className={s.filmInfo}>
                    <div className={s.filmPoster}>
                        <img src={film?.posterUrl} alt=""/>
                    </div>
                    <div className={s.filmDescription}>
                        <span className={s.filmNameRu}>{film?.nameRu + " (" + film?.year + ")"}  </span>
                        <span className={s.filmNameEn}>{film?.nameEn}</span>
                        <span className={s.description}>{film?.description}</span>
                        <div className={s.aboutFilm}>
                            <span style={{fontSize: "24px"}}>О фильме:</span>
                            <div style={{display: "flex"}}>
                                <div className={s.aboutFilmTag}>
                                    <span>Год производства: </span>
                                    <span>Страна: </span>
                                    <span>Жанр: </span>
                                    {film?.slogan && <span>Слоган: </span>}
                                </div>
                                <div className={s.aboutFilmTagDescription}>
                                    <span>{film?.year}</span>
                                    <span>{film?.countries.map((c: FilmCountriesType) => c.name + " ")}</span>
                                    <span>{film?.genres.map((g: FilmGenresType) => g.name + " ")}</span>
                                    {film?.slogan && <span>{film?.slogan}</span>}
                                </div>
                            </div>

                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </div>
                <div></div>
                <div>
                </div>
            </div>


        </div>
    );
};

export default Film;