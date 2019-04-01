import get from 'lodash/get';
import { save } from '../utils/StorageHelper';
import AnalyticsHelper, { CATEGORIES } from '../utils/AnalyticsHelper';
import actions from './actions';
import { SCREENS } from '../utils/constants';
import cloneDeep from "lodash/cloneDeep";

const handlers = {
    [actions.startGame]: () => {
        const isPhone = get(window, 'isMobile.phone', false);

        if (isPhone) {
            try {
                document.body.requestFullscreen().then(() => { }).catch(() => { });
                setTimeout(window.scrollTo.call(window, 0, 1));
            } catch (e) { }
        }
    },
    [actions.selectAnswer]: (store, payload, prevState) => {
        const currentState = store.getState();
        const metrics = get(currentState, 'level.metrics', {});
        const card = get(prevState, 'level.card', null);

        if (card && card.id) {
            AnalyticsHelper.sendEvent(CATEGORIES.CARD, 'select answer', {
                'dimension1': card.id,
                'metric1': metrics.economy,
                'metric2': metrics.security,
                'metric3': metrics.image,
                'metric4': metrics.religion,
            });
        }
    }
};

export default store => next => action => {
    const prevState = store.getState();
    const result = next(action);
    const newState = store.getState();

    if (typeof handlers[action.type] === 'function') {
        handlers[action.type](store, action.payload, prevState);
    }

    if (prevState !== newState) {
        const savedState = cloneDeep(newState);
        if (savedState && savedState.level) {
            const level = savedState.level;
            level.cardsUnlocked = [...level.cardsUnlocked];
            level.cardsUnlockedForever = [...level.cardsUnlockedForever];
            level.playedCards = [...level.playedCards];
        }
        save('state', savedState);
    }

    if (prevState.screen !== newState.screen) {
        AnalyticsHelper.sendEvent(CATEGORIES.SCREEN, 'new screen', newState.screen, get(newState, 'level.card.id', -1));
    }

    if (newState.screen === SCREENS.LOST) {
        const highScore = Math.max(newState.highScore, newState.level.yearsInPower);
        save('highScore', highScore);
    }

    return result;
}
