import { log } from '../utils/Logger';

import loseEconomy from '../assets/cards/game_loseEconomy.svg';
import loseSecurity from '../assets/cards/game_loseSecurity.svg';
import loseImage from '../assets/cards/game_loseImage.svg';
import loseReligion from '../assets/cards/game_loseReligion.svg';
import outOfCards from '../assets/cards/game_outOfCards.svg';
import victory from '../assets/cards/game_victory.svg';
import newGame from '../assets/cards/game_newGame.svg';
import president from '../assets/cards/game_president.svg';
import consultant from '../assets/cards/game_consultant.svg';
import ministerEducation from '../assets/cards/game_ministerEducation.svg';
import ministerTreasury from '../assets/cards/game_ministerTreasury.svg';
import foreignAmbassador from '../assets/cards/game_foreignAmbassador.svg';
import foreignKing from '../assets/cards/game_foreignKing.svg';
import protest from '../assets/cards/game_protest.svg'; 
import news from '../assets/cards/game_news.svg';
import opposition from '../assets/cards/game_opposition.svg';
import rabi from '../assets/cards/game_rabi.svg';
import wife from '../assets/cards/game_wife.svg';
import tycoon from '../assets/cards/game_tycoon.svg';
import general from '../assets/cards/game_general.svg';

const characters = {
    newGame: {
        img: newGame,
        name: 'בחירות',
    },
    president: {
        img: president,
        name: 'כבוד הנשיא',
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
        name: 'הטייקון הטחון',
    },
    general: {
        img: general,
        name: 'הרמטכ"ל',
    },
};

