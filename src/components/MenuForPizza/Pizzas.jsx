import React, {useState} from 'react';
import {pizzas} from '../../constant/index';
import s from './Pizzas.module.css'



const Pizzas = () => {
    const [count, setCount] = useState(0)
    const addPizza = () => {
        setCount(count + 1)
    }
    const removePizza = () => {
        setCount(count - 1)
    }
    return (
        <div className={s.pizzas}>
            <div className={s.mainText}>
                <p>Сортировать по:</p>
                <select>
                    <option value="">По умолчанию</option>
                </select>
            </div>
            <div className={s.eightPizzas}>
                {pizzas.map(item => (
                    <div
                        key={item.id}
                        className={s.mapPizza}
                    >
                        <div>
                            <div className={s.imgPizza}>
                                <img src={item.image} alt=""/>
                            </div>
                            <div className={s.textPizza}>
                                <h1>{item.name}</h1>
                                <p className={s.title}>{item.title}</p>
                                <h3>{item.price}</h3>
                                <div className={s.count}>
                                    <button onClick={removePizza}>-</button>
                                    <p>{count}</p>
                                    <button onClick={addPizza}>+</button>
                                </div>
                                <button className={s.btn}>{item.btn}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className={s.show}>Показать еще</button>
        </div>
    );
};

export default Pizzas;