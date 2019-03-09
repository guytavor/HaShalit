import React from 'react';
import { connect } from 'react-redux';
import Deck from '../Deck/Deck';
import styles from './Stage.module.css';

class Stage extends React.PureComponent {
    render() {
        const { answers, side } = this.props;
        const answer = answers && side ? answers[side] : '';

        return (
            <div className={styles.stage}>
                <h2 className={styles.answer}>{answer}</h2>
                <Deck />
            </div>  
        );
    }
};

const mapStateToProps = state => {
    return {
        answers: state.currentCard ? state.currentCard.answers : null,
        side: state.currentSide,
    }
};

export default connect(mapStateToProps)(Stage);
