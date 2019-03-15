import { createAction } from 'redux-actions';

export default {
    init: createAction('INIT'),
    selectAnswer: createAction('SELECT_ANSWER'),
    moveCard: createAction('MOVE_CARD'),
};