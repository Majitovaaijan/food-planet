// import React, {useEffect, useState} from 'react';
// import styles from "./NewProduct.module.css"
// import img from '../../media/second.svg'
// import {BASE_URL} from "../../constant";
// import MenuNewProducts from "../MenuNewProducts/MenuNewProducts";
//
// const NewProducts = () => {
//     let [link, setLink] = useState('pizza')
//     const [number, setNumber] = useState(1)
//     const [food, setFood] = useState([])
//
//    const getFood = () => {
//         const url = BASE_URL + link
//
//         fetch(url)
//             .then((response) => response.json())
//             .then((data) => setFood(data))
//        console.log("jkjlkj")
//     }
//
//     useEffect(() => {
//         getFood('pizza')
//     }, [])
//
//
//
//
//
//
//     const increment = () => {
//         setNumber(number + 1)
//     }
//     const decrement = () => {
//         setNumber(number - 1)
//     }
//
//     return (
//         <>
// <MenuNewProducts handleClick={setLink}/>
//     <div className={styles.burgers}>
//
//         {
//             food.map((item) => {
//              return   <div className={styles.burger}>
//                     <img className={styles.burgerImage} src={item.image}/>
//                     <p className={styles.cheeseburger}>{item.product}</p>
//                     <p className={styles.composition}>{item.composition}</p>
//                     <p className={styles.price}>{item.price}</p>
//                     <div className={styles.btn}>
//                         <button onClick={decrement} className={styles.minus}>-</button>
//                         <p className={styles.number}>{number}</p>
//                         <button onClick={increment} className={styles.plus}>+</button>
//                     </div>
//                     <button className={styles.basket}>В корзину</button>
//                 </div>
//             })
//         }
//
//     </div>
//             </>
// )
//     ;
// };
//
// export default NewProducts;