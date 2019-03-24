import { handleActions } from 'redux-actions';
import cloneDeep from 'lodash/cloneDeep';
import { log } from '../utils/Logger';
import actions from './actions';
import {cards, newGameCards} from './cards';
import {boosters, blameBoosters} from './boosters';
import GameManager from './GameManager';
import { SCREENS } from '../utils/constants';

export const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager(cards, newGameCards, boosters, blameBoosters);

const INITIAL_STATE = {
    screen: SCREENS.INTRO,
    highScore: 0,
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
    settings: {
        showTutorial: true,
    },
};

export default handleActions({
    [actions.init]: (state, {payload}) => {
        log('Init', state);
        // TODO: Start with the intro, then if loading a save, go to the timeline.
        const { saved, highScore, showTutorial } = payload;
        const nextLevel = gameManager.getNextLevel(saved ? saved.level : state.level, null, showTutorial);

        return {
            ...state,
            highScore,
            level: cloneDeep(nextLevel),
            settings: {
                ...state.settings,
                showTutorial,
            }
        }
    },

    [actions.selectAnswer]: (state, {payload}) => {
        log('Select answer', state);
        const { side } = payload;
        const nextLevel = gameManager.getNextLevel(state.level, side);
        let screen = state.screen;

        if (nextLevel.hasWon) {
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
        log('Start game', state);
        return {
            ...state,
            screen: SCREENS.GAME,
        }
    },

    [actions.startOver]: (state) => {
        log('Start over', state);
        const nextLevel = gameManager.startNewGame(state.level);
        const score = state.level.yearsInPower;
        const highScore = Math.max(score, state.highScore);

        return {
            ...state,
            highScore,
            screen: SCREENS.GAME,
            level: cloneDeep(nextLevel),
        }
    },
}, INITIAL_STATE);