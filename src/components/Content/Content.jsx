import React from 'react';
import burger from '../../media/icons/hamburger.png'
import pepsi from '../../media/icons/pepsi.png'
import s from './Content.module.css'
const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.description}>
                <h1 className={s.delivery}>Доставка вкусной еды <br/> до 30 минут + напиток в подарок!</h1>
                <p className={s.delivery1}>Доставим заказ вовремя и можете рассчитывать, что <br/> еда будет доставлен всегда горячим и ароматным.</p>
                <button className={s.next}>Перейти в меню</button>
            </div>
            <div className={s.images}>
                <img src={burger} alt=""/>
                <img src={pepsi} alt=""/>
            </div>
        </div>
    );
};

export default Content;