import React from 'react';
import contributors from '../../contributors.json';
import styles from './Credits.module.scss';
import content from '../../content.js';

function sortByLastName (a, b) {
    try {
        return -1 * a.lastName.localeCompare(b.lastName, 'he', {sensitivity: 'base'});
    } catch(e) {}

    return 0;
}

contributors.list.sort(sortByLastName);

export default function () {
    const footerParts = content.credits.thanks.split('${split}');

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{content.credits.title}</h1>
            {contributors.list.map((cont, id) => (
                <div className={styles.name} key={id}>{`${cont.firstName} ${cont.lastName}`}</div>
            ))}
            <div className={styles.footer}>
                {footerParts[0]}
                <a href="https://reignsgame.com" target="_blank" rel="noopener noreferrer">
                {footerParts[1]}</a>{footerParts[2]}
            </div>
        </div>
    );
}