import { useEffect, useMemo, useState } from 'react';
import { ICONS, CATS, MONTHS, DETAILS, MILUIM_START, MILUIM_END } from './data.js';

const DAY_NAMES = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'];
const LEGEND_ORDER = [
  'social', 'college', 'culture', 'teachers', 'library', 'gym', 'hostel',
  'mobile', 'infra', 'qa', 'special', 'launch', 'army', 'holiday',
];
const fmt = new Intl.DateTimeFormat('he-IL', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
});

const pad = (n) => String(n).padStart(2, '0');
const isoOf = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: ICONS[name] || '' }}
    />
  );
}

function findEntry(y, m, d) {
  for (const mo of MONTHS) {
    if (mo.miluim) continue;
    if (mo.y === y && mo.m === m && mo.days[d]) return mo.days[d];
  }
  return null;
}

function buildCells(mo, today) {
  const cells = [];
  const daysInMonth = new Date(mo.y, mo.m + 1, 0).getDate();
  let firstPlaced = false;

  for (let d = 1; d <= daysInMonth; d++) {
    const wd = new Date(mo.y, mo.m, d).getDay();
    if (wd > 4) continue; // Fri/Sat

    if (!firstPlaced) {
      for (let e = 0; e < wd; e++) cells.push({ empty: true });
      firstPlaced = true;
    }

    const entry = mo.days[d];
    if (!entry) { cells.push({ empty: true }); continue; }

    const [catKey, title] = entry;
    const cellDate = new Date(mo.y, mo.m, d);
    const iso = isoOf(mo.y, mo.m, d);
    cells.push({
      d, catKey, title, iso,
      hasDetail: !!DETAILS[iso],
      isToday: cellDate.getTime() === today.getTime(),
      isPast: cellDate < today,
    });
  }
  return cells;
}

function DayCell({ cell, onOpen }) {
  if (cell.empty) return <div className="cell empty" />;

  const cat = CATS[cell.catKey];
  let cls = 'cell';
  if (cell.catKey === 'holiday') cls += ' holiday';
  if (cell.hasDetail) cls += ' has-detail';
  if (cell.isToday) cls += ' today';
  else if (cell.isPast) cls += ' past';

  return (
    <div
      className={cls}
      style={{ background: cat.bg, borderColor: cat.border }}
      onClick={cell.hasDetail ? () => onOpen(cell.iso) : undefined}
    >
      {cell.isToday && <span className="today-pill">היום</span>}
      <div className="cell-top">
        <span className="cell-date" style={{ color: cat.accent }}>{cell.d}</span>
        <span
          className="cell-icon"
          style={{
            color: cat.accent,
            background: 'rgba(255,255,255,0.65)',
            border: `1px solid ${cat.border}`,
          }}
        >
          <Icon name={cat.icon} />
        </span>
      </div>
      <div className="cell-title">{cell.title}</div>
      <div className="cell-cat" style={{ color: cat.accent }}>{cat.label}</div>
    </div>
  );
}

function MonthSection({ mo, today, onOpen }) {
  const cells = useMemo(() => buildCells(mo, today), [mo, today]);
  return (
    <section className="month-section" id={`sec-${mo.y}-${mo.m}`}>
      <div className="month-head">
        <span className="month-name">{mo.name}</span>
        <span className="month-phase">{mo.phase}</span>
        <span className="month-sub">{mo.sub}</span>
      </div>
      <div className="calendar-grid">
        {DAY_NAMES.map((d) => <div key={d} className="day-header">{d}</div>)}
        {cells.map((cell, i) => <DayCell key={cell.iso || `e${i}`} cell={cell} onOpen={onOpen} />)}
      </div>
    </section>
  );
}

function MiluimBlock({ inMiluim }) {
  return (
    <section className="miluim" id="sec-miluim">
      {inMiluim && <span className="here-badge">אתה נמצא כאן</span>}
      <div className="miluim-icon"><Icon name="shield" /></div>
      <div>
        <h2>דצמבר 2026 – ינואר 2027 · שירות מילואים</h2>
        <p>
          המערכת קפואה בגרסה יציבה ומנוטרת (Git Tag: v1.0.0-web-complete).
          כל ה-Backend וממשקי ה-Web מתועדים, מגובים וממתינים.
          חוזרים לפיתוח אפליקציית המובייל ב-1 בפברואר 2027.
        </p>
      </div>
    </section>
  );
}

