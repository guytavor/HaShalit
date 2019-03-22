import React from 'react';
import styles from './Win.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <h1 className={styles.title}>ניצחת!</h1>
                <p className={styles.description}>חיסלת את הדמוקרטיה</p>
            </div>
        </div>
    );
}