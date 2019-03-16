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
import { SCREENS } from '../../utils/constants';
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  render() {
    return this._getContent();
  }

  _getContent() {
    const { screen, card, interactions, selectAnswer, moveCard, startGame, startOver } = this.props;
    let content = null;

    switch(screen) {
      case SCREENS.INTRO:
        content = <Intro startGame={startGame} />
        break;
      case SCREENS.WON:
        content = <Win startOver={startOver} />
        break;
      case SCREENS.LOST:
        content = <Lost startOver={startOver} />
        break;
      case SCREENS.GAME:
      case SCREENS.CREDITS:
        content = (
          <React.Fragment>
            <Header />
            <DeckContainer card={card} 
                           interactions={interactions}
                           onSelectAnswer={selectAnswer}
                           onMoveCard={moveCard} />
            <Footer />
          </React.Fragment>
        );
        break;
    }

    return <div className={styles.stage}>{content}</div>;
  }
}

const mapStateToProps = state => {
  return {
      screen: state.screen,
      card: state.level.card,
      interactions: state.interactions
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
