import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DeckContainer from '../DeckContainer/DeckContainer';
import Intro from '../Intro/Intro';
import Win from '../Win/Win';
import Lost from '../Lost/Lost';
import Credits from '../Credits/Credits';
import { SCREENS } from '../../utils/constants';
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
    render() {
        const { screen } = this.props;
        return (
            <div className={`${styles.wrapper} ${styles[screen.toLowerCase()]}`}>
                {this._getFauxHeader()}
                {this._getContent()}
                {this._getFauxHeader(true)}
            </div>
        );
    }

    _getContent() {
        const { screen, card, metrics, interactions, afterText, selectAnswer, moveCard, startGame, startOver, currentYear, yearsInPower, highScore } = this.props;
        let content = null;

        switch(screen) {
            case SCREENS.INTRO:
                content = <Intro startGame={startGame} />
                break;
            case SCREENS.WON:
                content = <Win startOver={startOver} yearsInPower={yearsInPower}/>
                break;
            case SCREENS.LOST:
                content = <Lost startOver={startOver} highScore={highScore} score={yearsInPower}/>
                break;
            case SCREENS.CREDITS:
                content = <Credits />
                break;
            case SCREENS.GAME:
                content = (
                    <React.Fragment>
                        <div className={styles.header}><Header metrics={metrics} card={card} interactions={interactions}/></div>
                        <div className={styles.content}><DeckContainer card={card} 
                                        afterText={afterText}
                                       interactions={interactions}
                                       onSelectAnswer={selectAnswer}
                                       onMoveCard={moveCard} /></div>
                        <div className={styles.footer}><Footer currentYear={currentYear} yearsInPower={yearsInPower}/></div>
                    </React.Fragment>
                );
                break;
            default:
                break;
        }

        return <div className={styles.stage}>{content}</div>;
    }

    _getFauxHeader(isFooter) {
        const { screen } = this.props;
        return screen === SCREENS.GAME ? <div className={`${styles.strip} ${isFooter ? styles.footer : ''}`} /> : null;
    }
}

const mapStateToProps = state => {
    return {
        screen: state.screen,
        highScore: state.highScore,
        card: state.level.card,
        metrics: state.level.metrics,
        interactions: state.interactions,
        currentYear: state.level.year,
        yearsInPower: state.level.yearsInPower,
        afterText: state.level.afterText,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        selectAnswer: actions.selectAnswer,
        moveCard: actions.moveCard,
        startGame: actions.startGame,
        startOver: actions.startOver,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
