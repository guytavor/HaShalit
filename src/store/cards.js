import loseSecurity from '../assets/cards/skeleton.png';
import president from '../assets/cards/doctor.png';
import consultant from '../assets/cards/dog.png';
import ministerEducation from '../assets/cards/prince.png';
import ministerTreasury from '../assets/cards/princess.png';
import foreignEmissary from '../assets/cards/sorceress.png';
import foreignAmbassador from '../assets/cards/sorceress.png';
import foreignKing from '../assets/cards/sorceress.png';
import protest from '../assets/cards/sorceress.png';
import news from '../assets/cards/sorceress.png';
import opposition from '../assets/cards/sorceress.png';
import rabi from '../assets/cards/sorceress.png';
import wife from '../assets/cards/sorceress.png';
import tycoon from '../assets/cards/sorceress.png';
import general from '../assets/cards/sorceress.png';

const characters = {
    president: {
        img: president,
        name: 'הנשיא',
    },
    consultant: {
        img: consultant,
        name: 'היועץ',
    },
    ministerEducation: {
        img: ministerEducation,
        name: 'שר החינוך',
    },
    ministerTreasury: {
        img: ministerTreasury,
        name: 'שר האוצר',
    },
    foreignEmissary: {
        img: foreignEmissary,
        name: 'שליח ממלכת פיסטוקיה',
    },
    foreignAmbassador: {
        img: foreignAmbassador,
        name: 'שגריר פיסטוקיה',
    },
    foreignKing: {
        img: foreignKing,
        name: 'מלך פיסטוקיה',
    },
    protest: {
        img: protest,
        name: 'מחאה',
    },
    news: {
        img: news,
        name: 'חדשות',
    },
    opposition: {
        img: opposition,
        name: 'האופוזיציה',
    },
    rabi: {
        img: rabi,
        name: 'הרב הראשי',
    },
    wife: {
        img: wife,
        name: 'האישה',
    },
    tycoon: {
        img: tycoon,
        name: 'רמטכ"ל',
    },
    general: {
        img: general,
        name: 'הרמטכ"ל',
    },
};

