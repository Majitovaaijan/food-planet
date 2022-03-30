import React from 'react';
import styles from "./NewProduct.module.css"
import img from '../../media/second.svg'

const NewProducts = (props) => {
    return (
            <div className={styles.burgers}>
                <div className={styles.burger}>
                    <img src={props.item.image}/>
                    <p className={styles.cheeseburger}>{props.item.product}</p>
                    <p className={styles.composition}>{props.item.composition}</p>
                    <p className={styles.price}>{props.item.price}</p>
                    <div className={styles.btn}>
                        <button className={styles.minus}>-</button>
                        <p className={styles.number}>1</p>
                        <button className={styles.plus}>+</button>
                    </div>
                    <button className={styles.basket}>В корзину</button>
                </div>
        </div>
    );
};

export default NewProducts;