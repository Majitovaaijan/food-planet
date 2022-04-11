import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Delivery from "./Pages/Delivery/Delivery";
import Contacts from "./Pages/Contacts/Contacts";
import Basket from "./Pages/Basket/Basket";
import Pizzas from "./components/Pizass/Pizzas";
import Sushi from "./components/Sushi/Sushi";

const App = () => {
    const [card, setCard] = useState([])
    const addToBasket = (item) => {
        if (card.find(i => i.id === item.id)) {
            alert('Добавлено в корзину')
        } else {
            setCard([...card, item])
        }
    }

    const removeItemInBasket = (id) => {
        setCard(prev => prev.filter(item => item.id !== id))
    }
    return (
        <BrowserRouter>
            <div className="container">
                <Header card={card}/>
                <Routes>
                    <Route path="/"
                           element={<HomePage addToBasket={addToBasket} removeItemInBasket={removeItemInBasket}/>}/>
                    <Route path="/delivery" element={<Delivery/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/basket" element={<Basket card={card} removeItemInBasket={removeItemInBasket}/>}/>
                    <Route
                        path='/pizzas'
                        element={
                            <Pizzas
                                addToBasket={addToBasket}
                                removeItemInBasket={removeItemInBasket}
                            />
                        }
                    />
                    <Route path="/sushi" element={<Sushi/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;