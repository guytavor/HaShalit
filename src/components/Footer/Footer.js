import React from "react";
import PropTypes from 'prop-types';
import content from '../../content';
import styles from "./Footer.module.scss";

class Footer extends React.PureComponent {
  static propTypes = {
    currentYear: PropTypes.string,
    yearsInPower: PropTypes.number,
  };

  render() {
    const { currentYear, yearsInPower } = this.props;

    return (
      <div className={styles.footer}>
        <div className={styles.yearsInPower}>{content.footer.yearsInPower.replace('${years}', yearsInPower)}</div>
        <div className={styles.year}>{currentYear}</div>
      </div>
    );
  }
}

export default Footer;
