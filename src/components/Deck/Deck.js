import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './Deck.module.scss';

const DEFAULT_DIRECTION_FLIP = 1;

export default class Deck extends React.PureComponent {
    state = {
        prevFlipDirection: DEFAULT_DIRECTION_FLIP,
    };

    static propTypes = {
        card: PropTypes.object,
        afterText: PropTypes.string,
        interactions: PropTypes.object, 
        onSelectAnswer: PropTypes.func, 
        onMoveCard: PropTypes.func
    };

    render() {
        const { prevFlipDirection } = this.state;
        const { card, interactions, onMoveCard, afterText } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.deck}>
                    <div className={styles.back} />
                    <div className={styles.card}>
                        {card ? <Card key={card.id}
                            prevDir={prevFlipDirection}
                            card={card}
                            afterText={afterText}
                            cardSide={interactions.moveCardSide}
                            onCardMove={onMoveCard}
                            onSelectAnswer={this._onSelectAnswer} /> : null}
                    </div>
                </div>
            </div>
        );
    }

    _onSelectAnswer = (dir) => {
        const { onSelectAnswer } = this.props;
        const side = dir > 0 ? 'right' : (dir < 0 ? 'left' : '');
        this.setState({ prevFlipDirection: dir }, () => {
            onSelectAnswer({ side });
        });
    };
}
