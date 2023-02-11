import React, {ChangeEvent, useState} from 'react';
import s from './Login.module.scss'

const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChanePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const onClickSendLogin = () => {

    }

    return (
        <div className={s.loginContainer}>
            <div>
                <span>Email: </span>
                <input type="text" onChange={onChangeEmailHandler}/>
            </div>
            <div>
                <span>Password:</span>
                <input type="text" onChange={onChanePasswordHandler}/>
            </div>
            <div className={s.loginButton}>Вход</div>
        </div>
    );
};

export default Login;