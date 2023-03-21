import React from 'react';
import {authAPI} from "../../s1-main/m3-dal/auth";
import {moviesAPI} from "../../s1-main/m3-dal/movies";

const Home = () => {



    const onClickHandler = async () => {
        await moviesAPI.getMovies()
    }

    return (
        <div>
            <button onClick={onClickHandler}>Send</button>
        </div>
    );
};

export default Home;