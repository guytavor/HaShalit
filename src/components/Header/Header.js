import React from "react";
import PropTypes from 'prop-types';
import styles from "./Header.module.scss";
import Effects from "../Effects/Effects"

export default class Header extends React.PureComponent {
  static propTypes = {
    metrics: PropTypes.object,
  };

  render() {
    const { metrics } = this.props;
    
    return (
      <div className={styles.headerContainer}>
        <Effects points={metrics}/>
      </div>
    );
  }
}

