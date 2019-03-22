import React from 'react';
import CrownOfIsrael from './CrownOfIsrael';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <h1 className={styles.title}>המלך</h1>
            <div className={styles.content}>
                <CrownOfIsrael />
            </div>
            <p className={styles.description}>
                לחץ להתחלה
            </p>
        </div>
    );
}