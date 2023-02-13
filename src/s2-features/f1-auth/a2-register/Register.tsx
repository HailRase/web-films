import React, {ChangeEvent, useState} from 'react';
import s from "./Register.module.scss";
import {useDispatch} from "react-redux";
import {ActionAuthType, register} from "../../../s1-main/m2-bll/auth-reducer";
import {Link} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const dispatch = useDispatch<any>()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChanePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onRegistrationHandler = () => {
        dispatch(register(email, password))
    }

    return (

        <div className={s.registerWrapper}>
            <div className={s.registerContainer}>
                <span style={{color: "white", fontSize: "24px", marginBottom: "15px"}}>Регистрация</span>
                <div className={s.emailContainer}>
                    <input type="text"
                           id='email'
                           className={s.emailInput}
                           onChange={onChangeEmailHandler}
                           placeholder='Введите email'
                           required
                    />
                    <label htmlFor="email" className={s.emailLabel}>Email</label>
                </div>
                <div className={s.passwordContainer}>
                    <input type="password"
                           id='password'
                           onChange={onChanePasswordHandler}
                           className={s.passwordInput}
                           placeholder='Введите пароль'
                           required
                    />
                    <label htmlFor="password" className={s.passwordLabel}>Password</label>
                </div>
                <span style={{color: '#818086'}}>
                    Уже есть аккаунт?
                    <Link to={'/login'} className={s.loginLink}> Войдите</Link>
                </span>
                <span className={s.loginButton} onClick={onRegistrationHandler}>Зарегистрироваться</span>
            </div>
        </div>
    );
};

export default Register;