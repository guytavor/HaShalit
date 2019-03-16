import React from 'react';
import PropTypes from 'prop-types';
import styles from './Effect.module.scss';

const ANIMATION_DURATION = 650;

export default class Effect extends React.PureComponent {
    static propTypes = {
        points: PropTypes.number,
        willEffect: PropTypes.number,
        children: PropTypes.node,
    };

    state = {
        currentPoints: this.props.points,
        hasDifference: 0,
    };

    componentWillUnmount() {
        this._clearTimeout();
    }

    componentDidUpdate(prevProps, prevState) {
        const difference = this.props.points - this.state.currentPoints;

        if (difference !== 0) {
            this._clearTimeout();

            this.setState({hasDifference: difference, currentPoints: this.props.points}, () => {
                this._timeout = setTimeout(() => {
                    this.setState({hasDifference: 0});
                }, ANIMATION_DURATION);
            });
        }
    }

    render() {
        const { currentPoints, hasDifference } = this.state;
        const { children } = this.props;
        const bgClass = hasDifference > 0 ? styles.grow : (hasDifference < 0 ? styles.shrink : '');

        return (
            <div className={styles.wrapper}>
                <div className={`${styles.bg} ${bgClass}`} style={{height: `${Math.round(currentPoints)}%`}}/>
                <div className={styles.icon}>{children}</div>
            </div>
        );
    }

    _clearTimeout() {
        clearTimeout(this._timeout);
    }
}