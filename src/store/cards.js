import loseEconomy from '../assets/cards/skeleton.png';
import loseSecurity from '../assets/cards/skeleton.png';
import loseImage from '../assets/cards/skeleton.png';
import loseReligion from '../assets/cards/skeleton.png';
import outOfCards from '../assets/cards/skeleton.png';
import victory from '../assets/cards/dog.png';
import newGame from '../assets/cards/skeleton.png';
import president from '../assets/cards/doctor.png';
import consultant from '../assets/cards/dog.png';
import ministerEducation from '../assets/cards/prince.png';
import ministerTreasury from '../assets/cards/princess.png';
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

const cards = {
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
        // Cards can specify either a character or an image and name.
        img: loseSecurity,
        name: 'הפסדת את השלטון',
        text: 'אתה. חלש. הלכה המדינה',
        locked: true,
        lose: true,
    },
    'imageLose': {
        // Cards can specify either a character or an image and name.
        img: loseImage,
        name: 'הפסדת את השלטון',
        text: 'מחאה חברתית - אזלו האוהלים מריקושט',
        locked: true,
        lose: true,
    },
    'religionLose': {
        // Cards can specify either a character or an image and name.
        img: loseReligion,
        name: 'הפסדת את השלטון',
        text: 'החרדים מפילים את הממשלה',
        locked: true,
        lose: true,
    },
    'outOfCards': {
        // Cards can specify either a character or an image and name.
        img: outOfCards,
        name: 'הפסדת את השלטון',
        text: 'כל כך הרבה שנים בשלטון ומה אתה עשית בשביל מדינה? העם מאס בך ודורש בחירות',
        locked: true,
        lose: true,
    },
    'afterTutorial': {
        // Cards can specify either a character or an image and name.
        character: newGame,
        text: 'היום ה-10 באפריל. תוצאות הבחירות הגיעו ואתה נבחרת שוב',
        left: {
            text: 'לא היה לי ספק',
            advanceTime: false,
        },
        right: {
            text: 'אני?',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame01': {
        // Cards can specify either a character or an image and name.
        character: newGame,
        text: 'כל הקולות נספרו - למרות הכל, נבחרת שוב',
        left: {
            text: 'העם איתי',
            advanceTime: false,
        },
        right: {
            text: 'עוד פעם?',
            advanceTime: false,
        },
        locked: true,
    },
    'newGame02': {
        // Cards can specify either a character or an image and name.
        character: newGame,
        text: 'כל הקולות נספרו - למרות הכל, נבחרת שוב',
        left: {
            text: 'תודה לך',
            advanceTime: false,
        },
        right: {
            text: 'בוא נתחיל',
            advanceTime: false,
        },
        locked: true,
    },
    // Paste here //
    '10': {
        character: characters.president,
        text: 'כבוד השר, האם תרצה להיות השליט?',
        left: {
            text: 'כן',
            next: '30',
            advanceTime: false,
        },
        right: {
            text: 'לא',
            next: '20',
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
        text: 'ביטול הבחירות עד לשיקום הדמוקרטיה?',
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
            text: 'הכנס אותו לכלא',
            achievement: 'antiGay',
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
            text: 'אין פרטנר',
            effects: {
                security: -10,
                image: 10,
            },
        },
        right: {
            text: 'כנס ועידה בינלאומית',
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
            text: 'הזמן את הטייקון הטחון',
            next: '240',
            unlockCardsForever: ['250'],
            effects: {
                economy: 10,
            },
        },
        right: {
            text: 'זה מחיר ההצלחה',
            effects: {
                economy: 20,
                image: -20,
            },
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
            booster: 'ownMediaRemove',
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
    '280': {
        character: characters.rabi,
        text: 'כבודו, לא מספיק רב ראשי אשכנזי וספרדי. צריך גם אחד היברידי',
        left: {
            text: 'תשכח מזה',
            effects: {
                image: 10,
                religion: -10,
            },
        },
        right: {
            text: 'בכיף. כמה זה עולה?',
            effects: {
                economy: -10,
                religion: 20,
            },
        },
    },
    '300': {
        character: characters.general,
        text: 'רוה""מ, הפיסטוקיאנים מפגינים ועולים על הגדרות. צריך תכנית פעולה',
        left: {
            text: 'נפתור את זה דיפלומטית',
            next: '320',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'תיכנס בהם',
            effects: {
                security: -10,
                image: -10,
            },
        },
    },
    '320': {
        character: characters.general,
        text: 'תזכור שאצלם דיבור זה סימן לחולשה',
        left: {
            text: 'נשב לדבר איתם',
            next: '340',
            effects: {
                image: 10,
            },
        },
        right: {
            text: 'אז תיכנס בהם',
            effects: {
                security: -10,
                image: -10,
            },
        },
        locked: true,
    },
    '340': {
        character: characters.general,
        text: 'אבל יש את הטילים החדשים שקנינו והבטחת שננסה יחד!',
        left: {
            text: 'נכון! בוא ניכנס בהם',
            effects: {
                security: -10,
                image: -10,
            },
        },
        right: {
            text: 'רק מו""מ',
            next: '360',
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '360': {
        character: characters.consultant,
        text: 'אדוני, מלחמה זה צילום ענק בעמוד הראשון ואתה נראה הורס באפוד קרמי',
        left: {
            text: 'תחזיק אותי שאני לא אכנס בהם!',
            effects: {
                security: -10,
            },
        },
        right: {
            text: 'לא. רק מו""מ.',
            next: '380',
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '380': {
        character: characters.general,
        text: 'טוב, עלית עליי... אשתי זרקה אותי מהבית. אני מחפש תירוץ לישון בבור',
        left: {
            text: 'אז תגיד... ותיכנס בהם!',
            effects: {
                security: -10,
            },
        },
        right: {
            text: 'מו""מ איתם ועם אשתך',
            effects: {
                image: 10,
            },
        },
        locked: true,
    },
    '400': {
        character: characters.ministerTreasury,
        text: 'ראש הממשלה, אנחנו בלחץ תקציבי. אולי נקטין את סל הבריאות?',
        left: {
            text: 'אל תיגע בסל',
            effects: {
                image: 20,
            },
        },
        right: {
            text: 'כן. תהפוך אותו לסלסלת בריאות',
            effects: {
                economy: 10,
                image: -10,
            },
        },
    },
    '420': {
        character: characters.consultant,
        text: 'המדענים שלנו גילו דרך להפיק אנרגיה ממרמור של רווקות מזדקנות. לייצר חשמל או נשק?',
        left: {
            text: 'תאיר את רמת גן!',
            effects: {
                economy: 10,
                image: 10,
            },
        },
        right: {
            text: 'תמחק את שואסמקיסטן!',
            effects: {
                security: 10,
                image: -10,
            },
        },
    },
    '440': {
        character: characters.ministerTreasury,
        text: 'אדוני, הנכים יצאו לרחובות להפגין. להגדיל את קצבת הנכים?',
        left: {
            text: 'ברור',
            effects: {
                economy: -10,
                image: 10,
            },
        },
        right: {
            text: 'בשביל מה? הקלפי לא נגיש לנכים',
            effects: {
                economy: 10,
                image: -5,
            },
        },
    },
    '460': {
        character: characters.opposition,
        text: 'הטייקון הטחון בונה קניון על איזור הציד של חמוס בסכנת הכחדה. תעצור אותו!',
        left: {
            text: 'שהחמוס יקנה שווארמה בקניון.',
            unlockCardsForever: ['820'],
            effects: {
                economy: 20,
                image: -10,
            },
        },
        right: {
            text: 'ברור. כדור הארץ הוא של כולנו!',
            effects: {
                image: 10,
            },
        },
    },
    '480': {
        character: characters.news,
        text: 'חשיפה בלעדית: ראש הממשלה קיבל וילה מהטייקון הטחון ',
        left: {
            text: 'אחזיר כל שקל',
            effects: {
                economy: 5,
                image: 20,
            },
        },
        right: {
            text: 'לוילה אין פתק החלפה',
            unlockCardsForever: ['540','820'],
            effects: {
                image: -30,
            },
        },
    },
    '500': {
        character: characters.rabi,
        text: 'כבודו, אני צריך חצי מיליארד ש""ח לבנות את הכותל הדיגיטלי בענן',
        left: {
            text: 'לא תודה',
            effects: {
                religion: -10,
            },
        },
        right: {
            text: 'קח כסף ותתחיל!',
            effects: {
                economy: -10,
                religion: 30,
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
            text: 'העבירו להם מעטפות כסף',
            afterText: 'חדש בספרייה: ״הטרור: כיצד יוכל המערב לנצח״. רב מכר.',
            effects: {
                security: 10,
                image: 20,
            },
        },
        right: {
            text: 'נפיל את שלטון הטרור',
            afterText: 'ארגון הטרור של כבושיה חוסל. הנשק נאסף, ונראה שיש סיכוי לשלום',
            effects: {
                security: -20,
                image: -20,
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
            text: '״האם אתה בעד לבטל את הבחירות?״',
            afterText: 'העם החליט לתת לדמוקרטיה עוד צ׳אנס.',
            effects: {
                image: -30,
            },
        },
        right: {
            text: '״האם אתה בעד מניעת הפיכה של משת״פים הנתמכים ע״י אויבנו?״',
            next: 'victory',
            afterText: 'הבחירות בוטלו, היועמש, פרקליט המדינה, שופטים, אקדמאים, אנשי תקשרות ושאר בוגדים נעצרו. אין בחירות באופק. שיחקת אותה',
            effects: {
                image: 100,
            },
        },
        locked: true,
    },
};

for (const id of Object.keys(cards)) {
    cards[id].id = id;
}

export default cards;
