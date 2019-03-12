export default class CardManager {
    constructor(cards) {
        this._cards = cards;
    }

    getNextLevel(state, selectedSide) {
        let nextCard = this._cards['1'];

        if (state && state.card && state.card[selectedSide]) {
            nextCard = this._cards[state.card[selectedSide].nextCard];
        }

        return {
            ...state,
            card: nextCard,
        };
    }
}