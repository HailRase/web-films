import React from 'react';
import s from './Header.module.scss';
import { useNavigate} from "react-router-dom";
import {PATH} from "../routes/routes";

const Header = () => {

    let navigate = useNavigate()

    const onSignInHandler = () => {
        navigate(PATH.AUTH.LOGIN)
    }

    return (
        <div className={s.headerContainer}>
            <div className={s.profileButton}>
                <span onClick={onSignInHandler}>Sign in</span>
                <span>Sign up</span>
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Header;