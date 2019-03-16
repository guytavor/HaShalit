import React from 'react';
import PropTypes from 'prop-types';
import styles from './Effect.module.scss';

export default class Effect extends React.PureComponent {
    static propTypes = {
        points: PropTypes.number,
        willEffect: PropTypes.number,
        children: PropTypes.node,
    };

    state = {
        currentPoints: this.props.points,
    };

    render() {
        const { children } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.bg} />
                <div className={styles.icon}>{children}</div>
            </div>
        );
    }
}