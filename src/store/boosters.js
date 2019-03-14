export const boosters = {
    blameArabs: {
        text: 'הערבים לוקחים לנו את העבודות! רוב הציבור ילך איתך',
        effects: {
            image: 5,
            security: -5,
        },
    },
    blameDos: {
        text: 'הדוסים האלו! רוב הציבור ילך איתך, אבל הרבנות תעשה לך צרות',
        effects: {
            image: 5,
            religion: -5,
        },
    },
    ownMedia: {
        text: 'כן! זה יוודא שהעם יידע איזה גבר אתה ושהאופוזיציה זבל',
        effects: {
            image: 5,
        },
    },
    ownMediaRemove: {
        text: 'האחיזה שלנו בתקשורת התרופפה',
    },
};

export const blameBoosters = [];
for (const booster of Object.keys(boosters)) {
    if (booster.startsWith('blame')) {
        blameBoosters.push(booster);
    }
}

export default {boosters, blameBoosters};
