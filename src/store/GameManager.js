import { log } from '../utils/Logger';
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

const persistentParameters = ['bad', 'madePeace', 'peaceTalks', 'tycoon'];

export default class GameManager {
    constructor({cards, newGameCards, boosters, blameBoosters, startAt}) {
        this._startAt = startAt;
        this._cards = cards;
        this._newGameCards = newGameCards;
        this._boosters = boosters;
        this._blameBoosters = blameBoosters;
    }

    startNewGame(state) {
        // If didn't play any games yet, it means the player just finished the tutorial.
        let nextCardId = 'afterTutorial';
        if (state.games > 0) {
            // After completing the first real game, show a random new game card.
            nextCardId = chooseRandomFromArray(this._newGameCards);
        }
        state.games = state.games + 1;
        state.card = this._cards[nextCardId];

        // Reset metrics.
        for (const metric of Object.keys(state.metrics)) {
            state.metrics[metric] = DEFAULT_METRICS_POINTS;
        }

        // Delete the non persistent parameters.
        const newParameters = {};
        for (const parameter of Object.keys(state.parameters)) {
            if (persistentParameters.includes(parameter)) {
                newParameters[parameter] = state.parameters[parameter];
            }
        }
        state.parameters = newParameters;

        // Add term to history.
        state.history.push({
            from: state.year - state.yearsInPower,
            to: state.year,
        });

        // Reset years in power.
        state.year = state.year + 1;
        state.yearsInPower = 0;

        state.hasWon = false;
        state.hasLost = false;

        state.cardsUnlocked.clear();
        state.playedCards.clear();

        state.boosters = {};
        return state;
    }

    getNextLevel(state, selectedSide) {
        let nextCardId = this._startAt || '1';
        const card = state ? state.card : null;

        if (!card) {
            return {
                ...state,
                card: this._cards[nextCardId],
            };
        }

        if (card.lose) {
            state.hasLost = true;
            log('Game Over');
            return state;
        }

        if (card.win) {
            state.hasWon = true;
            log('Victory');
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
                    log('Unlocked card:', unlockedCardId);
                    state.cardsUnlocked.add(unlockedCardId);
                }
            }
            if (answer.unlockCardsForever) {
                for (const unlockedCardId of answer.unlockCardsForever) {
                    log('Unlocked card:', unlockedCardId);
                    state.cardsUnlockedForever.add(unlockedCardId);
                }
            }

            if (answer.advanceTime !== false) {
                this._applyBoostersEffects(state);
            }

            if (answer.effects) {
                GameManager._applyEffects(state, answer.effects);
            }

            GameManager._clampMetrics(state);

            // Achievements.
            if (answer.achievement) {
                log('Achievement!', answer.achievement);
                if (!state.achievements[answer.achievement]) {
                    state.achievements[answer.achievement] = state.year;
                    // TODO: Show achievement UI.
                }
            }

            // Boosters.
            if (answer.booster) {
                log('Booster!', answer.booster);
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
            log('Selecting a random card...');
            nextCardId = this._selectRandomCard(state);

            if (!nextCardId) {
                nextCardId = 'outOfCards';
            }
        }
        const nextCard = this._cards[nextCardId];
        log('Next card:', nextCardId,
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
        log('Available cards:', availableCards);

        // Give more chance to play unlocked cards to increase causation.
        if (Math.random() < 0.3) {
            // Select card from unlocked cards.
            let unlockedAvailableCards = [];
            for (const id of availableCards) {
                if (state.cardsUnlocked.has(id)) {
                    unlockedAvailableCards.push(id);
                }
            }
            if (unlockedAvailableCards.length > 0) {
                return chooseRandomFromArray(unlockedAvailableCards);
            }
            // No luck. Try the cards that are unlocked forever.
            for (const id of availableCards) {
                if (state.cardsUnlockedForever.has(id)) {
                    unlockedAvailableCards.push(id);
                }
            }
            if (unlockedAvailableCards.length > 0) {
                return chooseRandomFromArray(unlockedAvailableCards);
            }
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
                const value = conditions[condition];
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
                    // TODO: Uncomment when boosters UI will be implemented.
                    //state.metrics[metric] = state.metrics[metric] + effects[metric]
                }
            }
        }
    }

    static _applyEffects(state, effects) {
        for (const metric of Object.keys(state.metrics)) {
            if (effects[metric]) {
                state.metrics[metric] = state.metrics[metric] + effects[metric]
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

    static _clampMetrics(state) {
        for (const metric of Object.keys(state.metrics)) {
            state.metrics[metric] = clamp(state.metrics[metric], 0, 100);
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
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}