import React from 'react';
import content from '../../content';
import styles from './Win.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <h1 className={styles.title}>{content.win.title}</h1>
                <p className={styles.description}>{content.win.description}</p>
            </div>
        </div>
    );
}