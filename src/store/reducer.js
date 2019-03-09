import { handleActions } from 'redux-actions';
import cards from './cards.js';

const INITIAL_STATE = {
    currentCardIndex: 0,
    currentCard: cards[0],
    currentSide: null,
};

export default handleActions({
    MOVE_TO_SIDE: (state, action) => {
        const { payload } = action;
        const { side } = payload;
        let newState = state;

        if (side !== state.currentSide) {
            newState = { ...state, currentSide: side };
        }

        return newState;
    },

    NEXT_CARD: (state) => {
        let currentCardIndex = state.currentCardIndex;
        let currentCard = state.currentCard;

        if (state.currentCardIndex < cards.length - 1) {
            currentCardIndex += 1;
            currentCard = cards[currentCardIndex];
        }

        return {
            ...state,
            currentCardIndex,
            currentCard,
            currentSide: null,
        }
    }
}, INITIAL_STATE);