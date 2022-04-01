import React from 'react';
import logo from '../../media/icons/logo.svg'
import call from '../../media/icons/call.svg'
import basket from '../../media/icons/basket.svg'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.menu}>
            <ul>
                <div>
                    <img className={s.logo} src={logo} alt=""/>
                </div>
                <div className={s.names}>
                    <li>
                        <a className={s.main} href="">
                            Главная
                        </a>
                    </li>
                    <li>
                        <select className={s.menuHeader}>
                            <option value="0">Меню</option>
                            <option value="1">Бургер</option>
                            <option value="2">Суши</option>
                            <option value="3">Роллы</option>
                            <option value="4">Салаты</option>
                            <option value="4">Десерты</option>
                            <option value="6">Напитки</option>
                        </select>
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
                    <li className={s.call}>
                        <a href="">
                            <img src={call} alt=""/>
                            <p>+996500405988</p>
                        </a>
                    </li>
                    <li className={s.count}>
                        <a href="">
                            <img src={basket} alt=""/>
                            <p>1</p>
                        </a>
                    </li>
                </div>
            </ul>
        </header>
    );
};

export default Header;