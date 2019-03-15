import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DeckContainer from '../DeckContainer/DeckContainer';
import { SCREENS } from '../../utils/constants';
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  render() {
    return this._getContent();
  }

  _getContent() {
    const { screen, card, interactions, selectAnswer, moveCard } = this.props;
    let content = null;

    switch(screen) {
      case SCREENS.INTRO:
      case SCREENS.GAME:
      case SCREENS.CREDITS:
      case SCREENS.WON:
      case SCREENS.LOST:
        content = (
          <div className={styles.stage}>
            <Header />
            <DeckContainer card={card} 
                           interactions={interactions}
                           onSelectAnswer={selectAnswer}
                           onMoveCard={moveCard} />
            <Footer />
          </div>
        );
        break;
    }

    return content;
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
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Stage);
