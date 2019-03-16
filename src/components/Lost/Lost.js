import React from 'react';
import styles from './Lost.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <div>You Lost</div>
            </div>
        </div>
    );
}