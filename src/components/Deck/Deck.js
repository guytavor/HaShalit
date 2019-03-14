import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import Card from '../Card/Card';
import styles from './Deck.module.scss';

const DEFAULT_DIRECTION_FLIP = 1;

class Deck extends React.PureComponent {
    state = {
        prevFlipDirection: DEFAULT_DIRECTION_FLIP,
    };

    static propTypes = {
        card: PropTypes.object,
    };

    render() {
        const { prevFlipDirection } = this.state;
        const { card } = this.props;

        return (
            <div className={styles.deck}>
                <div className={styles.back} />
                <div className={styles.card}>
                    {card ? <Card key={card.id}
                        prevDir={prevFlipDirection}
                        card={card}
                        onFlip={this._onFlip} /> : null}
                </div>
            </div>
        );
    }

    _onFlip = (dir) => {
        const { nextCard } = this.props;
        const side = dir > 0 ? 'right' : (dir < 0 ? 'left' : '');
        this.setState({ prevFlipDirection: dir }, () => {
            nextCard({ side });
        });
    };
}

const mapStateToProps = state => {
    return {
        card: state.level.card,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        nextCard: actions.nextCard,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
