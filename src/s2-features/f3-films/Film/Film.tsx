import React, {useEffect} from 'react';
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {useDispatch} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchMovie} from "../../../s1-main/m2-bll/movies-reducer";

const Film = () => {

    const movies = useAppSelector(state => state?.movies?.movies)
    const id = useParams()
    debugger
    const dispatch = useDispatch<any>()
    useEffect(() => {
        if (id)
        dispatch(fetchMovie(Number(id)))
    },[])


    return (
        <div>
            <img src={movies[0].posterUrl} alt=""/>

        </div>
    );
};

export default Film;