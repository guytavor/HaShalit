import React from "react";
import { connect } from "react-redux";
import styles from "./Footer.module.scss";

class Footer extends React.PureComponent {
  render() {
    return (
      <div className={styles.footer} />
    );
  }
}

const mapStateToProps = state => {
  return {
    //
  };
};

export default connect(mapStateToProps)(Footer);
