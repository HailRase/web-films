import React from 'react';
import {useDispatch} from "react-redux";
import {logout} from "../../s1-main/m2-bll/auth-reducer";

const Home = () => {


    const dispatch = useDispatch<any>()
    const onClickHandler = async () => {
        dispatch(logout())
    }

    return (
        <div>
            <button onClick={onClickHandler}>Send</button>
        </div>
    );
};

export default Home;