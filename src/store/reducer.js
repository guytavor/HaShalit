import { handleActions } from 'redux-actions';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import actions from './actions';
import {cards, newGameCards} from './cards';
import {boosters, blameBoosters} from './boosters';
import GameManager from './GameManager';
import { SCREENS } from '../utils/constants';

export const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards, newGameCards, boosters, blameBoosters);

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
        boosters: {},
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
        games: 0,
    },
    interactions: {
        moveCardSide: null,
    },
    settings: {},
};

export default handleActions({
    [actions.init]: (state, {payload}) => {
        console.log('Init', state);
        // TODO: Start with the intro, then if loading a save, go to the timeline.
        const { saved } = payload;
        const nextLevel = gameManager.getNextLevel(saved ? saved.level : state.level);

        return {
            ...state,
            level: cloneDeep(nextLevel),
        }
    },

    [actions.selectAnswer]: (state, {payload}) => {
        console.log('Select answer', state);
        const { side } = payload;
        const nextLevel = gameManager.getNextLevel(state.level, side);
        const cardId = get(nextLevel, 'card.id');
        let screen = state.screen;

        if (cardId === 'victory') {
            screen = SCREENS.WON;
        } else if (nextLevel.hasLost) {
            screen = SCREENS.LOST;
        }
        
        return {
            ...state,
            screen,
            level: cloneDeep(nextLevel),
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
        console.log('Start game', state);
        return {
            ...state,
            screen: SCREENS.GAME,
        }
    },

    [actions.startOver]: (state) => {
        console.log('Start over', state);
        const nextLevel = gameManager.startNewGame(state.level);

        return {
            ...state,
            screen: SCREENS.GAME,
            level: cloneDeep(nextLevel),
        }
    },
}, INITIAL_STATE);