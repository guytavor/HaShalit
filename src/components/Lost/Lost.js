/* eslint-disable no-template-curly-in-string */
import React from "react";
import content from "../../content";
import styles from "./Lost.module.scss";
import { ReactComponent as LoseIcon} from '../../assets/lost_loseIcon.svg';
import { ReactComponent as NewScoreIcon} from '../../assets/lost_newScoreIcon.svg';

function getDaysTillElection() {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var electionDate = new Date(new Date().getFullYear(),3,9);
    var playingDate = new Date();
    return Math.round(Math.abs((playingDate.getTime() - electionDate.getTime())/(oneDay)));
}

export default function({ startOver, highScore, score }) {
  const newScore = (score > highScore);
    return (
        <div className={`${styles.wrapper} ${newScore ? styles.newScore : styles.lost}`} onClick={startOver}>
            {newScore ? <NewScoreIcon /> : <LoseIcon />}
            <div className={styles.title}>{newScore? content.lose.titleNewScore : content.lose.title}</div>
            <div className={styles.content}>
            <div className={styles.scoreContainer}>
                <h1 className={`${styles.scoreBegin} ${styles.begin}`}>{content.lose.scoreBegin}</h1>
                <h1 className={`${styles.scoreResult} ${styles.result}`}>
                    {content.lose.scoreResult.replace("${years}", score)}
                </h1>
            </div>
            {newScore ? 
            <p className={styles.highScoreMessage}>{content.lose.highScoreMessage[Math.floor(Math.random()*content.lose.highScoreMessage.length)]}</p>
            :
            <div className={styles.highScoreContainer}>
                <h1 className={`${styles.highScoreBegin} ${styles.begin}`}>{content.lose.highScoreBegin}</h1>
                <h1 className={`${styles.highScoreResult} ${styles.result}`}>
                    {content.lose.highScoreResult.replace("${years}", score)}
                </h1>
            </div>
            }
            <p className={styles.startOver}>{content.lose.startOver}</p>
            <p className={styles.message}>{content.lose.message.replace("${days}", getDaysTillElection())}</p>
            </div>
        </div>
    );
}
