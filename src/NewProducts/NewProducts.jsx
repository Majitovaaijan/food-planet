import React from 'react';
import styles from "./NewProduct.module.css"
import burger1 from "./../media/img/первый.svg"

const NewProducts = () => {
    return (
        <div>
            <div className={styles.new}>
                <div className={styles.big}>Новинки</div>
                <nav>
                    <ul>
                        <li><a href="">Пицца</a></li>
                        <li><a href="">Бургер</a></li>
                        <li><a href="">Суши</a></li>
                        <li><a href="">Роллы</a></li>
                        <li><a href="">Салаты</a></li>
                        <li><a href="">Десерты</a></li>
                        <li className={styles.drinks}><a href="">Напитки</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.burgers}>
                <div className={styles.burger}>
                    <img src={burger1}/>
                    <p className={styles.cheeseburger}>Чизбургер</p>
                    <p className={styles.composition}>Булка, котлета,сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль,
                        кетчуп, майонез</p>
                    <p className={styles.price}>200 сом</p>
                    <div className={styles.btn}>
                        <button className={styles.minus}>-</button>
                        <p className={styles.number}>1</p>
                        <button className={styles.plus}>+</button>
                    </div>
                    <button className={styles.basket}>В корзину</button>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;