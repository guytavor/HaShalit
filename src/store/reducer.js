import { handleActions } from 'redux-actions';
import cards from './cards';
import {boosters, blameBoosters} from './boosters';
import GameManager from './GameManager';
import { SCREENS } from '../utils/constants';

const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards, boosters, blameBoosters);

// TODO: Keep the state between sessions. Leaving the game in the middle
//       and returning to it, should start from the same point.
// TODO: Define a list of persistent parameters. Those will be copied to
//       the level when the game starts, and from the level when it ends.
const INITIAL_STATE = {
    screen: SCREENS.INTRO,
    level: {
        card: null,
        metrics: {
            economy: DEFAULT_METRICS_POINTS,
            security: DEFAULT_METRICS_POINTS,
            image: DEFAULT_METRICS_POINTS,
            religion: DEFAULT_METRICS_POINTS,
        },
        // TODO: At the end of a game, delete the non persistent parameters.
        parameters: {},
        year: 2019,
        yearsInPower: 0,
        hasWon: false,
        hasLost: false,
        cardsUnlocked: new Set(),
        cardsUnlockedForever: new Set(),
        playedCards: new Set(),
        boosters: [],
        // TODO: Use the history array to display the timeline.
        history: [
            /*{
                from: 2019,
                to: 2020,
            },*/
        ],
        achievements: {
            // TODO: Display the achievements on the timeline.
            //peace: 2023,
        },
    },
    settings: {},
};

export default handleActions({
    INIT: (state, action) => {
        const { payload } = action;
        const { saved } = payload;
        const nextLevel = gameManager.getNextLevel(saved ? saved.level : state.level);

        return {
            ...state,
            screen: SCREENS.GAME,
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