import React from 'react';
import s from './PizzaMenu.module.css'


const Menu = () => {
    return (
        <>
            <div className={s.allMenu}>
                <div className={s.menu}><h3>Меню</h3></div>
                <div className={s.PizzaMenu}>
                    <nav>
                        <ul>
                            <li><a href="#">Пицца</a></li>
                            <li><a href="#">Бургер</a></li>
                            <li><a href="#">Суши</a></li>
                            <li><a href="#">Роллы</a></li>
                            <li><a href="#">Салаты</a></li>
                            <li><a href="#">Десерты</a></li>
                            <li><a href="#">Напитки</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Menu;