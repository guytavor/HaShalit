import { handleActions } from 'redux-actions';
import get from 'lodash/get';
import actions from './actions';
import cards from './cards';
import {boosters, blameBoosters} from './boosters';
import GameManager from './GameManager';
import { SCREENS } from '../utils/constants';

export const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards, boosters, blameBoosters);

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
    interactions: {
        moveCardSide: null,
    },
    settings: {},
};

export default handleActions({
    [actions.init]: (state, {payload}) => {
        const { saved } = payload;
        const nextLevel = gameManager.getNextLevel(saved ? saved.level : state.level);

        return {
            ...state,
            level: nextLevel,
        }
    },

    [actions.selectAnswer]: (state, {payload}) => {
        const { side } = payload;
        const nextLevel = gameManager.getNextLevel(state.level, side);
        const cardId = get(nextLevel, 'card.id');
        let screen = state.screen;

        if (cardId === 'victory') {
            screen = SCREENS.WON;
        } else if (cardId.toLowerCase().indexOf('lose') > -1) {
            screen = SCREENS.LOST;
        }
        
        return {
            ...state,
            screen,
            level: nextLevel,
        }
    },

    [actions.moveCard]: (state, {payload}) => {
        const { side } = payload;

        return {
            ...state,
            interactions: {
                ...state.interactions,
                moveCardSide: side
            }
        };
    },

    [actions.startGame]: (state) => {
        return {
            ...state,
            screen: SCREENS.GAME,
        }
    },

    [actions.startOver]: () => {
        return INITIAL_STATE;
    },
}, INITIAL_STATE);