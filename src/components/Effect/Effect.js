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

    static defaultProps = {
        willEffect: 0,
    };

    state = {
        currentPoints: this.props.points,
        hasEffect: 0,
        hasDifference: 0,
    };

    componentWillUnmount() {
        this._clearTimeout();
        clearTimeout(this._ballTimeout);
    }

    componentDidUpdate(prevProps) {
        const difference = this.props.points - this.state.currentPoints;

        if (difference !== 0) {
            this._clearTimeout();

            this.setState({hasDifference: difference, currentPoints: this.props.points}, () => {
                this._timeout = setTimeout(() => {
                    this.setState({hasDifference: 0});
                }, ANIMATION_DURATION);
            });
        } else if (prevProps.willEffect !== this.props.willEffect) {
            this.setState({hasEffect: this.props.willEffect});
        }
    }

    render() {
        const { currentPoints, hasDifference } = this.state;
        const { children } = this.props;
        const bgClass = hasDifference > 0 ? styles.grow : (hasDifference < 0 ? styles.shrink : '');
        const ballClass = this._getBallClass();

        return (
            <div className={styles.wrapper}>
                <div className={`${styles.bg} ${bgClass}`} style={{height: `${Math.round(currentPoints)}%`}}/>
                <div className={styles.icon}>{children}</div>
                <div className={`${styles.ball} ${ballClass}`} />
            </div>
        );
    }

    _getBallClass() {
        const { hasDifference, hasEffect } = this.state;
        const { willEffect } = this.props;
        let className = (willEffect ? styles.show : '') + ' ';

        if (!hasDifference) {
            if (Math.abs(hasEffect) >= 30) {
                className += styles.bigBall;
            } else {
                className += styles.smallBall;
            }
        }

        return className;
    }

    _clearTimeout() {
        clearTimeout(this._timeout);
    }
}