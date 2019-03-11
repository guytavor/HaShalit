import React, { useState } from 'react'
import { useSpring, useTransition, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styles from './Card.module.scss'

const from = { x: 0, y: 0, rot: 0, scale: 1 };
const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`;

function Card({ imgUrl, onMoveToSide, onFlip }) {
    const [gone] = useState(() => new Set());
    const [enter] = useState(true);
    const [props, set] = useSpring(() => ({ from }));
    const enterProps = useTransition(enter, null, {
        from: { rotation: 0 },
        enter: { rotation: 180 },
        leave: { rotation: 180 },
        reset: true,
    });

    const actionHandlers = useGesture(({ down, delta: [xDelta, yDelta] }) => {
        const isInCenter = Math.abs(xDelta) < 5;
        const isMovedToAnswer = Math.abs(xDelta) > 20;
        const dir = Math.sign(xDelta);

        if (isMovedToAnswer) {
            onMoveToSide(dir);
        } else {
            onMoveToSide();
        }

        if (!down && isMovedToAnswer) {
            gone.add('true');
            onMoveToSide();
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
                setTimeout(() => onFlip(dir), 600);
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
                    {enterProps.map(({ item, key, props: eProps }) => (
                        [
                            <animated.div key={key} className={styles.back} style={{
                                transform: interpolate(
                                    [eProps.rotation],
                                    // This should be the animation if dir < 0. If dir > 0, it should be reversed.
                                    // TODO: How do we get the direction of the swipe here?
                                    r => `translateX(${item ? Math.sin((Math.min(r * 1.1, 180) - 45) * Math.PI / 90) * 70 + 70 : 0}px) rotateY(${item ? Math.min(r * 1.1, 180) : 180}deg) scale(${item ? Math.sin((r - 45) * Math.PI / 90) / 4 + 1.25 : 1})`)
                            }} />,
                            <animated.div key={key} className={styles.front} style={{
                                transform: interpolate(
                                    [eProps.rotation],
                                    r => `translateX(${item ? Math.sin((Math.min(r * 1.1, 180) - 45) * Math.PI / 90) * 70 + 70 : 0}px) rotateY(${item ? Math.min(r * 1.1, 180) - 180 : 0}deg) scale(${item ? Math.sin((r - 45) * Math.PI / 90) / 4 + 1.25 : 1})`),
                                backgroundImage: `url(${imgUrl})`
                            }} />
                        ]
                    ))}
                </div>
            </animated.div>
        </animated.div>
    )
}

export default Card;
