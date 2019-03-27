import React from 'react';
import content from '../../content';
import { ReactComponent as WinSvg } from '../../assets/cards/win.svg';
import styles from './Win.module.scss';

export default function({gotoCredits}) {
    return (
        <div className={styles.wrapper} onClick={gotoCredits}>
            <WinSvg />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {content.win.title}
                </h1>
                <h2 className={styles.subtitle}>{content.win.subtitle}</h2>
            </div>
        </div>
    );
}