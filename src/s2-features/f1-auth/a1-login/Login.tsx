import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.scss'
import {useDispatch} from "react-redux";
import {login} from "../../../s1-main/m2-bll/auth-reducer";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {PATH} from "../../../s1-main/m1-ui/routes/routes";

const Login = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const dispatch = useDispatch<any>()

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChanePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onClickSendLogin = () => {
        dispatch(login(email, password))
    }
    if (isAuth) {
        return <Navigate to={PATH.HOME}/>
    }

    return (
        <div className={s.loginWrapper}>
            <div className={s.loginContainer}>
                <span style={{color: "white", fontSize: "24px", marginBottom: "15px"}}>Вход в аккаунт</span>
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
                    Впервые на KinoLIFE?
                    <Link to={'/register'} className={s.registerLink}>Зарегистрируйтесь</Link>
                </span>
                <span className={s.loginButton} onClick={onClickSendLogin}>Вход</span>
            </div>
        </div>
    );
};

export default Login;