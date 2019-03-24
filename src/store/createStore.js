import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import actions from './actions';
import reducer from './reducer';
import middleware from './middleware';
import { load } from '../utils/StorageHelper';

function shouldLoadFromStorage() {
    const hasLoadParam = window.location.search.replace('?', '').split('&').find(query => query.indexOf('load=') > -1);
    // Default in development is don't load.
    const loadIfHasParam = process.env.NODE_ENV === 'development';
    return loadIfHasParam === hasLoadParam
}

export default function() {
    const store = createStore(reducer, applyMiddleware(middleware));
    const initGame = bindActionCreators(actions.init, store.dispatch);
    let savedState = null;
    const highScore = load('highScore');
    const showTutorial = !load('sawTutorial');


    if (shouldLoadFromStorage()) {
        savedState = load('state');
    }

    initGame({saved: savedState, highScore, showTutorial});

    return store;
}