import { err } from '../utils/Logger';

let send = () => {};

const categories = {
    SCREEN: 'screen',
    CARD: 'card'
};

export const CATEGORIES = Object.keys(categories).reduce((acc, key) => {
    acc[key] = key;
    return acc;
}, {});

if (typeof window.ga === 'function') {
    send = function (category, event, label, value) {
        try {
            if (categories[category]) {
                window.ga('send', 'event', categories[category], event, label, value);
            }
        } catch (e) {
            err('Failed to send analytics', e);
        }
    }
}

export const sendEvent = send;