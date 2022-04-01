import React from "react";
import NewProductsItem from "./components/NewProducts/NewProductsItem";
import MenuNewProducts from "./components/MenuNewProducts/MenuNewProducts";
import ChooseUs from "./components/AboutUs/ChooseUs";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="App">
        <MenuNewProducts/>
        <NewProductsItem/>
        <ChooseUs/>
        <Review/>
        <Footer/>
    </div>
  );
}

export default App;
