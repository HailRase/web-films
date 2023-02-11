import React from 'react';
import s from './Header.module.scss';

const Header = () => {
    return (
        <div className={s.headerContainer}>
            <div className={s.profileButton}>
                <span>Sign in</span>
                <span>Sign up</span>
                <span>Logout</span>
            </div>
        </div>
    );
};

export default Header;