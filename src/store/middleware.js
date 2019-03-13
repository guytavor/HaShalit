import { save } from '../utils/StorageHelper';

export default store => next => action => {
    const prevState = store.getState();
    const result = next(action);
    const newState = store.getState();

    if (prevState !== newState) {
        save('state', newState);
    }

    return result;
  }