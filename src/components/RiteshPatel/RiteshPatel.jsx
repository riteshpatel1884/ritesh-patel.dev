"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
/* ---------------------------------------------------------- */
/* Icons                                                       */
/* ---------------------------------------------------------- */
const Icon = ({ children, size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const GithubIcon = (p) => (
  <Icon {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
const LinkedinIcon = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </Icon>
);
const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  </Icon>
);
const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const ArrowIcon = (p) => (
  <Icon {...p}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Icon>
);
const SunIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Icon>
);
const MoonIcon = (p) => (
  <Icon {...p}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </Icon>
);

/* ---------------------------------------------------------- */
/* Data                                                         */
/* ---------------------------------------------------------- */
const skillGroups = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  {
    label: "GenAI / ML",
    items: ["LLM Integration", "RAG", "TensorFlow", "Scikit-learn", "Computer Vision", "NLP"],
  },
  {
    label: "Web Stack",
    items: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "Prisma", "Neon", "Clerk", "Git", "Docker", "Vercel"],
  },
];

const projects = [
  {
    tag: "Web Platform",
    date: "Jun 2026 — Present",
    title: "Road to Offer",
    subtitle: "45-day placement preparation tracker",
    link: "road-to-offer.vercel.app",
    points: [
      "Built a Next.js study tracker spanning DSA, Data Analyst, GenAI, Backend, Core and Aptitude tracks with per-topic tagging, notes and a “Today” filter.",
      "Implemented a full dark/light theming system driven by CSS variables across every view.",
      "Added Vercel Analytics to monitor daily study consistency.",
    ],
    tech: ["Next.js", "Tailwind", "CSS Variables", "Vercel Analytics"],
  },
  {
    tag: "Web Platform",
    date: "2026",
    title: "Zentaras",
    subtitle: "UDYAM-registered internship platform",
    link: "zentaras.in",
    points: [
      "Shipped Data Analytics and Web Development internship tracks with a 5-step, role-specific progress system.",
      "Built an admin dashboard with unlock/lock controls, points, and live applicant filtering.",
      "Wired up Clerk auth with webhook user sync and a Prisma/Neon Postgres schema, deployed with custom DNS.",
    ],
    tech: ["Next.js", "Prisma", "Neon", "Clerk", "PostgreSQL"],
  },
  {
    tag: "Web Platform",
    date: "2025 — 2026",
    title: "LeaderLab",
    subtitle: "Job application tracker & analytics suite",
    link: "leaderlab.in",
    points: [
      "Designed an analytics dashboard with Recharts — radar charts, activity heatmaps and custom dark tooltips.",
      "Built a Prep Tracker linking daily study plans to live job applications.",
      "Automated day-complete, follow-up and weekly-digest emails via Resend and Vercel cron.",
    ],
    tech: ["Next.js", "Recharts", "Resend", "Prisma", "Clerk"],
  },
  {
    tag: "Machine Learning",
    date: "Academic Project · KIET",
    title: "MedLeaf-ViT",
    subtitle: "Medicinal plant identification, CNN-ViT hybrid",
    points: [
      "Co-developed a hybrid CNN-Vision Transformer architecture to classify 120+ medicinal plant species for Ayurvedic raw-material authentication.",
      "Trained and iterated on the model using a Kaggle workflow with peers at KIET.",
    ],
    tech: ["Python", "TensorFlow", "Computer Vision", "ViT"],
  },
  {
    tag: "Internship",
    date: "Data Analytics Intern",
    title: "Airkrit India Pvt. Ltd.",
    subtitle: "Credit & banking data analysis",
    points: [
      "Cleaned and analysed a 10-sheet Credit_Banking Excel workbook covering spend, repayment and interest calculations.",
      "Delivered segment-level insights to support lending decisions.",
    ],
    tech: ["Excel", "Data Cleaning", "Financial Analysis"],
  },
];

const education = [
  {
    degree: "B.Tech, Computer Science",
    school: "KIET Group of Institutions",
    year: "2023 — 2027",
    score: "7.48 CGPA",
  },
  {
    degree: "Senior Secondary (XII)",
    school: "Rani Laxmi Bai School",
    year: "2021 — 2022",
    score: "84%",
  },
  {
    degree: "Secondary (X)",
    school: "Rani Laxmi Bai School",
    year: "2019 — 2020",
    score: "86%",
  },
];

