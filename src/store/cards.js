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
import protest from '../assets/cards/game_war.svg'; // TODO
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
        character: newGame,
        text: 'היום ה-10 באפריל. תוצאות הבחירות הגיעו ואתה נבחרת שוב',
        left: {
            text: 'אני?',
            advanceTime: false,
        },
        right: {
            text: 'לא היה לי ספק',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame01': {
        character: newGame,
        text: 'כל הקולות נספרו - למרות הכל, נבחרת שוב',
        left: {
            text: 'עוד פעם?',
            advanceTime: false,
        },
        right: {
            text: 'העם איתי',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame02': {
        character: newGame,
        text: 'התוצאות הגיעו, אדוני ראש הממשלה',
        left: {
            text: 'בוא נתחיל',
            advanceTime: false,
        },
        right: {
            text: 'תודה לך',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame03': {
        character: newGame,
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
        character: newGame,
        text: 'ניצחת!',
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
    '10': {
        character: characters.president,
        text: 'כבוד השר, תרצה להיות השליט?',
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
                economy: -30,
                image: 20,
            },
        },
        right: {
            text: 'פזר הפגנות בכח',
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
        text: 'המפכ״ל לשעבר מתכנן הפיכה',
        left: {
            text: 'להעמיד אותו לדין',
            unlockCards: ['70'],
            effects: {
                security: -20,
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
            text: 'לא',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'כן',
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
        text: 'מלך פיסטוקיה רוצה לעשות סולחה',
        left: {
            text: 'לא, תודה',
            effects: {
                economy: -20,
                image: 20,
            },
        },
        right: {
            text: 'יאללה',
            unlockCards: ['920'],
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
        right: {
            text: 'נחסל את אויבנו',
            effects: {
                economy: -10,
                security: -20,
                image: 50,
            },
            booster: 'war',
        },
    },
    '110': {
        character: characters.opposition,
        text: 'השלום הוא כניעה לטרור ומכירת חיסול',
        left: {
            text: 'קרא להם בוגדים',
            effects: {
                image: 20,
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
            },
        },
    },
    '140': {
        character: characters.protest,
        text: 'שוייון בנטל - יש לגייס גם חרדים',
        left: {
            text: 'המשך בקומבינה',
            effects: {
                economy: -10,
                religion: 30,
            },
        },
        right: {
            text: 'גייס חרדים',
            achievement: 'giyus',
            effects: {
                economy: 10,
                image: 10,
                religion: -50,
            },
        },
    },
    '150': {
        character: characters.consultant,
        text: 'אם תאשים את הערבים במה שקורה במדינה, יהיה קל יותר למשול',
        left: {
            text: 'לא',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'כן',
            afterText: 'שוטרים יורים במחמד אלחפ-מפשעי. השב״כ: לא היה איום, היה בדרכו לעבודה. החקירה נסגרת מחוסר עניין לציבור',
            effects: {
                image: 20,
            },
            booster: 'blameArabs',
        },
    },
    '160': {
        character: characters.consultant,
        text: 'אם תאשים את החרדים במה שקורה במדינה, יהיה קל יותר למשול',
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
            },
        },
    },
    '180': {
        character: characters.consultant,
        text: 'אביב הגיע פסח בא. איפה תרצה לנפוש עם המשפחה?',
        left: {
            text: 'באילת',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'בחו"ל',
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
                security: -10,
                image: 10,
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
        character: characters.consultant,
        text: 'בשיחות השלום, פיסטוקיה דורשים התנצלות',
        left: {
            text: 'חזור הביתה',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'התנצל',
            achievement: 'peace',
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
                security: -20,
                image: 30,
            },
        },
    },
    '205': {
        character: characters.ministerEducation,
        text: 'מי החליט שחייבים ללמד דמוקרטיה?',
        left: {
            text: 'אני',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'הם!',
            effects: {
                image: -10,
                religion: 20,
            },
        },
    },
    '210': {
        character: characters.ministerEducation,
        text: 'בג״צ מאט אותנו בדרך לניצחון מוחץ בפיסטוקיה',
        left: {
            text: 'הפרדת רשויות',
            effects: {
                image: 5,
                religion: -10,
            },
        },
        right: {
            text: 'כנס בשופטים',
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
        text: 'אקנה לך ערוץ טלוויזיה בכיף. לשלוף ארנק? ',
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
            },
        },
        locked: true,
    },
    '250': {
        character: characters.tycoon,
        text: 'בוא נמלא את בתי החולים בתיירים רפואים עשירים.',
        left: {
            text: 'דאג לזקנה במסדרון',
            next: '253',
            unlockCardsForever: ['253','400'],
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
    },
    '251': {
        character: characters.wife,
        text: 'נתפס לי הגב בספינינג ואין מיטות במיון',
        left: {
            text: 'סדר לה סוויטה',
            effects: {
                economy: 10,
                image: -20,
            },
        },
        right: {
            text: 'חכי כמו כולם',
            effects: {
                image: 10,
            },
        },
    },
    '252': {
        character: characters.news,
        text: 'בית החולים פינה ישיש, עני ומסכן לטובת תיירת צעירה, עשירה ולא מסכנה מפיסטוקיה ',
        left: {
            text: 'תחשוב על הבקשיש',
            unlockCardsForever: ['254'],
            effects: {
                economy: 10,
                image: -30,
            },
        },
        right: {
            text: 'הצטלם עם הישיש',
            effects: {
                image: 15,
            },
        },
    },
    '253': {
        character: characters.news,
        text: 'הזקנה במסדרון: ראש הממשלה אולי סידר לי חדר אבל חיכיתי שעות בחושך שיבוא לבקר.',
        left: {
            text: 'התנצל עמוקות',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'לכלך חזרה',
            effects: {
                image: -20,
            },
        },
    },
    '254': {
        character: characters.news,
        text: 'הישיש שנזרק מאשפוז הוא סבו של הלוחם האגדי כושי בקת"ב',
        left: {
            text: 'שילך להאכיל יונים',
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'התנצל והצטלם',
            effects: {
                image: 15,
            },
        },
    },
    '260': {
        character: characters.ministerTreasury,
        text: 'פיתחתי תוכנית להורדת מחירי הדיור',
        left: {
            text: 'קח את הקרדיט',
            afterText: 'העם מעריץ את היכולת שלך לפעול לטובתו. פקידי האוצר נעלבו וחיבלו בתוכנית. המחירים נשארים גבוהים, אבל הי, העיקר שצברת פופולריות',
            effects: {
                economy: -10,
                image: 30,
            },
        },
        right: {
            text: 'פרגן לשר',
            effects: {
                economy: 20,
                image: 10,
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
                religion: -10,
            },
        },
        right: {
            text: 'צודק',
            effects: {
                economy: -10,
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
        },
        right: {
            text: 'כנס בהם',
            effects: {
                security: 10,
                image: 10,
            },
            booster: 'war',
        },
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
        },
        right: {
            text: 'אז כנס בהם',
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
        },
        right: {
            text: 'נכון! כנס בהם',
            effects: {
                security: 10,
                image: 10,
            },
            booster: 'war',
        },
        locked: true,
    },
    '360': {
        character: characters.consultant,
        text: 'אדוני, מלחמה זה צילום ענק בעמוד הראשון ואתה נראה הורס באפוד קרמי',
        left: {
            text: 'לא. רק מו"מ.',
            next: '380',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'אני נכנס בהם!',
            effects: {
                security: 10,
                image: 20,
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
            text: 'אז תגיד... וכנס בהם!',
            effects: {
                security: 10,
                image: 20,
            },
            booster: 'war',
        },
        locked: true,
    },
    '400': {
        character: characters.ministerTreasury,
        text: 'ראש הממשלה, אין תזרים. שנקטין את סל הבריאות?',
        left: {
            text: 'אל תיגע בסל',
            effects: {
                image: 20,
            },
        },
        right: {
            text: 'הפוך אותו לסלסלה',
            effects: {
                economy: 20,
                image: -10,
            },
        },
    },
    '420': {
        character: characters.consultant,
        text: 'המדענים גילו דרך להפיק אנרגיה ממרמור של רווקות מזדקנות. לייצר חשמל או נשק?',
        left: {
            text: 'תמחק את השכנה!',
            effects: {
                security: 10,
                image: -10,
            },
        },
        right: {
            text: 'תאיר את המדינה!',
            effects: {
                economy: 10,
                image: 10,
            },
        },
    },



    '480': {
        character: characters.news,
        text: 'חשיפה בלעדית: ראש הממשלה קיבל וילה מהטייקון הטחון ',
        left: {
            text: 'אין פתק החלפה',
            unlockCardsForever: ['540','820'],
            effects: {
                image: -30,
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
        text: 'אדוני, עקב טעות הקלדה השקענו מיליארד שקל בפיתוח תכנית "לימודי ריבה"',
        left: {
            text: 'פטר את הדביל',
            effects: {
                image: 20,
            },
        },
        right: {
            text: 'קורה',
            effects: {
                image: -10,
            },
        },
    },
    '540': {
        character: characters.consultant,
        text: 'אדוני הסיפור על הוילה שקיבלת עומד להתפרסם בחדשות. מה עושים?',
        left: {
            text: 'נצא למבצע בפיסטוקיה להסיט תשומת לב',
            next: '560',
            effects: {
                security: 20,
                image: 10,
            },
        },
        right: {
            text: 'מכחישים וממשיכים.',
            effects: {
                image: -10,
            },
        },
        locked: true,
    },
    '560': {
        character: characters.general,
        text: 'רוה"מ, מטרות מבצע "חדשות טובות" הושגו תוך ארבע שעות. ממליץ לשלוף את חיילנו מהבוץ הפיסטוקיאני מיד',
        left: {
            text: 'חכה שיגמרו החדשות',
            next: '580',
            unlockCardsForever: ['620'],
            effects: {
                security: 10,
                image: 20,
            },
        },
        right: {
            text: 'תחזיר אותם הביתה מיד',
            effects: {
                security: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '580': {
        character: characters.general,
        text: 'רוה"מ, בשעה האחרונה של המבצע נקלעו חיילנו למארב. אחד עשר מלוחמנו נפלו.',
        left: {
            text: 'מספיק אבדות. לסגת',
            effects: {
                image: -30,
            },
        },
        right: {
            text: 'פעולת תגמול כואבת',
            effects: {
                security: 10,
                image: 20,
            },
        },
    },
    '600': {
        character: characters.ministerTreasury,
        text: 'אדוני, התקציב שוב מתקרב. חינוך או בטחון? והזוכה הוא... היא... הם...',
        left: {
            text: 'מורים עם גירים',
            next: '605',
            effects: {
                economy: -10,
                security: -20,
            },
        },
        right: {
            text: 'חיילים  עם טילים',
            next: '601',
            effects: {
                economy: -20,
            },
        },
    },
    '601': {
        character: characters.news,
        text: 'חשיפה בלעדית: מורה ביום, חשפנית במועדון בלילה – כך סוגרת המורה של ילדכם את החודש',
        left: {
            text: 'איפה אמרתם המועדון?',
            effects: {
                economy: 10,
                image: -15,
            },
        },
        right: {
            text: 'נעלה שכר למורים',
            effects: {
                economy: -20,
                image: 5,
            },
        },
    },
    '605': {
        character: characters.general,
        text: 'רוה"מ, אין תקציב למיגון בתי אזרחים על הגבול הפיסטוקי. ',
        left: {
            text: 'שישימו קוטקס להגנה מירבית',
            effects: {
                image: -20,
            },
        },
        right: {
            text: 'הכי חשוב ביטחון האזרים',
            effects: {
                economy: -20,
            },
        },
    },
    '620': {
        character: characters.news,
        text: 'וידוי לוחמי סיירות: כך המבצע בפיסטוקיה הרס את חיינו',
        left: {
            text: 'קרא להם בכיינים',
            effects: {
                security: 0,
                image: -20,
            },
        },
        right: {
            text: 'טיפול פסיכולוגי לנפגעים',
            effects: {
                economy: -30,
                image: 10,
            },
        },
    },
    '640': {
        character: characters.rabi,
        text: 'כבודו, התלמידים לומדים רק תנ"ך, תושב"ע, תרבות יהודית ותולדות עם ישראל. מה עם קצת תכנים יותר יהודיים?',
        left: {
            text: 'נוסיף משהו במקום אזרחות',
            effects: {
                religion: 30,
            },
        },
        right: {
            text: 'זה מספיק תכנים יהודים',
            effects: {
                religion: -20,
            },
        },
    },
    '660': {
        character: characters.tycoon,
        text: 'השקעתי כסף במפעל טילים מתקדם. תרכשו ממני?',
        left: {
            text: 'בשבילך? הכל',
            next: '661',
            effects: {
                economy: -10,
                security: -10,
            },
        },
        right: {
            text: 'ממש לא.',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                security: 10,
            },
            booster: 'ownMediaRemove',
        },
    },
    '661': {
        character: characters.news,
        text: 'הטילים "המתקדמים" של הטייקון מדויקים פחות מטיל שקנינו בעלי אקספרס',
        left: {
            text: 'דיוק זה לא הכל בחיים',
            effects: {
                security: -20,
            },
        },
        right: {
            text: 'בטל את העסקה',
            afterText: 'ערוץ הטלוויזיה נסגר עקב "חובות המשקיעים". מדורי הרכילות מדווחים שהטייקון הזמין את יושב ראש האופוזיציה לבריתה של נכדתו...',
            effects: {
                security: 10,
                image: 10,
            },
            booster: 'ownMediaRemove',
        },
    },
    '670': {
        character: characters.consultant,
        text: 'אדוני, אני ממליץ לעודד תיירות דת ללא הבדל דת, גזע ומין. ',
        left: {
            text: 'כן, אבל רק ליהודים',
            effects: {
                economy: -10,
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
    },
    '681': {
        character: characters.wife,
        text: 'אני לא יכולה להגיע לראיון בסמרטוטים שעלו רק עשרים אלף ש"ח. מאיפה לשלם?',
        left: {
            text: 'מתקציב נגישות לבוחר',
            next: '682',
            unlockCardsForever: ['690'],
            effects: {
                economy: -10,
                image: -15,
            },
        },
        right: {
            text: 'מהכיס',
            next: '682',
            effects: {
                image: 10,
            },
        },
    },
    '682': {
        character: characters.news,
        text: 'אשת רוה"מ: מבינה מעולה את מצוקת האזרח הקטן. לכן הצעתי לבעלי תוכנית "קוויאר שחור לכל פועל"',
        left: {
            text: 'ציטוט שהוצא מהקשרו',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'רעיון מבריק',
            effects: {
                economy: -10,
                image: -10,
            },
        },
    },
    '690': {
        character: characters.foreignAmbassador,
        text: 'המודיעין שלנו גילה מי שילם על השמלה של אשתך. שתי אפשרויות:',
        left: {
            text: 'נסיגה מאזור מחלוקת',
            effects: {
                security: -20,
            },
        },
        right: {
            text: 'פרסום מביך',
            effects: {
                image: -30,
            },
        },
    },
    '700': {
        character: characters.rabi,
        text: 'תמורת כמה שקלים הרבנות תתגייס למאבק בסרטן: מילא שזו מחלה סופנית, אבל סרטן זה לא כשר ',
        left: {
            text: 'כמה תרצה?',
            unlockCardsForever: ['705',' 1000'],
            effects: {
                economy: -10,
                religion: 20,
            },
        },
        right: {
            text: 'תשכח מזה',
            effects: {
                religion: -20,
            },
        },
    },
    '705': {
        character: characters.rabi,
        text: 'הרבנות רוצה להילחם במחלות לא כשרות נוספות: חזרת, כלבת וכמובן דלקת אוזניים. אצל שרימפס.',
        left: {
            text: 'תשים על זה רבנים',
            effects: {
                economy: -20,
                religion: 10,
            },
        },
        right: {
            text: 'תשאיר את זה למדענים',
            effects: {
                religion: -20,
            },
        },
    },
    '710': {
        character: characters.ministerTreasury,
        text: 'מס ירושה ישפר את התזרים ויפגע רק בטייקונים',
        left: {
            text: 'מיטב חברי הם טייקונים',
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'רעיון מעולה',
            effects: {
                economy: 15,
            },
        },
    },
    '720': {
        character: characters.consultant,
        text: 'שנהפוך את הערים שלנו לערים חכמות ובטוחות? ',
        left: {
            text: 'לא',
            unlockCardsForever: ['960'],
            effects: {
                image: -10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -10,
                security: 15,
                image: 5,
            },
        },
    },
    '730': {
        character: characters.ministerEducation,
        text: 'שנפחית משמעותית את עלות החינוך הגבוה?',
        left: {
            text: 'לא כרגע',
            unlockCardsForever: ['940'],
            effects: {
                economy: 20,
                image: -5,
            },
        },
        right: {
            text: 'מקובל עליי',
            effects: {
                economy: -10,
                image: 20,
            },
        },
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
            afterText: 'חדש בספרייה: ״הטרור: כיצד יוכל המערב לנצח״. רב מכר.',
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
                image: -30,
            },
        },
        right: {
            text: 'היועמ״ש, פרקליט המדינה והתקשורת עושים פוטש.',
            next: '830',
            effects: {
                economy: -5,
                image: 15,
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
            afterText: 'העם החליט לתת לדמוקרטיה עוד צ׳אנס.',
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
            unlockCardsForever: ['980'],
            effects: {
                economy: 10,
            },
        },
        right: {
            text: 'מאשר',
            effects: {
                economy: -10,
                image: 5,
            },
        },
    },
    '850': {
        character: characters.ministerEducation,
        text: 'פתיחת גני עירייה לילדי עובדים זרים?',
        left: {
            text: 'לא',
            unlockCardsForever: ['1020'],
            effects: {
                religion: -10,
            },
        },
        right: {
            text: 'כן',
            effects: {
                economy: -5,
            },
        },
    },
    '860': {
        character: characters.opposition,
        text: 'תחבורה ירוקה זה חשוב. מתי נתקדם לכיוון?',
        left: {
            text: 'נדחה למחר',
            unlockCardsForever: ['1040'],
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
        text: 'המצביעים הצעירים רוצים לגאליזציה. תחליט לאן אתה שייך.',
        left: {
            text: 'דור הטלגרף',
            unlockCardsForever: ['1060'],
            effects: {
                economy: -5,
                image: 30,
            },
        },
        right: {
            text: 'דור הטלגראס',
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
            text: 'בנה תחנה על שמי',
            effects: {
                economy: 15,
                image: 5,
            },
        },
        right: {
            text: 'תשכח מזה',
            effects: {
                image: -10,
            },
        },
    },
    '920': {
        character: characters.foreignAmbassador,
        text: 'הסכם סחר חופשי?',
        left: {
            text: 'נשמע טוב',
            effects: {
                economy: 15,
                image: 10,
            },
        },
        right: {
            text: 'אין מצב',
            effects: {
                security: -5,
                image: -10,
            },
        },
    },
    '940': {
        character: characters.protest,
        text: 'הסטודנטים מתלוננים על עלות התואר',
        left: {
            text: 'מלגות לכולם',
            effects: {
                economy: -20,
                image: 10,
            },
        },
        right: {
            text: 'אלה החיים',
            effects: {
                economy: 15,
                image: -10,
            },
        },
    },
    '960': {
        character: characters.protest,
        text: 'אזרחים יוצאים לרחובות - הפשע בשיא חסר תקדים',
        left: {
            text: 'הכל פה מדהים',
            effects: {
                security: -5,
                image: -5,
            },
        },
        right: {
            text: 'גייס שוטרים',
            effects: {
                economy: -20,
                security: 15,
            },
        },
    },
    '980': {
        character: characters.protest,
        text: 'ההורים לוקחים בייביסטר ועולים על הבריקדות: יקר לגדל פה ילדים!',
        left: {
            text: 'הנחה בגנים',
            effects: {
                economy: -15,
                image: 10,
            },
        },
        right: {
            text: 'בכיינים!',
            effects: {
                economy: 10,
                image: -5,
            },
        },
    },
    '1000': {
        character: characters.protest,
        text: 'החילונים מפגינים - ההדתה הגיעה אפילו אל מערכת הבריאות',
        left: {
            text: 'תנשמו עמוק',
            effects: {
                image: -15,
            },
        },
        right: {
            text: 'צודקים. יש גבול',
            effects: {
                religion: -20,
            },
        },
    },
};

export const newGameCards = [];

for (const id of Object.keys(cards)) {
    cards[id].id = id;
    if (id.startsWith('newGame')) {
        newGameCards.push(id);
    }
}
