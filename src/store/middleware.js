import get from 'lodash/get';
import { save } from '../utils/StorageHelper';
import actions from './actions';

const handlers = {
    [actions.startGame]: () => {
        const isPhone = get(window, 'isMobile.phone', false);

        if (isPhone) {
            document.body.requestFullscreen().then(() => {}).catch(() => {});
        }
    }
};

export default store => next => action => {
    const prevState = store.getState();
    const result = next(action);
    const newState = store.getState();

    if (typeof handlers[action.type] === 'function') {
        handlers[action.type](store, action.payload);
    }

    if (prevState !== newState) {
        save('state', newState);
    }

    return result;
  }
