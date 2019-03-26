import { createAction } from 'redux-actions';

export default {
    init: createAction('INIT'),
    gotoIntro: createAction('GOTO_INTRO'),
    startGame: createAction('START_GAME'),
    startOver: createAction('START_OVER'),
    selectAnswer: createAction('SELECT_ANSWER'),
    moveCard: createAction('MOVE_CARD'),
};
