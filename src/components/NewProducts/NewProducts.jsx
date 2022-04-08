import React, {useState} from 'react';
import styles from "./NewProduct.module.css"
import img from '../../media/second.svg'

const NewProducts = (props) => {
    const [number, setNumber] = useState(1)
    const increment = () =>{
        setNumber(number +1)
    }
    const decrement = () =>{
        setNumber(number -1)
    }
    return (
            <div className={styles.burgers}>
                <div className={styles.burger}>
                    <img className={styles.burgerImage} src={props.item.image}/>
                    <p className={styles.cheeseburger}>{props.item.product}</p>
                    <p className={styles.composition}>{props.item.composition}</p>
                    <p className={styles.price}>{props.item.price}</p>
                    <div className={styles.btn}>
                        <button onClick={decrement} className={styles.minus}>-</button>
                        <p className={styles.number}>{number}</p>
                        <button onClick={increment} className={styles.plus}>+</button>
                    </div>
                    <button className={styles.basket}>В корзину</button>
                </div>
        </div>
    );
};

export default NewProducts;