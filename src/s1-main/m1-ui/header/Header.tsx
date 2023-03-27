import React, {useState} from 'react';
import s from './Header.module.scss';
import {useNavigate} from "react-router-dom";
import {PATH} from "../routes/routes";
import {useAppSelector} from "../../m2-bll/store";

import {faUser} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons/faRightFromBracket";
import {logout, UserDataType} from "../../m2-bll/auth-reducer";
import {useDispatch} from "react-redux";

const Header = () => {

    const isAuth = useAppSelector<boolean>(state => state.auth.isAuth)
    const user = useAppSelector<UserDataType | null>(state => state.auth.userData)
    const navigate = useNavigate()
    const [isDropDownVisible, setDropDownVisible] = useState<boolean>(false)
    const dispatch = useDispatch<any>()

    const onClickHandler = async () => {
        dispatch(logout())
    }
    const onSignInHandler = () => {
        navigate(PATH.AUTH.LOGIN)
    }
    const onFilmsPageHandler = () => {
        navigate(PATH.HEADER_CATEGORY.FILMS.PATH)
    }
    const toggleDropDownVisibleHandler = (value: boolean) => setDropDownVisible(value)

    return (
        <div className={s.headerContainer}>
            <div className={s.moviesCategory}>
                <span onClick={onFilmsPageHandler}>Фильмы</span>
                <span>Сериалы</span>
                <span>Мультфильмы</span>
                <span>TV-Шоу</span>
            </div>
            <div className={s.profileButton}
                 onMouseEnter={() => toggleDropDownVisibleHandler(false)}>
                {isAuth ? <FontAwesomeIcon style={{color: "white"}} icon={faUser}/> :
                    <span onClick={onSignInHandler}>Войти</span>}
            </div>
            {isAuth &&
                <div className={isDropDownVisible ? `${s.profileMenuDropDown} ${s.visible}` : s.profileMenuDropDown}
                     onMouseLeave={() => toggleDropDownVisibleHandler(true)}>
                    <span style={{color: "white"}}>{user?.email}</span>
                    <ul>
                        <li>Профиль</li>
                        <li onClick={onClickHandler}>Выйти</li>
                    </ul>
                    <FontAwesomeIcon style={{color: "white"}} icon={faRightFromBracket}/>
                    <span> Выйти</span>
                </div>}
        </div>
    );
};

export default Header;