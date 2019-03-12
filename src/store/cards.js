import doctor from '../assets/cards/doctor.png';
import dog from '../assets/cards/dog.png';
import prince from '../assets/cards/prince.png';
import princess from '../assets/cards/princess.png';
import skeleton from '../assets/cards/skeleton.png';
import sorceress from '../assets/cards/sorceress.png';

const characters = {
    president: {
        img: doctor,
        name: 'הנשיא',
    },
    consultant: {
        img: dog,
        name: 'היועץ',
    },
    ministerEducation: {
        img: prince,
        name: 'שר החינוך',
    },
    ministerTreasury: {
        img: princess,
        name: 'שר האוצר',
    },
    foreignEmissary: {
        img: skeleton,
        name: 'שליח ממלכת פיסטוקיה',
    },
    foreignAmbassador: {
        img: sorceress,
        name: 'שגריר פיסטוקיה',
    },
    foreignKing: {
        img: doctor,
        name: 'מלך פיסטוקיה',
    },
    protest: {
        img: dog,
        name: 'מחאה',
    },
    news: {
        img: skeleton,
        name: 'חדשות',
    },
};

export default {
    // Special game cards.
    'loseSecurity': {
        // Cards can specify either a character or an image and name.
        id: 'loseSecurity',
        img: 'loseSecurity',
        name: 'הפסדת את השלטון',
        text: 'אתה. חלש. הצבא מפיל את השלטון.',
        left: {
            text: 'אוי...',
            // The effects of the lose cards are hard coded. No need to specify them.
        },
        right: {
            text: 'הוי...',
        },
        // Cards add 1 year when played. This property indicates that the card should not advance time.
        advanceTime: false,
        // A locked card can only appear if it is the 'nextCard' of the previous choice or
        // if it is unlocked at 'unlockCards' (or if it is hard coded like the lose cards).
        locked: true,
    },
    '1': {
        id: '1',
        character: characters.president,
        text: 'כבוד השר, האם תרצה להיות השליט?',
        left: {
            text: 'כן',
            // A preset card to show after this choice.
            nextCard: '3',
            // Unlock cards are added to the pool of cards and show up randomly in this term.
            // These cards are locked again after the game is lost.
            //unlockCards: ['15'],
            // Cards that are unlocked forever remain unlocked after a game is lost and can
            // appear in the next games as well.
            //unlockCardsForever: ['20'],
        },
        right: {
            text: 'לא',
            nextCard: '2',
        },
        // Cards add 1 year when played. This property indicates that the card should not advance time.
        advanceTime: false,
        // This card is locked because it only appears at the start of the game.
        locked: true,
    },
    '3': {
        id: '3',
        character: characters.consultant,
        text: 'המצב הכלכלי קשה - המדינה בגירעון',
        left: {
            text: 'נקצץ בבריאות',
            effects: {
                // These metrics are basic, so no need to specify how they change the value.
                // They are always added to the value of the metric.
                economy: 100,
                //security: 0,
                image: -100,
                //religion: 0,
                add: {
                    // We can modify a variable with 'add' so if it gets to a certain value
                    // it might unlock new cards. For example, weaken the justice system 3
                    // times and you can get away with crime.
                    health: -1,
                },
                // Answers can specify this field so the player will finish the current sequence of cards
                // before losing.
                // dontLose: true,
            },
        },
        right: {
            text: 'נעלה מיסים',
            effects: {
                economy: 100,
                image: -100,
                set: {
                    // We can set a variable's value and use it as a flag. Here it means that
                    // the people could remember that you raised taxes.
                    taxes: 1,
                },
            },
        },
        locked: true,
        // Define conditions to have a card unlock automatically after some choices were made.
        // The unlocked card will be added to the pool of random cards.
        // Cards with conditions are automatically locked, but you could also add locked: true
        // if you want them to unlock after a certain choice AND after the conditions are met.
        // (This means we have to keep track of the IDs of unlocked cards).
        // Note that conditions should be checked whenever parameters are changed because cards
        // could go back to being locked if their conditions are not met.
        /*conditions: {
            justice: {
                lessThan: -4,
            },
        },*/
    }
};
