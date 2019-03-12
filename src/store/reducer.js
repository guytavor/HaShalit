import { handleActions } from 'redux-actions';
import cards from './cards';
import GameManager from './GameManager';

const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards);

// TODO: Keep the state between sessions. Leaving the game in the middle
//       and returning to it, should start from the same point.
// TODO: Define a list of persistent parameters. Those will be copied to
//       the level when the game starts, and from the level when it ends.
const INITIAL_STATE = {
    level: {
        card: null,
        metrics: {
            economy: DEFAULT_METRICS_POINTS,
            security: DEFAULT_METRICS_POINTS,
            image: DEFAULT_METRICS_POINTS,
            religion: DEFAULT_METRICS_POINTS,
        },
        parameters: {},
        year: 2019,
        yearsInPower: 0,
        hasWon: false,
        hasLost: false,
        cardsUnlocked: new Set(),
        cardsUnlockedForever: new Set(),
        // TODO: Keep a record of played cards to not draw them again.
    },
    // TODO: At the end of a session, copy persistentParameters and cardsUnlockedForever from the level.
    persistentParameters: {},
    cardsUnlockedForever: new Set(),
    settings: {},
};

export default handleActions({
    INIT: (state) => {
        const nextLevel = gameManager.getNextLevel(state.level);

        return {
            ...state,
            level: nextLevel,
        }
    },

    NEXT_CARD: (state, action) => {
        const { payload } = action;
        const { side } = payload;
        const nextLevel = gameManager.getNextLevel(state.level, side);

        console.log(nextLevel);

        return {
            ...state,
            level: nextLevel,
        }
    }
}, INITIAL_STATE);