import React from 'react';
import s from './App.module.scss';
import Header from "./header/Header";

function App() {
  return (
    <div className={s.appContainer}>
      <Header/>
    </div>
  );
}

export default App;
