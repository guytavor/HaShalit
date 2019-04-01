import { handleActions } from 'redux-actions';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import { log } from '../utils/Logger';
import { getQueryParam } from '../utils/common';
import actions from './actions';
import {cards, newGameCards} from './cards';
import {boosters, blameBoosters} from './boosters';
import GameManager from './GameManager';
import { SCREENS } from '../utils/constants';

const ZERO_METRICS = {
    economy: 0,
    security: 0,
    image: 0,
    religion: 0,
};

export const DEFAULT_METRICS_POINTS = 50;
const gameManager = new GameManager({cards, newGameCards, boosters, blameBoosters, startAt: getQueryParam('start')});

// NOTE: Changing this value will invalidate current saved states and reset the game for all players.
export const GAME_VERSION = 1;

const INITIAL_STATE = {
    screen: null,
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
        afterText: null,
    },
    interactions: {
        moveCardSide: null,
    },
    version: GAME_VERSION,
};

export default handleActions({
    [actions.init]: (state, {payload}) => {
        // TODO: Start with the intro, then if loading a save, go to the timeline.
        const { saved, highScore, screen } = payload;
        log('Init', state, saved);
        let shouldGetNextLevel = screen || !saved;
        if (!shouldGetNextLevel && saved.level.card === null) {
            // The saved state has a null card. Need to get next level.
            state = saved;
            shouldGetNextLevel = true;
        }
        let nextLevel = shouldGetNextLevel ? gameManager.getNextLevel(state.level) : saved.level;
        const newScreen = (screen && SCREENS[screen.toUpperCase()]) || SCREENS.INTRO;

        return {
            ...state,
            screen: newScreen,
            highScore,
            level: cloneDeep(nextLevel),
        }
    },

    [actions.gotoCredits]: (state) => {
        return {
            ...state,
            screen: SCREENS.CREDITS
        }
    },

    [actions.selectAnswer]: (state, {payload}) => {
        log('Select answer', state);
        const { side } = payload;
        const answer = state.level.card[side];
        const nextLevel = gameManager.getNextLevel(state.level, side);
        let newState = state;

        if (!state.level.afterText && answer && answer.afterText) {
            const clonedLevel = cloneDeep(state.level);
            clonedLevel.card.id += 'afterText';
            set(clonedLevel, 'card.left.effects', ZERO_METRICS);
            set(clonedLevel, 'card.right.effects', ZERO_METRICS);
            clonedLevel.metrics = nextLevel.metrics;

            newState = {
                ...state,
                level: {
                    ...clonedLevel,
                    afterText: answer.afterText
                }
            }
        } else {
            let screen = state.screen;
    
            if (nextLevel.hasWon) {
                screen = SCREENS.WON;
            } else if (nextLevel.hasLost) {
                screen = SCREENS.LOST;
            }

            newState = {
                ...state,
                screen,
                level: {
                    ...cloneDeep(nextLevel),
                    afterText: null,
                },
            }
        }
        
        return newState;
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
        if (state.level.hasWon) {
            state = INITIAL_STATE;
            state.level.year = 2018;
        }
        const nextLevel = gameManager.startNewGame(cloneDeep(state.level));
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