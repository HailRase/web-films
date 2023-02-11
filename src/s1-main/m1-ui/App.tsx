import React from 'react';
import {Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
import Header from "./header/Header";
import {PATH} from "./routes/routes";
import Login from "../../s2-features/f1-auth/a1-login/Login";

function App() {
  return (
    <div className={s.appContainer}>
      <Header/>
        <Routes>
            <Route path={PATH.AUTH.LOGIN} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
