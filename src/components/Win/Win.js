/* eslint-disable no-template-curly-in-string */
import React from 'react';
import content from '../../content';
import { ReactComponent as WinSvgText } from '../../assets/cards/win.svg';
import { ReactComponent as WinSvg } from "../../assets/lost_newScoreIcon.svg";
import styles from './Win.module.scss';

export default function({gotoCredits, yearsInPower, year}) {
    return (
        <div className={styles.wrapper} onClick={gotoCredits}>
            <WinSvg />
            <WinSvgText />
            <div className={styles.content}>
                <div className={styles.title}>
                    <div className={styles.textPart}>
                        <div>{content.lose.yearBegin}</div>
                        <div>&nbsp;{year}</div>
                    </div>
                    <div className={styles.textPart}>
                        <div>{content.lose.scoreBegin}</div>
                        <div>&nbsp;{content.lose.scoreResult.replace('${years}', yearsInPower)}</div>
                    </div>
                </div>
                <div className={styles.subtitle}>
                    <div className={styles.textPart}>
                        <div>{content.win.text1Begin}</div>
                        <div>&nbsp;{content.win.text1End}</div>
                    </div>
                    <div className={styles.textPart}>
                        <div>{content.win.text2Begin}</div>
                        <div>&nbsp;{content.win.text2End}</div>
                    </div>
                </div>
                <div className={styles.endTitle}>{content.win.hooray}</div>
                <button className={styles.startOver}>{content.win.startOver}</button>
                <div className={styles.gotoCredits}>
                    {content.win.credits}
                </div>
            </div>
        </div>
    );
}