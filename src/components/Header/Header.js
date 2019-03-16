import React from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";
import Effects from "../Effects/Effects"

class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.headerContainer}>
        <Effects />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

export default connect(mapStateToProps)(Header);

