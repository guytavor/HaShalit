import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './App.css'
import img1 from './assets/cards/1.gif'
import img2 from './assets/cards/2.gif'
import img3 from './assets/cards/3.gif'
import img4 from './assets/cards/4.gif'
import img5 from './assets/cards/5.gif'
import img6 from './assets/cards/6.gif'

const cards = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
// They influence the way cards enter the screen then the game starts.
const to = i => ({ x: 0, y: 0, scale: 1, rot: 0, delay: i * 100 })
const from = i => ({ x: -1000, y: -1000, rot: -4, scale: 1.5 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `rotateZ(${r}deg) scale(${s})`
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
    // The set flags all the cards that are flicked out
    const [gone] = useState(() => new Set())
    const [answer, setAnswer] = useState('');
    // Create a bunch of springs using the helpers above
    const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
        // If you flick hard enough it should trigger the card to fly out
        const isInCenter = Math.abs(xDelta) < 10
        const isMovedToAnswer = Math.abs(xDelta) > 20
        const trigger = velocity > 0.2
        // Direction should either point left or right
        const dir = xDir < 0 ? -1 : 1
        if (!down || !isMovedToAnswer) {
            setAnswer('');
        } else {
            setAnswer(xDelta > 0 ? 'Do this' : (xDelta === 0 ? '' : 'Do that'));
        }
        if (!down && isMovedToAnswer && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const springData = {
                x: 0,
                y: 0,
                rot: 0,
                // Active cards lift up a bit
                scale: down ? 1.05 : 1,
                config: {friction: 50, tension: down ? 800 : isGone ? 200 : 500}
            }
            if (isGone) {
                // When a card is gone it flys out left or right, otherwise goes back to zero
                springData.x = (200 + window.innerWidth) * dir
                springData.y = 200 + window.innerHeight
                // How much the card tilts, flicking it harder makes it rotate faster
                springData.rot = dir * 150 * velocity
            } else if (down) {
                springData.y = -10
                if (!isInCenter) {
                    const absDelta = Math.abs(xDelta) * 3
                    const xDir = xDelta < 0 ? -1 : 1
                    const slope = 1.08
                    const xOffset = 50
                    const x = xDir * 85 / (1 + Math.pow(slope, -(absDelta - 50))) + xDelta / 10 // Math.abs(xDelta) * xDelta / 100
                    springData.x = Math.max(-100, Math.min(x, 100))
                    springData.y += springData.x * springData.x / 220
                    springData.rot = springData.x * 0.15
                }
            }
            return springData
        })
        if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

    return (
        <div className="deck">
            <h2 className="title">{answer}</h2>
            {
                props.map(({ x, y, rot, scale }, i) => (
                    <animated.div className="card-wrapper" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                        <animated.div className="card" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
                    </animated.div>
                ))
            }
        </div>
    );
}

export default Deck;
