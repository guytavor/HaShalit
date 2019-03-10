import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../store/Actions';
import Card from '../Card/Card';
import styles from './Deck.module.scss';

class Deck extends React.PureComponent {
    state = {
        gone: false,
    };

    static propTypes = {
        card: PropTypes.object,
    };

    render() {
        const { card } = this.props;

        return (
            <div className={styles.deck}>
                <div className={styles.back} />
                <div className={styles.card}>
                    <Card key={card.id}
                        imgUrl={card.img}
                        onMoveToSide={this._onMoveToSide}
                        onFlip={this._onFlip} />
                </div>
            </div>
        );
    }

    _onMoveToSide = (direction) => {
        const { currentSide, moveToSide } = this.props;
        const side = direction > 0 ? 'right' : (direction < 0 ? 'left' : null);

        if (currentSide !== side) {
            moveToSide({ side });
        }
    };

    _onFlip = () => {
        const { nextCard } = this.props;
        nextCard();
    };
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        card: state.currentCard,
        currentSide: state.currentSide,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        moveToSide: Actions.moveToSide,
        nextCard: Actions.nextCard,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
