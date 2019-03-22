import React from 'react';
import content from '../../content';
import CrownOfIsrael from './CrownOfIsrael';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <div className={styles.content}>
                <h1 className={styles.title}>{content.intro.title}</h1>
                <CrownOfIsrael />
                <p className={styles.description}>
                    {content.intro.description}
                </p>
            </div>
        </div>
    );
}