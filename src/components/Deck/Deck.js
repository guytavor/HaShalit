import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Spring } from 'react-spring/renderprops'
import { animated, interpolate } from 'react-spring/renderprops';
import { withGesture } from 'react-with-gesture';
import Actions from '../../store/Actions';
import './Deck.css';

const to = { x: 0, y: 0, scale: 1, rot: 0, delay: 100 };
const from = { x: -1000, y: -1000, rot: -4, scale: 1.5 };
const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`;

class Deck extends React.PureComponent {
    state = {
        gone: false,
    };

    static propTypes = {
        card: PropTypes.object,
    };

    // _actionHandler = event => {
    //     const { args: [index], down, delta: [xDelta] } = event;
    //     const { gone } = this.state;
    //     const { moveToSide, nextCard } = this.props;

    //     const isInCenter = Math.abs(xDelta) < 10;
    //     const isMovedToAnswer = Math.abs(xDelta) > 20;

    //     const dir = xDelta < 0 ? -1 : 1;

    //     if (!down || !isMovedToAnswer) {
    //         setAnswer('');
    //     } else {
    //         setAnswer(xDelta > 0 ? 'Do this' : (xDelta === 0 ? '' : 'Do that'));
    //     }

    //     if (!down && isMovedToAnswer) {
    //         gone.add(index);
    //     }
    //     set(i => {
    //         if (index !== i) {
    //             return;
    //         }
    //         const isGone = gone.has(index);
    //         const springData = {
    //             x: 0,
    //             y: 0,
    //             rot: 0,
    //             scale: down ? 1.05 : 1,
    //             config: { friction: 45, tension: down ? 800 : isGone ? 100 : 500 }
    //         };

    //         if (isGone) {
    //             springData.x = 1100 * dir;
    //             springData.y = 1300;
    //             springData.rot = dir * 200;
    //         } else if (down) {
    //             springData.y = -10;
    //             if (!isInCenter) {
    //                 const absDelta = Math.abs(xDelta) * 3;
    //                 const slope = 1.08;
    //                 const xOffset = 50;
    //                 const x = dir * 85 / (1 + Math.pow(slope, -(absDelta - xOffset))) + xDelta / 10;
    //                 springData.x = Math.max(-100, Math.min(x, 100));
    //                 springData.y += springData.x * springData.x / 220;
    //                 springData.rot = springData.x * 0.15;
    //             }
    //         }
    //         return springData;
    //     })
    //     if (!down && gone.size === cards.length) {
    //         setTimeout(() => gone.clear() || set(i => to(i)), 600);
    //     }
    // }

    render() {
        const { gone } = this.state;
        const { card, down } = this.props;
        console.log('adler', this.props);
        // const bind = useGesture(this._actionHandler);
        const springData = {
            x: 0,
            y: 0,
            rot: 0,
            scale: down ? 1.05 : 1,
            config: { friction: 45, tension: down ? 800 : gone ? 100 : 500 },
        };
        // transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) 
        // transform: interpolate([rot, scale], trans), backgroundImage: `url(${card.img})` 

        return (
            <div className="deck">
                <Spring
                    from={from}
                    to={to}>
                    {({ x, y, rot, scale }) =>
                        <animated.div className="card-wrapper">
                            <animated.div className="card" style={{backgroundImage: `url(${card.img})`}}/>
                        </animated.div>
                    }
                </Spring>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        card: state.currentCard
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        moveToSide: Actions.moveToSide,
        nextCard: Actions.nextCard,
    }, dispatch);
}

export default withGesture()(connect(mapStateToProps, mapDispatchToProps)(Deck));
