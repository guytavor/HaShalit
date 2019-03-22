import React from 'react';
import CrownOfIsrael from './CrownOfIsrael';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <h1>המלך</h1>
            <div className={styles.content}>
                <CrownOfIsrael />
            </div>
            <p>
                לחץ להתחלה
            </p>
        </div>
    );
}