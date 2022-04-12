import React from 'react';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import Pizzas from "../Pizass/Pizzas";
import {Routes, Route} from 'react-router-dom'
import Sushi from "../../Pages/Sushi/Sushi";

const MenuForPizza = ({addToBasket, removeItemInBasket}) => {
    return (
        <div>
            <PizzaMenu/>
            <Pizzas
                addToBasket={addToBasket}
                removeItemInBasket={removeItemInBasket}
            />
        </div>
    );
};

export default MenuForPizza;