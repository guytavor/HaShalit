import React from 'react';
import content from '../../content';
import styles from './Lost.module.scss';

export default function({startOver, highScore, score}) {
    return (
        <div className={styles.wrapper} onClick={startOver}>
            <div className={styles.content}>
                <h1 className={styles.title}>{content.lose.title.replace('${years}', score)}</h1>
                {score > highScore ? <h2 className={styles.highScore}>{content.lose.highScore}</h2> : null}
                <p className={styles.description}>{content.lose.description}</p>
            </div>
        </div>
    );
}