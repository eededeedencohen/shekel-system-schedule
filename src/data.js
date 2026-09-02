/* Auto-extracted schedule data (icons, categories, months, day details) */
const ICONS = {
  heart:     '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  cap:       '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"/>',
  ticket:    '<path d="M3 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M13 5v2m0 4v2m0 4v2"/>',
  board:     '<path d="M2 3h20"/><path d="M4 3v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3"/><path d="m9 21 3-3 3 3"/>',
  book:      '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
  dumbbell:  '<path d="M4 9v6M7.5 6.5v11M16.5 6.5v11M20 9v6M7.5 12h9"/>',
  home:      '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.7V21h14V9.7"/><path d="M9.5 21v-6h5v6"/>',
  phone:     '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  layers:    '<path d="M12 2 2 7.5l10 5 10-5z"/><path d="m2 12.5 10 5 10-5"/><path d="m2 17.5 10 5 10-5"/>',
  clipcheck: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  rocket:    '<path d="M12 2.5c3 1.8 4.8 5.5 4.8 9.3l-1.8 3.2h-6L7.2 11.8c0-3.8 1.8-7.5 4.8-9.3z"/><circle cx="12" cy="9.5" r="1.6"/><path d="m7.6 14.5-2 5 3.8-2m7-3 2 5-3.8-2"/>',
  shield:    '<path d="M12 2.5 20 5.5v6c0 4.8-3.3 8.6-8 10.5-4.7-1.9-8-5.7-8-10.5v-6z"/>',
  sparkle:   '<path d="M12 3.5 13.8 8.7 19 10.5l-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z"/><path d="M19 3v3m-1.5-1.5h3"/>',
  hourglass: '<path d="M7 2h10M7 22h10M8 2v3.5L12 10l4-4.5V2M8 22v-3.5L12 14l4 4.5V22"/>',
  target:    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  list:      '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
  code:      '<path d="m8 8-4 4 4 4m8-8 4 4-4 4"/>'
};

function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
}

/* ============================================================
   Categories - subtle backgrounds per task focus
   ============================================================ */
const CATS = {
  social:   { label: 'עו"ס',            icon: 'heart',     bg: '#fdf2f7', border: '#f3d3e2', accent: '#a83a6d' },
  college:  { label: 'מכללה לכל',       icon: 'cap',       bg: '#f2f4fc', border: '#d5dcf5', accent: '#4a55b8' },
  culture:  { label: 'תרבות לכל',       icon: 'ticket',    bg: '#fdf8ec', border: '#f0e2bd', accent: '#a3770f' },
  teachers: { label: 'פורטל מורים',     icon: 'board',     bg: '#f8f3fd', border: '#e5d6f5', accent: '#7746c4' },
  library:  { label: 'ספרייה',          icon: 'book',      bg: '#effaf8', border: '#c9e9e2', accent: '#0f766e' },
  gym:      { label: 'חדר כושר',        icon: 'dumbbell',  bg: '#fdf5ef', border: '#f2dcc9', accent: '#b45a14' },
  hostel:   { label: 'הוסטלים',         icon: 'home',      bg: '#f4f9ee', border: '#dcecc9', accent: '#557a1e' },
  mobile:   { label: 'אפליקציית מובייל', icon: 'phone',     bg: '#eff7fd', border: '#cfe5f6', accent: '#0b6a9e' },
  infra:    { label: 'תשתית ואפיון',    icon: 'layers',    bg: '#f4f5f7', border: '#dcdfe4', accent: '#4c5666' },
  qa:       { label: 'בדיקות ואינטגרציה', icon: 'clipcheck', bg: '#f5f9ec', border: '#e0ebc8', accent: '#5c7c14' },
  launch:   { label: 'השקה והדרכה',     icon: 'rocket',    bg: '#edfaf3', border: '#c8ead8', accent: '#0c7a51' },
  special:  { label: 'ייצוב ואבני דרך', icon: 'hourglass', bg: '#fbf8ec', border: '#ede1ba', accent: '#8f6e0e' },
  army:     { label: 'מילואים',         icon: 'shield',    bg: '#f3f5ec', border: '#dde2cb', accent: '#5b6b3f' },
  holiday:  { label: 'חג / שבתון',      icon: 'sparkle',   bg: '#fbf2f1', border: '#efd7d4', accent: '#a35550' }
};

/* ============================================================
   Months + day assignments (category, cell title)
   ============================================================ */
