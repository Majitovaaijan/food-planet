import React from 'react';
import logo from "../../media/Group.svg"
import tel from "../../media/tel.svg"
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>

            <div className={styles.companyLogo}>
                <div>
                    <img className={styles.key} src={logo}/>
                </div>
                <div>
                    <h2 className={styles.food}>food planet</h2>
                    <p className={styles.planet}>Планета вкусной еды</p>
                </div>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li><a className={styles.list} href="">Главная</a></li>
                    <li><a className={styles.list} href="">Меню</a></li>
                    <li><a className={styles.list} href="">Доставка</a></li>
                    <li><a className={styles.list} href="">Контакты</a></li>
                </ul>
            </nav>
            <div className={styles.contacts}>
                <div>
                    <img className={styles.telLogo} src={tel}/>
                </div>
                <div>
                    <p className={styles.number}>+996555500500</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;