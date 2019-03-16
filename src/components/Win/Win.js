import React from 'react';
import styles from './Win.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <div>You Won</div>
            </div>
        </div>
    );
}