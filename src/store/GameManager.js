import {DEFAULT_METRICS_POINTS} from "./reducer";

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

export default class GameManager {
    constructor(cards, boosters, blameBoosters) {
        this._cards = cards;
        this._boosters = boosters;
        this._blameBoosters = blameBoosters;
    }

    getNextLevel(state, selectedSide) {
        // TODO: If a new game check if passed tutorial.
        //       If so, show a random starting card. newGameXX
        //       (if first game after tutorial, show afterTutorial)
        //       If not, start with the tutorial card.
        let nextCardId = '10';
        const card = state ? state.card : null;

        if (!card) {
            return {
                ...state,
                card: this._cards[nextCardId],
            };
        }

        if (card.lose) {
            state.hasLost = true;
            console.log('Game Over');
            // TODO: Move this code to newGame action.
            // TODO: Select random new game card.
            state.card = this._cards['newGame01'];
            for (const metric of Object.keys(state.metrics)) {
                state.metrics[metric] = DEFAULT_METRICS_POINTS;
            }
            // TODO: Delete the non persistent parameters.
            //state.parameters = {};
            state.history.push({
                from: state.year - state.yearsInPower,
                to: state.year,
            });
            state.year = state.year + 1;
            state.yearsInPower = 0;
            state.hasWon = false;
            state.hasLost = false;
            state.cardsUnlocked.clear();
            state.playedCards.clear();
            state.boosters = [];
            return state;
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
            nextCardId = answer.next;
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

            this._applyBoostersEffects(state);

            if (answer.effects) {
                GameManager._applyEffects(state, answer.effects);
            }

            // Achievements.
            if (answer.achievement) {
                console.log('Achievement!', answer.achievement);
                if (!state.achievements[answer.achievement]) {
                    state.achievements[answer.achievement] = state.year;
                    // TODO: Show achievement UI.
                }
            }

            // Boosters.
            if (answer.booster) {
                console.log('Booster!', answer.booster);
                this._enableBooster(state, answer.booster);
                // TODO: Show booster UI.
            }

            if (answer.afterText) {
                // TODO: Show after text somehow.
            } else if (!answer.dontLose) {
                // Check if metrics are 0. If so, select a lost card.
                nextCardId = GameManager._checkMetrics(state.metrics, nextCardId);
            }

            if (answer.advanceTime !== false) {
                state.year += 1;
                state.yearsInPower += 1;
            }
        }

        // If the next card is not predetermined, select a random card.
        if (!nextCardId) {
            console.log('Selecting a random card...');
            nextCardId = this._selectRandomCard(state);
        }
        const nextCard = this._cards[nextCardId];
        console.log('Next card:', nextCardId,
            'Name:', nextCard.character && nextCard.character.name,
            'Text:', nextCard.text);
        if (!nextCard.character && !nextCard.name) {
            console.error('Undefined character or name at card', nextCardId);
        }

        return {
            ...state,
            card: nextCard,
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
                && !GameManager._checkConditions(state.parameters, card.conditions, card.id)) {
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

    _applyBoostersEffects(state) {
        for (const booster of Object.keys(state.boosters)) {
            const effects = this._boosters[booster].effects;
            if (!effects) continue;

            for (const metric of Object.keys(state.metrics)) {
                if (effects[metric]) {
                    state.metrics[metric] = clamp(state.metrics[metric] + effects[metric], 0, 100)
                }
            }
        }
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

    _enableBooster(state, booster) {
        if (booster.endsWith('Remove')) {
            booster = booster.substring(0, booster.length - 6);
            if (!state.boosters[booster]) {
                console.error('Booster', booster, 'removed when not active');
            }
            state.boosters[booster] = false;
            return;
        }
        if (booster.startsWith('blame')) {
            for (const blameBooster of this._blameBoosters) {
                state.boosters[blameBooster] = false;
            }
        }
        state.boosters[booster] = true;
    }

    static _checkMetrics(metrics, nextCardId) {
        for (const metric of Object.keys(metrics)) {
            if (metrics[metric] <= 0) {
                return metric + 'Lose';
            }
        }
        return nextCardId;
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