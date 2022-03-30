import React from 'react';
import styles from "../AboutUs/AboutUs.module.css"

const AboutUs = (props) => {
    return (
        <div className={styles.all}>
            <div className={styles.about}>
                <img src={props.item.image}/>
                <h2 className={styles.fast}>{props.item.title}</h2>
                <p className={styles.aboutUs}>{props.item.subtitle}</p>
            </div>
        </div>
    );
};

export default AboutUs;