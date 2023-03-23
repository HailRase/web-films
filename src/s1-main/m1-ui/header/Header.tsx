import React from 'react';
import s from './Header.module.scss';
import {useNavigate} from "react-router-dom";
import {PATH} from "../routes/routes";
import {useAppSelector} from "../../m2-bll/store";

import {faUser} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {

    const isAuth = useAppSelector<boolean>( state => state.auth.isAuth)
    let navigate = useNavigate()

    const onSignInHandler = () => {
        navigate(PATH.AUTH.LOGIN)
    }
    const onFilmsPageHandler = () => {
        navigate(PATH.HEADER_CATEGORY.FILMS.PATH)
    }

    return (
        <div className={s.headerContainer}>
            <div className={s.moviesCategory}>
                <span onClick={onFilmsPageHandler}>Фильмы</span>
                <span>Сериалы</span>
                <span>Мультфильмы</span>
                <span>TV-Шоу</span>
            </div>
            <div className={s.profileButton}>
                {isAuth ? <FontAwesomeIcon style={{color: "white"}} icon={faUser} /> : <span onClick={onSignInHandler}>Войти</span>}
            </div>
        </div>
    );
};

export default Header;