import React from 'react';
import CrownOfIsrael from './CrownOfIsrael';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <div className={styles.content}>
                <h1 className={styles.title}>מלך</h1>
                <CrownOfIsrael />
                <p className={styles.description}>
                    לחץ להתחלה
                </p>
            </div>
        </div>
    );
}