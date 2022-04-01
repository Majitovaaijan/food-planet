import React from 'react';
import logo from '../../media/icons/logo.svg'
import call from '../../media/icons/handset.svg'
import basket from '../../media/icons/basket.svg'
import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.menu}>
            <ul>
                <li>
                    <a href="">
                        <img src={logo} alt=""/>
                    </a>
                </li>
                <li>
                    <a className={s.main} href="">
                        Главная
                    </a>
                </li>
                <li>
                    <a href="">
                        Меню
                    </a>
                </li>
                <li>
                    <a href="">
                        Доставка
                    </a>
                </li>
                <li>
                    <a href="">
                        Контакты
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={call} alt=""/>
                        <p>+996500405988</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={basket} alt=""/>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;