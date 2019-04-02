import { createAction } from 'redux-actions';

export default {
    init: createAction('INIT'),
    gotoCredits: createAction('GOTO_CREDITS'),
    startGame: createAction('START_GAME'),
    startOver: createAction('START_OVER'),
    selectAnswer: createAction('SELECT_ANSWER'),
    moveCard: createAction('MOVE_CARD'),
    share: createAction('SHARE')
};
