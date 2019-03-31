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
        text: 'ניצחת! הבחירות בוטלו! השלטון שלך לעולמים!',
        left: {
            text: 'יש!',
            advanceTime: false,
        },
        right: {
            text: 'יש!',
            advanceTime: false,
        },
        locked: true,
        win: true,
    },
    'economyLose': {
        // Cards can specify either a character or an image and name.
        img: loseEconomy,
        name: 'הפסדת את השלטון',
        text: 'הודחת. המדינה בפשיטת רגל, הבנק העולמי משתלט על ניהול המדינה',
        left: {
            text: 'תזמיני להם פיצות!',
            advanceTime: false,
        },
        right: {
            text: 'אין לחם?',
            advanceTime: false,
        },
        // A locked card can only appear if it is the 'nextCard' of the previous choice or
        // if it is unlocked at 'unlockCards' (or if it is hard coded like the lose cards).
        locked: true,
        lose: true,
    },
    'securityLose': {
        img: loseSecurity,
        name: 'הפסדת את השלטון',
        text: 'הודחת. אתה. חלש. הלכה המדינה',
        left: {
            text: 'חלש?',
            advanceTime: false,
        },
        right: {
            text: 'אני?',
            advanceTime: false,
        },
        locked: true,
        lose: true,
    },
    'imageLose': {
        img: loseImage,
        name: 'הפסדת את השלטון',
        text: 'הודחת. מחאה חברתית - אזלו האוהלים מריקושט',
        left: {
            text: 'איך...?',
            advanceTime: false,
        },
        right: {
            text: 'מה...',
            advanceTime: false,
        },
        locked: true,
        lose: true,
    },
    'religionLose': {
        img: loseReligion,
        name: 'הפסדת את השלטון',
        text: 'הודחת. החרדים מפילים את הממשלה',
        left: {
            text: 'שמע ישראל...',
            advanceTime: false,
        },
        right: {
            text: 'אוי ויי...',
            advanceTime: false,
        },
        locked: true,
        lose: true,
    },
    'outOfCards': {
        img: outOfCards,
        name: 'הפסדת את השלטון',
        text: 'זהו. הקדנציה שלך נגמרה מבלי שהשארת חותם. הולכים לבחירות',
        left: {
            text: 'איך...?',
            advanceTime: false,
        },
        right: {
            text: 'מה...',
            advanceTime: false,
        },
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
        text: 'שלום לך! זהו משחק בחירות. גרור את הקלף כדי לראות את האופציות ושחרר כדי לבצע בחירה',
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
            text: 'אני יודע הכל',
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
        text: 'יפה! ראית מה קרה למעלה?? שים לב! כשאחד המדדים מתרוקן, תאבד את השלטון',
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
        text: 'יפה! ראית מה קרה למעלה?? שים לב! כשאחד המדדים מתרוקן, תאבד את השלטון',
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
        text: 'יאללה מתחילים! כמה שנים תוכל להשאר בשלטון?',
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
        text: 'אדוני, אני שמח לבשר לך שנבחרת. האם תרצה לכהן כראש הממשלה?',
        left: {
            text: 'לא ממש',
            next: '20',
            advanceTime: false,
        },
        right: {
            text: 'כמובן',
            advanceTime: false,
        },
        locked: true,
    },
    '20': {
        character: characters.president,
        text: 'העם בחר בך! תהיה גבר',
        left: {
            text: 'אשתדל לשרת את העם',
            advanceTime: false,
        },
        right: {
            text: 'אשתדל לעבוד על השרירים',
            advanceTime: false,
        },
        locked: true,
    },
    '40': {
        character: characters.protest,
        text: 'עלות הנופש ביוון מרקיעה שחקים',
        left: {
            text: 'המדינה תסבסד',
            effects: {
                economy: -20,
                image: 10,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        right: {
            text: 'פזר הפגנות בכח',
            next: '50',
            effects: {
                economy: 10,
                security: 10,
                image: -30,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        conditions: [
            ['firedMafcal', {
                equals: 0,
            }],
            ['bad', {
                greaterThan: 2,
            }],
        ],
    },
    '50': {
        character: characters.news,
        text: 'אלימות משטרתית: שני הרוגים בפיזור הפגנות',
        left: {
            text: 'קח אחריות',
            effects: {
                security: -10,
                image: -40,
            },
        },
        right: {
            text: 'פטר את המפכ"ל',
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
        text: 'המפכ"ל לשעבר מתכנן הפיכה',
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
            unlockCardsForever: ['1500','1600'],
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
        text: 'המפכ"ל הקליט אותך אומר לפזר את ההפגנות באלימות',
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
                economy: -25,
                image: 30,
            },
        },
        right: {
            text: 'בוא נדבר איתם',
            unlockCardsForever: ['90'],
            effects: {
                image: -30,
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
        text: 'המשבר מול פיסטוקיה מחריף. מחירי הפיסטוקים בשיא של כל הזמנים',
        left: {
            text: 'לחדש את הקשרים',
            unlockCardsForever: ['90'],
            effects: {
                economy: 20,
                security: -10,
                image: -20,
                set: [
                    ['peaceTalks', 1],
                ],
            },
        },
        right: {
            text: 'נכבוש את השדות!',
            unlockCardsForever: ['1200'],
            effects: {
                economy: -15,
                security: 20,
                image: 20,
            },
            booster: 'war',
        },
        locked: true,
    },
    '90': {
        character: characters.foreignAmbassador,
        text: 'מלך פיסטוקיה רוצה לעשות סולחה',
        left: {
            text: 'לא, תודה',
            effects: {
                economy: -25,
                image: 30,
                set: [
                    ['peaceTalks', 0],
                ],
            },
        },
        right: {
            text: 'יאללה',
            unlockCardsForever: ['920','1100'],
            effects: {
                security: -10,
                image: -20,
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
                economy: 20,
                security: -20,
                image: -20,
            },
        },
        right: {
            text: 'נחסל את אויבנו',
            unlockCardsForever: ['1200'],
            effects: {
                economy: -15,
                security: 20,
                image: 20,
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
                security: 10,
                image: 30,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'אל תגיב',
            effects: {
                security: -10,
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
            unlockCardsForever: ['1800'],
            effects: {
                religion: -30,
            },
        },
        right: {
            text: 'ישר לכלא',
            achievement: 'antiGay',
            afterText: 'תיירים ותיירות גאים מחרימים את המדינה. קופת המדינה מפסידה מיליונים אבל ברבנות דווקא מבסוטים',
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
            afterText: 'עלויות הכשרות הגבוהות גורמות למסעדות ברחבי המדינה להיסגר. התושבים נותרים בעיקר עם מסעדות השייכות לרשתות',
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
            unlockCardsForever: ['1850'],
            afterText: 'הקיטוב בין החילונים לחרדים הולך ומחמיר. אם רק היה איזה מקום שבו אזרחי המדינה מכל הזרמים היו יכולים להיפגש ולקשקש איזה שלוש שנים...',
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
                economy: -20,
                image: 20,
                religion: -50,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
    },
    '150': {
        character: characters.consultant,
        text: 'אם תאשים את הערבים במה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'הערבים אזרחים',
            effects: {
                economy: 30,
                image: -30,
                religion: -30,
            },
        },
        right: {
            text: 'הערבים נוהרים',
            afterText: 'שוטרים יורים במחמד אלחפ-מפשעי. השב״כ: לא היה איום, היה בדרכו לעבודה. החקירה נסגרת מחוסר עניין לציבור',
            effects: {
                security: -20,
                image: 30,
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
            text: 'לא, החרדים הם אחים',
            effects: {
                economy: 30,
                image: -50,
                religion: 20,
            },
        },
        right: {
            text: 'נו, שויין...',
            effects: {
                economy: 30,
                image: 30,
                religion: -40,
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
                economy: 20,
                image: -20,
            },
        },
        right: {
            text: 'כן',
            unlockCardsForever: ['1900'],
            afterText: 'העלות למשלם המסים: ארבעה מיליוני שקלים בשנה',
            effects: {
                economy: -30,
                image: 30,
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '180': {
        character: characters.consultant,
        text: 'אביב הגיע פסח בא. איפה תרצה לנפוש עם המשפחה?',
        left: {
            text: 'בטבריה',
            afterText: 'אלבום החופשה קיבל לייקים בודדים',
            effects: {
                image: 5,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'בריביירה',
            unlockCardsForever: ['1900'],
            afterText: 'עלויות האבטחה הגבוהות באות על חשבון תקציב הנגישות לציבור',
            effects: {
                economy: -10,
                image: 20,
            },
        },
    },
    '190': {
        character: characters.protest,
        text: 'רוצים שלום',
        left: {
            text: 'אין פרטנר',
            effects: {
                security: 10,
                image: 20,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'כנס ועידה',
            next: '193',
            effects: {
                security: -10,
                image: -10,
                add: [
                    ['hafganot', -1],
                ],
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
                image: 30,
                set: [
                    ['peaceTalks', 0],
                ],
            },
        },
        right: {
            text: 'שלום',
            effects: {
                image: -30,
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
                religion: -20,
            },
        },
        right: {
            text: 'דארווין מי?',
            effects: {
                image: -20,
                religion: 30,
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
            text: 'לא פייר',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'כן',
            afterText: '25% מהלדים בישראל מתחת לקו העוני. מזל שאין להם זכות הצבעה',
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
        text: '"מי החליט שחייבים ללמד דמוקרטיה?"',
        left: {
            text: 'אני',
            effects: {
                image: 30,
                religion: -30,
            },
        },
        right: {
            text: 'הם!',
            unlockCardsForever: ['2000'],
            afterText: 'האלימות נגד זרים מתגברת. הסובלנות של אזרחי המדינה אחד כלפי השני מתרופפת',
            effects: {
                security: 10,
                image: -20,
                religion: 30,
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
        text: 'בג"צ מאט אותנו בדרך לניצחון מוחץ בפיסטוקיה',
        left: {
            text: 'הפרדת רשויות',
            effects: {
                security: -20,
                religion: -20,
            },
        },
        right: {
            text: 'כנס בשופטים',
            unlockCardsForever: ['2030'],
            effects: {
                security: 20,
                image: 20,
                religion: 20,
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
                image: -40,
            },
        },
        right: {
            text: 'הקם ערוץ טלויזיה',
            unlockCardsForever: ['230'],
            effects: {
                economy: -30,
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
            afterText: 'הטייקון שולח לך במתנה ארגז שמפניה יקרה. לא נעים לסרב...',
            effects: {
                economy: 30,
                set: [
                    ['tycoon', 1],
                ],
            },
        },
        right: {
            text: 'משרד התקשורת',
            effects: {
                economy: -20,
                image: -20,
            },
        },
        locked: true,
    },
    '240': {
        character: characters.tycoon,
        text: 'אקנה לך ערוץ טלוויזיה בכיף. לשלוף ארנק?',
        left: {
            text: 'בעצם לא',
            effects: {
                economy: -30,
            },
            booster: 'ownMediaRemove',
        },
        right: {
            text: 'אם אתה מתעקש',
            effects: {
                economy: 30,
                image: 30,
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
            unlockCardsForever: ['253'],
            effects: {
                economy: -30,
                image: 10,
            },
        },
        right: {
            text: 'גזור קופון',
            unlockCardsForever: ['251','252'],
            afterText: ' יחס מספר חולים למיטה במדינה הופך לאחד מהגבוהים בעולם',
            effects: {
                economy: 30,
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
                economy: 30,
                image: -10,
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
                image: -30,
            },
        },
        right: {
            text: 'לכלך חזרה',
            unlockCardsForever: ['2040'],
            effects: {
                image: 30,
            },
        },
        locked: true,
    },
    '254': {
        character: characters.news,
        text: 'הישיש שנזרק מאשפוז הוא סבו של הלוחם האגדי כושי בקת"ב',
        left: {
            text: 'שילך להאכיל יונים',
            unlockCardsForever: ['2040'],
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'התנצל והצטלם',
            effects: {
                economy: -20,
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
                economy: 30,
                image: -30,
            },
        },
    },
    '280': {
        character: characters.rabi,
        text: 'כבודו, יש רב ראשי אשכנזי וספרדי, אבל מה עם היברידי?',
        left: {
            text: 'תשכח מזה',
            effects: {
                image: 20,
                religion: -30,
            },
        },
        right: {
            text: 'צודק',
            effects: {
                economy: -10,
                religion: 30,
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
                security: 20,
                image: 20,
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
                security: 20,
                image: 20,
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
                security: 20,
                image: 20,
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
                image: -5,
            },
            advanceTime: false,
        },
        right: {
            text: 'אני נכנס בהם!',
            unlockCardsForever: ['1200'],
            effects: {
                security: 20,
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
                security: -10,
                image: -5,
            },
        },
        right: {
            text: 'אז תגיד. וכנס בהם!',
            unlockCardsForever: ['1200'],
            effects: {
                security: 20,
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
                economy: -30,
                image: 20,
            },
        },
        right: {
            text: 'הפוך אותו לסלסלה',
            unlockCardsForever: ['2050'],
            afterText: 'אלפי חולים מאבדים את היכולת לממן תרופות מצילות חיים',
            effects: {
                economy: 20,
                image: -20,
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
                economy: -10,
                security: 20,
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
                economy: 20,
                image: -15,
            },
        },
        right: {
            text: 'ברור',
            effects: {
                economy: -30,
                image: 30,
            },
        },
    },
    '445': {
        character: characters.ministerTreasury,
        text: 'הקלפיות לא נגישות לנכים. מתי לטפל בזה?',
        left: {
            text: 'שנה הבאה',
            unlockCardsForever: ['2060'],
            effects: {
                image: 5,
            },
        },
        right: {
            text: 'עכשיו',
            next: '447',
            effects: {
                economy: -20,
            },
        },
        locked: true,
    },
    '447': {
        character: characters.consultant,
        text: 'אדוני, לא הגדלת לנכים את הקיצבה. הם ממילא לא יצביעו עבורך. אתה בטוח?',
        left: {
            text: 'במחשבה שנייה...',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'זה הדבר הנכון',
            effects: {
                economy: -10,
                image: 10,
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
            afterText: 'החמוס הארץ ישראלי המצוי (Hummusus Imchipsus) נכנס לרשימת החיות בסכנת הכחדה',
            effects: {
                economy: 30,
                image: -20,
            },
        },
        right: {
            text: 'עצור בנייה',
            next: '462',
            effects: {
                economy: -30,
                image: 20,
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
                economy: -30,
                image: 20,
            },
        },
        right: {
            text: 'הקשב לטייקון',
            unlockCardsForever: ['820'],
            afterText: 'החמוס הארץ ישראלי המצוי (Hummusus Imchipsus) נכנס לרשימת החיות בסכנת הכחדה',
            effects: {
                economy: 30,
                image: -20,
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
            unlockCardsForever: ['820'],
            effects: {
                image: -30,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'אחזיר כל שקל',
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
                religion: -30,
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
            afterText: 'ילדי המדינה לא יודעים אנגלית או מתמטיקה אבל הם מכינים ריבת תפוז סיני לפנים!',
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
                image: -20,
            },
        },
        right: {
            text: 'רעיון טוב',
            next: '560',
            afterText: 'ארבעה חיילים נהרגים בשעות הראשונות של הלחימה',
            effects: {
                security: 20,
                image: 10,
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
                image: -20,
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
                security: -10,
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
                economy: -20,
                security: -30,
            },
        },
        right: {
            text: 'חיילים וטילים',
            next: '601',
            effects: {
                economy: -30,
                security: 30,
            },
        },
    },
    '601': {
        character: characters.news,
        text: 'מורה ביום, חשפנית במועדון בלילה: כך סוגרת המורה את החודש',
        left: {
            text: 'איזה מועדון?',
            unlockCardsForever: ['2070'],
            effects: {
                economy: 20,
                image: -20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'העלה שכר',
            effects: {
                economy: -30,
                image: 20,
            },
        },
        locked: true,
    },
    '605': {
        character: characters.general,
        text: 'אין תקציב למיגון בתי אזרחים על הגבול הפיסטוקי. התושבים שמים always ultra על הגגות כדי לקבל הגנה מירבית',
        left: {
            text: 'שישבו בשקט',
            effects: {
                security: -10,
            },
        },
        right: {
            text: 'אזרים מיד',
            effects: {
                economy: -30,
                security: 20,
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
                security: -10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'ממן להם פסיכולוג',
            effects: {
                economy: -20,
                security: -20,
                image: 10,
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
                religion: -30,
            },
        },
        right: {
            text: 'צודק צדיק',
            effects: {
                economy: -10,
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
                security: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'ממש לא',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                economy: -20,
                security: 10,
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
                economy: 10,
                security: -15,
            },
        },
        right: {
            text: 'בטל עסקה',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                economy: -25,
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
                economy: 10,
                religion: 20,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: 30,
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
                image: -30,
            },
        },
        right: {
            text: 'תסגור את זה',
            next: '681',
            effects: {
                image: 30,
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
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'מהכיס',
            next: '682',
            effects: {
                image: -5,
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
                religion: -30,
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
                economy: 20,
                image: -10,
            },
        },
    },
    '720': {
        character: characters.consultant,
        text: 'שנהפוך את הערים שלנו לערים חכמות ובטוחות?',
        left: {
            text: 'לא',
            unlockCards: ['960','962'],
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
                economy: 30,
                image: -20,
            },
        },
        right: {
            text: 'מקובל עליי',
            effects: {
                economy: -30,
                image: 30,
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
                economy: 30,
                image: -20,
            },
        },
        right: {
            text: 'מקובל עליי',
            effects: {
                economy: -30,
                image: 30,
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
        text: 'צעירים ממוצא פיסטוקי מוחים על הזנחת הכפרים שלהם. חלק מההפגנות גלשו להפרות סדר',
        left: {
            text: 'טפל בתשתיות',
            effects: {
                economy: -20,
                security: 10,
                image: -30,
            },
        },
        right: {
            text: 'הוואקף הסית אותם!',
            afterText: 'שתי חנויות בכפר פיסטוקי עולות באש. המשטרה: החשוד שנעצר הגיב בקיצוניות לפוסטים אנטי פיסטוקים בעמוד הפייס של ראש הממשלה',
            effects: {
                security: 20,
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
                economy: -10,
                security: -10,
                image: -30,
            },
        },
        right: {
            text: 'עושים לי פוטש!',
            next: '830',
            effects: {
                economy: -10,
                image: 30,
            },
        },
        locked: true,
    },
    '830': {
        character: characters.consultant,
        text: 'איזו שאלה תופיע במשאל העם?',
        left: {
            text: '"האם אתה בעד מניעת הפיכה של משת״פים הנתמכים ע"י אויבנו?"',
            next: 'victory',
            afterText: 'הבחירות בוטלו, היועמש, פרקליט המדינה, שופטים, אקדמאים, אנשי תקשרות ושאר בוגדים נעצרו. אין בחירות באופק. שיחקת אותה',
            effects: {
                image: 100,
            },
        },
        right: {
            text: '"האם אתה בעד לבטל את הבחירות?"',
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
                economy: 30,
            },
        },
        right: {
            text: 'מאשר',
            effects: {
                economy: -30,
                image: 20,
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
                economy: 30,
            },
        },
        right: {
            text: 'מאשר',
            effects: {
                economy: -30,
                image: 20,
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
                economy: 20,
                religion: 20,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -30,
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
                economy: 20,
                religion: 20,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -30,
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
                economy: -30,
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
                security: 10,
                image: -10,
            },
        },
        right: {
            text: 'הטלגראס',
            effects: {
                economy: 20,
                security: -20,
                image: 10,
            },
        },
    },
    '900': {
        character: characters.ministerTreasury,
        text: 'תשתיות הרכבת דורשות שדרוג',
        left: {
            text: 'תשכח מזה',
            afterText: 'המדינה פקוקה בטירוף. יקי ברזני תושב המרכז מופיע בספר השיאים של גינס אחרי שעמד בפקק 412 יום',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'בנה תחנה על שמי',
            effects: {
                economy: -30,
                image: 20,
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
                economy: -20,
                image: 30,
            },
        },
        right: {
            text: 'נשמע טוב',
            effects: {
                economy: 30,
                image: -30,
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
                economy: 20,
                image: -5,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'מלגות לכולם',
            effects: {
                economy: -30,
                image: 30,
                add: [
                    ['hafganot', -1],
                ],
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
                security: -20,
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
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        locked: true,
        conditions: [
            ['bad', {
                greaterThan: 1,
            }],
        ],
    },
    '962': {
        character: characters.protest,
        text: 'אזרחים יוצאים לרחובות - הפשע בשיא חסר תקדים',
        left: {
            text: 'טפל בפשע',
            effects: {
                economy: -30,
                security: 10,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        right: {
            text: 'פזר הפגנות בכח',
            next: '50',
            effects: {
                economy: 10,
                security: 10,
                image: -30,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        locked: true,
        conditions: [
            ['firedMafcal', {
                equals: 0,
            }],
            ['bad', {
                greaterThan: 2,
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
                add: [
                    ['hafganot', -1],
                ],
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
                add: [
                    ['hafganot', -1],
                ],
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
                economy: 10,
                image: -10,
                religion: -20,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'צודקים',
            effects: {
                image: -10,
                religion: 30,
                add: [
                    ['hafganot', -1],
                ],
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
                economy: 20,
                image: -10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'תמוך ביוזמה',
            effects: {
                economy: -30,
                image: 10,
                add: [
                    ['hafganot', -1],
                ],
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
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        locked: true,
    },
    '1070': {
        character: characters.news,
        text: 'תלמידי המדינה במקום האחרון ב- OECD במתמטיקה, אנגלית והיגיינה אישית',
        left: {
            text: 'אשמתי שמטומטמים עושים הרבה ילדים?',
            effects: {
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
            unlockCards: ['1105'],
            effects: {
                security: -20,
                image: 30,
            },
        },
        right: {
            text: 'הזמן לביקור',
            next: '1110',
            afterText: 'מלך פיסטוקיה מגיע לביקור היסטורי',
            effects: {
                economy: -20,
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
                security: 10,
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
            next: '1115',
            effects: {
                security: 10,
                image: -20,
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
                image: -20,
            },
        },
        right: {
            text: 'בטל שיחות שלום',
            next: '1120',
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
            next: '1140',
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
            next: '1150',
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
            unlockCards: ['1150'],
            effects: {
                security: 10,
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
                economy: 10,
                security: 10,
                image: 10,
                set: [
                    ['madePeace', 1],
                ],
            },
        },
        right: {
            text: 'הנובל בדרך?',
            achievement: 'peace',
            effects: {
                economy: 20,
                security: 10,
                image: 20,
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
                security: -20,
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
                religion: -30,
            },
        },
        right: {
            text: 'אני בא לתפילה',
            effects: {
                economy: 10,
                religion: 30,
            },
        },
        conditions: [
            ['bad', {
                greaterThan: 0,
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
    '1400': {
        character: characters.news,
        text: 'הפגנת ענק בשישי: אלפים קראו להחלפת השלטון',
        left: {
            text: 'גולף עם חברים',
            next: '1410',
            effects: {
                image: -5,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'פגוש את המפגינים',
            next: '1450',
            effects: {
                image: -20,
            },
        },
        conditions: [
            ['hafganot', {
                greaterThan: 2,
            }],
        ],
    },
    '1410': {
        character: characters.consultant,
        text: 'אדוני, העיתונים השונים מלבים את המחאה. מה לעשות עם התקשורת?',
        left: {
            text: 'סגור אותה',
            next: '1420',
            effects: {
                image: 30,
            },
        },
        right: {
            text: 'פגוש אותה',
            effects: {
                economy: 5,
                image: -15,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        locked: true,
    },
    '1420': {
        character: characters.news,
        text: 'בג"צ: ההחלטה של ראש הממשלה לסגור עיתונים - לא חוקית',
        left: {
            text: 'החלף שופטים',
            unlockCards: ['1430'],
            afterText: 'בכנס של לשכת עורכי הדין נשמעים לחשושים מודאגים על מותו המתקרב של שלטון החוק במדינה',
            effects: {
                security: -10,
                image: 10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'אפשר תקשורת חופשית',
            effects: {
                image: -30,
                add: [
                    ['bad', -1],
                ],
            },
        },
        locked: true,
    },
    '1430': {
        character: characters.consultant,
        text: 'אדוני,  אתה לא פופולארי בפרקליטות בימים אלה ומתבצעת חקירה על קשריך עם הטייקון',
        left: {
            text: 'הכל שטויות',
            next: '1440',
            effects: {
                image: 30,
            },
        },
        right: {
            text: 'הודה באשמה',
            effects: {
                image: -100,
            },
        },
        locked: true,
    },
    '1440': {
        character: characters.president,
        text: 'החקירה הפכה לכתב אישום. התפטר עכשיו',
        left: {
            text: 'חבק את הכסא',
            next: '1445',
        },
        right: {
            text: 'צודק',
            effects: {
                image: -100,
            },
        },
        locked: true,
    },
    '1445': {
        character: characters.news,
        text: 'ראש הממשלה הורשע בקבלת שוחד',
        left: {
            text: 'איך...',
            afterText: 'אתה מורשע ונשלח לכלא לעשרים שנה. השותף שלך לתא, חביב "המקצץ" ברזאני, מכין אחלה פסטה',
            effects: {
                image: -100,
            },
        },
        right: {
            text: 'מה...',
            afterText: 'אתה מורשע ונשלח לכלא לעשרים שנה. השותף שלך לתא, חביב "המקצץ" ברזאני, מכין אחלה פסטה',
            effects: {
                image: -100,
            },
        },
        locked: true,
    },
    '1450': {
        character: characters.news,
        text: 'ראשי המפגינים לראש הממשלה: הורד את עלות המחייה!',
        left: {
            text: 'הבטח ושכח',
            effects: {
                economy: 10,
                image: 20,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'הורד מחירים',
            unlockCards: ['1460'],
            effects: {
                economy: -30,
                image: 10,
            },
        },
        locked: true,
    },
    '1460': {
        character: characters.tycoon,
        text: 'הורדת המחירים פוגעת בי ובחברים',
        left: {
            text: 'צודק. שיחנקו',
            effects: {
                economy: 20,
                image: -10,
            },
        },
        right: {
            text: 'מצטער. העם נחנק',
            next: '1470',
            effects: {
                image: 20,
            },
        },
        locked: true,
        conditions: [
            ['tycoon', {
                greaterThan: 1,
            }],
        ],
    },
    '1470': {
        character: characters.news,
        text: 'הבחירות יוקדמו בעקבות לחץ בעלי הממון',
        left: {
            text: 'איך...',
            afterText: 'הבחירות מתקיימות כחודש מאוחר יותר. מפלגת "כחול לבן ומלא זהב" של הטייקון הטחון מדיחה אותך מהשלטון',
            effects: {
                economy: -100,
            },
        },
        right: {
            text: 'מה...',
            afterText: 'הבחירות מתקיימות כחודש מאוחר יותר. מפלגת "כחול לבן ומלא זהב" של הטייקון הטחון מדיחה אותך מהשלטון',
            effects: {
                economy: -100,
            },
        },
        locked: true,
    },
    '1500': {
        character: characters.foreignAmbassador,
        text: 'כבודו, המודיעין של פיסטוקיה מזהיר מפני הפיכה אפשרית אצלכם',
        left: {
            text: 'התעלם מהדברים',
            effects: {
                security: -20,
            },
        },
        right: {
            text: 'בצע מעצרים',
            effects: {
                security: 20,
                image: 20,
            },
        },
        locked: true,
        conditions: [
            ['madePeace', {
                greaterThan: 0,
            }],
        ],
    },
    '1600': {
        character: characters.general,
        text: 'רוה"מ, אני מסיים תפקיד בקרוב ובמפלגה שלך יש רק 423 גנרלים. אצטרף תמורת הבטחה להיות היורש',
        left: {
            text: 'לא. פוליטית אתה טוראי',
            next: '1700',
            effects: {
                security: -20,
            },
        },
        right: {
            text: 'יש! עוד גנרל!',
            effects: {
                security: 10,
                image: 10,
            },
        },
        locked: true,
    },
    '1700': {
        character: characters.news,
        text: 'המפכ"ל: הרמטכ"ל הבהיר לי שהצבא איתי. יחד נשים קץ לשלטון ראש הממשלה!',
        left: {
            text: 'איך...',
            afterText: 'כוחות הצבא מבצעים הפיכה ומשתלטים על מוקדי הכוח במדינה. הפסדת את השלטון. המפכ"ל שם אותך על מטוס לרואנדה ומבקש יפה שלא תחזור אף פעם',
            effects: {
                security: -100,
            },
        },
        right: {
            text: 'מה...',
            afterText: 'כוחות הצבא מבצעים הפיכה ומשתלטים על מוקדי הכוח במדינה. הפסדת את השלטון. המפכ"ל שם אותך על מטוס לרואנדה ומבקש יפה שלא תחזור אף פעם',
            effects: {
                security: -100,
            },
        },
        locked: true,
    },
    '1800': {
        character: characters.rabi,
        text: 'כבודו, הגייז כבר מחוץ לארון, בוא נוציא אותם גם מחוץ לחוק',
        left: {
            text: 'בן דוד שלי גיי',
            effects: {
                religion: -20,
            },
        },
        right: {
            text: 'אוהב איך שאתה חושב',
            effects: {
                image: -10,
                religion: 30,
            },
        },
        locked: true,
    },
    '1850': {
        character: characters.news,
        text: 'אזרחית: חרדים ירקו עליי כי חציתי במעבר חצייה לגברים בלבד',
        left: {
            text: 'התעלם מהדברים',
            unlockCardsForever: ['1860'],
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'מצא את האשמים',
            unlockCardsForever: ['1870'],
            effects: {
                religion: -10,
            },
        },
        locked: true,
    },
    '1860': {
        character: characters.protest,
        text: 'או אה, מה קרה? הרבנות נכנסה לנו לחיים בצורה מאד פולשנית וחודרנית ואפשר לומר שמבחינה אובייקטיבית... המדינה אכלה אותה!',
        left: {
            text: 'קח עוד קמע',
            effects: {
                image: -10,
                religion: 10,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'כנס ברבנות',
            effects: {
                image: 10,
                religion: -20,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
        locked: true,
    },
    '1870': {
        character: characters.rabi,
        text: 'כבודו, אני חש שיש לך זיקה ליהדות. מה עם חקיקה קצת יותר... הלכתית?',
        left: {
            text: 'לא. הדמוקרטיה חשובה',
            effects: {
                religion: -10,
            },
        },
        right: {
            text: 'נשמע בן זומא',
            afterText: 'עשרות חנויות שמכרו בשר לא כשר נסגרות. אזרח נתפס בשדה התעופה עם מזוודה ובה עשרים קילו קלמרי',
            effects: {
                religion: 20,
            },
        },
        locked: true,
    },
    '1900': {
        character: characters.consultant,
        text: 'דוח מבקר המדינה מכיל ביקורת על הבזבזנות שלך ושל אשתך בחו"ל',
        left: {
            text: 'החלף מבקר',
            unlockCardsForever: ['1910'],
            effects: {
                economy: -10,
                image: 10,
            },
        },
        right: {
            text: 'שיפרסם את הממצאים',
            effects: {
                image: -20,
            },
        },
        locked: true,
    },
    '1910': {
        character: characters.consultant,
        text: 'אדוני, המבקר המודח מאיים "לזמר" בתקשורת',
        left: {
            text: 'תפור לו תיק',
            effects: {
                security: 10,
                image: 10,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'שיעשה דואט עם עומר אדם',
            effects: {
                image: -30,
            },
        },
        locked: true,
    },
    '2000': {
        character: characters.news,
        text: 'עובד זר הותקף. מצבו קשה מאד',
        left: {
            text: 'תנו לו פיליפינית',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'מצא את האשמים',
            effects: {
                economy: -20,
                security: 10,
            },
        },
        locked: true,
    },
    '2030': {
        character: characters.news,
        text: 'מכוניתו של שופט בג"ץ נשרפה. שופטת נוספת: מקבלת איומים על חיי כל יום',
        left: {
            text: 'שידאגו לעצמם',
            afterText: 'שופט בג"צ אחר מותקף ביציאה מביתו. התוקף שובר את יד ימין שלו כי "זו היד של הפטיש"',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'שמור על השופטים',
            effects: {
                economy: -20,
                security: 10,
            },
        },
        locked: true,
    },
    '2040': {
        character: characters.news,
        text: 'מגמה מטרידה: אלימות בני נוער כלפי קשישים הולכת ומתגברת',
        left: {
            text: 'התעלם ממנה',
            effects: {
                security: -10,
            },
        },
        right: {
            text: 'טפל בבעיה',
            effects: {
                economy: -20,
                security: 10,
            },
        },
        locked: true,
    },
    '2050': {
        character: characters.wife,
        text: 'חברה שלי חולה במחלה קשה. תוכל להחזיר את התרופה היקרה שלה לסל?',
        left: {
            text: 'ממש לא',
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'ברור',
            effects: {
                economy: -10,
                image: 10,
            },
        },
        locked: true,
    },
    '2060': {
        character: characters.opposition,
        text: 'פעיל זכויות נכים: "הצדק בארץ לא רק עיוור, הוא גם בכסא גלגלים"',
        left: {
            text: 'ד"ש להלן קלר!',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'הגדל קצבת נכים',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        locked: true,
    },
    '2070': {
        character: characters.ministerEducation,
        text: 'אדוני, מורים חדשים לא מצטרפים למערכת. שתי אפשרויות: העלאת שכר גורפת או קמפיין מנצנץ שיוציא אותך טוב אבל לא ישנה כלום?',
        left: {
            text: 'קמפיין',
            next: '2080',
            effects: {
                economy: -10,
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
        right: {
            text: 'שכר',
            effects: {
                economy: -30,
                image: 10,
                add: [
                    ['bad', -1],
                ],
            },
        },
        locked: true,
    },
    '2080': {
        character: characters.ministerTreasury,
        text: 'אדוני, אולי נאפשר לחברות לעזור במימון משרד החינוך בתמורה להכנסת פרסומות לחומר הלימוד?',
        left: {
            text: 'זה לא מתאים',
            effects: {
                economy: -10,
                image: 10,
            },
        },
        right: {
            text: 'רעיון טוב!',
            afterText: '"משאית יוצאת ממפעל הנקניקיות המדהימות של זוגלובק בארבע. מתי היא תתנגש ברכבת ישראל בהנחה שהרכבת לעולם לא מאחרת?"',
            effects: {
                economy: 20,
            },
        },
        locked: true,
    },
    '2100': {
        character: characters.general,
        text: 'רוה"מ, חיילים מסרבים להגיע לאירוע ששרה בו זמרת. מי מחלק פקודות בצבא הזה?',
        left: {
            text: 'הקב"ה',
            effects: {
                security: -10,
                religion: 15,
            },
        },
        right: {
            text: 'אתה',
            effects: {
                security: 10,
                religion: -20,
            },
        },
    },
    '2110': {
        character: characters.general,
        text: 'רוה"מ, יש תת אלוף מבריק שצריך לקדם אבל הוא... איך להגיד את זה בעדינות... מעדיף מדים ורודים',
        left: {
            text: 'פטר אותו',
            effects: {
                security: -10,
                image: 10,
                religion: 10,
            },
        },
        right: {
            text: 'קדמי אותו, מתוקה',
            effects: {
                security: 10,
                religion: -25,
            },
        },
    },
    '2120': {
        character: characters.general,
        text: 'רוה"מ, אם בתי הספר ילמדו יותר מחשבים ופחות פסוקים, נוכל לסייבר לפיסטוקים את הצורה. מה אתה אומר?',
        left: {
            text: 'תהילים',
            afterText: 'הפיסטוקים משגרים לווין ראשון לחלל. אנחנו לא',
            effects: {
                security: -10,
                religion: 20,
            },
        },
        right: {
            text: 'טילים',
            effects: {
                security: 10,
                religion: -10,
            },
        },
    },
    '2150': {
        character: characters.opposition,
        text: 'אדוני ראש הממשלה, הבחירה שבידך פשוטה: השקעה או במחקר אקולוגי או בישיבות. קבל החלטה!',
        left: {
            text: 'מעדיף לעזור לחרדים',
            afterText: 'הקיפוד הארצישראלי נכחד. כתוצאה אוכלוסיית השלשולים יוצאת משליטה ואי אפשר ללכת יותר יחפים על המדרכה',
            effects: {
                economy: -10,
                religion: 20,
            },
        },
        right: {
            text: 'חקור הכחדת קיפודים',
            effects: {
                economy: -10,
            },
        },
    },
    '2160': {
        character: characters.opposition,
        text: 'אדוני, שליש מהעם מתחת לקו העוני. תן דוגמא אישית: היפרד מרכב השרד וסע בתחבורה ציבורית',
        left: {
            text: 'ממש לא',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'רעיון טוב',
            effects: {
                economy: 5,
                image: -15,
            },
        },
    },
    '2170': {
        character: characters.opposition,
        text: 'אדוני, תקציב הביטחון מופרז. במקום טילים, מה עם קצת דאגה לעניי עירך?',
        left: {
            text: 'צריך טילים',
            effects: {
                security: 20,
            },
        },
        right: {
            text: 'אני בעניין',
            effects: {
                security: -30,
                image: 10,
            },
        },
    },
    '2200': {
        character: characters.wife,
        text: 'לא בשביל משהו, אבל מלך פיסטוקיה קנה לאשתו פורשה מתקציב הביטחון. מה איתי?',
        left: {
            text: 'סעי בקיה פיקנטה',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'קחי פרארי',
            effects: {
                security: -5,
                image: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '2210': {
        character: characters.wife,
        text: 'מאמי, עיתונאים טוענים שלא הגיוני שארוויח שישים אלף ש"ח בחודש בתפקידי כמסרקת שטיחים בעירייה',
        left: {
            text: 'שיקפצו לי',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'צודקים. קצץ משכורת',
            effects: {
                economy: 10,
                image: -25,
            },
        },
    },
    '3000': {
        character: characters.protest,
        text: 'הדרוזים דורשים שיוויון זכויות',
        left: {
            text: 'הם ערבים, לא?',
            effects: {
                security: -10,
                religion: 20,
            },
        },
        right: {
            text: 'דרוזים הם אחים',
            effects: {
                economy: -20,
            },
        },
    },
    '3001': {
        character: characters.protest,
        text: 'האתיופים מתקוממים נגד יחס משפיל נגדם',
        left: {
            text: 'הם לא סוג של סודאנים?',
            effects: {
                image: -10,
                religion: 20,
                add: [
                    ['hafganot', 1],
                ],
            },
        },
        right: {
            text: 'טפל בבעיה',
            effects: {
                image: 10,
                religion: -20,
                add: [
                    ['hafganot', -1],
                ],
            },
        },
    },
    '3002': {
        character: characters.protest,
        text: 'מסתננים ומבקשי מפלט דורשים זכויות',
        left: {
            text: 'הם סרטן',
            effects: {
                image: 20,
            },
        },
        right: {
            text: 'הם בני אדם',
            effects: {
                religion: -20,
            },
        },
    },
    '3003': {
        character: characters.protest,
        text: 'השמאל דורש העלאת שכר המינימום',
        left: {
            text: 'שמאלה זה רק לים!',
            effects: {
                economy: 20,
                image: 20,
            },
        },
        right: {
            text: 'צודקים',
            effects: {
                economy: -30,
            },
        },
    },
    '3004': {
        character: characters.ministerEducation,
        text: 'נוער חרדי לא יודע אנגלית ושברים פשוטים. הם לא יוכלו לעבוד בכלום!',
        left: {
            text: 'לא נורא',
            effects: {
                religion: 20,
            },
        },
        right: {
            text: 'שלול קיצבה',
            effects: {
                religion: -30,
            },
        },
    },
    '4000': {
        character: characters.general,
        text: 'רוה"מ, אפשר את שמורת חוף דור? אני צריך לבנות בסיס צוללות חדש',
        left: {
            text: 'אין מצב',
            effects: {
                security: -10,
            },
        },
        right: {
            text: 'ברור',
            effects: {
                economy: -10,
                security: 20,
                image: -10,
            },
        },
    },
    '4010': {
        character: characters.wife,
        text: 'ראיתי סרט על חייל שהורג פיסטוקים וחשבתי לעצמי: למה צריך סרטים?',
        left: {
            text: 'ריבוי דעות זה טוב',
            effects: {
                economy: -10,
                image: -10,
                add: [
                    ['bad', -1],
                ],
            },
        },
        right: {
            text: 'צודקת. חתוך מימון',
            effects: {
                economy: 20,
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '4020': {
        character: characters.wife,
        text: 'איחרתי לחדר כושר כי מפגינים חסמו לי את הדרך. אפשר לדאוג שלא יפגינו לנו מול הבית?',
        left: {
            text: 'זכותם להפגין',
            effects: {
                image: -10,
                add: [
                    ['bad', -1],
                ],
            },
        },
        right: {
            text: 'בקלות',
            effects: {
                image: 10,
                add: [
                    ['bad', 1],
                ],
            },
        },
    },
    '4030': {
        character: characters.consultant,
        text: 'האתיופים חוגגים את הסיגד השבוע. הם חושבים שאתה לא חוגג איתם כי אתה לא אוהב אתיופים. מה להגיד להם?',
        left: {
            text: 'שאני מלא מהמימונה',
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'בא לחגוג איתם!',
            effects: {
                image: 10,
            },
        },
    },
};

export const newGameCards = [];

function validateAnswer(answer, unlockedCards) {
    if (answer.unlockCards) {
        for (const unlockedCard of answer.unlockCards) {
            if (!cards[unlockedCard].locked) {
                log('WARN: Unlocked card is not locked:', unlockedCard);
            }
            unlockedCards.add(unlockedCard);
        }
    }
    if (answer.unlockCardsForever) {
        for (const unlockedCard of answer.unlockCardsForever) {
            if (!cards[unlockedCard].locked) {
                log('WARN: Unlocked card is not locked:', unlockedCard);
            }
            unlockedCards.add(unlockedCard);
        }
    }
    if (answer.next) {
        if (!cards[answer.next].locked) {
            log('WARN: Next card is not locked (could be OK):', answer.next);
        }
        unlockedCards.add(answer.next);
    }
}

const unlockedCards = new Set();
for (const id of Object.keys(cards)) {
    const card = cards[id];
    card.id = id;
    if (id.startsWith('newGame')) {
        newGameCards.push(id);
    }
    if (process.env.NODE_ENV === 'development') {
        if (card.left) {
            validateAnswer(card.left, unlockedCards);
        }
        if (card.right) {
            validateAnswer(card.right, unlockedCards);
        }
    }
}
if (process.env.NODE_ENV === 'development') {
    unlockedCards.add('1');
    unlockedCards.add('outOfCards');
    unlockedCards.add('afterTutorial');
    for (const id of Object.keys(cards)) {
        const card = cards[id];
        if (!id.startsWith('newGame') && !id.endsWith('Lose')
            && card.locked && !unlockedCards.has(id)) {
            log('WARN: Locked card never unlocked:', id);
        }
    }
}
