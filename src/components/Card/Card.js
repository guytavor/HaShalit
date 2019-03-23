import React, { useState } from 'react'
import { useSpring, useTransition, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import get from 'lodash/get';
import styles from './Card.module.scss'

const from = { x: 0, y: 0, rot: 0, scale: 1 };
const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`;
const negTrans = (r, s) => `rotateZ(${-r}deg) scale(${s}) skewX(${-r}deg)`;
const textTrans = r => `skewX(${r}deg)`;
const SIDES = {
    '-1': 'left',
    '1': 'right'
};
const TRANSITION_CONFIG = {
    clamp: true,
    tension: 240,
    friction: 55
    // ease: some kind of easing
};

function getAnswer(card, side) {
    let answer = '';

    if (card && side && card[side]) {
        answer = card[side].text;
    }

    return answer;
}

function flipTranslateX(item, t, dir) {
    if (!item) return 0;
    t = Math.min(t * 1.2, 1);
    const angle = t * 360 - 90;
    const radians = angle * Math.PI / 180;
    let value = Math.sin(radians) + 1;
    if (dir > 0) {
        value = -value;
    }
    return value * 70;
}

function flipRotateY(item, t, dir, isFront) {
    if (!item) {
        return isFront ? 0 : 180;
    }
    let rotation = isFront ? -180 : 0;
    rotation += Math.min(t * 1.15, 1) * 180;
    if (dir < 0) {
        rotation = -rotation;
    }
    return rotation;
}

function flipScale(item, t) {
    if (!item) return 1;
    const angle = t * 360 - 90;
    const radians = angle * Math.PI / 180;
    let value = Math.sin(radians) + 1;
    return value * 0.25 + 1;
}

function Card({ card, cardSide, onSelectAnswer, onCardMove, prevDir }) {
    const [gone] = useState(() => new Set());
    const [enter] = useState(true);
    const [props, set] = useSpring(() => ({ from }));
    const enterProps = useTransition(enter, null, {
        from: { t: 0 },
        enter: { t: 1 },
        leave: { t: 1 },
        config: TRANSITION_CONFIG,
    });
    const cardImg = get(card, 'character.img', get(card, 'img', ''));
    let answer = getAnswer(card, cardSide);

    const actionHandlers = useGesture(({ down, delta: [xDelta, yDelta] }) => {
        const isInCenter = Math.abs(xDelta) < 5;
        const isMovedToAnswer = Math.abs(xDelta) > 20;
        const dir = Math.sign(xDelta);

        if (isMovedToAnswer) {
            onCardMove({side: SIDES[dir]});
        } else {
            onCardMove({side: null});
        }

        if (!down && isMovedToAnswer) {
            gone.add('true');
            onCardMove({side: null});
        }

        set(() => {
            const isGone = gone.has('true');
            const springData = {
                x: 0,
                y: 0,
                rot: 0,
                scale: down ? 1.05 : 1,
                // Friction 50 means no bounce at all. Below that increases the bounce.
                config: { friction: 42, tension: down ? 800 : isGone ? 100 : 500 }
            };

            if (isGone) {
                springData.x = 1100 * dir;
                springData.y = 1300;
                springData.rot = dir * 200;
                setTimeout(() => onSelectAnswer(dir), 600);
            } else if (down) {
                springData.y = -10 + yDelta / 10;
                if (!isInCenter) {
                    const dragSensitivity = 2;
                    const absDelta = Math.abs(xDelta);
                    // This is a Sigmoid function. It slowly increase from 0, then at a
                    // certain "sweet spot" quickly increases and finally flattens at 1.
                    // Increase the slope to make the card snap harder when reaching the
                    // "sweet spot".
                    const slope = 1.08;
                    // By default, the sweet spot is around x=0. This offset moves it.
                    const xOffset = 50;
                    let x = dir * 85 / (1 + Math.pow(slope, -(absDelta * dragSensitivity - xOffset)));
                    // Add a linear progression to make the flat start and end less flat.
                    // It improves the feeling of responsiveness.
                    x += xDelta / 10;
                    // Clamp the X position so it will stop at the edges and not move too
                    // far out of the screen.
                    const stopMovingAtX = 100;
                    springData.x = Math.max(-stopMovingAtX, Math.min(x, stopMovingAtX));
                    // Exponentially lower the card as it reaches the edge to create an arc.
                    springData.y += springData.x * springData.x / 300;
                    springData.rot = springData.x * 0.1;
                }
            }
            return springData;
        })
    });

    return (
        <animated.div className={styles.cardWrapper}
            style={{ transform: interpolate([props.x, props.y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            <animated.div className={styles.card}
                {...actionHandlers()}
                style={{ transform: interpolate([props.rot, props.scale], trans) }}>
                <div className={styles.flipWrapper}>
                    {enterProps.map(({ item, props: eProps }) => (
                        [
                            <animated.div key={0} className={styles.back} style={{
                                transform: interpolate(
                                    [eProps.t],
                                    t => `translateX(${flipTranslateX(item, t, prevDir)}px) rotateY(${flipRotateY(item, t, prevDir, false)}deg) scale(${flipScale(item, t)})`)
                            }} />,
                            <animated.div key={1} className={styles.front} style={{
                                transform: interpolate(
                                    [eProps.t],
                                    t => `translateX(${flipTranslateX(item, t, prevDir)}px) rotateY(${flipRotateY(item, t, prevDir, true)}deg) scale(${flipScale(item, t)})`),
                                backgroundImage: `url(${cardImg})`
                            }}>
                                <div className={`${styles[cardSide]} ${styles.answerFixer}`}>
                                    <animated.div className={styles.answerContainer} style={{ transform: interpolate([props.rot, props.scale], negTrans) }}>
                                        <animated.h2 className={styles.answer} style={{transform: interpolate([props.rot], textTrans)}}>{answer}</animated.h2>
                                    </animated.div>
                                </div>
                            </animated.div>
                        ]
                    ))}
                </div>
            </animated.div>
        </animated.div>
    )
}

export default Card;
