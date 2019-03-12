export default class CardManager {
    constructor(cards) {
        this._cards = cards;
    }

    getNextLevel(state, selectedSide) {
        let nextCardId = '1';
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
            // TODO: Implement game over.
            console.log('Game Over');
        }

        if (card.win) {
            // TODO: Implement victory.
            console.log('Victory');
        }

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
            if (card.conditions) {
                let areConditionsMet = true;
                for (const parameter of Object.keys(card.conditions)) {
                    const condition = card.conditions[parameter];
                    const currentValue = state.parameters[parameter] || 0;
                    if ((condition.equals && currentValue !== condition.equals) ||
                        (condition.notEquals && currentValue === condition.notEquals) ||
                        (condition.lessThan && currentValue >= condition.lessThan) ||
                        (condition.lessThanOrEqual && currentValue > condition.lessThanOrEqual) ||
                        (condition.greaterThan && currentValue <= condition.greaterThan) ||
                        (condition.greaterThanOrEqual && currentValue < condition.greaterThanOrEqual)) {
                        areConditionsMet = false;
                        break;
                    }
                }
                if (!areConditionsMet) {
                    continue;
                }
            }
            availableCards.push(id);
        }
        return chooseRandomFromArray(availableCards);
    }

    static _applyEffects(state, effects) {
        for (const metric of Object.keys(state.metrics)) {
            if (effects[metric]) {
                state.metrics[metric] = clamp(state.metrics[metric] + effects[metric], 0, 100)
            }
        }

        if (effects.set) {
            for (const parameter of Object.keys(effects.set)) {
                state.parameters[parameter] = effects.set[parameter];
            }
        }

        if (effects.add) {
            for (const parameter of Object.keys(effects.add)) {
                const currentValue = state.parameters[parameter] || 0;
                state.parameters[parameter] = currentValue + effects.add[parameter];
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