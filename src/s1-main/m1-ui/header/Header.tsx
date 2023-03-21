import React from 'react';
import s from './Header.module.scss';
import {useNavigate} from "react-router-dom";
import {PATH} from "../routes/routes";

const Header = () => {

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
                <span onClick={onSignInHandler}>Войти</span>
                {/*<span onClick={onSignUpHandler}>Зарегистрироваться</span>*/}
            </div>
        </div>
    );
};

export default Header;