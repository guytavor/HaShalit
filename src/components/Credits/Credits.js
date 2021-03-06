/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { getDaysTillElection } from '../../utils/common';
import contributors from '../../contributors.json';
import content from '../../content.js';
import styles from './Credits.module.scss';

const randomFactor = Math.floor(2 * Math.random()) + 1;

function sortByLastName(a, b) {
    try {
        return Math.pow(-1, randomFactor) * a.lastName.localeCompare(b.lastName, 'he', { sensitivity: 'base' });
    } catch (e) { }

    return 0;
}

contributors.list.sort(sortByLastName);

export default function ({ startOver, share }) {
    const footerParts = content.credits.thanks.split('${split}');

    function onShare(e) {
        e.stopPropagation();
        share({});
        return false;
    }

    return (
        <div className={styles.wrapper} onClick={startOver}>
            <h1 className={styles.title}>{content.credits.title}</h1>
            {contributors.list.map((cont, id) => (
                <div className={styles.name} key={id}>{`${cont.firstName} ${cont.lastName}`}</div>
            ))}
            <div className={styles.footer}>
                {footerParts[0]}
                <a href="https://reignsgame.com" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    {footerParts[1]}</a>{footerParts[2]}
            </div>
            <div className={styles.footer}>
                <a href="mailto:melechgame2019@gmail.com" target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
                    דברו איתנו</a>
            </div>
            <p className={styles.message}>
                {content.lose.message.replace("${days}", getDaysTillElection())}
            </p>
            <button className={styles.share} onClick={onShare}>
                {content.credits.share}
            </button>
        </div>
    );
}