export const cards = {
    // Special game cards.
    'victory': {
        img: victory,
        name: 'ניצחון!',
        text: 'הבחירות בוטלו! השלטון שלך לעולמים!',
        locked: true,
        win: true,
    },
    'economyLose': {
        // Cards can specify either a character or an image and name.
        img: loseEconomy,
        name: 'הפסדת את השלטון',
        text: 'המדינה בפשיטת רגל, הבנק העולמי משתלט על ניהול המדינה',
        // A locked card can only appear if it is the 'nextCard' of the previous choice or
        // if it is unlocked at 'unlockCards' (or if it is hard coded like the lose cards).
        locked: true,
        lose: true,
    },
    'securityLose': {
        img: loseSecurity,
        name: 'הפסדת את השלטון',
        text: 'אתה. חלש. הלכה המדינה',
        locked: true,
        lose: true,
    },
    'imageLose': {
        img: loseImage,
        name: 'הפסדת את השלטון',
        text: 'מחאה חברתית - אזלו האוהלים מריקושט',
        locked: true,
        lose: true,
    },
    'religionLose': {
        img: loseReligion,
        name: 'הפסדת את השלטון',
        text: 'החרדים מפילים את הממשלה',
        locked: true,
        lose: true,
    },
    'outOfCards': {
        img: outOfCards,
        name: 'הפסדת את השלטון',
        text: 'כל כך הרבה שנים בשלטון ומה אתה עשית בשביל מדינה? העם מאס בך ודורש בחירות',
        locked: true,
        lose: true,
    },
    'afterTutorial': {
        character: characters.newGame,
        text: 'היום ה-10 באפריל. תוצאות הבחירות הגיעו ואתה נבחרת שוב',
        left: {
            text: 'באמת? אני?',
            advanceTime: false,
        },
        right: {
            text: 'לא היה לי ספק',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame01': {
        character: characters.newGame,
        text: 'כל הקולות נספרו - למרות הכל, נבחרת שוב',
        left: {
            text: 'עוד הפעם?',
            advanceTime: false,
        },
        right: {
            text: 'ברור, העם איתי',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame02': {
        character: characters.newGame,
        text: 'התוצאות הגיעו, אדוני ראש הממשלה',
        left: {
            text: 'בואו נתחיל במלאכה',
            advanceTime: false,
        },
        right: {
            text: 'ראיתי את זה מגיע',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame03': {
        character: characters.newGame,
        text: 'הם בחרו בך שוב! איך אתה עושה את זה??',
        left: {
            text: 'זו קללה',
            advanceTime: false,
        },
        right: {
            text: 'זו ברכה',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame04': {
        character: characters.newGame,
        text: 'ניצחת בבחירות!',
        left: {
            text: 'העם ניצח',
            advanceTime: false,
        },
        right: {
            text: 'ואמשיך לנצח',
            advanceTime: false,
        },
        locked: true,
    },
    // Paste here //
    '1': {
        character: characters.consultant,
        text: 'ברוכים הבאים! גרור את הקלף ימינה או שמאלה כדי לראות את התשובות',
        left: {
            text: 'מעניין. ומה בצד השני?',
            next: '2',
            advanceTime: false,
        },
        right: {
            text: 'בדקת גם את הצד האחר?',
            next: '2',
            advanceTime: false,
        },
        locked: true,
    },
    '2': {
        character: characters.consultant,
        text: 'מעולה. אתה יודע איך לשחק?',
        left: {
            text: 'לא ממש',
            next: '4',
            advanceTime: false,
        },
        right: {
            text: 'כן',
            next: '3',
            advanceTime: false,
        },
        locked: true,
    },
    '3': {
        character: characters.consultant,
        text: 'אולי בכל זאת אזכיר לך?',
        left: {
            text: 'תן לשחק כבר!',
            next: '9',
            advanceTime: false,
        },
        right: {
            text: 'אוקיי יאללה',
            next: '4',
            advanceTime: false,
        },
        locked: true,
    },
    '4': {
        character: characters.consultant,
        text: 'כל בחירה משנה את המדדים שלמעלה',
        left: {
            text: 'העלה תדמית',
            next: '6',
            effects: {
                image: 30,
                religion: -30,
            },
            advanceTime: false,
        },
        right: {
            text: 'העלה רבנות',
            next: '5',
            effects: {
                image: -30,
                religion: 30,
            },
            advanceTime: false,
        },
        locked: true,
    },
    '5': {
        character: characters.consultant,
        text: 'כשאחד המדדים מתרוקן, אתה תאבד את השלטון',
        left: {
            text: 'אשפץ את התדמית',
            next: '9',
            effects: {
                image: 30,
                religion: -30,
            },
            advanceTime: false,
        },
        right: {
            text: 'אשמור על איזון',
            next: '9',
            effects: {
                image: 30,
                religion: -30,
            },
            advanceTime: false,
        },
        locked: true,
    },
    '6': {
        character: characters.consultant,
        text: 'כשאחד המדדים מתרוקן, אתה תאבד את השלטון',
        left: {
            text: 'אתחנף לרבנות',
            next: '9',
            effects: {
                image: -30,
                religion: 30,
            },
            advanceTime: false,
        },
        right: {
            text: 'אשמור על איזון',
            next: '9',
            effects: {
                image: -30,
                religion: 30,
            },
            advanceTime: false,
        },
        locked: true,
    },
    '9': {
        character: characters.consultant,
        text: 'יאללה! מתחילים! כמה שנים תוכל להשאר בשלטון?',
        left: {
            text: 'בוא אני אראה לך',
            next: '10',
            advanceTime: false,
        },
        right: {
            text: 'אני מדהים במשחק הזה',
            next: '10',
            advanceTime: false,
        },
        locked: true,
    },
    '10': {
        character: characters.president,
        text: 'כבודו, אני שמח לבשר לך שנבחרת. האם תרצה להיות המלך?',
        left: {
            text: 'לא ממש',
            next: '20',
            advanceTime: false,
        },
        right: {
            text: 'כמובן',
            next: '30',
            advanceTime: false,
        },
        locked: true,
    },
    '20': {
        character: characters.president,
        text: 'העם בחר בך! תהיה גבר',
        left: {
            text: 'אשתדל לשרת את העם',
            next: '30',
            advanceTime: false,
        },
        right: {
            text: 'אשתדל לעבוד על השרירים',
            next: '30',
            advanceTime: false,
        },
        locked: true,
    },
    '30': {
        character: characters.consultant,
        text: 'המצב הכלכלי קשה - המדינה בגירעון',
        left: {
            text: 'העלה מיסים',
            achievement: 'economy',
            effects: {
                economy: 100,
                image: -100,
            },
        },
        right: {
            text: 'קצץ בתקציב הבריאות',
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
        text: 'עלות הנופש ביוון מרקיע שחקים',
        left: {
            text: 'המדינה תסבסד',
            effects: {
                economy: -20,
                image: 20,
            },
        },
        right: {
            text: 'פזר הפגנות בכח',
            next: '50',
            effects: {
                economy: -5,
                security: 20,
                image: -40,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        conditions: [
            ['firedMafcal', {
                equals: 0,
            }],
        ],
    },
    '50': {
        character: characters.news,
        text: 'אלימות משטרתית: שני הרוגים בפיזור הפגנות',
        left: {
            text: 'קח אחריות',
            effects: {
                security: -20,
                image: -40,
            },
        },
        right: {
            text: 'פטר את המפכ״ל',
            unlockCardsForever: ['60'],
            effects: {
                security: -20,
                image: 20,
                set: [
                    ['firedMafcal', 1],
                ],
            },
        },
        locked: true,
    },
    '60': {
        character: characters.consultant,
        text: 'המפכ״ל לשעבר מתכנן הפיכה',
        left: {
            text: 'להעמיד אותו לדין',
            next: '70',
            effects: {
                security: -10,
                image: 20,
            },
        },
        right: {
            text: 'תקנות לשעת חירום',
            next: '65',
            effects: {
                security: 10,
            },
            advanceTime: false,
        },
        locked: true,
    },
    '65': {
        character: characters.consultant,
        text: 'ביטול הבחירות עד לשיקום הדמוקרטיה?',
        left: {
            text: 'הגזמת',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'איפה לחתום?',
            next: 'victory',
            effects: {
                image: 100,
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
            text: 'נתק את הקשרים',
            next: '82',
            effects: {
                economy: -15,
                image: 20,
            },
        },
        right: {
            text: 'בוא נדבר איתם',
            unlockCardsForever: ['90'],
            effects: {
                image: -20,
                set: [
                    ['peaceTalks', 1],
                ],
            },
        },
        conditions: [
            ['peaceTalks', {
                equals: 0,
            }],
        ],
    },
    '82': {
        character: characters.ministerTreasury,
        text: 'משבר הפיסטוקים מחריף',
        left: {
            text: 'לחדש את הקשרים',
            unlockCardsForever: ['90'],
            effects: {
                economy: 10,
                security: -10,
                image: -10,
                set: [
                    ['peaceTalks', 1],
                ],
            },
        },
        right: {
            text: 'נכבוש את השדות!',
            effects: {
                economy: -5,
                security: 10,
                image: 10,
            },
        },
        locked: true,
    },
    '90': {
        character: characters.foreignAmbassador,
        text: 'מלך פיסטוקיה רוצה לעשות סולחה',
        left: {
            text: 'לא, תודה',
            effects: {
                economy: -15,
                image: 20,
                set: [
                    ['peaceTalks', 0],
                ],
            },
        },
        right: {
            text: 'יאללה',
            unlockCardsForever: ['920','1100'],
            effects: {
                economy: 0,
                security: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '100': {
        character: characters.news,
        text: 'קרבות בגבול',
        left: {
            text: 'נושיט יד לשלום',
            next: '193',
            effects: {
                economy: 10,
                security: -30,
                image: -10,
            },
        },
        right: {
            text: 'נחסל את אויבנו',
            unlockCardsForever: ['1200'],
            effects: {
                economy: -5,
                security: 10,
                image: 10,
            },
            booster: 'war',
        },
        conditions: [
            ['peaceTalks', {
                equals: 0,
            }],
        ],
    },
    '110': {
        character: characters.opposition,
        text: 'השלום הוא כניעה לטרור ומכירת חיסול',
        left: {
            text: 'קרא להם בוגדים',
            effects: {
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'אל תגיב',
            effects: {
                image: -30,
            },
        },
        conditions: [
            ['madePeace', {
                equals: 1,
            }],
        ],
    },
    '120': {
        character: characters.rabi,
        text: 'רב בת״א ערך חתונה חד-מינית',
        left: {
            text: 'אז מה?',
            effects: {
                religion: -30,
            },
        },
        right: {
            text: 'ישר לכלא',
            achievement: 'antiGay',
            effects: {
                image: -10,
                religion: 30,
            },
        },
    },
    '130': {
        character: characters.rabi,
        text: 'חנות תלתה שלט ״כשר״ אבל לא שילמה על תעודת כשרות',
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
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '140': {
        character: characters.protest,
        text: 'שוייון בנטל - יש לגייס גם חרדים',
        left: {
            text: 'המשך בקומבינה',
            effects: {
                religion: 30,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'גייס חרדים',
            achievement: 'giyus',
            effects: {
                economy: -10,
                image: 10,
                religion: -50,
            },
        },
    },
    '150': {
        character: characters.consultant,
        text: 'אם תאשים את הערבים במה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'הערבים אזרחים',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'הערבים נוהרים',
            afterText: 'שוטרים יורים במחמד אלחפ-מפשעי. השב״כ: לא היה איום, היה בדרכו לעבודה. החקירה נסגרת מחוסר עניין לציבור',
            effects: {
                security: -10,
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
            booster: 'blameArabs',
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '160': {
        character: characters.consultant,
        text: 'אם תאשים את החרדים במה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'החרדים אזרחים',
            effects: {
                economy: 10,
                image: -30,
                religion: 10,
            },
        },
        right: {
            text: 'החרדים טפילים',
            effects: {
                image: 30,
                religion: -30,
                add: [
                    ['bad', 1],
                ],
            },
            booster: 'blameDos',
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '170': {
        character: characters.wife,
        text: 'אתה נוסע לחו״ל כל הזמן, קח אותי איתך',
        left: {
            text: 'לא',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -10,
                image: 20,
            },
        },
    },
    '180': {
        character: characters.consultant,
        text: 'אביב הגיע פסח בא. איפה תרצה לנפוש עם המשפחה?',
        left: {
            text: 'בטבריה',
            effects: {
                image: 5,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'בריביירה',
            effects: {
                economy: -5,
                image: 15,
            },
        },
    },
    '190': {
        character: characters.protest,
        text: 'רוצים שלום',
        left: {
            text: 'אין פרטנר',
            effects: {
                security: -10,
                image: 10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'כנס ועידה',
            next: '193',
            effects: {
                image: -10,
            },
        },
        conditions: [
            ['madePeace', {
                equals: 0,
            }],
        ],
    },
    '193': {
        character: characters.foreignAmbassador,
        text: 'פניכם לשלום או למלחמה?',
        left: {
            text: 'מלחמה',
            next: '300',
            effects: {
                image: 10,
                set: [
                    ['peaceTalks', 0],
                ],
            },
        },
        right: {
            text: 'שלום',
            effects: {
                image: -10,
                set: [
                    ['madePeace', 1],
                ],
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
            text: 'דארווין מי?',
            effects: {
                economy: -10,
                image: -10,
                religion: 40,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '202': {
        character: characters.consultant,
        text: 'הורד מס לעשירים עכשיו, הם יתרמו לקמפיין אח"כ',
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
                economy: -20,
                image: 30,
                add: [
                    ['bad', 1],
                ],
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 0,
            }],
        ],
    },
    '205': {
        character: characters.ministerEducation,
        text: 'מי החליט שחייבים ללמד דמוקרטיה?',
        left: {
            text: 'אני',
            effects: {
                image: 5,
            },
        },
        right: {
            text: 'הם!',
            effects: {
                image: -10,
                religion: 20,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
            ['education', {
                equals: 0,
            }],
        ],
    },
    '210': {
        character: characters.ministerEducation,
        text: 'בג״צ מאט אותנו בדרך לניצחון מוחץ בפיסטוקיה',
        left: {
            text: 'הפרדת רשויות',
            effects: {
                security: -10,
                religion: -20,
            },
        },
        right: {
            text: 'כנס בשופטים',
            effects: {
                image: 10,
                religion: 10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 2,
            }],
            ['madePeace', {
                equals: 0,
            }],
            ['peaceTalks', {
                equals: 0,
            }],
            ['education', {
                equals: 0,
            }],
        ],
    },
    '220': {
        character: characters.consultant,
        text: 'דעת הקהל מוטה ע״י החדשות. צריך אמצעי השפעה',
        left: {
            text: 'דאג לעיתונות החופשית',
            effects: {
                image: -30,
            },
        },
        right: {
            text: 'הקם ערוץ טלויזיה',
            unlockCardsForever: ['230'],
            effects: {
                economy: -20,
            },
            booster: 'ownMedia',
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
            ['tycoon', {
                lessThanOrEqual: 1,
            }],
        ],
    },
    '230': {
        character: characters.consultant,
        text: 'ערוץ הטלויזיה עולה הון. מי ישלם?',
        left: {
            text: 'הטייקון הטחון',
            next: '240',
            unlockCardsForever: ['250'],
            effects: {
                economy: 10,
                set: [
                    ['tycoon', 1],
                ],
            },
        },
        right: {
            text: 'משרד התקשורת',
            effects: {
                economy: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '240': {
        character: characters.tycoon,
        text: 'אקנה לך ערוץ טלוויזיה בכיף. לשלוף ארנק?',
        left: {
            text: 'לא',
            effects: {
                economy: -10,
            },
            booster: 'ownMediaRemove',
        },
        right: {
            text: 'כן',
            effects: {
                economy: 20,
                image: 20,
                set: [
                    ['tycoon', 2],
                ],
            },
        },
        locked: true,
    },
    '250': {
        character: characters.tycoon,
        text: 'בוא נמלא את בתי החולים בתיירים רפואים עשירים',
        left: {
            text: 'דאג לזקנה במסדרון',
            next: '253',
            unlockCards: ['400'],
            unlockCardsForever: ['253'],
            effects: {
                economy: -10,
                image: 5,
            },
        },
        right: {
            text: 'גזור קופון',
            unlockCardsForever: ['251','252'],
            effects: {
                economy: 20,
                image: 10,
            },
        },
        locked: true,
        conditions: [
            ['tycoon', {
                greaterThan: 1,
            }],
        ],
    },
    '251': {
        character: characters.wife,
        text: 'נתפס לי הגב בספינינג ואין מיטות במיון',
        left: {
            text: 'סדר לה סוויטה',
            effects: {
                image: 5,
            },
        },
        right: {
            text: 'חכי כמו כולם',
            effects: {
                image: -5,
            },
        },
        locked: true,
    },
    '252': {
        character: characters.news,
        text: 'בית החולים פינה ישיש, עני ומסכן לטובת תיירת צעירה, עשירה ולא מסכנה מפיסטוקיה',
        left: {
            text: 'תחשוב על הבקשיש',
            unlockCardsForever: ['254'],
            effects: {
                economy: 20,
                image: -5,
            },
        },
        right: {
            text: 'הצטלם עם הישיש',
            effects: {
                image: 5,
            },
        },
        locked: true,
    },
    '253': {
        character: characters.news,
        text: 'הזקנה במסדרון: ראש הממשלה אולי סידר לי חדר אבל חיכיתי שעות בחושך שיבוא לבקר',
        left: {
            text: 'התנצל עמוקות',
            effects: {
                image: -5,
            },
        },
        right: {
            text: 'לכלך חזרה',
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '254': {
        character: characters.news,
        text: 'הישיש שנזרק מאשפוז הוא סבו של הלוחם האגדי כושי בקת"ב',
        left: {
            text: 'שילך להאכיל יונים',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'התנצל והצטלם',
            effects: {
                economy: -10,
                security: -10,
                image: 10,
            },
        },
        locked: true,
    },
    '260': {
        character: characters.ministerTreasury,
        text: 'פיתחתי תוכנית להורדת מחירי הדיור',
        left: {
            text: 'קח את הקרדיט',
            afterText: 'העם מעריץ את היכולת שלך לפעול לטובתו. פקידי האוצר נעלבו וחיבלו בתוכנית. המחירים נשארים גבוהים, אבל הי, העיקר שצברת פופולריות',
            effects: {
                image: 30,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'פרגן לשר',
            effects: {
                economy: 20,
                image: -10,
            },
        },
    },
    '280': {
        character: characters.rabi,
        text: 'כבודו, יש רב ראשי אשכנזי וספרדי, אבל מה עם היברידי?',
        left: {
            text: 'תשכח מזה',
            effects: {
                image: 10,
                religion: -20,
            },
        },
        right: {
            text: 'צודק',
            effects: {
                economy: -5,
                religion: 20,
            },
        },
    },
    '300': {
        character: characters.general,
        text: 'רוה"מ, הפיסטוקיאנים עולים על הגדרות. צריך תכנית פעולה',
        left: {
            text: 'בוא נדבר איתם',
            next: '320',
            effects: {
                image: -10,
            },
            advanceTime: false,
        },
        right: {
            text: 'כנס בהם',
            unlockCardsForever: ['1200'],
            effects: {
                security: 10,
                image: 10,
            },
            booster: 'war',
        },
        conditions: [
            ['bad', {
                greaterThan: 0,
            }],
            ['madePeace', {
                equals: 0,
            }],
            ['peaceTalks', {
                equals: 0,
            }],
        ],
    },
    '320': {
        character: characters.general,
        text: 'אצלם דיבור זה סימן לחולשה',
        left: {
            text: 'נשב לדבר איתם',
            next: '340',
            effects: {
                image: -10,
            },
            advanceTime: false,
        },
        right: {
            text: 'אז כנס בהם',
            unlockCardsForever: ['1200'],
            effects: {
                security: 10,
                image: 10,
            },
            booster: 'war',
        },
        locked: true,
    },
    '340': {
        character: characters.general,
        text: 'ומה עם הטילים שקנינו והבטחת שננסה יחד?',
        left: {
            text: 'רק מו"מ',
            next: '360',
            effects: {
                image: -10,
            },
            advanceTime: false,
        },
        right: {
            text: 'נכון! כנס בהם',
            unlockCardsForever: ['1200'],
            effects: {
                security: 10,
                image: 10,
                add: [
                    ['bad', 1],
                ],
            },
            booster: 'war',
        },
        locked: true,
    },
    '360': {
        character: characters.general,
        text: 'אדוני, מלחמה זה צילום ענק בעמוד הראשון ואתה הורס באפוד קרמי',
        left: {
            text: 'לא. רק מו"מ',
            next: '380',
            effects: {
                image: -10,
            },
            advanceTime: false,
        },
        right: {
            text: 'אני נכנס בהם!',
            unlockCardsForever: ['1200'],
            effects: {
                security: 10,
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
            booster: 'war',
        },
        locked: true,
    },
    '380': {
        character: characters.general,
        text: 'טוב, עלית עליי. אשתי זרקה אותי מהבית ואני מחפש תירוץ לישון בבור',
        left: {
            text: 'מו"מ איתם ועם אשתך',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'אז תגיד. וכנס בהם!',
            unlockCardsForever: ['1200'],
            effects: {
                security: 10,
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
            booster: 'war',
        },
        locked: true,
    },
    '400': {
        character: characters.ministerTreasury,
        text: 'אדוני, התקציב נגמר. שנקטין את סל הבריאות?',
        left: {
            text: 'אל תיגע בסל',
            effects: {
                economy: -10,
                image: 10,
            },
        },
        right: {
            text: 'הפוך אותו לסלסלה',
            effects: {
                economy: 20,
                image: -10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 0,
            }],
        ],
    },
    '420': {
        character: characters.consultant,
        text: 'המדענים גילו דרך להפיק אנרגיה ממרמור של רווקות מזדקנות. לייצר חשמל או נשק?',
        left: {
            text: 'מחק מדינה שכנה!',
            effects: {
                security: 15,
                image: 10,
            },
        },
        right: {
            text: 'תאיר את המדינה!',
            effects: {
                economy: 20,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '440': {
        character: characters.ministerTreasury,
        text: 'הנכים מפגינים. להגדיל להם את הקצבה?',
        left: {
            text: 'לא היום',
            unlockCardsForever: ['445'],
            effects: {
                economy: 10,
                image: -5,
            },
        },
        right: {
            text: 'ברור',
            effects: {
                economy: -10,
                image: 10,
            },
        },
    },
    '445': {
        character: characters.ministerTreasury,
        text: 'הקלפיות לא נגישות לנכים. מתי לטפל בזה?',
        left: {
            text: 'שנה הבאה',
            effects: {
                image: 5,
            },
        },
        right: {
            text: 'עכשיו',
            next: '447',
            effects: {
                economy: -10,
            },
        },
        locked: true,
    },
    '447': {
        character: characters.consultant,
        text: 'אדוני, לא הגדלת להם את הקיצבה. הם ממילא לא יצביעו עבורך. אתה בטוח?',
        left: {
            text: 'במחשבה שנייה...',
            effects: {
                image: -5,
            },
        },
        right: {
            text: 'זה הדבר הנכון',
            effects: {
                economy: -5,
                image: 5,
            },
        },
        locked: true,
    },
    '460': {
        character: characters.opposition,
        text: 'הטייקון בונה קניון באיזור הציד של חמוס בסכנת הכחדה. עצור אותו!',
        left: {
            text: 'שהחמוס יאכל בקניון',
            unlockCardsForever: ['820'],
            effects: {
                economy: 20,
                image: -10,
            },
        },
        right: {
            text: 'עצור בנייה',
            next: '462',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        conditions: [
            ['tycoon', {
                greaterThan: 0,
            }],
        ],
    },
    '462': {
        character: characters.tycoon,
        text: 'אני חייב לבנות את הקניון כדי לנצח טייקון אחר במונפול',
        left: {
            text: 'חוס על החמוס',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        right: {
            text: 'הקשב לטייקון',
            effects: {
                economy: 20,
                image: -10,
            },
        },
        locked: true,
    },
    '480': {
        character: characters.news,
        text: 'חשיפה בלעדית: ראש הממשלה קיבל וילה מהטייקון הטחון',
        left: {
            text: 'אין פתק החלפה',
            next: '540',
            unlockCardsForever: ['540','820'],
            effects: {
                image: -30,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'אחזיר כל שקל',
            unlockCardsForever: ['540'],
            effects: {
                economy: 5,
                image: 20,
            },
        },
        conditions: [
            ['tycoon', {
                greaterThan: 1,
            }],
        ],
    },
    '500': {
        character: characters.rabi,
        text: 'כבודו, אני צריך מיליארד ש"ח לבנות את הכותל הדיגיטלי בענן',
        left: {
            text: 'לא, תודה',
            effects: {
                religion: -10,
            },
        },
        right: {
            text: 'נשמע טוב',
            effects: {
                economy: -10,
                religion: 30,
            },
        },
    },
    '520': {
        character: characters.ministerEducation,
        text: 'אדוני, עקב טעות הקלדה השקענו מיליארדים בפיתוח תכנית "לימודי ריבה"',
        left: {
            text: 'איך מאייתים "מפוטר"?',
            effects: {
                economy: -20,
                image: 10,
                set: [
                    ['education', 1],
                ],
            },
        },
        right: {
            text: 'לך הכל מותר',
            effects: {
                image: -10,
            },
        },
        conditions: [
            ['education', {
                equals: 0,
            }],
        ],
    },
    '540': {
        character: characters.consultant,
        text: 'אדוני, סיפור הוילה פותח את המהדורה. מבצע קטן בפיסטוקיה כדי להסיט פוקוס?',
        left: {
            text: 'נראה לך?',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'רעיון טוב',
            next: '560',
            effects: {
                security: 20,
                image: 10,
                add: [
                    ['bad', 1],
                ],
                set: [
                    ['peaceTalks', 0],
                ],
            },
        },
        locked: true,
        conditions: [
            ['madePeace', {
                equals: 0,
            }],
        ],
    },
    '560': {
        character: characters.general,
        text: 'רוה"מ, מטרות מבצע "חדשות טובות" הושגו תוך ארבע שעות. מתי לשלוף את חיילנו מהבוץ הפיסטוקיאני?',
        left: {
            text: 'אחרי החדשות',
            next: '580',
            unlockCardsForever: ['620'],
            effects: {
                security: 10,
                image: 20,
            },
        },
        right: {
            text: 'מיד',
            effects: {
                security: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '580': {
        character: characters.general,
        text: 'רוה"מ, חיילנו נקלעו למארב ואחד עשר מלוחמנו נפלו. פעולת תגמול כואבת?',
        left: {
            text: 'לא, לסגת',
            effects: {
                image: -30,
            },
        },
        right: {
            text: 'כן',
            effects: {
                security: 10,
                image: 20,
            },
        },
        locked: true,
    },
    '600': {
        character: characters.ministerTreasury,
        text: 'אדוני, התקציב שוב מתקרב. חינוך או בטחון? והזוכה הוא... היא... הם...',
        left: {
            text: 'מורים וגירים',
            next: '605',
            effects: {
                economy: -10,
                security: -20,
            },
        },
        right: {
            text: 'חיילים וטילים',
            next: '601',
            effects: {
                economy: -20,
                security: 20,
            },
        },
    },
    '601': {
        character: characters.news,
        text: 'מורה ביום, חשפנית במועדון בלילה: כך סוגרת המורה את החודש',
        left: {
            text: 'איזה מועדון?',
            effects: {
                economy: 10,
                image: -10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'העלה שכר',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        locked: true,
    },
    '605': {
        character: characters.general,
        text: 'אין תקציב למיגון בתי אזרחים על הגבול הפיסטוקי. להגנה מירבית התושבים שמים קוטקס על הגגות',
        left: {
            text: 'שישבו בשקט',
            effects: {
                image: -25,
            },
        },
        right: {
            text: 'אזרים מיד',
            effects: {
                economy: -5,
            },
        },
        locked: true,
        conditions: [
            ['madePeace', {
                equals: 0,
            }],
        ],
    },
    '620': {
        character: characters.news,
        text: 'וידוי לוחמי סיירות: כך המבצע בפיסטוקיה הרס את חיינו',
        left: {
            text: 'קרא להם בכיינים',
            effects: {
                image: -20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'ממן להם פסיכולוג',
            effects: {
                economy: -20,
                image: 5,
            },
        },
        locked: true,
    },
    '640': {
        character: characters.rabi,
        text: 'כבודו, התלמידים לומדים רק תנ"ך, תושב"ע, תרבות יהודית ותולדות עם ישראל. מה עם תכנים יהודיים?',
        left: {
            text: 'זה מספיק',
            effects: {
                religion: -20,
            },
        },
        right: {
            text: 'צודק צדיק',
            effects: {
                religion: 30,
            },
        },
    },
    '660': {
        character: characters.tycoon,
        text: 'השקעתי כסף במפעל טילים מתקדם. תרכשו ממני טילים בזול?',
        left: {
            text: 'בשבילך? הכל',
            next: '661',
            effects: {
                economy: 5,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'ממש לא',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                economy: -15,
                set: [
                    ['tycoon', 1],
                ],
            },
            booster: 'ownMediaRemove',
        },
        conditions: [
            ['tycoon', {
                greaterThan: 1,
            }],
        ],
    },
    '661': {
        character: characters.news,
        text: 'הטילים "המתקדמים" של הטייקון מדויקים פחות מטיל שקנינו בעלי אקספרס',
        left: {
            text: 'דיוק זה לא הכל',
            effects: {
                economy: 15,
                security: -5,
            },
        },
        right: {
            text: 'בטל עסקה',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                economy: -15,
                security: 10,
                set: [
                    ['tycoon', 1],
                ],
            },
            booster: 'ownMediaRemove',
        },
        locked: true,
    },
    '670': {
        character: characters.consultant,
        text: 'אדוני, אני ממליץ לעודד תיירות דת ללא הבדל דת, גזע ומין',
        left: {
            text: 'כן, אבל רק ליהודים',
            effects: {
                religion: 10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: 20,
                religion: -20,
            },
        },
    },
    '680': {
        character: characters.consultant,
        text: 'אדוני, אתה מאבד גובה בסקרים. שנעשה ראיון זוגי אינטימי?',
        left: {
            text: 'תשכח מזה',
            effects: {
                image: -15,
            },
        },
        right: {
            text: 'תסגור את זה',
            next: '681',
            effects: {
                image: 10,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 2,
            }],
        ],
    },
    '681': {
        character: characters.wife,
        text: 'אני לא אגיע לראיון בסמרטוט שעלה רק עשיריה. מאיפה לשלם?',
        left: {
            text: 'מתקציב המשרד',
            next: '682',
            unlockCardsForever: ['690'],
            effects: {
                economy: -5,
                image: -15,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'מהכיס',
            next: '682',
            effects: {
                image: 5,
            },
        },
        locked: true,
    },
    '682': {
        character: characters.news,
        text: 'אשת רוה"מ: מבינה מעולה את מצוקת האזרח הקטן. לכן הצעתי לבעלי תוכנית "קוויאר שחור לכל פועל"',
        left: {
            text: 'התקשורת עוינת',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'האשה צודקת',
            effects: {
                image: -10,
            },
        },
        locked: true,
    },
    '690': {
        character: characters.foreignAmbassador,
        text: 'המודיעין שלנו גילה מי שילם על השמלה של אשתך. שתי אפשרויות:',
        left: {
            text: 'נסיגה מאזור מחלוקת',
            effects: {
                security: -15,
            },
        },
        right: {
            text: 'פרסום מביך',
            effects: {
                image: -30,
            },
        },
        locked: true,
    },
    '700': {
        character: characters.rabi,
        text: 'הרבנות צריכה כסף כדי להתגייס למאבק בסרטן. מילא שזו מחלה סופנית, אבל סרטן זה לא כשר',
        left: {
            text: 'תשכח מזה',
            effects: {
                religion: -30,
            },
        },
        right: {
            text: 'כמה תרצה?',
            unlockCards: ['705','1000'],
            effects: {
                economy: -20,
                religion: 30,
            },
        },
    },
    '705': {
        character: characters.rabi,
        text: 'כבודו, אני רוצה תקציב להילחם במחלות לא כשרות נוספות: חזרת, כלבת וכמובן דלקת אוזניים. אצל שרימפס',
        left: {
            text: 'לא',
            effects: {
                religion: -20,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -20,
                religion: 20,
            },
        },
        locked: true,
    },
    '710': {
        character: characters.ministerTreasury,
        text: 'מס ירושה ישפר את התזרים ויפגע רק בטייקונים',
        left: {
            text: 'ממש לא',
            effects: {
                economy: -10,
                image: -10,
            },
        },
        right: {
            text: 'רעיון מעולה',
            effects: {
                economy: 10,
            },
        },
    },
    '720': {
        character: characters.consultant,
        text: 'שנהפוך את הערים שלנו לערים חכמות ובטוחות?',
        left: {
            text: 'לא',
            unlockCards: ['960'],
            effects: {
                economy: 10,
                security: -10,
                image: -10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -30,
                security: 10,
                image: 10,
            },
        },
    },
    '730': {
        character: characters.ministerEducation,
        text: 'שנפחית משמעותית את עלות החינוך הגבוה?',
        left: {
            text: 'לא כרגע',
            unlockCards: ['940'],
            effects: {
                economy: 20,
                image: -10,
            },
        },
        right: {
            text: 'מקובל עליי',
            effects: {
                economy: -20,
                image: 20,
            },
        },
        conditions: [
            ['education', {
                equals: 0,
            }],
        ],
    },
    '731': {
        character: characters.consultant,
        text: 'שנפחית משמעותית את עלות החינוך הגבוה?',
        left: {
            text: 'לא כרגע',
            unlockCards: ['940'],
            effects: {
                economy: 20,
                image: -10,
            },
        },
        right: {
            text: 'מקובל עליי',
            effects: {
                economy: -20,
                image: 20,
            },
        },
        conditions: [
            ['education', {
                equals: 1,
            }],
        ],
    },
    '800': {
        character: characters.news,
        text: 'יש התפרעויות בהר הבית',
        left: {
            text: 'טפלו בזה',
            effects: {
                security: 10,
                image: -10,
            },
        },
        right: {
            text: 'הווקף אשם!',
            effects: {
                security: 20,
            },
        },
    },
    '810': {
        character: characters.news,
        text: 'התפרעויות של מלפפונים חמוצים בשכנתינו כבושיה',
        left: {
            text: 'נפיל את שלטון הטרור',
            afterText: 'ארגון הטרור של כבושיה חוסל. הנשק נאסף, ונראה שיש סיכוי לשלום',
            effects: {
                security: -20,
                image: -20,
            },
        },
        right: {
            text: 'העבירו להם מעטפות כסף',
            afterText: 'חדש בספרייה: ״הטרור: כיצד יוכל המערב לנצח״. רב מכר',
            effects: {
                security: 10,
                image: 20,
            },
        },
    },
    '820': {
        character: characters.consultant,
        text: 'היועמש רוצה לפתוח בחקירה',
        left: {
            text: 'באסה',
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'עושים לי פוטש!',
            next: '830',
            effects: {
                economy: -10,
                image: 20,
            },
        },
        locked: true,
    },
    '830': {
        character: characters.consultant,
        text: 'איזו שאלה תופיע במשאל העם?',
        left: {
            text: '״האם אתה בעד מניעת הפיכה של משת״פים הנתמכים ע״י אויבנו?״',
            next: 'victory',
            afterText: 'הבחירות בוטלו, היועמש, פרקליט המדינה, שופטים, אקדמאים, אנשי תקשרות ושאר בוגדים נעצרו. אין בחירות באופק. שיחקת אותה',
            effects: {
                image: 100,
            },
        },
        right: {
            text: '״האם אתה בעד לבטל את הבחירות?״',
            afterText: 'העם החליט לתת לדמוקרטיה עוד צ׳אנס',
            effects: {
                image: -30,
            },
        },
        locked: true,
    },
    '840': {
        character: characters.ministerEducation,
        text: 'צהרונים חינם לאוכלוסיות חלשות?',
        left: {
            text: 'מוותר',
            unlockCards: ['980'],
            effects: {
                economy: 10,
            },
        },
        right: {
            text: 'מאשר',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        conditions: [
            ['education', {
                equals: 0,
            }],
        ],
    },
    '841': {
        character: characters.consultant,
        text: 'צהרונים חינם לאוכלוסיות חלשות?',
        left: {
            text: 'מוותר',
            unlockCards: ['980'],
            effects: {
                economy: 10,
            },
        },
        right: {
            text: 'מאשר',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        conditions: [
            ['education', {
                equals: 1,
            }],
        ],
    },
    '850': {
        character: characters.ministerEducation,
        text: 'פתיחת גני עירייה לילדי עובדים זרים?',
        left: {
            text: 'לא',
            unlockCards: ['1020'],
            effects: {
                economy: 10,
                religion: 10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -20,
            },
        },
        conditions: [
            ['education', {
                equals: 0,
            }],
        ],
    },
    '851': {
        character: characters.consultant,
        text: 'פתיחת גני עירייה לילדי עובדים זרים?',
        left: {
            text: 'לא',
            unlockCards: ['1020'],
            effects: {
                economy: 10,
                religion: 10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -20,
            },
        },
        conditions: [
            ['education', {
                equals: 1,
            }],
        ],
    },
    '860': {
        character: characters.opposition,
        text: 'תחבורה ירוקה זה חשוב. מתי נתקדם לכיוון?',
        left: {
            text: 'נדחה למחר',
            unlockCards: ['1040'],
            effects: {
                economy: 5,
            },
        },
        right: {
            text: 'נתחיל היום',
            effects: {
                economy: -10,
            },
        },
    },
    '880': {
        character: characters.consultant,
        text: 'המצביעים הצעירים רוצים לגאליזציה. לאיזה דור אתה שייך?',
        left: {
            text: 'הטלגרף',
            unlockCards: ['1060'],
            effects: {
                economy: -5,
                image: 30,
            },
        },
        right: {
            text: 'הטלגראס',
            effects: {
                economy: 20,
                security: -10,
                image: -20,
            },
        },
    },
    '900': {
        character: characters.ministerTreasury,
        text: 'תשתיות הרכבת דורשות שדרוג',
        left: {
            text: 'תשכח מזה',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'בנה תחנה על שמי',
            effects: {
                economy: -20,
                image: 10,
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '920': {
        character: characters.foreignAmbassador,
        text: 'הסכם סחר חופשי?',
        left: {
            text: 'אין מצב',
            effects: {
                economy: -10,
                image: 20,
            },
        },
        right: {
            text: 'נשמע טוב',
            effects: {
                economy: 20,
                image: -20,
            },
        },
        locked: true,
        conditions: [
            ['peaceTalks', {
                equals: 1,
            }],
        ],
    },
    '940': {
        character: characters.protest,
        text: 'הסטודנטים מתלוננים על עלות התואר',
        left: {
            text: 'אלה החיים',
            effects: {
                image: 15,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'מלגות לכולם',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        locked: true,
        conditions: [
            ['bad', {
                greaterThan: 0,
            }],
        ],
    },
    '960': {
        character: characters.protest,
        text: 'אזרחים יוצאים לרחובות - הפשע בשיא חסר תקדים',
        left: {
            text: 'הכל פה מדהים',
            effects: {
                economy: 10,
                security: -10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'טפל בפשע',
            effects: {
                economy: -30,
                security: 10,
            },
        },
        locked: true,
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '980': {
        character: characters.protest,
        text: 'ההורים לוקחים בייביסטר ועולים על הבריקדות: יקר לגדל פה ילדים!',
        left: {
            text: 'בכיינים!',
            effects: {
                economy: 10,
                image: -10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'הנחה בגנים',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        locked: true,
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '1000': {
        character: characters.protest,
        text: 'החילונים מפגינים - ההדתה הגיעה אפילו אל מערכת הבריאות',
        left: {
            text: 'תנשמו עמוק',
            effects: {
                image: -15,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'צודקים. יש גבול',
            effects: {
                religion: -20,
            },
        },
        locked: true,
        conditions: [
            ['bad', {
                greaterThan: 2,
            }],
        ],
    },
    '1020': {
        character: characters.protest,
        text: 'לא לילדי עובדים זרים בגנים שלנו! (אלא אם הם באו לנקות את הבית מקוביות)',
        left: {
            text: 'גנים מעורבים',
            effects: {
                economy: 5,
                image: -10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'צודקים',
            effects: {
                image: -10,
                religion: 20,
            },
        },
        locked: true,
    },
    '1040': {
        character: characters.protest,
        text: 'הירוקים שוטפים את הרחובות: העם דורש רכב חשמלי!',
        left: {
            text: 'עקב חקיקה',
            effects: {
                economy: 10,
                image: -10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'תמוך ביוזמה',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        locked: true,
    },
    '1060': {
        character: characters.protest,
        text: 'אלפי סטלנים היו אמורים לצאת להפגין אבל אז הם עישנו משהו. ארבעה מפגינים הגיעו',
        left: {
            text: 'גלגל אשמה',
            effects: {
                image: 10,
                religion: 10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'קדם חקיקה',
            effects: {
                economy: 20,
                image: -10,
            },
        },
        locked: true,
    },
    '1070': {
        character: characters.news,
        text: 'תלמידי המדינה במקום האחרון ב- OECD במתמטיקה, אנגלית והיגיינה אישית',
        left: {
            text: 'האשם את ההורים',
            effects: {
                economy: 10,
                image: -10,
            },
        },
        right: {
            text: 'אטפל בהקדם',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 2,
            }],
        ],
    },
    '1100': {
        character: characters.foreignKing,
        text: 'פיסטוקיה מושיטה את ידה לשלום',
        left: {
            text: 'הגב בביטול',
            next: '193',
            unlockCardsForever: ['1105'],
            effects: {
                security: -10,
                image: 20,
            },
        },
        right: {
            text: 'הזמן לביקור',
            next: '1110',
            afterText: 'מלך פיסטוקיה מגיע לביקור היסטורי',
            effects: {
                economy: -10,
                security: 10,
            },
        },
        locked: true,
        conditions: [
            ['madePeace', {
                equals: 0,
            }],
        ],
    },
    '1105': {
        character: characters.consultant,
        text: 'ערוצי החדשות טוענים שקברת כל סיכוי לשלום. תגובתך?',
        left: {
            text: 'נגד הכתב ההיסטרי',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'בעד הסכם היסטורי',
            unlockCardsForever: ['1110'],
            effects: {
                security: -10,
            },
        },
        locked: true,
    },
    '1110': {
        character: characters.foreignKing,
        text: 'לחיצת יד היסטורית?',
        left: {
            text: 'יבש אותו',
            next: '193',
            effects: {
                security: -10,
                image: 25,
            },
        },
        right: {
            text: 'בשמחה',
            unlockCardsForever: ['1115'],
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '1115': {
        character: characters.protest,
        text: 'לא לא לא מצביעים למי שליקק למלך הרוצחים!',
        left: {
            text: 'התעלם',
            unlockCardsForever: ['1130'],
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'בטל שיחות שלום',
            unlockCardsForever: ['1120'],
            effects: {
                security: -10,
                image: 20,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        locked: true,
    },
    '1120': {
        character: characters.general,
        text: 'רוה"מ, מבחינה ביטחונית עדיף להגיע להסכם',
        left: {
            text: 'לא, אני אנווט',
            unlockCardsForever: ['1140'],
            effects: {
                security: -10,
                image: 20,
            },
        },
        right: {
            text: 'כן, אתה צודק',
            unlockCardsForever: ['1130'],
            effects: {
                security: 10,
            },
        },
        locked: true,
    },
    '1130': {
        character: characters.consultant,
        text: 'צוותי המו"מ הגיעו להסכם שלום אבל המלך דורש התנצלות על שנות הלחימה',
        left: {
            text: 'שימשיך לחלום',
            effects: {
                security: -10,
                image: 20,
            },
        },
        right: {
            text: 'רק בשביל השלום',
            unlockCardsForever: ['1150'],
            effects: {
                security: 10,
                image: -30,
            },
        },
        locked: true,
    },
    '1140': {
        character: characters.news,
        text: 'גורם במטכ"ל: ראש הממשלה לא קשוב לראשי כוחות הביטחון',
        left: {
            text: 'החלף מטכ"ל',
            effects: {
                security: -10,
                image: 10,
            },
        },
        right: {
            text: 'הודה בטעות',
            unlockCardsForever: ['1150'],
            effects: {
                security: 5,
                image: -20,
            },
        },
        locked: true,
    },
    '1150': {
        character: characters.news,
        text: 'הסכם שלום היסטורי. ראש הממשלה: העתיד מתחיל היום!',
        left: {
            text: 'נקווה שיחזיק',
            achievement: 'peace',
            effects: {
                security: 5,
                image: 5,
                set: [
                    ['madePeace', 1],
                ],
            },
        },
        right: {
            text: 'הנובל בדרך?',
            achievement: 'peace',
            effects: {
                image: 5,
                set: [
                    ['madePeace', 1],
                ],
            },
        },
        locked: true,
    },
    '1200': {
        character: characters.general,
        text: 'העם עייף מהקרבות. צריך להגיע להסכם',
        left: {
            text: 'רק עוד קצת',
            next: '1210',
            effects: {
                economy: -10,
                security: 10,
                image: 10,
            },
        },
        right: {
            text: 'צודק. לחמנו מספיק',
            next: '193',
            effects: {
                security: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '1210': {
        character: characters.consultant,
        text: 'איבדת את אמון העם והממשלה מתנדנדת. הכל אבוד אלא אם... תכריז על מצב חירום לאומי',
        left: {
            text: 'לא. הדמוקרטיה חשובה',
            effects: {
                security: -10,
                image: -20,
            },
        },
        right: {
            text: 'הכרז על מצב חירום',
            next: 'victory',
            effects: {
                security: 100,
            },
        },
        locked: true,
    },
    '1240': {
        character: characters.rabi,
        text: 'השנה שחונה בגלל השכינה, דרושה תחינה. אני מארגן תפילות גשם ויש מקום באוטובוס',
        left: {
            text: 'נקים מתקן התפלה',
            effects: {
                economy: -30,
                image: 10,
                religion: -20,
            },
        },
        right: {
            text: 'אני בא לתפילה',
            effects: {
                economy: 10,
                image: -10,
                religion: 20,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '1300': {
        character: characters.protest,
        text: 'המפגינים השונים נגדך מתאחדים ויוצאים למחאה חברתית שכמוה לא ידעה המדינה',
        left: {
            text: 'הכרז על מצב חירום',
            next: 'victory',
            effects: {
                security: 100,
            },
        },
        right: {
            text: 'קבל אחריות והתפטר',
            effects: {
                image: -100,
            },
        },
        conditions: [
            ['hafganot', {
                greaterThan: 3,
            }],
        ],
    },
};

export const newGameCards = [];

function validateAnswer(answer) {
    if (answer.unlockCards) {
        for (const unlockedCard of answer.unlockCards) {
            if (!cards[unlockedCard].locked) {
                log('WARN: Unlocked card is not locked:', unlockedCard);
            }
        }
    }
    if (answer.unlockCardsForever) {
        for (const unlockedCard of answer.unlockCardsForever) {
            if (!cards[unlockedCard].locked) {
                log('WARN: Unlocked card is not locked:', unlockedCard);
            }
        }
    }
    if (answer.next) {
        if (!cards[answer.next].locked) {
            log('WARN: Next card is not locked (could be OK):', answer.next);
        }
    }
}

for (const id of Object.keys(cards)) {
    const card = cards[id];
    card.id = id;
    if (id.startsWith('newGame')) {
        newGameCards.push(id);
    }
    if (process.env.NODE_ENV === 'development') {
        if (card.left) {
            validateAnswer(card.left);
        }
        if (card.right) {
            validateAnswer(card.right);
        }
    }
}
