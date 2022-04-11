import React from 'react';
import Content from "../../components/Content/Content";
import MenuNewProducts from "../../components/MenuNewProducts/MenuNewProducts";
import NewProductsItem from "../../components/NewProducts/NewProductsItem";
import MenuForPizza from "../../components/MenuForPizza/MenuForPizza";
import ChooseUs from "../../components/AboutUs/ChooseUs";
import Review from "../../components/Review/Review";

const HomePage = ({addToBasket, removeItemInBasket}) => {
    return (
        <div>
            <Content/>
            <MenuNewProducts/>
            <NewProductsItem/>
            <MenuForPizza addToBasket={addToBasket} removeItemInBasket={removeItemInBasket}/>
            <ChooseUs/>
            <Review/>
        </div>
    );
};

export default HomePage;