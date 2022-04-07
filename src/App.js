import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import NewProductsItem from "./components/NewProducts/NewProductsItem";
import MenuNewProducts from "./components/MenuNewProducts/MenuNewProducts";
import MenuForPizza from "./components/MenuForPizza/MenuForPizza";
import ChooseUs from "./components/AboutUs/ChooseUs";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import "./App.css"


const App = () => {
    return (
        <>
            <div className="container">
                <Header/>
                <Content/>
                <MenuNewProducts/>
                <NewProductsItem/>
                <MenuForPizza/>
                <ChooseUs/>
                <Review/>
            </div>
            <Footer/>
        </>
    );
}

export default App;