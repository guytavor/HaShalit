import React from "react";
import Deck from "../Deck/Deck";
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  render() {
    return (
      <div className={styles.stage}>
        <Deck />
      </div>
    );
  }
}

export default Stage;
