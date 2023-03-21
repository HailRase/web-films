import React from 'react';
import {Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import Header from "./header/Header";
import {PATH} from "./routes/routes";
import Login from "../../s2-features/f1-auth/a1-login/Login";
import Register from "../../s2-features/f1-auth/a2-register/Register";
import Home from "../../s2-features/f2-home/Home";
import Films from "../../s2-features/f3-films/Films";

function App() {
  return (
    <div className={s.appContainer}>
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path={PATH.AUTH.LOGIN} element={<Login/>}/>
            <Route path={PATH.AUTH.REGISTER} element={<Register/>}/>
            <Route path={PATH.HEADER_CATEGORY.FILMS} element={<Films/>}/>
        </Routes>
    </div>
  );
}

export default App;
