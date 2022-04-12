import React, {useState} from 'react';
import s from './PizzaMenu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
    const pizzaMenu = [
        {
            name: 'Пицца',
            id: 0,
            url: '/pizza'
        },
        {
            name: 'Бургер',
            id: 0,
            url: "/burger"
        },
        {
            name: 'Суши',
            id: 0,
            url: "/sushi"
        },
        {
            name: 'Роллы',
            id: 0,
            url: "/roll"
        },
        {
            name: 'Салаты',
            id: 0,
            url: "/salad"
        },
        {
            name: 'Десерты',
            id: 0,
            url: "/desert"
        },
        {
            name: 'Напитки',
            id: 0,
            url: "/drinks"
        }

    ]
    return (
        <>
            <div className={s.allMenu}>
                <div className={s.menu}><h3>Меню</h3></div>
                <div className={s.PizzaMenu}>
                    <nav>
                        <ul>
                            <li className={s.lists}>
                                {pizzaMenu.map(menu => (
                                    <NavLink key={menu.id} to={menu.url}>
                                        {menu.name}
                                    </NavLink>
                                ))}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Menu;