function Modal({ iso, onClose }) {
  const data = DETAILS[iso];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!data) return null;

  const [y, m, d] = iso.split('-').map(Number);
  const entry = findEntry(y, m - 1, d) || ['infra', ''];
  const cat = CATS[entry[0]];
  const title = entry[1];

  return (
    <div
      className="modal-overlay"
      style={{ display: 'flex' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal-card">
        <div className="modal-header">
          <div className="modal-header-right">
            <div
              className="modal-cat-icon"
              style={{ background: cat.bg, border: `1px solid ${cat.border}`, color: cat.accent }}
            >
              <Icon name={cat.icon} />
            </div>
            <div className="modal-title-wrap">
              <h3>{title}</h3>
              <span className="modal-date-badge" style={{ color: cat.accent }}>
                {fmt.format(new Date(y, m - 1, d))} · {cat.label}
              </span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="סגור">&times;</button>
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: cat.accent }}>
              <Icon name="target" />תוצרי העבודה הנדרשים
            </div>
            <ul className="modal-list" style={{ color: cat.accent }}>
              {data.d.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: cat.accent }}>
              <Icon name="list" />צ'ק-ליסט לביצוע
            </div>
            <ul className="modal-list" style={{ color: cat.accent }}>
              {data.c.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div className="modal-section">
            <div className="modal-section-title" style={{ color: cat.accent }}>
              <Icon name="code" />טכנולוגיות וקוד
            </div>
            <div className="tech-box">{data.t}</div>
          </div>
          <div className="hours-badge">הקצאת זמן: {data.h || '8 שעות עבודה נטו'}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedIso, setSelectedIso] = useState(null);
  const [progressWidth, setProgressWidth] = useState(0);

  const now = useMemo(() => new Date(), []);
  const today = useMemo(
    () => new Date(now.getFullYear(), now.getMonth(), now.getDate()),
    [now]
  );
  const inMiluim = today >= MILUIM_START && today <= MILUIM_END;

  const { doneCount, totalCount } = useMemo(() => {
    let done = 0, total = 0;
    for (const mo of MONTHS) {
      if (mo.miluim) continue;
      for (const [dStr, entry] of Object.entries(mo.days)) {
        if (entry[0] === 'holiday') continue;
        total++;
        if (new Date(mo.y, mo.m, +dStr) < today) done++;
      }
    }
    return { doneCount: done, totalCount: total };
  }, [today]);
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;

  const statusText = useMemo(() => {
    if (inMiluim) return 'תקופת מילואים — המערכת קפואה בגרסה יציבה. חוזרים לפיתוח ב-1.2.2027.';
    if (today.getDay() > 4) return 'סוף שבוע — אין משימות מתוכננות להיום.';
    for (const mo of MONTHS) {
      if (mo.miluim) continue;
      if (mo.y === today.getFullYear() && mo.m === today.getMonth()) {
        const entry = mo.days[today.getDate()];
        if (!entry) return 'אין משימה מתוכננת להיום.';
        if (entry[0] === 'holiday') return `${entry[1]} — יום חופש, אין משימות.`;
        return `המשימה של היום: ${entry[1]}`;
      }
    }
    return today < new Date(2026, 8, 1)
      ? 'התוכנית מתחילה ב-1 בספטמבר 2026.'
      : 'התוכנית הסתיימה — המערכת באוויר.';
  }, [today, inMiluim]);

  const currentSectionId = useMemo(() => {
    if (inMiluim) return 'sec-miluim';
    for (const mo of MONTHS) {
      if (mo.miluim) continue;
      if (mo.y === today.getFullYear() && mo.m === today.getMonth()) return `sec-${mo.y}-${mo.m}`;
    }
    return null;
  }, [today, inMiluim]);

  useEffect(() => {
    const t1 = setTimeout(() => setProgressWidth(pct), 150);
    const t2 = setTimeout(() => {
      const todayCell = document.querySelector('.cell.today');
      if (todayCell) {
        todayCell.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (currentSectionId) {
        const sec = document.getElementById(currentSectionId);
        if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pct, currentSectionId]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="header-inner">
            <div>
              <h1>מערכת ניהול שק"ל · תוכנית עבודה מלאה</h1>
              <div className="header-sub">
                ספטמבר 2026 – מרץ 2027 · אפיון ← פיתוח Web ← מילואים ← מובייל ← השקה
              </div>
            </div>
            <div className="today-box">
              <div className="today-date">{fmt.format(now)}</div>
              <div className="today-status">{statusText}</div>
            </div>
          </div>
          <div className="progress-wrap">
            <div className="progress-labels">
              <span>{doneCount} מתוך {totalCount} ימי עבודה הושלמו</span>
              <span>{pct}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressWidth}%` }} />
            </div>
          </div>
        </div>
      </header>

      <nav className="month-nav">
        <div className="container month-nav-inner">
          {MONTHS.map((mo) => {
            if (mo.miluim) {
              return (
                <button
                  key="miluim"
                  className={`nav-pill${inMiluim ? ' current' : ''}`}
                  onClick={() => scrollTo('sec-miluim')}
                >
                  מילואים · דצמ׳–ינו׳
                </button>
              );
            }
            const id = `sec-${mo.y}-${mo.m}`;
            return (
              <button
                key={id}
                className={`nav-pill${id === currentSectionId ? ' current' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {mo.name}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="container">
        <div className="legend">
          {LEGEND_ORDER.map((key) => {
            const c = CATS[key];
            return (
              <span
                key={key}
                className="legend-item"
                style={{ background: c.bg, borderColor: c.border, color: c.accent }}
              >
                <Icon name={c.icon} />{c.label}
              </span>
            );
          })}
        </div>

        {MONTHS.map((mo) =>
          mo.miluim
            ? <MiluimBlock key="miluim" inMiluim={inMiluim} />
            : <MonthSection key={`${mo.y}-${mo.m}`} mo={mo} today={today} onOpen={setSelectedIso} />
        )}
      </div>

      {selectedIso && <Modal iso={selectedIso} onClose={() => setSelectedIso(null)} />}
    </>
  );
}
