import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import actions from './actions';
import reducer, {GAME_VERSION} from './reducer';
import middleware from './middleware';
import { getQueryParam } from '../utils/common';
import { load } from '../utils/StorageHelper';

function shouldLoadFromStorage() {
    const loadParam = getQueryParam('load');
    if (loadParam !== null) {
        return loadParam === 'true';
    }
    // Default in development is don't load.
    return process.env.NODE_ENV !== 'development';
}

export default function() {
    const store = createStore(reducer, applyMiddleware(middleware));
    const initGame = bindActionCreators(actions.init, store.dispatch);
    const highScore = load('highScore') || 0;
    let savedState = null;
    let screen = getQueryParam('debug');

    if (shouldLoadFromStorage()) {
        savedState = load('state');
        if (savedState && savedState.version !== GAME_VERSION) {
            savedState = null;
        }
        if (savedState && savedState.level) {
            const level = savedState.level;
            if (!Array.isArray(level.cardsUnlocked)) {
                level.cardsUnlocked = [];
                level.cardsUnlockedForever = [];
                level.playedCards = [];
            }
            level.cardsUnlocked = new Set(level.cardsUnlocked);
            level.cardsUnlockedForever = new Set(level.cardsUnlockedForever);
            level.playedCards = new Set(level.playedCards);
        }
    }

    initGame({saved: savedState, highScore, screen});

    return store;
}