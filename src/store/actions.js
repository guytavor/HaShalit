import { createAction } from 'redux-actions';

export default {
    init: createAction('INIT'),
    nextCard: createAction('NEXT_CARD'),
    moveCard: createAction('MOVE_CARD'),
};