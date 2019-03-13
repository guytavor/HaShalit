const validationFunctions = {
    equals: (lhs, rhs) => {
        return lhs === rhs;
    },
    notEquals: (lhs, rhs) => {
        return lhs !== rhs;
    },
    lessThan: (lhs, rhs) => {
        return lhs < rhs;
    },
    lessThanOrEqual: (lhs, rhs) => {
        return lhs <= rhs;
    },
    greaterThan: (lhs, rhs) => {
        return lhs > rhs;
    },
    greaterThanOrEqual: (lhs, rhs) => {
        return lhs >= rhs;
    },
};

export default class CardManager {
    constructor(cards) {
        this._cards = cards;
    }

    getNextLevel(state, selectedSide) {
        // TODO: If a new game check if passed tutorial.
        //       If so, show a random starting card.
        //       If not, start with the tutorial card.
        let nextCardId = '10';
        const card = state ? state.card : null;

        if (!card) {
            return {
                ...state,
                card: this._cards[nextCardId],
            };
        }

        if (card.advanceTime !== false) {
            state.year += 1;
            state.yearsInPower += 1;
        }

        if (card.lose) {
            state.hasLost = true;
            console.log('Game Over');
            return {
                ...state,
                card: null,
            };
        }

        if (card.win) {
            state.hasWon = true;
            console.log('Victory');
            return {
                ...state,
                card: null,
            };
        }

        // Keep track of played cards. Don't draw them again in this session.
        state.playedCards.add(state.card.id);

        const answer = card ? card[selectedSide] : null;

        if (answer) {
            nextCardId = answer.nextCard;
            // Unlock cards.
            if (answer.unlockCards) {
                for (const unlockedCardId of answer.unlockCards) {
                    console.log('Unlocked card:', unlockedCardId);
                    state.cardsUnlocked.add(unlockedCardId);
                }
            }
            if (answer.unlockCardsForever) {
                for (const unlockedCardId of answer.unlockCardsForever) {
                    console.log('Unlocked card:', unlockedCardId);
                    state.cardsUnlockedForever.add(unlockedCardId);
                }
            }

            if (answer.effects) {
                CardManager._applyEffects(state, answer.effects);
                // TODO: Check if metrics are 0. If so, select a lost card.
            }
        }

        // If the next card is not predetermined, select a random card.
        if (!nextCardId) {
            console.log('Selecting a random card...');
            nextCardId = this._selectRandomCard(state);
        }
        console.log('Next card:', nextCardId);

        return {
            ...state,
            card: this._cards[nextCardId],
        };
    }

    _selectRandomCard(state) {
        let availableCards = [];
        for (const id of Object.keys(this._cards)) {
            const card = this._cards[id];

            // Check if card is locked.
            if (card.locked) {
                if (!state.cardsUnlocked.has(id) && !state.cardsUnlockedForever.has(id)) {
                    continue;
                }
            }

            // Check conditions.
            if (card.conditions
                && !CardManager._checkConditions(state.parameters, card.conditions, card.id)) {
                continue;
            }

            if (state.playedCards.has(id)) {
                // Card already played in this session.
                continue;
            }

            availableCards.push(id);
        }
        return chooseRandomFromArray(availableCards);
    }

    static _checkConditions(parameters, conditions, id) {
        for (const parameterCondition of conditions) {
            const parameter = parameterCondition[0];
            const currentValue = parameters[parameter] || 0;
            const conditions = parameterCondition[1];
            for (const condition of Object.keys(conditions)) {
                const validationFunction = validationFunctions[condition];
                if (!validationFunction) {
                    console.error(
                        'No validation function named:', condition, 'Used in card', id);
                }
                const value = parameterCondition[condition];
                if (!validationFunction(currentValue, value)) {
                    return false;
                }
            }
        }
        return true;
    }

    static _applyEffects(state, effects) {
        for (const metric of Object.keys(state.metrics)) {
            if (effects[metric]) {
                state.metrics[metric] = clamp(state.metrics[metric] + effects[metric], 0, 100)
            }
        }

        if (effects.set) {
            for (const effect of effects.set) {
                const parameter = effect[0];
                state.parameters[parameter] = effect[1];
            }
        }

        if (effects.add) {
            for (const effect of effects.add) {
                const parameter = effect[0];
                const currentValue = state.parameters[parameter] || 0;
                state.parameters[parameter] = currentValue + effect[1];
            }
        }
    }
}

// TODO: Move to utils.js or something?
function chooseRandomFromArray(arr) {
    const randIndex = Math.floor(Math.random() * (arr.length - 1));
    return arr[randIndex];
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}