import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import s from './App.module.scss';
import Header from "./header/Header";
import {PATH} from "./routes/routes";
import Login from "../../s2-features/f1-auth/a1-login/Login";
import Register from "../../s2-features/f1-auth/a2-register/Register";
import Home from "../../s2-features/f2-home/Home";
import Films from "../../s2-features/f3-films/Films";
import Film from "../../s2-features/f3-films/Film/Film";
import {useDispatch} from "react-redux";
import {initializeApp} from "../m2-bll/app-reducer";
import {useAppSelector} from "../m2-bll/store";
import Loader from './common/components/c1-loader/Loader';

function App() {

    const dispatch = useDispatch<any>()
    const initialized = useAppSelector<boolean>(state => state.initialized.initialized)
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch])

    return (
        <div className={s.appContainer}>
            <Header/>
            { initialized ?
            <Routes>

                    <Route path={PATH.HOME} element={<Home/>}/>
                    <Route path={PATH.AUTH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.AUTH.REGISTER} element={<Register/>}/>
                    <Route path={PATH.HEADER_CATEGORY.FILMS.PATH} element={<Films/>}/>
                    <Route path={PATH.HEADER_CATEGORY.FILMS.FILM} element={<Film/>}/>
            </Routes>
                : <Loader/>
            }
        </div>
    );
}

export default App;
