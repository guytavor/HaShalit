import React from "react";
import { connect } from "react-redux";
import styles from "./Header.module.scss";

class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.header} />
    );
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

export default connect(mapStateToProps)(Header);

