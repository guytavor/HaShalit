/* eslint-disable no-template-curly-in-string */
import React from "react";
import PropTypes from 'prop-types';
import content from '../../content';
import styles from "./Footer.module.scss";

class Footer extends React.PureComponent {
  static propTypes = {
    currentYear: PropTypes.number,
    yearsInPower: PropTypes.number,
  };

  render() {
    const { currentYear, yearsInPower } = this.props;

    return (
      <div className={styles.footer}>
        <div className={styles.yearsInPower}>
          <div className={styles.yearNumber}>{yearsInPower}</div>
          <div className={styles.yearText}>{content.footer.yearsInPower}</div>
        </div>
        <div className={styles.year}>{currentYear}</div>
      </div>
    );
  }
}

export default Footer;