const MANUAL_COMMIT_DATA = {
  "2026-01-01": { count: 11, level: 4 },
  "2026-01-02": { count: 1, level: 1 },
  "2026-01-03": { count: 3, level: 2 },
  "2026-01-04": { count: 3, level: 2 },
  "2026-01-05": { count: 2, level: 2 },
  "2026-01-06": { count: 5, level: 2 },
  "2026-01-08": { count: 1, level: 2 },
  "2026-01-09": { count: 16, level: 4 },
  "2026-01-10": { count: 5, level: 2 },
  "2026-01-12": { count: 1, level: 2 },
  "2026-01-13": { count: 4, level: 2 },
  "2026-01-14": { count: 2, level: 2 },
  "2026-01-19": { count: 6, level: 3 },
  "2026-01-21": { count: 3, level: 2 },
  "2026-01-22": { count: 3, level: 2 },
  "2026-01-23": { count: 1, level: 2 },
  "2026-01-26": { count: 27, level: 4 },
  "2026-01-27": { count: 1, level: 1 },
  "2026-01-28": { count: 3, level: 2 },
  "2026-01-29": { count: 4, level: 2 },
  "2026-01-30": { count: 3, level: 2 },
  "2026-02-01": { count: 2, level: 2 },
  "2026-02-02": { count: 2, level: 2 },
  "2026-02-06": { count: 5, level: 2 },
  "2026-02-07": { count: 39, level: 4 },
  "2026-02-08": { count: 25, level: 4 },
  "2026-02-09": { count: 11, level: 4 },
  "2026-02-10": { count: 5, level: 2 },
  "2026-02-11": { count: 6, level: 3 },
  "2026-02-12": { count: 12, level: 4 },
  "2026-02-13": { count: 23, level: 4 },
  "2026-02-14": { count: 13, level: 4 },
  "2026-02-15": { count: 13, level: 4 },
  "2026-02-16": { count: 11, level: 4 },
  "2026-02-17": { count: 15, level: 4 },
  "2026-02-18": { count: 2, level: 1 },
  "2026-02-19": { count: 6, level: 3 },
  "2026-02-20": { count: 2, level: 1 },
  "2026-02-22": { count: 1, level: 1 },
  "2026-02-23": { count: 7, level: 3 },
  "2026-02-24": { count: 6, level: 3 },
  "2026-02-25": { count: 5, level: 2 },
  "2026-02-26": { count: 5, level: 2 },
  "2026-02-27": { count: 2, level: 1 },
  "2026-02-28": { count: 4, level: 2 },
  "2026-03-01": { count: 11, level: 4 },
};

