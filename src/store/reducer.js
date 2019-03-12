import { handleActions } from 'redux-actions';
import cards from './cards';
import GameManager from './GameManager';

const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards);

const INITIAL_STATE = {
    level: {
        card: null,
        metrics: {
            economy: DEFAULT_METRICS_POINTS,
            religion: DEFAULT_METRICS_POINTS,
            security: DEFAULT_METRICS_POINTS,
            image: DEFAULT_METRICS_POINTS,
        },
        persistantParameters: [],
        year: 0,
    },
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

        return {
            ...state,
            level: nextLevel,
        }
    }
}, INITIAL_STATE);