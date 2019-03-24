import React from 'react';
import content from '../../content';
import { ReactComponent as MelechLogo} from '../../assets/logo.svg';
import styles from './Intro.module.scss';

export default function({startGame}) {
    return (
        <div className={styles.wrapper} onClick={startGame}>
            <div className={styles.content}>
                <MelechLogo />
                <p className={styles.description}>
                    {content.intro.description}
                </p>
            </div>
        </div>
    );
}