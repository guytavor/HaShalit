import React from "react";
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styles from "./Header.module.scss";
import Effects from "../Effects/Effects"

export default class Header extends React.PureComponent {
  static propTypes = {
    metrics: PropTypes.object,
    card: PropTypes.object,
    interactions: PropTypes.object,
  };

  render() {
    const { metrics } = this.props;
    const willEffect = this._getWillEffect();
    
    return (
      <div className={styles.headerContainer}>
        <Effects points={metrics} willEffect={willEffect}/>
      </div>
    );
  }

  _getWillEffect() {
    const { card, interactions } = this.props;
    return get(card, `[${interactions.moveCardSide}].effects`, {});
  }
}