const MONTHS = [
  {
    y: 2026, m: 8, name: 'ספטמבר 2026',
    phase: 'שלב 1 · אפיון וארכיטקטורה',
    sub: 'ERD, תרשימי זרימה, חוזי API ו-Wireframes - סגירת PRD מלא עד סוכות',
    days: {
      1:  ['college', 'מכללה לכל: התחלת ERD ו-Class Diagram ראשוני'],
      2:  ['college', 'סגירת ERD מכללה + מודל משתמשים והרשאות (RBAC)'],
      3:  ['social',  'ERD: עו"ס (תיק סטודנט ומסמכים) + ספרייה'],
      6:  ['culture', 'ERD: תרבות לכל, הוסטלים וטופס כושר'],
      7:  ['infra',   'Class Diagram מלא וארכיטקטורת Services (Express)'],
      8:  ['social',  'Use Cases & FD: עו"ס (קליטה, מסמכים והתראות)'],
      9:  ['teachers','Use Cases & FD: מורים, נוכחות וקישור חשבוניות'],
      10: ['culture', 'Use Cases & FD: תרבות לכל, הרשמה במובייל והוסטלים'],
      13: ['holiday', 'ערב ראש השנה'],
      14: ['gym',     'Use Cases & FD: חדר כושר (חתימה) וספרייה (מלאי)'],
      15: ['infra',   'חוזי API: Auth, משתמשים, עו"ס וספרייה'],
      16: ['infra',   'חוזי API: מכללה, מורים, תרבות וחדר כושר'],
      17: ['infra',   'Wireframes ומסכי UI: דשבורד שק"ל, עו"ס ומכללה'],
      20: ['holiday', 'ערב יום כיפור'],
      21: ['holiday', 'יום כיפור'],
      22: ['infra',   'Wireframes ומסכי UI: פורטל מורים, תרבות וספרייה'],
      23: ['mobile',  'אפיון אפליקציית Mobile (React Native) לסטודנטים'],
      24: ['special', 'איחוד PRD מלא, נעילת Scope וסביבת פיתוח'],
      27: ['holiday', 'ערב סוכות'],
      28: ['holiday', 'חול המועד סוכות'],
      29: ['holiday', 'חול המועד סוכות'],
      30: ['holiday', 'חול המועד סוכות']
    }
  },
  {
    y: 2026, m: 9, name: 'אוקטובר 2026',
    phase: 'שלב 2 · פיתוח Backend + Web - מודולי ליבה',
    sub: 'עו"ס, ספרייה, חדר כושר ומכללה לכל - פיתוח Fullstack מלא',
    days: {
      1:  ['holiday', 'חול המועד סוכות'],
      4:  ['social',  'מערכת קליטת עו"ס (Backend): תיק סטודנט טיפולי'],
      5:  ['social',  'ניהול טפסי משה"ב (Backend): Multer והעלאת קבצים'],
      6:  ['social',  'עו"ס (Backend): מנגנון התראות (Cron) למסמכים פגי תוקף'],
      7:  ['social',  'מסכי עו"ס (React): דשבורד, רשימת סטודנטים והתראות'],
      8:  ['social',  'מסכי עו"ס (React): טופס קליטה וניהול פגישות מעקב'],
      11: ['library', 'ספרייה (Fullstack): מודל ספרים, מלאי ומסך קטלוג'],
      12: ['library', 'ספרייה (Fullstack): לוגיקת השאלות, החזרות והיסטוריה'],
      13: ['gym',     'חדר כושר (Backend): מודל טופס דיגיטלי, סטטוס והרשאות'],
      14: ['gym',     'חדר כושר (React): דשבורד אישורים לעובדי שק"ל'],
      15: ['qa',      'אינטגרציה ובדיקות: עו"ס, ספרייה, חדר כושר'],
      18: ['college', 'מכללה לכל (Backend): מודל חוגים, קורסים וסילבוס'],
      19: ['college', 'מכללה לכל (Backend): שיבוץ מורים וסטודנטים'],
      20: ['college', 'מכללה לכל (React): ממשק ניהול חוגים ושיבוצים'],
      21: ['college', 'מכללה לכל (React): לוח שנה (Calendar) לניהול שיעורים'],
      22: ['college', 'מכללה לכל: מעקב דיווחי נוכחות שיעורים'],
      25: ['college', 'מכללה לכל (React): ממשק אישור חשבוניות מורים'],
      26: ['infra',   'ליטושי UI ו-State Management (Zustand/Redux)'],
      27: ['holiday', 'יום שבתון - בחירות לכנסת'],
      28: ['qa',      'בדיקות שרת ותיקוני באגים רוחביים'],
      29: ['special', 'Buffer Day: סגירת קצוות וייצוב (Code Freeze Phase 1)']
    }
  },
  {
    y: 2026, m: 10, name: 'נובמבר 2026',
    phase: 'שלב 3 · מורים, תרבות ונעילת Web',
    sub: 'השלמת כל ממשקי ה-Web, בדיקות והקפאת קוד יציבה לפני המילואים',
    days: {
      1:  ['teachers','פורטל מורים (React): כניסה ייעודית ומערכת שעות שבועית'],
      2:  ['teachers','מורים (Fullstack): דיווח נוכחות מהיר לשיעור שבוצע'],
      3:  ['teachers','מורים: מודול העלאת קובץ חשבונית תשלום'],
      4:  ['teachers','מורים: קישור חשבונית לשיעורים וחישוב שעות'],
      5:  ['teachers','מורים (React): דשבורד מורה וסטטוס חשבוניות'],
      8:  ['culture', 'תרבות לכל (Backend): מודל יציאות ומגבלת מקומות'],
      9:  ['culture', 'תרבות לכל (React): הקמה ופרסום לו"ז יציאות חודשי'],
      10: ['culture', 'תרבות לכל (React): סימון נוכחות בשטח בזמן אמת'],
      11: ['culture', 'תרבות לכל (React): דשבורד רכז ודוחות השתתפות'],
      12: ['hostel',  'הוסטלים (Fullstack): חוגי מבנה, שיבוץ ונוכחות'],
      15: ['infra',   'דשבורד ראשי לעובדי שק"ל: התראות וקיצורי דרך'],
      16: ['mobile',  'התאמת Endpoints ייעודיים לאפליקציית הסטודנטים'],
      17: ['qa',      'בדיקות API מקיפות: אימות, הרשאות ומקרי קצה'],
      18: ['qa',      'ליטושי UI, Cross-Browser ורספונסיביות'],
      19: ['qa',      'בדיקות אבטחה (RBAC), סודיות רפואית והרשאות קבצים'],
      22: ['qa',      'בדיקות End-to-End: סבב תרחישים מלא'],
      23: ['qa',      'בדיקות עומס וביצועי MongoDB (Indexes)'],
      24: ['infra',   'תיעוד מלא של חוזי ה-API לקראת פיתוח המובייל'],
      25: ['special', 'הקפאת גרסה מלאה (Backend & Web Staging Lock)'],
      26: ['special', 'Buffer Day: סגירת באגים אחרונים וגיבויים'],
      29: ['special', 'בדיקת Staging באוויר, Git Tags ונעילת מאגרים'],
      30: ['army',    'התארגנות ומנוחה לקראת היציאה למילואים']
    }
  },
  { miluim: true },
  {
    y: 2027, m: 1, name: 'פברואר 2027',
    phase: 'שלב 4 · אפליקציית מובייל (React Native)',
    sub: 'חזרה מהמילואים - פיתוח אפליקציית הסטודנטים מאפס עד גרסת אלפא',
    days: {
      1:  ['mobile',  'התאפסות, Setup פרויקט RN, Navigation וחיבור API'],
      2:  ['mobile',  'תשתית Auth & Secure Storage (הזדהות, Auto-Login)'],
      3:  ['mobile',  'מסך בית: לו"ז יומי, כרטיסיית פעילות והתראות'],
      4:  ['culture', 'תרבות לכל (RN): צפייה בלו"ז יציאות חודשי'],
      7:  ['culture', 'תרבות לכל (RN): הרשמה וביטול הרשמה (Optimistic UI)'],
      8:  ['culture', 'תרבות לכל (RN): "היציאות שלי" והיסטוריית השתתפות'],
      9:  ['college', 'מכללה לכל (RN): מערכת שעות שבועית ופירוט שיעורים'],
      10: ['hostel',  'הוסטלים (RN): שילוב חוגי ההוסטל בלו"ז הסטודנט'],
      11: ['gym',     'חדר כושר (RN): טופס הטבה דיגיטלי והצהרת בריאות'],
      14: ['gym',     'חדר כושר (RN): חתימה דיגיטלית במגע ומעקב סטטוס'],
      15: ['library', 'ספרייה (RN): קטלוג, חיפוש זמינות וספרים מושאלים'],
      16: ['mobile',  'התראות Push (FCM): טוקנים, תזכורות ו-Deep Linking'],
      17: ['mobile',  'מצבי רשת, Offline Caching והודעות שגיאה'],
      18: ['mobile',  'התאמות UI/UX, Safe Area ורספונסיביות ל-Android'],
      21: ['mobile',  'התאמות UI/UX, Notch והרשאות ב-iOS'],
      22: ['qa',      'בדיקות פונקציונליות במכשירים אמיתיים'],
      23: ['qa',      'סבב תיקוני באגים #1 (ניווט, טפסים, רשת)'],
      24: ['qa',      'סבב תיקוני באגים #2 וליטושי ביצועים'],
      25: ['mobile',  'הפקת גרסת אלפא (Android APK & TestFlight)'],
      28: ['special', 'Buffer פברואר: ייצוב גרסת מובייל והיערכות למרץ']
    }
  },
  {
    y: 2027, m: 2, name: 'מרץ 2027',
    phase: 'שלב 5 · אינטגרציה, UAT ועלייה לאוויר',
    sub: 'בדיקות קבלה עם משתמשים, הקמת Production, הפצת מובייל והשקה רשמית',
    days: {
      1:  ['qa',      'אינטגרציה מלאה: Mobile ↔ Web ↔ Server'],
      2:  ['qa',      'טסטים E2E: תרחישי סטודנט (תרבות, כושר, ספרייה)'],
      3:  ['qa',      'טסטים E2E: תרחישי מורים ומכללה'],
      4:  ['qa',      'טסטים E2E: תרחישי עו"ס והוסטלים'],
      7:  ['qa',      'סבב תיקוני באגים רוחבי (Web & Mobile)'],
      8:  ['qa',      'המשך תיקונים ואופטימיזציית סנכרון'],
      9:  ['qa',      'בדיקות קבלה (UAT) פנימיות עם רכזים ועו"ס'],
      10: ['qa',      'בדיקות קבלה (UAT) בשטח מול מורים וסטודנטים'],
      11: ['qa',      'איסוף פידבקים ותיעוד ריג\'קטים לרשימה ממוקדת'],
      14: ['qa',      'יישום תיקוני UAT וליטושי UX'],
      15: ['special', 'סגירת סבב UAT וקבלת Sign-off מהצוות'],
      16: ['infra',   'אופטימיזציית ענן ומסד נתונים (Atlas Indexes)'],
      17: ['infra',   'בדיקות אבטחה סופיות, הקשחה ו-Rate Limiting'],
      18: ['infra',   'הקמת סביבת Production בענן (Node + Atlas)'],
      21: ['infra',   'דומיינים, תעודות SSL, CDN ו-CORS ייצור'],
      22: ['mobile',  'גרסאות Release חתומות (Play Store & App Store)'],
      23: ['holiday', 'חג פורים'],
      24: ['holiday', 'שושן פורים'],
      25: ['qa',      'Smoke Tests ב-Production ובדיקת חנויות האפליקציות'],
      28: ['launch',  'הדרכות משתמשים: רכזים, עו"ס, הנה"ח ומורים'],
      29: ['launch',  'פיילוט שקט - הפצה מבוקרת לקבוצה ראשונה'],
      30: ['launch',  'עלייה רשמית מלאה לאוויר! (Production Launch)'],
      31: ['launch',  'ניטור, Uptime Tracking וליווי צוות שק"ל']
    }
  }
];

const MILUIM_START = new Date(2026, 11, 1);
const MILUIM_END   = new Date(2027, 0, 31);

/* ============================================================
   Full day details (modal content)
   ============================================================ */
