/* eslint-disable no-template-curly-in-string */
import React from "react";
import content from "../../content";
import { ReactComponent as LoseIcon } from "../../assets/lost_loseIcon.svg";
import { ReactComponent as NewScoreIcon } from "../../assets/lost_newScoreIcon.svg";
import styles from "./Lost.module.scss";

export default function ({ startOver, highScore, score, gotoCredits, year }) {
  const newScore = score > highScore;
  const onGotoCredits = e => {
    e.stopPropagation();
    gotoCredits();
  };

  return (
    <div
      className={`${styles.wrapper} ${
        newScore ? styles.newScore : styles.lost
        }`}
      onClick={startOver}
    >
      <div className={styles.iconHeader}>
        {newScore ? <NewScoreIcon /> : <LoseIcon />}</div>
      <div className={styles.title}>
        {newScore ? content.lose.titleNewScore : content.lose.title}
      </div>
      <div className={styles.content}>
        <div className={`${styles.scoreContainer} ${styles.year}`}>
          <div className={`${styles.scoreBegin} ${styles.begin}`}>{content.lose.yearBegin}</div>
            <div className={`${styles.scoreResult} ${styles.result}`}>{year}</div>
          </div>
        <div className={styles.scoreContainer}>
          <h1 className={`${styles.scoreBegin} ${styles.begin}`}>
            {content.lose.scoreBegin}
          </h1>
          <h1 className={`${styles.scoreResult} ${styles.result}`}>
            {content.lose.scoreResult.replace("${years}", score)}
          </h1>
        </div>
        {newScore ? (
          <p className={styles.highScoreMessage}>
            {
              content.lose.highScoreMessage[
              Math.floor(Math.random() * content.lose.highScoreMessage.length)
              ]
            }
          </p>
        ) : (
            <div className={styles.highScoreContainer}>
              <h1 className={`${styles.highScoreBegin} ${styles.begin}`}>
                {content.lose.highScoreBegin}
              </h1>
              <h1 className={`${styles.highScoreResult} ${styles.result}`}>
                {content.lose.highScoreResult.replace("${years}", highScore)}
              </h1>
            </div>
          )}
        <button className={styles.startOver}>{content.lose.startOver}</button>
      </div>
      <div onClick={onGotoCredits} className={styles.gotoCredits}>
        {content.lose.credits}
      </div>
    </div>
  );
}
