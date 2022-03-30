import React from 'react';
import styles from './MenuNewProducts.module.css'

const MenuNewProducts = () => {
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
        </div>
    );
};

export default MenuNewProducts;