const DETAILS = {
  /* ---------------- ספטמבר 2026 ---------------- */
  '2026-09-01': { d: ["התחלת מיפוי הישויות של מכללה לכל (חוגים, שיעורים ומורים).","שרטוט ראשוני של מחלקות (Class Diagram) עבור ישויות המכללה.","זיהוי נקודות הממשק מול דיווחי הנוכחות והמורים."], c: ["שרטוט ישות Course וישות Lesson ראשונית.","הגדרת קשרים בסיסיים בין מורה לשיעורים.","רישום שאלות פתוחות לגבי אופן שיבוץ סטודנטים."], t: "התחלת תכנון סכמות Mongoose לקורסים ושיעורים." },
  '2026-09-02': { d: ["השלמה וסגירה הרמטית של מודל מכללה לכל: מנגנון שיבוץ סטודנטים, לוח שנה ומעקב ביצוע.","סכמת משתמשים אחודה (User Schema) עם ניהול תפקידים קפדני (Roles) והרשאות (RBAC).","הגדרת אינדקסים ייחודיים (Unique Compound Indexes) למניעת כפילויות שיבוץ."], c: ["השלמת סכמת CollegeCourse: שם חוג, סילבוס, ימי פעילות, מורה מוביל.","השלמת סכמת LessonSchedule: מועד מדויק, כיתה, סטטוס ביצוע, מערך משובצים.","הגדרת User Schema: שדות זיהוי, סיסמה מוצפנת, Enum תפקידים (Admin, SocialWorker, CollegeManager, CultureCoordinator, Teacher, Student).","בדיקת אינדקס מונגו: { teacherId: 1, startTime: 1 } ייחודי למניעת כפל שיבוץ מורה."], t: "MongoDB Collections: users, college_courses, lesson_schedules. יחסים: Referenced IDs עם populate." },
  '2026-09-03': { d: ["סכמת Mongoose לתיק סטודנט טיפולי אצל העו\"ס (נתוני סל שיקום, גורם מפנה).","תת-סכמה למסמכים ואישורי משרד הבריאות עם שדות תאריכי תפוגה עבור התראות.","סכמת ספרייה: קטלוג ספרים, מלאי זמין, מעקב השאלות והיסטוריה."], c: ["הגדרת StudentSocialCase Schema: תאריך קליטה, סל שיקום, סיכומי פגישות מעקב.","הגדרת MedicalDocument Schema: סוג טופס, קישור קובץ מאובטח (S3), תאריך תוקף, סטטוס.","הגדרת Book Schema: שם ספר, סופר, ISBN, מספר עותקים כולל וזמין.","הגדרת BookLoan Schema: קישור לסטודנט, תאריך השאלה, יעד להחזרה, החזרה בפועל."], t: "Embedded Documents עבור פגישות עו\"ס. Indexed date fields לסריקה יומית של תוקף טפסים." },
  '2026-09-06': { d: ["סכמת יציאות ואירועי 'תרבות לכל' עם מגבלת מקומות ורשימת נרשמים.","סכמת חוגים ייעודית להוסטלים (מבנה דיור).","סכמת טופס הטבת חדר כושר דיגיטלי כולל חתימה ומעקב אישורים."], c: ["הגדרת CultureEvent Schema: כותרת יציאה, תאריך, שעה, מקום, maxParticipants, רשימת נרשמים.","הגדרת EventAttendance Schema: סימון נוכחות בזמן אמת ביציאה.","הגדרת HostelActivity Schema: מבנה הוסטל, סוג פעילות, ימי פעילות, רכז אחראי.","הגדרת GymContract Schema: פרטי סטודנט, הצהרת בריאות, חתימה דיגיטלית, סטטוס (Pending/Approved/Rejected)."], t: "Atomic update operations ($addToSet, $inc) למניעת Over-booking ברישום ליציאות." },
  '2026-09-07': { d: ["דיאגרמת מחלקות מלאה של כל שכבת ה-Backend (Controllers, Services, Repositories).","מיפוי שכבות ה-Middlewares (Auth, RoleGuard, Validation, ErrorHandler).","הגדרת תשתית שירות קבצים (Storage Service) והתראות (Notification Engine)."], c: ["שרטוט מחלקות השירות: UserService, CollegeService, SocialWorkerService, CultureService, GymService, LibraryService.","הגדרת DTOs עבור Request Body בכל מודול.","תכנון מחלקת CronManager לבדיקה יומית של טפסי משה\"ב פגי תוקף.","אימות יחסי תלות באקספרס (Clean Layered Architecture)."], t: "Express architecture: Routes -> Middlewares -> Controllers -> Services -> Mongoose Models." },
  '2026-09-08': { d: ["תרשים זרימה של תהליך קליטת סטודנט חדש במערכת על ידי העו\"ס.","תרשים Workflow של מנגנון ההתראות האוטומטי למסמכים פגי תוקף.","Use Case Scenarios: העלאת טופס, עדכון סטטוס תיק, סיכום פגישה טיפולית."], c: ["מיפוי שלבי טופס הקליטה: פרטים אישיים -> אישורי סל שיקום -> פגישת פתיחה.","תרשים החלטה למסמכים: תוקף < 30 יום -> התראה בדשבורד -> דגל אדום.","מדיניות גישה: רק עו\"ס ומנהל צופים בסיכומי פגישות (סודיות רפואית מלאה)."], t: "State Machine לסטטוס מסמך: VALID -> EXPIRING_SOON (<=30 days) -> EXPIRED." },
  '2026-09-09': { d: ["תרשים זרימה מלא: דיווח שיעור -> אישור נוכחות -> הגשת חשבונית -> אישור תשלום.","Use Case: פורטל מורה (לו\"ז שבועי ודיווח נוכחות מהיר).","Use Case: מודול קישור חשבונית לשיעורים שבוצעו בפועל."], c: ["זיהוי נקודות כשל: מניעת דיווח כפול; חסימת שיעורים שכבר שויכו לחשבונית.","אפיון העלאת קובץ חשבונית (PDF/תמונה) והזנת מספר וסכום.","הגדרת מסך רכז: חשבונית + שיעורים מקושרים לאישור/דחייה בלחיצה."], t: "Invoice validation logic: sum(lessons.rate) === invoice.amount. סטטוסים: DRAFT, SUBMITTED, APPROVED." },
  '2026-09-10': { d: ["תרשים זרימה: פרסום לו\"ז חודשי -> צפייה במובייל -> הרשמה -> נוכחות בשטח.","תרחישי קצה: רשימת המתנה, ביטול הרשמה, שינוי מועד יציאה.","תרשים זרימת רכז בשטח (סימון הגעה דרך טאבלט/ווב)."], c: ["מנגנון הרשמה אטומי: בדיקת זמינות מקומות לפני הרשמה.","אפיון Push Notification: תזכורת 24 שעות לפני היציאה.","דוחות השתתפות: פילוח סטודנטים שלא יצאו מעל חודש למעקב עו\"ס."], t: "Atomic update: { $push: { attendees }, $inc: { availableSeats: -1 } }." },
  '2026-09-14': { d: ["תרשים זרימה: טופס כושר במובייל -> חתימה דיגיטלית -> אישור עובד שק\"ל.","תרשים זרימה: השאלת ספר -> תזכורת -> החזרה ועדכון מלאי.","תרשים פעילות חוגי הוסטלים ושיבוץ חניכים."], c: ["אפיון רכיב חתימת Canvas והמרתו ל-Base64.","אפיון הרשאות: מי מוסמך לאשר טופס כושר ולסגור פנייה.","חוקיות השאלה: חסימה אם לסטודנט יש ספר באיחור."], t: "Canvas Signature Data URL storage, inventory decrement/increment transactions." },
  '2026-09-15': { d: ["מפרט OpenAPI/Swagger לנקודות הקצה: הזדהות, משתמשים, עו\"ס וספרייה.","מבנה Payload מדויק (JSON) וקודי שגיאה (HTTP Statuses).","מבנה Headers מאובטח (Bearer JWT, Refresh Tokens)."], c: ["Auth: POST /api/auth/login, /refresh, /logout.","עו\"ס: GET/POST /api/social/students, POST /students/:id/documents, GET /alerts.","ספרייה: GET/POST /api/library/books, POST /borrow, POST /return.","פורמט שגיאה גלובלי: { success: false, error: { code, message, details } }."], t: "RESTful best practices, RFC-7807 Error formatting, JWT payload structure." },
  '2026-09-16': { d: ["מפרט Endpoints מלא לפורטל המורים וחשבוניות (Multipart לקבצים).","מפרט Endpoints ללו\"ז מכללה, יציאות תרבות והרשמות.","מפרט Endpoints למובייל: דשבורד סטודנט, רישום ליציאה, טופס כושר."], c: ["מורים: GET /api/teacher/schedule, POST /lessons/:id/attendance, POST /invoices.","תרבות: GET /api/culture/events, POST /events/:id/register, POST /attendance.","כושר: POST /api/gym/contracts, GET /api/gym/contracts.","דשבורד מובייל: GET /api/student/dashboard בקריאה אחת."], t: "Aggregation Endpoints לביצועי מובייל מהירים וצמצום קריאות רשת." },
  '2026-09-17': { d: ["Wireframes מפורטים לדשבורד הראשי של עובדי שק\"ל (Web).","מסכי עו\"ס: כרטיס סטודנט, טבלת התראות תוקף, יומן מעקב.","מסכי מכללה: שיבוץ חוגים ולוח שנה אינטראקטיבי."], c: ["דשבורד: Widgets התראות, פעילויות החודש, סטטיסטיקת נוכחות.","מסך עו\"ס: חיווי צבעים (ירוק/כתום/אדום) לפי ימי תוקף.","מסך שיבוצים: לוח שבועי עם בחירת כיתה/מורה/סטודנטים.","רכיבי UI לשימוש חוזר: Modals, Tables, Forms, Badges."], t: "React Component Hierarchy: DashboardLayout -> Sidebar, Header, AlertsBanner, DataGrid." },
  '2026-09-22': { d: ["מסכי פורטל מורים: רשימת שיעורים, דיווח מהיר, העלאת חשבונית.","מסכי תרבות: לו\"ז חודשי, טבלת משתתפים, נוכחות בשטח.","מסכי ספרייה ואישורי חדר כושר לעובדי שק\"ל."], c: ["פורטל מורה: ממשק פשוט מותאם גם לדפדפן בנייד.","העלאת חשבונית: Drag & Drop + צ'קבוקסים לשיעורים.","כפתור 'פרסם לו\"ז חודשי למובייל' שנועל עריכות ופותח הרשמות.","מסך אישור טופס כושר: צפייה בחתימה, 'אשר'/'דחה' עם נימוק."], t: "React Responsive Design (Tailwind / CSS Modules) למחשב ולטאבלט של רכזים." },
  '2026-09-23': { d: ["מיפוי מלא של ה-User Journey של הסטודנט במובייל.","ארכיטקטורת מסכי React Native (Bottom Tabs + Stack Navigation).","אפיון רכיב טופס כושר דיגיטלי וחתימת מסך במגע."], c: ["מסך בית: תמונת מצב יומית (השיעור הבא, היציאה הקרובה).","טאב תרבות: כרטיסי יציאות עם 'הרשם עכשיו' / 'בטל רישום'.","טאב מערכת שעות: לוח שבועי של חוגים ופעילויות הוסטל.","טאב פרופיל: טופס כושר, ספרים מושאלים ותאריכי החזרה.","אפיון Push Notifications (פתיחת הרשמה, תזכורת לשיעור)."], t: "React Native Navigation: BottomTabNavigator (Home, Culture, Schedule, Profile) + Signature Canvas." },
  '2026-09-24': { d: ["איחוד כל מסמכי האפיון ל-PRD מלא וסגור סופית.","נעילת Scope של גרסה 1.0 (MVP) למניעת Scope Creep.","הקמת סביבת פיתוח ו-Repos (Express, React, Mongo Atlas)."], c: ["סנכרון סופי בין סכמות DB, מסכי UI וחוזי API.","הקמת Repo לשרת: Node.js, Express, Mongoose, dotenv, cors, helmet, jsonwebtoken.","חיבור מאובטח ל-MongoDB Atlas (Clusters, IP Whitelist).","מבנה תיקיות: /controllers, /services, /models, /middlewares, /routes, /utils.","סביבה מוכנה כדי לצאת לחופשת סוכות בראש שקט."], t: "Node.js 20+, Express, Mongoose, MongoDB Atlas Cloud, Git Repos ready." },

  /* ---------------- אוקטובר 2026 ---------------- */
  '2026-10-04': { d: ["יצירת Mongoose Schema עבור תיק הסטודנט של העו\"ס.","Endpoints ל-CRUD של פרטי סטודנט וסל שיקום.","RoleGuard Middleware: רק 'SocialWorker' ניגש לנתיבים."], c: ["Controllers ו-Services עבור /api/social/students.","ולידציה עם Joi או Zod לפני הכנסה למונגו.","Endpoint להוספת רשומות מעקב (סיכומי פגישה) לתיק."], t: "router.post('/', requireAuth, requireRole('SocialWorker'), validate(studentSchema), createStudent)" },
  '2026-10-05': { d: ["תשתית שרת המקבלת קבצים (PDF, תמונות) ומשייכת לסטודנט.","העלאה מאובטחת ל-Cloud (AWS S3 / Cloudinary).","שמירת URL, תאריך הנפקה ותפוגה במסד הנתונים."], c: ["Multer Middleware: סינון סוגי קבצים וגודל מקסימלי.","פונקציית העלאה לענן שמחזירה קישור שמור.","עדכון Document Schema עם פרטי הטופס.","Endpoint: /api/social/students/:id/documents"], t: "Node.js Multer (memoryStorage), AWS SDK S3 PutObject, Mongoose $push to documents array." },
  '2026-10-06': { d: ["Cron Job יומי (למשל 08:00 בבוקר).","שאילתה הסורקת מסמכים שפגים ב-30 יום או שפגו.","יצירת רשומות Alert לדשבורד העו\"ס."], c: ["התקנת node-cron.","Aggregation לסינון תאריכים בתוך מערכי מסמכים.","Endpoint: /api/social/alerts להתראות הפעילות.","בדיקה עם תאריכים פיקטיביים בעבר ובעתיד."], t: "node-cron, Mongoose $match, $unwind, $project. תנאי: date <= currentDate + 30 days." },
  '2026-10-07': { d: ["מסך הבית (Dashboard) של העובדת הסוציאלית.","טבלת סטודנטים מסוננת (Data Grid) עם חיפוש.","פאנל התראות בולט למסמכים שפגים או פגו."], c: ["חיבור React לשרת (Axios / React Query).","טבלה אינטראקטיבית עם פילטרים (שם, גורם מפנה, תאריך).","AlertBanner ששולף מ-/api/social/alerts.","חיווי ויזואלי לסטטוס תיק (פעיל / חסר מסמכים)."], t: "React, React Query (useQuery), Tailwind CSS. רכיבי UI: Table, Badge, AlertBox." },
  '2026-10-08': { d: ["טופס קליטה רב-שלבי (Multi-step) לסטודנט חדש.","מסך פרופיל עם העלאת מסמכי משה\"ב מהדפדפן.","ממשק הוספת רשומת יומן (תיעוד פגישה)."], c: ["ניהול State עם React Hook Form.","רכיב Drag & Drop להעלאת PDF.","POST עם multipart/form-data.","Modal להזנת סיכום פגישה מהיר."], t: "React Hook Form, Axios FormData headers, Dropzone.js או Native File Input." },
  '2026-10-11': { d: ["Backend: סכמת Book ומסלולי CRUD למלאי.","Web: מסך ניהול ספרייה (קטלוג, 'הוסף ספר חדש')."], c: ["Endpoint: /api/library/books","חיפוש לפי שם ספר או סופר ($regex).","קומפוננטת קטלוג: מלאי נוכחי מול זמין."], t: "Express CRUD, React Data Table, Mongoose $regex search (case-insensitive)." },
  '2026-10-12': { d: ["לוגיקת השאלה: הורדת זמין ב-1, פתיחת רשומת השאלה.","לוגיקת החזרה: סגירת תאריך, החזרת זמין ב-1.","כפתורי 'השאל' ו'החזר' אינטראקטיביים."], c: ["POST /api/library/borrow (userId, bookId).","ולידציה: availableCopies > 0?","POST /api/library/return.","בחירת סטודנט מרשימה (Autocomplete)."], t: "Mongoose $inc operation. בדיקת תקינות לפני עדכון מלאי." },
  '2026-10-13': { d: ["סכמת GymContract: חתימה (Base64) וסטטוס (Pending/Approved).","Endpoints להגשת טופס (למובייל) וקריאת ממתינים.","עדכון סטטוס: ממתין -> מאושר/נדחה."], c: ["הגדרת GymContract Schema.","POST /api/gym/submit (payload מהמובייל בפברואר).","GET /api/gym/pending (לעובדי שק\"ל).","PATCH /api/gym/status/:id (סטטוס + שם המאשר)."], t: "Express Routers, Mongoose Schema validation. שדה signature מסוג String." },
  '2026-10-14': { d: ["מסך ניהול בקשות כושר באזור האדמין.","רשימת טפסים ממתינים מסטודנטים.","צפייה בטופס (כולל חתימה) וכפתורי 'אשר'/'דחה'."], c: ["טבלת ממתינים (/api/gym/pending).","Modal עם פרטי סטודנט ותמונת חתימה (Base64).","כפתור 'אשר' שמעדכן סטטוס ומסיר מהרשימה.","שדה 'סיבת דחייה'."], t: "React Query Mutations, רינדור Base64 Image בתגית <img />." },
  '2026-10-15': { d: ["בדיקת תקינות רוחבית של המודולים שפותחו.","וידוא שקריאות ה-API רצות עם JWT נכון.","תיקון באגים ויזואליים (Tailwind)."], c: ["Network Tab: אין בקשות כפולות או זיכרון דולף.","התנהגות בפקיעת Token (ריענון או ניתוק).","רספונסיביות בסיסית במסכי ניהול.","בדיקת ה-Cron ידנית בסביבת פיתוח."], t: "Chrome DevTools, Postman, JWT Token handling, Error Boundaries ב-React." },
  '2026-10-18': { d: ["סכמת Course (חוג).","Endpoints CRUD לחוגים.","לוגיקת חישוב שעות ותקופת פעילות."], c: ["CourseSchema: שם, תיאור, תאריכים, מקסימום נרשמים.","Routes /api/college/courses.","וידוא תקינות תאריכים ביצירה."], t: "Express validation (Joi), Mongoose Model configuration." },
  '2026-10-19': { d: ["לוגיקת שיבוץ: מורה + סטודנטים + חוג.","Endpoint הוספת סטודנט למשובצים.","Endpoint הגדרת מורה לחוג."], c: ["מערך studentIds ושדה teacherId במודל.","POST /api/college/courses/:id/enroll.","מניעת שיבוץ כפול ובדיקת תפוסה."], t: "Mongoose $addToSet למניעת כפילויות, Populate לפרטי סטודנט." },
  '2026-10-20': { d: ["מסך יצירת חוג חדש למנהל המכללה.","חיפוש סטודנט ושיבוצו לחוג.","טבלת חוגים ומורים משובצים."], c: ["טופס 'יצירת קורס חדש'.","Autocomplete לפי שם או ת.ז.","Toast notifications להצלחה/כישלון."], t: "React Select / Autocomplete, Axios, Toastify." },
  '2026-10-21': { d: ["הטמעת ספריית לוח שנה (FullCalendar / React Big Calendar).","תצוגת מערכת שעות שבועית/חודשית.","לחיצה על שיעור לצפייה בפרטיו."], c: ["הגדרת הלוח לעברית (RTL).","מיפוי שיעורים למבנה Events.","Modal עם שם המורה ורשימת סטודנטים."], t: "React Big Calendar / FullCalendar, date-fns / dayjs." },
  '2026-10-22': { d: ["Backend: מודל Lesson עם נוכחות (נוכח/חיסור/איחור).","Web: דשבורד שיעורים שבוצעו ואחוזי נוכחות."], c: ["Endpoint דיווחי נוכחות לפי חודש/קורס.","גרפים/כרטיסיות נתונים ב-React.","התראה על שיעור שלא דווח."], t: "Chart.js / Recharts, Mongoose Aggregation Queries." },
  '2026-10-25': { d: ["מסך ניהול חשבוניות שהגישו מורים.","השוואה ויזואלית: חשבונית מול שיעורים.","אישור תשלום או החזרה לתיקון."], c: ["קריאת חשבוניות ממתינות.","תצוגת Side-by-Side: חשבונית מול שיעורים.","'אשר'/'דחה' עם סיבה למורה."], t: "React Split View, PDF viewer, Axios PATCH requests." },
  '2026-10-26': { d: ["ניהול State רוחבי (מי מחובר? תפקיד?).","ליטושי Tailwind ושפה עיצובית אחידה.","Loading spinners ו-Error states."], c: ["Zustand או Redux Toolkit לפרטי המשתמש.","Protected Routes ב-React Router.","Skeleton Loaders בכל המסכים."], t: "Zustand / Redux, React Router v6, Tailwind CSS UI polish." },
  '2026-10-28': { d: ["סבב QA עצמי על כל מודולי החודש.","מקרי קיצון ב-Backend (נתונים ריקים, שגיאות DB).","תיקון באגים שהתגלו."], c: ["תרחישים ב-Postman לעמידות ה-API.","זרימה מלאה: קליטה -> סטודנט -> ספר -> חוג.","קריאת שגיאות בקונסול של React."], t: "Postman API Tests, React Developer Tools." },
  '2026-10-29': { d: ["טיפול במשימות שגלשו החודש.","Refactoring והסרת Dead code.","דחיפה ל-Staging / גיבוי Git יציב."], c: ["כל הקוד תחת Git.","Code Review עצמי וניקוי console.log.","הקפאת מודולי אוקטובר - עוברים לנובמבר."], t: "Git Commit, Push, ESLint/Prettier format check." },

  /* ---------------- נובמבר 2026 ---------------- */
  '2026-11-01': { d: ["ממשק כניסה ייעודי למורים עם ניתוב לפורטל.","מערכת שעות שבועית של המורה המחובר בלבד.","חיווי סטטוס שיעור: דווח / ממתין / עתידי."], c: ["קומפוננטת TeacherScheduleView.","GET /api/teacher/schedule מסונן לפי JWT.","התאמה מלאה למובייל (Mobile-responsive)."], t: "React, Tailwind CSS (Mobile-first), JWT Auth Context." },
  '2026-11-02': { d: ["Backend: עדכון נוכחות עם רשימת סטודנטים ונוכח/נעדר.","Web: דיווח נוכחות בקליק אחד לכל סטודנט.","נעילת דיווח לאחר שמירה."], c: ["POST /api/teacher/lessons/:id/attendance.","כפתורי Toggle מהירים (ירוק/אדום).","ולידציה: השיעור שייך למורה ולא בעתיד."], t: "Express Controller, Mongoose $set on attendance array, React State." },
  '2026-11-03': { d: ["Endpoint העלאת חשבונית (PDF/תמונה) ל-Cloud.","ממשק Drag & Drop לחשבונית החודשית.","שמירה: מספר, סכום, חודש פעילות, תאריך הגשה."], c: ["POST /api/teacher/invoices עם Multer (PDF/JPEG/PNG).","שמירה ב-S3/Cloudinary + רשומת Invoice בסטטוס SUBMITTED.","בדיקת גודל קובץ + Progress bar."], t: "Multer, S3 Upload, React Dropzone, Mongoose InvoiceSchema." },
  '2026-11-04': { d: ["קישור חכם: המורה מסמן אילו שיעורים בחשבונית.","חישוב אוטומטי של שעות וסכום.","חסימת שיעורים שכבר שויכו לחשבונית."], c: ["שליפת שיעורים ללא חשבונית (invoiceId: null).","מסך צ'קבוקסים לבחירת שיעורים.","אימות: סכום החשבונית תואם את סך השעות."], t: "Mongoose bulkWrite לעדכון החשבונית בשיעורים, Client-side accumulator." },
  '2026-11-05': { d: ["היסטוריית חשבוניות וסטטוס (ממתין/אושר/שולם/נדחה).","תצוגת הערות מנהל בדחייה.","סיכום שעות חודשי ושנתי."], c: ["טבלה עם Badge צבעוני לפי סטטוס.","'צפה בחשבונית' בכרטיסייה חדשה.","בדיקת הזרימה: דיווח -> העלאה -> ממתין לאישור."], t: "React Query, Status Badges, Secure Cloud URLs." },
  '2026-11-08': { d: ["סכמת אירוע יציאה: יעד, תאריך, שעה, עלות, מגבלה.","Endpoints ליצירה, עריכה ולו\"ז חודשי.","רישום אטומי נגד Over-booking."], c: ["POST /api/culture/events.","POST /events/:id/register עם $addToSet ובדיקת תפוסה.","רק רכז תרבות/אדמין פותחים יציאות."], t: "Mongoose atomic updates, Express RoleGuard, Joi validation." },
  '2026-11-09': { d: ["טופס הקמת יציאה (יעד, תאריך, שעה, מקומות).","טבלת ניהול: נרשמים מול מקומות זמינים.","כפתור 'פרסם לו\"ז למובייל' (PUBLISHED)."], c: ["טופס עם Date & Time Pickers.","מונה מקומות (למשל 14/15 נרשמו).","ביטול או עדכון פרטי יציאה."], t: "React Hook Form, Date Picker component, Tailwind UI." },
  '2026-11-10': { d: ["ממשק לסמארטפון/טאבלט עבור הרכז בשטח.","רשימת נרשמים עם סימון נוכחות מהיר.","שמירה מיידית ללא ריענון דף."], c: ["מסך FieldAttendanceView לשימוש ביד אחת.","POST /attendance עם Optimistic UI.","סיכום חי: '12 מתוך 14 הגיעו'."], t: "React Optimistic Updates, Touch-friendly UI, Axios." },
  '2026-11-11': { d: ["דשבורד: יציאות מבוקשות ואחוזי הגעה.","דוח סטודנטים שלא השתתפו בחודש האחרון.","ייצוא ל-Excel / CSV לישיבות צוות."], c: ["Aggregation למדדי השתתפות לפי סטודנט.","טבלה מסוננת עם חיפוש.","ייצוא בעזרת xlsx / papaparse."], t: "Aggregation Pipeline ($lookup, $group), xlsx export, Chart summary." },
  '2026-11-12': { d: ["Backend: מודל HostelActivity לפעילויות במבנה.","Web: שיבוץ דיירים לחוגים ונוכחות שבועית.","רכז הוסטל רואה רק את ההוסטל שלו."], c: ["סכמה ומסלולי CRUD ייעודיים.","שדה hostelId להגבלת גישה לפי מבנה.","שימוש חוזר בקומפוננטות של תרבות לכל."], t: "Mongoose Multitenancy/Branch filtering, Component Reusability." },
  '2026-11-15': { d: ["מסך הבית הראשי לכלל עובדי הארגון.","Widgets: התראות עו\"ס, חשבוניות ממתינות, יציאות, ספרים באיחור.","קיצורי דרך לפעולות נפוצות."], c: ["GET /api/admin/overview מאגד מכלל השירותים.","דשבורד כרטיסיות מודרני בזמן אמת.","Widgets לפי תפקיד (Role-based)."], t: "Parallel DB Queries (Promise.all), Role-based Rendering, Tailwind Grid." },
  '2026-11-16': { d: ["Endpoints מותאמים לצריכה מהירה במובייל.","GET /api/student/dashboard בקריאה אחת.","הרשמה/ביטול מהירים לתרבות וכושר."], c: ["Payload אופטימלי וממוזער.","זמני תגובה מתחת ל-150ms.","Rate Limiter נגד הצפת בקשות."], t: "Express-rate-limit, Lean Queries (.lean()), Optimized JSON responses." },
  '2026-11-17': { d: ["בדיקות אוטומטיות וידניות על כל ה-Endpoints.","תרחישי שגיאה: נתונים לא תקינים, 403 Forbidden.","בדיקת JWT Refresh flow."], c: ["Postman Collection עם Test Scripts.","שגיאות בפורמט האחיד שהוגדר.","מקרי קצה: תפוסה, שיבוץ כפול, קבצים לא מורשים."], t: "Postman Automated Tests, Environment Variables, Error Middleware." },
  '2026-11-18': { d: ["מעבר יסודי על כל מסכי ה-Web.","תאימות דפדפנים (Chrome, Edge, Safari, Firefox).","ליטושים: מרווחים, RTL, Hover ופוקוס נגיש."], c: ["רזולוציות שונות (נייח, לפטופ, טאבלט).","אין גלישות טקסט בעברית.","Tooltips והסברים במקומות דרושים."], t: "Cross-browser testing, CSS RTL adjustments, Accessibility (a11y)." },
  '2026-11-19': { d: ["ביקורת אבטחה על נתיבי Backend וקבצי ענן.","מורים/רכזים לא ניגשים למידע רפואי בשום תרחיש.","קבצים רגישים רק עם Signed URL מאומת."], c: ["ניסיונות עקיפת הרשאות (Token מורה לנתיבי עו\"ס).","תוקף קצר (15 דקות) ל-Signed URLs.","Helmet.js ו-CORS קפדני."], t: "Helmet.js, CORS, AWS S3 Signed URLs, RBAC penetration test." },
  '2026-11-22': { d: ["תרחישים מלאים מקצה לקצה בווב.","תרחיש 1: קליטה -> שיבוץ -> נוכחות -> חשבונית -> אישור.","תרחיש 2: יציאה -> רישום -> נוכחות -> דוח."], c: ["Staging נקי עם משתמשי בדיקה.","תיעוד תקלות לתיקון מיידי.","סנכרון עדכונים בכל המסכים."], t: "Manual E2E Testing, Data Flow verification across collections." },
  '2026-11-23': { d: ["ניתוח שאילתות עם explain('executionStats').","אינדקסים על שדות סינון נפוצים.","שאילתות דשבורד מתחת ל-50ms."], c: ["אינדקסים ב-users, lessons, events, invoices.","מחיקת אינדקסים כפולים.","התנהגות בניתוק זמני מה-DB (Reconnect)."], t: "MongoDB Compass, Index Optimization, Mongoose Connection Options." },
  '2026-11-24': { d: ["מסמך תיעוד API מלא לפיתוח המובייל בפברואר.","פירוט Endpoints לסטודנטים: Request, Headers, Response.","Postman Collection מעודכן לייבוא אחרי המילואים."], c: ["מסלולי סטודנט: פרופיל, לו\"ז, תרבות, כושר, ספרייה.","Sample JSON Responses לכל Endpoint.","קודי שגיאה מיוחדים לתצוגה באפליקציה."], t: "Swagger / OpenAPI spec, Postman Collection v2.1, Markdown docs." },
  '2026-11-25': { d: ["Code Freeze רשמי על Backend ו-Web.","Deployment של גרסה יציבה ל-Staging.","כל המודולים עובדים מסונכרן."], c: ["מיזוג לענף main / release-v1.0.","Build נקי ללא שגיאות ואזהרות.","Smoke Test מלא בענן."], t: "Git Merge, Production Build (Vite/Webpack), Cloud Deployment." },
  '2026-11-26': { d: ["פתרון בעיות קצה וסגירת חוב טכנולוגי.","גיבוי מלא של ה-DB (Atlas Snapshot).","תיעוד מצב המערכת לקראת החזרה בפברואר."], c: ["סגירת כל באג פתוח.","גיבוי DB ידני + עותק מקומי.","README עם נקודות מפתח לפברואר."], t: "MongoDB Atlas Snapshots, mongodump, Project Handover Notes." },
  '2026-11-29': { d: ["Health Check סופי לשרת ול-DB.","Git Tag רשמי: v1.0.0-web-complete.","כיבוי שירותי בדיקה ונעילת הסביבה."], c: ["כל השינויים ב-Remote Repository.","Git Tag + Release Notes.","Uptime Monitor שמתריע במייל בזמן המילואים."], t: "Git Tagging, UptimeRobot / Health Check Endpoint, Final Commit." },
  '2026-11-30': { d: ["השלמת כל שלבי הפיתוח של 2026 בהצלחה.","הקפאה מתוכננת: שרת וממשקים מוכנים ומתועדים.","התארגנות אישית לחודשיים של מילואים."], c: ["מחשב הפיתוח מגובה ומסודר.","תיעוד והוראות גישה לארגון.","חוזרים לפיתוח המובייל ב-1 בפברואר 2027."], t: "Clean desk, System in Stasis, Mission Accomplished for 2026.", h: "התארגנות וסגירת שנה" },

  /* ---------------- פברואר 2027 ---------------- */
  '2027-02-01': { d: ["התאפסות אחרי המילואים ובדיקת סביבת עבודה (Node, Android Studio / Xcode).","אתחול פרויקט React Native וארכיטקטורת תיקיות.","React Navigation (Stack + Bottom Tabs) וחיבור Axios ל-Staging."], c: ["התקנת @react-navigation/native, native-stack, bottom-tabs.","Axios Client עם BaseURL ו-Interceptors ל-Bearer Token.","4 טאבים: בית, תרבות, מערכת שעות, פרופיל/טפסים."], t: "React Native 0.73+, React Navigation v6, Axios, TypeScript / ES6+." },
  '2027-02-02': { d: ["מסך התחברות מעוצב (ת.ז./מייל וסיסמה).","JWT ב-Keychain/Keystore (Encrypted Storage).","Auto-Login עם Splash Screen ממותג."], c: ["react-native-encrypted-storage / expo-secure-store.","AuthContext (isLoggedIn, userProfile, login, logout).","טיפול בשגיאות התחברות עם חיווי נקי."], t: "EncryptedStorage, React Context API, Animated Splash Screen." },
  '2027-02-03': { d: ["מסך בית עם ברכה מותאמת ('בוקר טוב, [שם]').","כרטיסיית השיעור/פעילות הקרובה (שעה, מיקום, מורה).","באנר התראות דחופות."], c: ["GET /api/student/dashboard שנבנה בנובמבר.","NextEventCard עם שעת התחלה בולטת.","Pull-to-Refresh עם RefreshControl."], t: "React Native RefreshControl, ScrollView, FastImage, Custom Cards." },
  '2027-02-04': { d: ["טאב תרבות: יציאות החודש ככרטיסיות עשירות.","פרטי יציאה: תמונה, יעד, תאריך, מונה מקומות.","סינון: פתוח / אזלו מקומות / עברו."], c: ["GET /api/culture/events.","EventCard עם תגית סטטוס צבעונית.","FlatList עם keyExtractor ו-initialNumToRender."], t: "FlatList, StyleSheet flexbox, FastImage caching." },
  '2027-02-07': { d: ["'הרשם עכשיו' / 'בטל רישום' על כל כרטיסייה.","Optimistic UI לתחושת מהירות.","חסימת הרשמה בתפוסה מלאה."], c: ["POST /events/:id/register + ביטול.","Haptic Feedback בלחיצה מוצלחת.","חלון אישור לפני ביטול הרשמה."], t: "React Native Haptics, Optimistic State updates, Vibration API." },
  '2027-02-08': { d: ["מסך 'היציאות שאליהן נרשמתי'.","לשונית היסטוריית פעילויות.","'הוסף ליומן הטלפון' לאירועים עתידיים."], c: ["Top Tab Bar לסינון עתידי/היסטוריה.","react-native-calendar-events לסנכרון ליומן.","Empty State מעוצב ללא הרשמות."], t: "SegmentedControl / Animated Tabs, Empty State Illustrations." },
  '2027-02-09': { d: ["טאב מערכת שעות שבועי (מוזיקה, אומנות...).","Day Selector למעבר בין ראשון - חמישי.","פרטי שיעור: קורס, שעות, כיתה, מורה."], c: ["GET /api/student/schedule.","DaySelector אופקי (Horizontal ScrollView).","צבע ייחודי לכל מקצוע/חוג."], t: "Horizontal ScrollView, Date-fns, Conditional Rendering." },
  '2027-02-10': { d: ["חוגי הוסטל בלוח של דיירי הוסטל.","תגית מבדלת: שיעור מכללה מול פעילות הוסטל.","באנר עדכוני שינויים מהרכז."], c: ["מיזוג פעילויות הוסטל ללו\"ז השבועי.","דייר לא משויך לא רואה חוגי הוסטל.","Pop-up על שינוי שעה שהוזן בווב."], t: "Array merging & sorting by timestamp, Role/Branch filtering." },
  '2027-02-11': { d: ["מסך טופס הטבת כושר לסטודנט.","הצהרת בריאות אינטראקטיבית + תקנון.","ולידציית שדות לפני מעבר לחתימה."], c: ["GymFormScreen עם קלט מותאם למגע.","Auto-fill פרטי הסטודנט הידועים.","חסימה ללא אישור כל הסעיפים."], t: "React Hook Form / Formik, Custom Checkbox & Radio components." },
  '2027-02-14': { d: ["Signature Canvas - חתימה באצבע על המסך.","המרה ל-Base64 ושליחה (POST /api/gym/submit).","מסך מעקב: 'ממתין לאישור' / 'מאושר'."], c: ["react-native-signature-canvas.","'נקה חתימה' ו'אשר ושלח'.","כרטיסיית סטטוס ירוקה עם תוקף בפרופיל."], t: "react-native-signature-canvas, Base64 payload, Submission loader." },
  '2027-02-15': { d: ["חיפוש בקטלוג לפי שם/סופר + זמינות.","'הספרים המושאלים שלי'.","חיווי תאריך החזרה (ירוק/אדום)."], c: ["GET /api/student/borrowed-books.","Search Bar מהיר לקטלוג.","התראה מקומית 48 שעות לפני מועד החזרה."], t: "Search TextInput, Debounce search hook, Date comparison badge." },
  '2027-02-16': { d: ["אינטגרציית Push מלאה (FCM / Expo).","בקשת הרשאה ושמירת Device Token בשרת.","Foreground / Background / Killed state."], c: ["@react-native-firebase/messaging או expo-notifications.","POST /api/student/push-token בהתחברות.","Deep Linking: התראה פותחת את פרטי היציאה."], t: "FCM / APNs, Push Token Registration, Deep Linking configuration." },
  '2027-02-17': { d: ["Cache מקומי ללו\"ז ולמסך הבית (AsyncStorage/MMKV).","באנר 'פועל במצב לא מקוון'.","הודעות שגיאה ידידותיות."], c: ["@react-native-community/netinfo.","Stale-While-Revalidate מה-Storage.","Error Boundary ייעודי."], t: "AsyncStorage, NetInfo, Offline Caching patterns." },
  '2027-02-18': { d: ["התאמה למגוון מכשירי Android.","BackHandler לכפתור החזרה.","התאמת StatusBar ופסי ניווט."], c: ["safe-area-context בכל המסכים.","KeyboardAvoidingView בטפסים.","בדיקת גופן Assistant וטקסט מוגדל."], t: "Android BackHandler, KeyboardAvoidingView, SafeAreaView, Platform styling." },
  '2027-02-21': { d: ["התאמה ל-iPhone עם Notch / Dynamic Island.","דיאלוגים לפי הנחיות Apple (HIG).","גלילה חלקה 60/120 FPS."], c: ["מרווחים ב-iPhone 14/15/16 Pro.","צבעי StatusBar ל-iOS.","הסרת Re-renders עם React.memo ו-useCallback."], t: "iOS Human Interface Guidelines, Profiler, Memoization." },
  '2027-02-22': { d: ["הרצה על מכשירים אמיתיים (Android + iPhone).","כל תהליכי הסטודנט מקצה לקצה.","רישום באגים לרשימת תיקונים."], c: ["חתימה באצבע במכשיר אמיתי.","Push חי כשהאפליקציה סגורה.","מעבר Wi-Fi ↔ סלולרי."], t: "Physical Device Testing (USB/Wireless), Logcat / Xcode Console." },
  '2027-02-23': { d: ["תיקון הבאגים מבדיקות המכשירים.","בעיות ניווט ו-Stack resets.","שדות קלט מוסתרים על ידי המקלדת."], c: ["Keyboard Dismiss בלחיצה מחוץ לשדה.","איפוס State נקי ב-Logout.","עמידות בלחיצות כפולות על הרשמה."], t: "TouchableWithoutFeedback, Keyboard.dismiss, Race condition fixes." },
  '2027-02-24': { d: ["אנימציות חלקות וזמני טעינה.","צמצום Bundle Size וחבילות מיותרות.","בדיקת סוללה ו-Memory Leaks."], c: ["דחיסת תמונות מקומיות.","הפעלת Hermes Engine.","ניקוי console.log לקראת Release."], t: "Hermes JS Engine, RN Performance Monitor, Bundle Visualizer." },
  '2027-02-25': { d: ["גרסת Release ראשונה לשתי הפלטפורמות.","APK / AAB חתום לאנדרואיד.","גרסה ראשונה ל-TestFlight."], c: ["Keystore באנדרואיד וסרטיפיקטים ב-Apple.","Version 1.0.0, Build 1.","התקנת ה-Build על מכשיר לווידוא Crash-free."], t: "Gradle assembleRelease, Xcode Archive, TestFlight Internal Track." },
  '2027-02-28': { d: ["ייצוב סופי של אפליקציית ה-React Native.","האפליקציה עומדת עצמאית מול Staging.","רשימת תרחישי E2E לחודש מרץ."], c: ["סגירת משימות פברואר.","Git Tag: v1.0.0-mobile-alpha.","מוכנות ל-UAT, Production והשקה!"], t: "Git Tagging, Sprint Review, Architecture Handover to Launch Phase." },

  /* ---------------- מרץ 2027 ---------------- */
  '2027-03-01': { d: ["סנכרון מלא בזמן אמת בין המובייל לפורטלי הווב.","פעולות סטודנט במובייל משתקפות מיד בדשבורד.","פעולות רכזים מעדכנות מיד את המובייל."], c: ["מונה מקומות מתעדכן במובייל כשרכז מעדכן בווב.","אישור טופס כושר בווב -> חיווי מיידי בנייד.","שינוי שעת שיעור מופיע בלו\"ז המובייל."], t: "REST Webhooks / Polling, JWT Cross-platform consistency." },
  '2027-03-02': { d: ["תרחישי קצה מלאים של מסע הסטודנט.","הרשמה ליציאה מלאה -> חסימה מוצדקת.","טופס כושר -> חתימה -> סטטוס ממתין.","חיפוש ספר -> זמינות -> השאלה."], c: ["Base64 של חתימה לא נקטע ברשת חלשה.","ביטול הרשמה ברגע האחרון משחרר מקום.","התראות תוקף ספרים מושאלים."], t: "E2E manual flows, Network throttling (Fast/Slow 3G)." },
  '2027-03-03': { d: ["מורה: לו\"ז -> נוכחות -> חשבונית -> הצמדת שיעורים.","מנהל: השוואה לשיעורים -> אישור תשלום.","סכומים ושעות מדויקים ללא סטיות."], c: ["חשבונית עם סכום לא תואם נדחית.","שיעור משויך לא מוצג לחשבונית הבאה.","תצוגת PDF במנהל (Zoom, הורדה מאובטחת)."], t: "Invoice validation verification, Signed URLs file viewer testing." },
  '2027-03-04': { d: ["עו\"ס: קליטה -> מסמכי משה\"ב -> פגישות מעקב.","דימוי מסמכים פגי תוקף -> באנר אדום.","הוסטלים: הפרדת הרשאות בין סניפים."], c: ["סודיות רפואית: אין גישה לנתיבי עו\"ס.","קבצי PDF גדולים (עד 15MB) נשמרים תקין.","סיכומי פגישות: עריכה, נעילה והיסטוריה."], t: "Security boundary audit, Cron simulation for expiration alerts." },
  '2027-03-07': { d: ["תיקון הריג'קטים מ-3 ימי ה-E2E.","בעיות סנכרון מובייל-ווב.","תיקוני עיצוב ושבירות טקסט בעברית."], c: ["סגירה לפי עדיפויות (Critical -> High -> Medium).","תיקון Type errors ושדות undefined.","רגרסיה מהירה על מסכי המובייל."], t: "Bug triage, Hotfix branching, Chrome DevTools & Flipper." },
  '2027-03-08': { d: ["מערכת יציבה ללא Blockers.","אופטימיזציית קריאות שרת בדשבורד.","הכנה ל-UAT עם צוות שק\"ל."], c: ["איפוס נתונים + Dummy Data ריאליסטי.","משתמשי בדיקה לכל תפקיד.","דפי הנחיה (Cheat Sheets) לבודקים."], t: "Database seeding, DB cleanup scripts, UAT staging preparation." },
  '2027-03-09': { d: ["UAT חי עם רכזים, מנהל מכללה ועו\"ס.","המשתמשים מבצעים פעולות שגרתיות לבד.","זיהוי נקודות חיכוך וקשיי הבנה."], c: ["עו\"ס: 'בצעי קליטה והעלי טופס סל שיקום'.","רכז תרבות: 'הקם לו\"ז ופרסם למובייל'.","מנהל: 'שבץ מורה ובדוק חשבונית'.","רישום כל הערה וקושי."], t: "User Acceptance Testing, UX observation log, Feedback recording." },
  '2027-03-10': { d: ["מובייל מול - סטודנטים לדוגמה.","פורטל מורים מול מורה אמיתי.","נגישות ובהירות שפה לסטודנטים."], c: ["חוויית החתימה באצבע ברורה?","דיווח מורה בפחות מ-60 שניות?","משוב על גופנים, צבעים והודעות."], t: "Field testing, Student accessibility evaluation, Usability testing." },
  '2027-03-11': { d: ["איחוד וניתוח כל המשובים מה-UAT.","סינון: Must have מול Nice to have.","רשימת תיקונים חדה לשבוע הבא."], c: ["כרטיסי תיקון עם צילומי מסך.","אישור רשימה מול מובילי הצוות.","הקצאת זמנים ליומיים הקרובים."], t: "Sprint backlog prioritization, Scope control, Action items." },
  '2027-03-14': { d: ["יישום תיקוני ה-UAT שאושרו.","חידוד ניסוחים (Micro-copy).","הגדלת כפתורים ושיפור ניגודיות."], c: ["שמות שדות קריאים + Placeholders.","אנימציות הצלחה (Checkmark).","תיקון שדות שגיאה בווב ובמובייל."], t: "Micro-copy polish, Tailwind refinements, RN Animated micro-interactions." },
  '2027-03-15': { d: ["סגירת כל כרטיסי ה-UAT.","הדגמה וקבלת Sign-off לעלייה לאוויר.","נעילה פונקציונלית - עוברים לתשתיות."], c: ["אישור רשמי ממובילי התוכניות.","Sanity check על המודולים שתוקנו.","Hard Code Freeze - אין פיצ'רים חדשים."], t: "Feature Freeze, UAT Sign-off protocol, Release candidate tagging." },
  '2027-03-16': { d: ["ניתוח ביצועים תחת עומס 1,000 משתמשים.","Compound Indexes סופיים ב-Atlas.","זמני תגובה מתחת ל-80ms."], c: ["ביצועי Aggregations של דוחות.","Atlas Performance Advisor.","Connection Pooling אופטימלי."], t: "Atlas Performance Advisor, Profiler, Lean Queries, PoolSize tuning." },
  '2027-03-17': { d: ["בדיקת אבטחה וחדירות מקיפה.","Rate Limiting, מניעת NoSQL Injection ו-XSS.","הצפנה at rest & in transit."], c: ["express-rate-limit לפי IP ו-Token.","שגיאות גנריות ללא Stack Trace ב-Production.","Access Token ל-15 דקות, Refresh מאובטח."], t: "Rate Limiting, Mongo Sanitize, Helmet, OWASP Top 10 compliance." },
  '2027-03-18': { d: ["שרת ייצור רשמי (AWS / Render / DO).","Cluster ייצור ב-Atlas עם גיבויים אוטומטיים.","S3 Bucket ייצור עם הרשאות פרטיות."], c: ["PM2 / Docker להפעלה אוטומטית בקריסה.",".env.production עם מפתחות ייעודיים.","Continuous Backups ב-Atlas."], t: "Docker / Cloud Hosting, Atlas M10+ Production, S3 Production Bucket." },
  '2027-03-21': { d: ["חיבור הדומיין הרשמי של המערכת.","SSL/TLS - HTTPS כפוי בכל הנתיבים.","CDN לאתר המנהלים + CORS קפדני."], c: ["רשומות DNS (A Records, CNAME).","ניתוב אוטומטי ל-HTTPS, ציון A+ ב-SSL Labs.","טעינת המסכים משרת הייצור החי."], t: "Cloudflare / Vercel Edge, SSL/TLS, DNS Configuration, Strict CORS." },
  '2027-03-22': { d: ["גרסאות Release חתומות במפתחות ייצור.","AAB + APK לאנדרואיד.","העלאה ל-App Store Connect ול-Play Console."], c: ["Version Code 1.0.0 (Build 1).","צילומי מסך ותיאור בעברית לחנויות.","התקנת APK חתום מול שרת הייצור."], t: "Google Play Console, App Store Connect, Keystore Signing, Fastlane / EAS." },
  '2027-03-25': { d: ["Smoke Tests מלאים ב-Production החי.","סטטוס אישור האפליקציות בחנויות.","מחזור פעילות מלא: הרשמה -> דיווח -> אישור."], c: ["תקינות DB, שרתים ותעודות SSL.","Push חי עם מפתחות Production של Firebase.","ניקוי נתוני בדיקה לקראת ההדרכות."], t: "Production Smoke Testing, FCM Prod, CloudWatch / Logs monitoring." },
  '2027-03-28': { d: ["הדרכות מרוכזות לכלל צוותי שק\"ל.","סשן 1: עו\"ס (תיק, התראות, סודיות).","סשן 2: רכזי תרבות והוסטלים.","סשן 3: מנהל מכללה והנהלת חשבונות.","סרטון הדרכה ומדריך PDF למורים."], c: ["חלוקת שמות משתמש וסיסמאות.","תרגול מעשי של כל משתתף.","ערוץ תמיכה ישיר (קבוצה ייעודית / מייל)."], t: "User Training, Change Management, Quick Start Guides." },
  '2027-03-29': { d: ["Soft Launch לקבוצת 5-00 סטודנטים ומורים.","הפצת קישור התקנה לקבוצת הפיילוט.","מעקב לוגים ופתרון שגיאות בזמן אמת."], c: ["קצב הרשמות ראשונות ללא תקלות.","חשבונית ראשונה ממורה בזמן אמת.","ניצול CPU & Memory תחת משתמשים אמיתיים."], t: "Staged Rollout, Real-time Log Streaming, Error Catching." },
  '2027-03-30': { d: ["פתיחה מלאה לכלל 60-,000 המשתמשים!","הודעת פתיחה חגיגית בכל ערוצי שק\"ל.","מעבר מלא של כל הפעילויות למערכת."], c: ["זמינות שרתים ו-APIs - 100%.","מעקב קצב התחברות סטודנטים ומורים.","חגיגת סיום פרויקט של 5 חודשי עבודה ממוקדים!"], t: "Full Production Traffic, Edge Routing, System Go-Live.", h: "יום השקה רשמי!" },
  '2027-03-31': { d: ["ליווי ותמיכה צמודים אחרי ההשקה.","ניטור ביצועים וקריסות (Crash-free > 99.5%).","סיוע בהתחברות ראשונית ואיפוס סיסמאות.","הפעלת הסכם ריטיינר ותחזוקה שוטפת."], c: ["לוחות ניטור (Sentry / Datadog / Atlas Alerts).","גיבויים אוטומטיים מתבצעים כמתוכנן.","מעבר לסטטוס 'מערכת יציבה בפעילות שוטפת'."], t: "Uptime Monitoring, Error Tracking (Sentry), Support & Maintenance Handover." }
};

export { ICONS, CATS, MONTHS, DETAILS, MILUIM_START, MILUIM_END };
