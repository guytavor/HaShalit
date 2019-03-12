import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import actions from '../../store/actions';
import Deck from "../Deck/Deck";
import styles from "./Stage.module.scss";

class Stage extends React.PureComponent {
  componentWillMount() {
    const { init } = this.props;
    init();
  }

  render() {
    return (
      <div className={styles.stage}>
        <Deck />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    init: actions.init,
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Stage);
