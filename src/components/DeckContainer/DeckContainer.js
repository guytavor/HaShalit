import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Deck from '../Deck/Deck';
import styles from './DeckContainer.module.scss';

export default class DeckContainer extends React.PureComponent {
    static propTypes = {
        card: PropTypes.object,
        interactions: PropTypes.object,
        onSelectAnswer: PropTypes.func,
        onMoveCard: PropTypes.func,
    };

    render() {
        const description = this._getDescription();
        const name = this._getName();

        return (
            <div className={styles.wrapper}>
                {description}
                <Deck {...this.props} />
                {name}
            </div>
        );
    }

    _getDescription() {
        const { card } = this.props;
        return (
            <div className={styles.description}>{get(card, 'text', '')}</div>
        );
    }

    _getName() {
        const { card } = this.props;
        return (
            <div className={styles.name}>{get(card, 'character.name', get(card, 'name', ''))}</div>
        );
    }
}