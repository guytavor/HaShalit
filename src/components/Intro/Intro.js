import React from 'react';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <div className={styles.content}>
                <div>Welcome to the game</div>
                <div>click to start</div>
            </div>
        </div>
    );
}