const cards = {
    // Special game cards.
    'loseSecurity': {
        // Cards can specify either a character or an image and name.
        img: loseSecurity,
        name: 'הפסדת את השלטון',
        text: 'אתה. חלש. הצבא מפיל את השלטון.',
        // A locked card can only appear if it is the 'nextCard' of the previous choice or
        // if it is unlocked at 'unlockCards' (or if it is hard coded like the lose cards).
        locked: true,
        lose: true,
    },
    '10': {
        character: characters.president,
        text: 'כבוד השר, האם תרצה להיות השליט?',
        left: {
            text: 'לא',
            next: '20',
            advanceTime: false,
        },
        right: {
            text: 'כן',
            next: '30',
            advanceTime: false,
        },
        locked: true,
    },
    '20': {
        character: characters.president,
        text: 'העם בחר בך! תהיה גבר',
        left: {
            text: 'אשתדל',
            next: '30',
            advanceTime: false,
        },
        right: {
            text: 'טוב',
            next: '30',
            advanceTime: false,
        },
        locked: true,
    },
    '30': {
        character: characters.consultant,
        text: 'המצב הכלכלי קשה - המדינה בגירעון',
        left: {
            text: 'קצץ בתקציב הבריאות',
            achievement: 'economy',
            effects: {
                economy: 100,
                image: -100,
            },
        },
        right: {
            text: 'העלאת המיסים',
            achievement: 'economy',
            effects: {
                economy: 100,
                image: -100,
            },
        },
        locked: true,
    },
    '40': {
        character: characters.protest,
        text: 'מחירי חבילות הנופש ביוון מרקיעות שחקים',
        left: {
            text: 'המדינה תסבסד',
            effects: {
                economy: -30,
                image: 20,
            },
        },
        right: {
            text: 'פזר ההפגנות בכל מחיר',
            unlockCards: ['50'],
            effects: {
                economy: 20,
                security: 20,
                image: -40,
            },
        },
    },
    '50': {
        character: characters.news,
        text: 'אלימות משטרתית - 2 הרוגים בפיזור ההפגנות',
        left: {
            text: 'קח אחריות',
            effects: {
                security: -20,
                image: -40,
            },
        },
        right: {
            text: 'פטר את המפכ״ל',
            unlockCards: ['60'],
            effects: {
                security: -20,
                image: 20,
            },
        },
        locked: true,
    },
    '60': {
        character: characters.consultant,
        text: 'המפכ״ל לשעבר מתכנון הפיכה בשיתוף האופוזיציה',
        left: {
            text: 'תקנות לשעות חרום',
            next: '65',
            effects: {
                security: 10,
            },
            advanceTime: false,
        },
        right: {
            text: 'להעמיד אותו לדין',
            unlockCards: ['70'],
            effects: {
                security: -20,
                image: 20,
            },
        },
        locked: true,
    },
    '65': {
        character: characters.consultant,
        text: 'ביטול הבחירות על לשיקום הדמוקרטיה?',
        left: {
            text: 'כן',
            next: 'victory',
            effects: {
                image: 100,
            },
        },
        right: {
            text: 'לא',
            effects: {
                image: -10,
            },
        },
        locked: true,
    },
    '70': {
        character: characters.news,
        text: 'המפכ״ל הקליט אותך אומר לפזר את ההפגנות באלימות',
        left: {
            text: 'איך...',
            effects: {
                image: -100,
            },
        },
        right: {
            text: 'מה...?',
            effects: {
                image: -100,
            },
        },
        locked: true,
    },
    '80': {
        character: characters.news,
        text: 'שורפים דגלי ישראל בפיסטוקיה',
        left: {
            text: 'בוא נדבר איתם',
            unlockCards: ['90'],
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'נתק את הקשרים',
            effects: {
                economy: -20,
                image: 20,
            },
        },
    },
    '90': {
        character: characters.foreignAmbassador,
        text: 'המלך רוצה לעשות סולחה ולחתום על הסכמי סחר',
        left: {
            text: 'נסתדר לבד, תודה',
            effects: {
                economy: -20,
                image: 20,
            },
        },
        right: {
            text: 'יאללה',
            effects: {
                economy: 20,
                security: -20,
                image: -20,
            },
        },
        locked: true,
    },
    '100': {
        character: characters.news,
        text: 'קרבות בגבול',
        left: {
            text: 'נחסל את אויבנו',
            effects: {
                economy: -20,
                security: -20,
                image: 50,
            },
        },
        right: {
            text: 'נושיט יד לשלום',
            achievement: 'peace',
            effects: {
                economy: 20,
                security: 20,
                image: -10,
                set: [
                    ['madePeace', 1],
                ],
            },
        },
        locked: true,
    },
    '110': {
        character: characters.opposition,
        text: 'השלום הוא כניעה לטרור ומכירת חיסול',
        left: {
            text: 'הכלבים נובחים והשיירה עוברת',
            effects: {
                image: -30,
            },
        },
        right: {
            text: 'האשם את האופוזיציה בבוגדנות',
            effects: {
                image: 20,
            },
        },
    },
    '120': {
        character: characters.rabi,
        text: 'רב בת״א ערך חתונה חד-מינית',
        left: {
            text: 'הכנס אותו לכלא',
            achievement: 'anti_gay',
            effects: {
                image: -10,
                religion: 30,
            },
        },
        right: {
            text: 'לא אכפת לי',
            effects: {
                religion: -30,
            },
        },
    },
    '130': {
        character: characters.rabi,
        text: 'חנות כתבה על אוכל ״כשר״ למרות שלא שילמו לנו על תעודת כשרות',
        left: {
            text: 'העיקר שהאוכל כשר',
            effects: {
                economy: 20,
                religion: -30,
            },
        },
        right: {
            text: 'סגור את החנות',
            effects: {
                religion: 30,
            },
        },
    },
    '140': {
        character: characters.protest,
        text: 'שוייון בנטל - יש לגייס גם חרדים',
        left: {
            text: 'גייסו אותם',
            achievement: 'giyus',
            effects: {
                economy: 10,
                image: 10,
                religion: -50,
            },
        },
        right: {
            text: 'סדרו להם קומבינה',
            effects: {
                economy: -10,
                religion: 30,
            },
        },
    },
    '150': {
        character: characters.consultant,
        text: 'אם נאשים את הערבים בכל מה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'כן',
            afterText: 'שוטרים יורים במחמד אלחפ-מפשעי. השב״כ: לא היה איום, היה בדרכו לעבודה. החקירה נסגרת מחוסר עניין לציבור',
            effects: {
                image: 20,
            },
            booster: 'blameArabs',
        },
        right: {
            text: 'לא',
            effects: {
                image: -10,
            },
        },
    },
    '160': {
        character: characters.consultant,
        text: 'אם נאשים את החרדים בכל מה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'לא',
            effects: {
                economy: 10,
                image: -30,
                religion: 10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                image: 30,
                religion: -30,
            },
            booster: 'blameDos',
        },
    },
    '170': {
        character: characters.wife,
        text: 'אתה נוסע לחו״ל כל הזמן, קח אותי איתך',
        left: {
            text: 'לא',
            effects: {
                economy: 10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -10,
                image: 30,
                set: [
                    ['withWife', 1],
                ],
            },
        },
    },
    '180': {
        character: characters.consultant,
        text: 'אביב הגיע פסח בא',
        left: {
            text: 'חופשה בחול עם המשפחה',
            effects: {
                economy: -10,
                image: 20,
            },
        },
        right: {
            text: 'חופשה באילת עם המשפחה',
            effects: {
                image: 10,
            },
        },
    },
    '190': {
        character: characters.protest,
        text: 'רוצים שלום',
        left: {
            text: 'כנס ועידה בינלאומית',
            next: '193',
            unlockCards: ['193'],
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'אין פרטנר',
            effects: {
                image: 0,
            },
        },
    },
    '193': {
        character: characters.consultant,
        text: 'בשיחות השלום, פיסטוקיה דורשים התנצלות',
        left: {
            text: 'התנצל',
            achievement: 'peace',
            effects: {
                image: -10,
                set: [
                    ['madePeace', 1],
                ],
            },
        },
        right: {
            text: 'חזור הביתה',
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '200': {
        character: characters.rabi,
        text: 'להוציא את דארווין מתוכנית הלימודים',
        left: {
            text: 'לא',
            effects: {
                image: 10,
                religion: -30,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -10,
                image: -10,
                religion: 40,
            },
        },
    },
    '202': {
        character: characters.consultant,
        text: 'הורד מיסים לעשירים עכשיו, והם יצביעו לנו אח""כ',
        left: {
            text: 'לא',
            effects: {
                economy: 10,
                image: -10,
            },
        },
        right: {
            text: 'כן',
            afterText: '25% מהלדים בישראל מתחת לקו העוני',
            effects: {
                security: -20,
                image: 30,
            },
        },
    },
    '205': {
        character: characters.ministerEducation,
        text: 'וועדת המקצוע באזרחות כופה על כולנו ללמוד את דת הדמוקרטיה',
        left: {
            text: 'דמוקרטיה היא הבטחון שלנו',
            effects: {
                economy: 10,
                image: 10,
            },
        },
        right: {
            text: 'בטל את ה״הדתה״ בחינוך',
            effects: {
                economy: -15,
                security: -15,
                religion: 20,
            },
        },
    },
    '210': {
        character: characters.ministerEducation,
        text: 'אנחנו צריכים להכריע את פיסטוקיה ולרסן את בג״צ',
        left: {
            text: 'לא',
            effects: {
                image: 5,
                religion: -10,
            },
        },
        right: {
            text: '״השופטים פוגעים בבטחון המדינה״',
            effects: {
                image: 10,
                religion: 5,
            },
        },
    },
    '220': {
        character: characters.consultant,
        text: 'דעת הקהל מוטה ע״י החדשות. צריך אמצעי השפעה.',
        left: {
            text: 'הקם ערוץ טלויזיה',
            unlockCardsForever: ['230'],
            effects: {
                economy: -20,
            },
            booster: 'ownMedia',
        },
        right: {
            text: 'העיתונות צריכה להיות חופשית',
            effects: {
                image: -30,
            },
        },
    },
    '230': {
        character: characters.consultant,
        text: 'ערוץ הטלויזיה עולה לנו הון',
        left: {
            text: 'זה מחיר ההצלחה',
            effects: {
                economy: 20,
                image: -20,
            },
        },
        right: {
            text: 'הזמן את הטייקון הטחון',
            next: '240',
            unlockCardsForever: ['240250'],
        },
        locked: true,
    },
    '240': {
        character: characters.tycoon,
        text: 'אממן את הערוץ, בשמחה. בכיף. למה לא?',
        left: {
            text: 'כן',
            effects: {
                economy: 20,
                image: 20,
            },
        },
        right: {
            text: 'לא',
            effects: {
                economy: -10,
            },
        },
        locked: true,
    },
    '250': {
        character: characters.tycoon,
        text: 'אני רוצה להכנס לעסקי התיירות הרפואית, אבל החוק לא מאפשר',
        left: {
            text: 'הכלכלה היא קטר הרכבת',
            unlockCardsForever: ['260'],
            effects: {
                economy: 20,
                image: 10,
            },
        },
        right: {
            text: 'לא. הזקנה במסדרון חשובה לי',
            effects: {
                economy: -10,
                image: 5,
            },
        },
        locked: true,
    },
    '260': {
        character: characters.ministerTreasury,
        text: 'המצאתי תוכנית להורדת מחירי הדיור',
        left: {
            text: 'אני אקח קרדיט על התוכנית',
            afterText: 'העם מעריץ את היכולת שלך לפעול לטובתו. פקידי האוצר נעלבו וחיבלו בתוכנית. המחירים נשארים גבוהים, אבל הי, העיקר שצברת פופולריות',
            effects: {
                economy: -10,
                image: 30,
            },
        },
        right: {
            text: 'שאפו!',
            effects: {
                economy: 20,
                image: 10,
            },
        },
    },
};

for (const id of Object.keys(cards)) {
    cards[id].id = id;
}

export default cards;
