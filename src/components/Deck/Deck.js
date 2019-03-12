import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../store/actions';
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
                    {card ? <Card key={card.id}
                        card={card}
                        onFlip={this._onFlip} /> : null}
                </div>
            </div>
        );
    }

    _onFlip = (dir) => {
        const { nextCard } = this.props;
        const side = dir > 0 ? 'right' : (dir < 0 ? 'left' : '');
        nextCard({ side });
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
