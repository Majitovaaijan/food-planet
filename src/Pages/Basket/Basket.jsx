import React from 'react';
import s from "./Basket.module.css";
import {NavLink} from "react-router-dom";

const Basket = (props) => {
    const {card, removeItemInBasket} = props
    return (
        <div>
            {card.length > 0
            ? (
                    <div className={s.main}>
                        {card.map(elem => {
                            return (
                                <div className={s.basket}>
                                    <img src={elem.image} alt={elem.name}/>
                                    <h1>{elem.name}</h1>
                                    <p className={s.title}>{elem.title}</p>
                                    <strong>{elem.price}</strong>
                                    <button onClick={() => removeItemInBasket(elem.id)}>Удалить</button>
                                </div>
                            )
                        })}
                    </div>
            ) : (
                <div className={s.empty}>
                    <strong>
                        Корзина пуста
                    </strong>
                    <NavLink to="/">
                        <button>Добавьте что-нибудь</button>
                    </NavLink>
                </div>
                )}
        </div>
    );
};

export default Basket;