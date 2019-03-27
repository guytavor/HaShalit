/* eslint-disable no-template-curly-in-string */
import React from 'react';
import content from '../../content';
import { ReactComponent as WinSvg } from '../../assets/cards/Reign_logo_win_icon.svg';
import { ReactComponent as WinText } from '../../assets/cards/Reign_logo_win_text.svg';
import styles from './Win.module.scss';

export default function({startOver, yearsInPower, gotoCredits}) {
    const titleParts = content.win.title.split('${years}');

    const onGotoCredits = (e) => {
        e.stopPropagation();
        gotoCredits();
    }

    return (
        <div className={styles.wrapper} onClick={startOver}>
            <WinSvg />
            <div style={{backgroundColor: 'white', paddingTop: 12}}>
                <WinText/>
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.pre}>{titleParts[0]}</span>
                    <span>{yearsInPower}</span>
                    <span>{titleParts[1]}</span>
                </h1>
                <p className={styles.description}>{content.win.link}</p>
                <div onClick={onGotoCredits} className={styles.gotoCredits}>{content.win.credits}</div>
            </div>
        </div>
    );
}