/* ---------------------------------------------------------- */
/* Commitment to Growth — activity ledger                      */
/* ---------------------------------------------------------- */
const ActivityLedger = () => {
  const [weeks, setWeeks] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    currentStreak: 0,
    currentStreakRange: "",
    longestStreak: 0,
    longestStreakRange: "",
  });
  const [hoverData, setHoverData] = useState(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const allDays = [];
    let commitSum = 0;

    const formatDateLabel = (dateStr) => {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return `${monthNames[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")}`;
    };

    for (let i = 0; i < 3; i++) allDays.push({ date: "empty", month: -1 });

    for (let month = 0; month < 12; month++) {
      for (let day = 1; day <= daysInMonth[month]; day++) {
        const dateKey = `2026-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        const manualEntry = MANUAL_COMMIT_DATA[dateKey] || { count: 0, level: 0 };
        commitSum += manualEntry.count;
        allDays.push({
          date: dateKey,
          count: manualEntry.count,
          level: manualEntry.level,
          month,
          monthName: monthNames[month],
          day,
        });
      }
    }

    const activeDates = Object.keys(MANUAL_COMMIT_DATA)
      .filter((d) => MANUAL_COMMIT_DATA[d].count > 0)
      .sort((a, b) => new Date(a) - new Date(b));

    let longest = 0, longestStart = "", longestEnd = "", current = 0;
    let currentRangeStr = "No active streak";

    if (activeDates.length > 0) {
      let tempStreak = 1, tempStart = activeDates[0];
      for (let i = 1; i < activeDates.length; i++) {
        const prev = new Date(activeDates[i - 1]);
        const curr = new Date(activeDates[i]);
        const diffDays = (curr - prev) / 86400000;
        if (diffDays === 1) {
          tempStreak++;
        } else {
          if (tempStreak >= longest) { longest = tempStreak; longestStart = tempStart; longestEnd = activeDates[i - 1]; }
          tempStreak = 1;
          tempStart = activeDates[i];
        }
      }
      if (tempStreak >= longest) { longest = tempStreak; longestStart = tempStart; longestEnd = activeDates[activeDates.length - 1]; }

      const todayReference = new Date("2026-02-16");
      const lastCommitDate = new Date(activeDates[activeDates.length - 1]);
      const diffFromToday = (todayReference - lastCommitDate) / 86400000;

      if (diffFromToday <= 1) {
        let currentStreakCount = 0, pointer = activeDates.length - 1, currentStreakStart = activeDates[pointer];
        while (pointer >= 0) {
          if (pointer === activeDates.length - 1) {
            currentStreakCount = 1;
          } else {
            const nextDate = new Date(activeDates[pointer + 1]);
            const thisDate = new Date(activeDates[pointer]);
            if ((nextDate - thisDate) / 86400000 === 1) {
              currentStreakCount++;
              currentStreakStart = activeDates[pointer];
            } else break;
          }
          pointer--;
        }
        current = currentStreakCount;
        currentRangeStr = `${formatDateLabel(currentStreakStart)} – ${formatDateLabel(activeDates[activeDates.length - 1])}`;
      }
    }

    const longestRangeStr = longest > 0 ? `${formatDateLabel(longestStart)} – ${formatDateLabel(longestEnd)}` : "None";

    while (allDays.length % 7 !== 0) allDays.push({ date: "empty", month: -1 });
    const weeksData = [];
    for (let i = 0; i < allDays.length; i += 7) weeksData.push(allDays.slice(i, i + 7));

    setWeeks(weeksData);
    setStats({
      total: commitSum,
      currentStreak: current,
      currentStreakRange: currentRangeStr,
      longestStreak: longest,
      longestStreakRange: longestRangeStr,
    });
  }, []);

  const getColor = (level) => `var(--lvl-${level ?? 0})`;

  return (
    <section className="rp-card rp-ledger">
      <div className="rp-ledger-head">
        <div>
          <h2 className="rp-eyebrow">Commitment to Growth</h2>
          <p className="rp-caption">Daily build &amp; commit log · 2026</p>
        </div>
        <div className="rp-ledger-stats">
          <div className="rp-stat">
            <span className="rp-stat-num">{stats.total}</span>
            <span className="rp-stat-label">Commits</span>
          </div>
          <div className="rp-stat">
            <span className="rp-stat-num">{stats.currentStreak}</span>
            <span className="rp-stat-label">Current streak</span>
            <span className="rp-stat-sub">{stats.currentStreakRange}</span>
          </div>
          <div className="rp-stat">
            <span className="rp-stat-num">{stats.longestStreak}</span>
            <span className="rp-stat-label">Longest streak</span>
            <span className="rp-stat-sub">{stats.longestStreakRange}</span>
          </div>
        </div>
      </div>

      <div className="rp-ledger-grid-wrap" ref={gridRef}>
        <div className="rp-ledger-grid">
          {weeks.map((week, wi) => {
            const firstDayOfMonth = week.find((d) => d.day === 1);
            const showLabel = firstDayOfMonth || (wi === 0 && week[3] && week[3].month === 0);
            return (
              <div key={wi} className="rp-ledger-col">
                {showLabel && <span className="rp-ledger-month">{showLabel.monthName}</span>}
                {week.map((day, di) => (
                  <div
                    key={`${wi}-${di}`}
                    onMouseEnter={(e) => {
                      if (day.date === "empty") return;
                      const rect = gridRef.current.getBoundingClientRect();
                      setHoverData({ ...day, x: e.clientX - rect.left, y: e.clientY - rect.top });
                    }}
                    onMouseLeave={() => setHoverData(null)}
                    className={`rp-cell ${day.date === "empty" ? "rp-cell-empty" : ""}`}
                    style={{ backgroundColor: day.date === "empty" ? "var(--rule)" : getColor(day.level) }}
                  />
                ))}
              </div>
            );
          })}
        </div>

        <AnimatePresence>
          {hoverData && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="rp-tooltip"
              style={{ left: hoverData.x, top: hoverData.y - 54 }}
            >
              <span className="rp-tooltip-count">{hoverData.count} commits</span>
              <span className="rp-tooltip-date">{hoverData.date}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="rp-ledger-legend">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className="rp-legend-cell" style={{ backgroundColor: `var(--lvl-${l})` }} />
        ))}
        <span>More</span>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------- */
/* Main                                                         */
/* ---------------------------------------------------------- */
export default function Portfolio() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="rp-resume" data-theme={theme}>
      <style>{`
        .rp-resume {
          --paper: #f6f2e8;
          --paper-2: #efe9db;
          --ink: #1e1c16;
          --muted: #746c5c;
          --rule: rgba(30,28,22,0.14);
          --accent: #33553c;
          --accent-2: #a6763a;
          --card: #fffdf8;
          --shadow: rgba(30,28,22,0.08);
          --lvl-0: rgba(30,28,22,0.08);
          --lvl-1: #cdd9c4;
          --lvl-2: #93b586;
          --lvl-3: #5c9260;
          --lvl-4: #33553c;
          font-family: ui-sans-serif, -apple-system, "Segoe UI", Roboto, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
          transition: background 0.35s ease, color 0.35s ease;
        }
        .rp-resume[data-theme='dark'] {
          --paper: #16150f;
          --paper-2: #1d1c15;
          --ink: #ece5d4;
          --muted: #a39a86;
          --rule: rgba(236,229,212,0.14);
          --accent: #86b98d;
          --accent-2: #d9a75f;
          --card: #1c1b14;
          --shadow: rgba(0,0,0,0.5);
          --lvl-0: rgba(236,229,212,0.06);
          --lvl-1: #2a3a28;
          --lvl-2: #3d5b3c;
          --lvl-3: #588a55;
          --lvl-4: #86b98d;
        }
        .rp-serif { font-family: Georgia, "Iowan Old Style", "Palatino Linotype", "Times New Roman", serif; }
        .rp-mono { font-family: ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace; }
        .rp-eyebrow {
          font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 600;
        }
        .rp-caption { font-size: 12px; color: var(--muted); margin-top: 2px; }
        .rp-card {
          background: var(--card);
          border: 1px solid var(--rule);
          border-radius: 4px;
          box-shadow: 0 1px 2px var(--shadow);
        }
        .rp-rule { border: none; border-top: 1px solid var(--rule); margin: 0; }
        .rp-toggle {
          width: 40px; height: 40px; border-radius: 999px;
          border: 1px solid var(--rule);
          background: var(--card);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink); cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .rp-toggle:hover { transform: rotate(20deg); }

        /* Ledger */
        .rp-ledger { padding: 28px 24px; margin: 0; position: relative; }
        .rp-ledger-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; margin-bottom: 22px; }
        .rp-ledger-stats { display: flex; gap: 28px; }
        .rp-stat { display: flex; flex-direction: column; }
        .rp-stat-num { font-family: Georgia, serif; font-weight: 700; font-size: 26px; color: var(--accent); line-height: 1; }
        .rp-stat-label { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted); margin-top: 4px; font-weight: 700; }
        .rp-stat-sub { font-family: ui-monospace, monospace; font-size: 9px; color: var(--muted); margin-top: 2px; }
        .rp-ledger-grid-wrap { position: relative; overflow-x: auto; padding: 22px 2px 6px; }
        .rp-ledger-grid { display: flex; gap: 3px; min-width: max-content; }
        .rp-ledger-col { display: flex; flex-direction: column; gap: 3px; position: relative; }
        .rp-ledger-month { position: absolute; top: -18px; left: 0; font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); font-weight: 700; white-space: nowrap; }
        .rp-cell { width: 11px; height: 11px; border-radius: 2px; cursor: crosshair; }
        .rp-cell:hover { outline: 1.5px solid var(--accent); outline-offset: 1px; }
        .rp-cell-empty { cursor: default; }
        .rp-tooltip {
          position: absolute; z-index: 20; background: var(--ink); color: var(--paper);
          padding: 6px 10px; border-radius: 4px; pointer-events: none; display: flex; flex-direction: column;
          box-shadow: 0 4px 12px var(--shadow);
        }
        .rp-tooltip-count { font-size: 11px; font-weight: 700; }
        .rp-tooltip-date { font-size: 9px; opacity: 0.7; font-family: ui-monospace, monospace; }
        .rp-ledger-legend { display: flex; align-items: center; gap: 5px; font-size: 9px; color: var(--muted); margin-top: 6px; font-family: ui-monospace, monospace; }
        .rp-legend-cell { width: 9px; height: 9px; border-radius: 2px; }

        /* Skill pill */
        .rp-pill {
          border: 1px solid var(--rule); border-radius: 999px; padding: 4px 12px;
          font-size: 12px; color: var(--ink); white-space: nowrap;
        }

        /* Timeline dot */
        .rp-dot { width: 7px; height: 7px; border-radius: 999px; background: var(--accent); }

        @media print {
          .rp-toggle { display: none; }
        }
      `}</style>

      <div className="max-w-[820px] mx-auto px-5 md:px-10 py-10 md:py-16">
        {/* Masthead */}
        <header className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h1 className="rp-serif" style={{ fontSize: "clamp(30px, 5vw, 44px)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.05 }}>
              Ritesh Patel
            </h1>
            <p className="rp-eyebrow" style={{ marginTop: 8 }}>
              GenAI Developer · Full-Stack Engineer
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 rp-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
              <span className="flex items-center gap-1.5"><PinIcon size={13} /> Ghaziabad, India</span>
              <a href="mailto:riteshpatel1884@gmail.com" className="flex items-center gap-1.5 hover:opacity-70">
                <MailIcon size={13} /> riteshpatel1884@gmail.com
              </a>
              <span className="flex items-center gap-1.5"><PhoneIcon size={13} /> +91 8858295418</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-4 shrink-0">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rp-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <SunIcon size={17} /> : <MoonIcon size={17} />}
            </button>
            <div className="flex gap-3" style={{ color: "var(--muted)" }}>
              <GithubIcon size={17} className="hover:opacity-60 cursor-pointer" />
              <LinkedinIcon size={17} className="hover:opacity-60 cursor-pointer" />
            </div>
          </div>
        </header>

        <hr className="rp-rule mb-10" />

        {/* Summary */}
        <section className="mb-12">
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink)", maxWidth: 640 }}>
           Fourth year Computer Science student building expertise in <strong>Backend Engineering and Generative AI</strong>. Experienced in designing scalable backend systems, secure APIs, databases, authentication, and deploying full-stack applications while exploring AI-driven products and intelligent software.
          </p>
        </section>

        {/* Commitment to Growth */}
        <section className="mb-12">
          <ActivityLedger />
        </section>
<GitHubCalendar username="riteshpatel1884" />
        {/* Projects */}
        <section className="mb-12">
          <h2 className="rp-eyebrow mb-6">Selected Work</h2>
          <div className="flex flex-col">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-8 py-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid var(--rule)" }}
              >
                <div>
                  <span className="rp-mono block" style={{ fontSize: 11, color: "var(--muted)" }}>{p.date}</span>
                  <span className="rp-mono block mt-1" style={{ fontSize: 10, color: "var(--accent-2)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {p.tag}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="rp-serif" style={{ fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                    {p.link && (
                      <span className="flex items-center gap-1 rp-mono" style={{ fontSize: 11, color: "var(--muted)" }}>
                        <ArrowIcon size={11} /> {p.link}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 2, marginBottom: 10 }}>{p.subtitle}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {p.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-2.5" style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink)" }}>
                        <span className="rp-dot shrink-0" style={{ marginTop: 7 }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="rp-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills + Education */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <section>
            <h2 className="rp-eyebrow mb-6">Skills</h2>
            <div className="flex flex-col gap-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <span className="rp-mono block mb-2" style={{ fontSize: 10.5, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {g.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="rp-pill">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="rp-eyebrow mb-6">Education</h2>
            <div className="flex flex-col gap-5">
              {education.map((e) => (
                <div key={e.degree} className="flex justify-between gap-4" style={{ borderBottom: "1px solid var(--rule)", paddingBottom: 14 }}>
                  <div>
                    <h4 className="rp-serif" style={{ fontSize: 15.5, fontWeight: 700 }}>{e.degree}</h4>
                    <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 2 }}>{e.school}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="rp-mono block" style={{ fontSize: 11, color: "var(--muted)" }}>{e.year}</span>
                    <span className="rp-mono block mt-1" style={{ fontSize: 12.5, color: "var(--accent)", fontWeight: 700 }}>{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Contact */}
        <section style={{ borderTop: "1px solid var(--rule)", paddingTop: 32 }} className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h2 className="rp-serif" style={{ fontSize: 26, fontWeight: 700 }}>Let's work together.</h2>
            <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 6, maxWidth: 360 }}>
              Currently open for 2026/27 internships in GenAI and full-stack engineering.
            </p>
          </div>
          <a
            href="mailto:riteshpatel1884@gmail.com"
            className="flex items-center gap-2 self-start rp-mono"
            style={{
              fontSize: 12.5,
              padding: "10px 18px",
              border: "1px solid var(--rule)",
              borderRadius: 999,
              color: "var(--ink)",
            }}
          >
            <MailIcon size={14} /> Say hello
          </a>
        </section>

        <footer className="flex flex-col md:flex-row justify-between gap-2 mt-14 rp-mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span>© Ritesh Patel — 2026</span>
          <span>Ghaziabad, India</span>
        </footer>
      </div>
    </div>
  );
}