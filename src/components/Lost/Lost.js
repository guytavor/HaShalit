import React from 'react';
import content from '../../content';
import styles from './Lost.module.scss';

export default function({startOver}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <h1 className={styles.title}>{content.lose.title}</h1>
                <p className={styles.description}>{content.lose.description}</p>
            </div>
        </div>
    );
}