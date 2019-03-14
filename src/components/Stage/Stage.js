import React from "react";
import Deck from "../Deck/Deck";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  render() {
    return (
      <div className={styles.stage}>
        <Header />
        <Deck />
        <Footer />
      </div>
    );
  }
}

export default Stage;
