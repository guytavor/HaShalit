import React, { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import styles from './Card.module.css'

const from = { x: 0, y: 0, rot: 0, scale: 1 };
const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`;

function Card({ imgUrl, onMoveToSide, onFlip, onRelease }) {
    const [gone, setGone] = useState(false);
    const [props, set] = useSpring(() => ({ from }));

    const actionHandlers = useGesture(({ down, delta: [xDelta] }) => {
        const isInCenter = Math.abs(xDelta) < 10;
        const isMovedToAnswer = Math.abs(xDelta) > 20;

        const dir = Math.sign(xDelta);

        if (dir !== 0) {
            onMoveToSide(dir);
        } else if (!down) {
            onRelease();
        }

        if (!down && isMovedToAnswer) {
            setGone(true);
            onFlip(dir);
        }

        set(() => {
            const springData = {
                x: 0,
                y: 0,
                rot: 0,
                scale: down ? 1.05 : 1,
                config: { friction: 45, tension: down ? 800 : gone ? 100 : 500 }
            };

            if (gone) {
                springData.x = 1100 * dir;
                springData.y = 1300;
                springData.rot = dir * 200;
            } else if (down) {
                springData.y = -10;
                if (!isInCenter) {
                    const absDelta = Math.abs(xDelta) * 3;
                    const slope = 1.08;
                    const xOffset = 50;
                    const x = dir * 85 / (1 + Math.pow(slope, -(absDelta - xOffset))) + xDelta / 10;
                    springData.x = Math.max(-100, Math.min(x, 100));
                    springData.y += springData.x * springData.x / 220;
                    springData.rot = springData.x * 0.15;
                }
            }
            return springData;
        })
    })

    return (
        <animated.div className={styles.cardWrapper}
            style={{ transform: interpolate([props.x, props.y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
            <animated.div className={styles.card}
                {...actionHandlers()}
                style={{ transform: interpolate([props.rot, props.scale], trans), backgroundImage: `url(${imgUrl})` }} />
        </animated.div>
    )
}

export default Card;
