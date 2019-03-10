import React from "react";
import { connect } from "react-redux";
import Deck from "../Deck/Deck";
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  render() {
    const { answers, side } = this.props;
    const answerLeft = answers && (side === 'left') ? answers["left"] : "";
    const answerRight = answers && (side === 'right') ? answers["right"] : "";

    return (
      <div className={styles.stage}>
        <div className={styles.answerContainer}>
            <h2 className={`first ${styles.answer}`}>{answerLeft}</h2>
            <h2 className={styles.answer}>{answerRight}</h2>
        </div>
        <Deck />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.currentCard ? state.currentCard.answers : null,
    side: state.currentSide
  };
};

export default connect(mapStateToProps)(Stage);
