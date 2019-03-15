import { save } from '../utils/StorageHelper';

const handlers = {

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