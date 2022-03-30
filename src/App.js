import React from "react";
import NewProductsItem from "./components/NewProducts/NewProductsItem";
import MenuNewProducts from "./components/MenuNewProducts/MenuNewProducts";
import ChooseUs from "./components/AboutUs/ChooseUs";

const App = () => {
  return (
    <div className="App">
        <MenuNewProducts/>
        <NewProductsItem/>
        <ChooseUs/>
    </div>
  );
}

export default App;
