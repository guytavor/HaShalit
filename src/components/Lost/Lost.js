import React from 'react';
import styles from './Lost.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <h1 className={styles.title}>הפסדת</h1>
                <p className={styles.description}>לחץ על מנת לנסות שוב</p>
            </div>
        </div>
    );
}