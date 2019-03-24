import get from 'lodash/get';
import { save } from '../utils/StorageHelper';
import { sendEvent, CATEGORIES } from '../utils/AnalyticsHelper';
import actions from './actions';
import { SCREENS } from '../utils/constants';

const handlers = {
    [actions.startGame]: () => {
        const isPhone = get(window, 'isMobile.phone', false);

        if (isPhone) {
            document.body.requestFullscreen().then(() => {}).catch(() => {});
            setTimeout(window.scrollTo.call(window, 0, 1));
        }
    },
    [actions.selectAnswer]: (store, payload, prevState) => {
        const { side } = payload;
        const currentState = store.getState();
        const metrics = get(currentState, 'level.metrics', {});
        const card = get(prevState, 'level.card', null);

        if (card && card[side]) {
            const answer = card[side];
            sendEvent(CATEGORIES.CARD, 'select answer', {
                'metric1': card.id,
                'metric2': answer.text,
                'metric3': metrics.economy,
                'metric4': metrics.security,
                'metric5': metrics.image,
                'metric6': metrics.religion,
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
        save('state', newState);
    }

    if (prevState.screen !== newState.screen) {
        sendEvent(CATEGORIES.SCREEN, 'new screen', newState.screen, get(newState, 'level.card.id', -1));
    }

    if (get(newState, 'level.card.id') === '10') {
        save('sawTutorial', true);
    }

    if (newState.screen === SCREENS.LOST) {
        const highScore = Math.max(newState.highScore, newState.level.yearsInPower);
        save('highScore', highScore);
    }

    return result;
  }
