"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lucide icons as inline SVG components
const Github = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowUpRight = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const Menu = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const X = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const skills = {
  Programming: ["Java", "Python", "JavaScript"],
  "AI/ML": ["TensorFlow", "Scikit-learn", "Computer Vision", "NLP"],
  "Web Stack": ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
  Tools: ["Git", "Docker", "AWS"],
};

const education = [
  {
    degree: "B.Tech Computer Science",
    school: "KIET Group of Institutions",
    year: "2023 - 2027",
    score: "7.48 GPA",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Rani Laxmi Bai School",
    year: "2021 - 2022",
    score: "84%",
  },
  {
    degree: "Secondary (10th)",
    school: "Rani Laxmi Bai School",
    year: "2019 - 2020",
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

const GitHubContributionGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    currentStreak: 0,
    currentStreakRange: "",
    longestStreak: 0,
    longestStreakRange: "",
  });
  const [hoverData, setHoverData] = useState(null);

  useEffect(() => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
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
        const manualEntry = MANUAL_COMMIT_DATA[dateKey] || {
          count: 0,
          level: 0,
        };
        commitSum += manualEntry.count;
        allDays.push({
          date: dateKey,
          count: manualEntry.count,
          level: manualEntry.level,
          month: month,
          monthName: monthNames[month],
          day: day,
        });
      }
    }

    const activeDates = Object.keys(MANUAL_COMMIT_DATA)
      .filter((d) => MANUAL_COMMIT_DATA[d].count > 0)
      .sort((a, b) => new Date(a) - new Date(b));

    let longest = 0;
    let longestStart = "";
    let longestEnd = "";
    let current = 0;
    let currentRangeStr = "No active streak";

    if (activeDates.length > 0) {
      let tempStreak = 1;
      let tempStart = activeDates[0];

      for (let i = 1; i < activeDates.length; i++) {
        const prev = new Date(activeDates[i - 1]);
        const curr = new Date(activeDates[i]);
        const diffDays = (curr - prev) / (1000 * 60 * 60 * 24);

        if (diffDays === 1) {
          tempStreak++;
        } else {
          if (tempStreak >= longest) {
            longest = tempStreak;
            longestStart = tempStart;
            longestEnd = activeDates[i - 1];
          }
          tempStreak = 1;
          tempStart = activeDates[i];
        }
      }
      if (tempStreak >= longest) {
        longest = tempStreak;
        longestStart = tempStart;
        longestEnd = activeDates[activeDates.length - 1];
      }

      const todayReference = new Date("2026-02-16");
      const lastCommitDate = new Date(activeDates[activeDates.length - 1]);
      const diffFromToday =
        (todayReference - lastCommitDate) / (1000 * 60 * 60 * 24);

      if (diffFromToday <= 1) {
        let currentStreakCount = 0;
        let pointer = activeDates.length - 1;
        let currentStreakStart = activeDates[pointer];

        while (pointer >= 0) {
          if (pointer === activeDates.length - 1) {
            currentStreakCount = 1;
          } else {
            const nextDate = new Date(activeDates[pointer + 1]);
            const thisDate = new Date(activeDates[pointer]);
            if ((nextDate - thisDate) / (1000 * 60 * 60 * 24) === 1) {
              currentStreakCount++;
              currentStreakStart = activeDates[pointer];
            } else {
              break;
            }
          }
          pointer--;
        }
        current = currentStreakCount;
        currentRangeStr = `${formatDateLabel(currentStreakStart)} — ${formatDateLabel(activeDates[activeDates.length - 1])}`;
      }
    }

    const longestRangeStr =
      longest > 0
        ? `${formatDateLabel(longestStart)} — ${formatDateLabel(longestEnd)}`
        : "None";

    while (allDays.length % 7 !== 0) allDays.push({ date: "empty", month: -1 });
    const weeksData = [];
    for (let i = 0; i < allDays.length; i += 7)
      weeksData.push(allDays.slice(i, i + 7));

    setWeeks(weeksData);
    setStats({
      total: commitSum,
      currentStreak: current,
      currentStreakRange: currentRangeStr,
      longestStreak: longest,
      longestStreakRange: longestRangeStr,
    });
  }, []);

  const getColor = (level) => {
    const colors = ["#16161e", "#053629", "#076b4b", "#0eb17a", "#00ffa2"];
    return colors[level] || colors[0];
  };

  return (
    <section className="w-full bg-black border border-zinc-900 rounded-[32px] p-4 md:p-8 lg:p-12 my-10 md:my-20 shadow-2xl overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-10 gap-6">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 md:gap-4">
            <h2 className="text-lg md:text-2xl font-bold uppercase tracking-tighter whitespace-nowrap">
              Commitment to Growth
            </h2>
            <div className="h-[1px] w-full bg-zinc-800" />
          </div>
          <p className="text-zinc-600 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] mt-2 md:mt-3">
            Activity Log / Year 2026
          </p>
        </div>

        <div className="flex gap-8 md:gap-12 shrink-0">
          <div className="text-left md:text-right">
            <span className="text-2xl md:text-4xl font-black text-[#34d399] tracking-tighter leading-none block">
              {stats.total}
            </span>
            <p className="text-[7px] md:text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">
              Commits
            </p>
          </div>
          <div className="text-left md:text-right border-l border-zinc-800 pl-8 md:pl-12">
            <span className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-none block">
              {stats.currentStreak}
            </span>
            <p className="text-[7px] md:text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">
              Current Streak
            </p>
            <p className="text-[6px] md:text-[8px] text-zinc-600 font-mono mt-0.5 uppercase">
              {stats.currentStreakRange}
            </p>
          </div>
          <div className="text-left md:text-right border-l border-zinc-800 pl-8 md:pl-12">
            <span className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-none block">
              {stats.longestStreak}
            </span>
            <p className="text-[7px] md:text-[9px] text-zinc-500 uppercase font-black tracking-widest mt-1">
              Longest Streak
            </p>
            <p className="text-[6px] md:text-[8px] text-zinc-600 font-mono mt-0.5 uppercase">
              {stats.longestStreakRange}
            </p>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto no-scrollbar pb-4 pt-6 md:pt-10">
        <div className="flex gap-1 md:gap-1.5 min-w-max">
          {weeks.map((week, wi) => {
            const firstDayOfMonth = week.find((d) => d.day === 1);
            const showLabel =
              firstDayOfMonth || (wi === 0 && week[3] && week[3].month === 0);
            return (
              <div
                key={wi}
                className="flex flex-col gap-1 md:gap-1.5 flex-shrink-0 relative"
              >
                {showLabel && (
                  <span className="absolute -top-6 md:-top-8 left-0 text-[8px] md:text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                    {showLabel.monthName}
                  </span>
                )}
                {week.map((day, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    onMouseEnter={(e) =>
                      day.date !== "empty" &&
                      setHoverData({ ...day, x: e.clientX, y: e.clientY })
                    }
                    onMouseLeave={() => setHoverData(null)}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: (wi * 7 + di) * 0.002,
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 10,
                      transition: { duration: 0.2 },
                    }}
                    className={`w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-[2px] transition-all relative ${
                      day.date !== "empty"
                        ? "hover:ring-2 hover:ring-white/50 cursor-crosshair"
                        : "opacity-10"
                    }`}
                    style={{
                      backgroundColor:
                        day.date === "empty" ? "#111" : getColor(day.level),
                    }}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {hoverData && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed z-[100] bg-white text-black px-3 py-2 rounded-lg shadow-2xl pointer-events-none border border-zinc-200"
            style={{
              left: Math.min(
                hoverData.x + 20,
                (typeof window !== "undefined" ? window.innerWidth : 800) - 180,
              ),
              top: hoverData.y - 60,
            }}
          >
            <p className="text-[8px] md:text-[10px] font-black uppercase text-zinc-400">
              Activity Report
            </p>
            <p className="text-xs md:text-sm font-black">
              {hoverData.count} Commits
            </p>
            <p className="text-[8px] md:text-[10px] opacity-60 font-medium">
              {hoverData.date}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-base md:text-xl font-black tracking-tighter uppercase"
          >
            RITESH<span className="text-zinc-600">PATEL</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-6 lg:gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500"
          >
            {["About", "Projects", "Skills", "Contact"].map((t, i) => (
              <motion.a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="hover:text-white transition-colors uppercase"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                {t}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex gap-4"
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Linkedin
                size={18}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <Github
                size={18}
                className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
              />
            </motion.div>
          </motion.div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-zinc-900"
            >
              <div className="px-4 py-6 space-y-4">
                {["About", "Projects", "Skills", "Contact"].map((t) => (
                  <a
                    key={t}
                    href={`#${t.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors py-2"
                  >
                    {t}
                  </a>
                ))}
                <div className="flex gap-6 pt-4 border-t border-zinc-800">
                  <Linkedin
                    size={20}
                    className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  />
                  <Github
                    size={20}
                    className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center relative pt-16 md:pt-0"
        >
          <div className="text-center relative z-10 px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-zinc-500 font-mono mb-4 md:mb-6 block tracking-widest uppercase text-xs md:text-sm"
            >
              Full Stack & ML Enthusiast
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-7xl md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-[0.85] mb-6 md:mb-8 uppercase">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  machine learning
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-zinc-800"
                >
                  enthusiast.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed mb-8 md:mb-12 px-4"
            >
              <span className="text-white">Third-year</span> CS student at{" "}
              <span className="text-white">KIET</span> focused on the
              intersection of{" "}
              <span className="text-white">Machine Learning</span> and{" "}
              <span className="text-white">Full-Stack Engineering</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex gap-4 md:gap-6 justify-center"
            >
              <a href="#projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white cursor-pointer text-black px-6 md:px-10 py-3 md:py-5 font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 md:gap-3 text-sm md:text-lg"
                >
                  VIEW PROJECTS
                  
                </motion.button>
              </a>
            </motion.div>
          </div>
        </section>

        <GitHubContributionGraph />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-20 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-zinc-500 font-mono mb-8 md:mb-12 tracking-widest uppercase"
          >
            Selected Work
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative border-l border-zinc-800 pl-4 md:pl-8 py-4 hover:border-white transition-colors"
            >
              <span className="text-[10px] md:text-xs text-zinc-500 font-mono mb-2 block">
                01 / MACHINE LEARNING
              </span>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 group-hover:text-zinc-300 transition-colors">
                Image-Based Medicinal Plant Classifier
              </h3>
              <p className="text-sm md:text-base text-zinc-400 max-w-2xl mb-4 md:mb-6">
                A high-precision tool classifying 120+ medicinal plant species.
                Integrating a custom CNN architecture with a MERN stack
                dashboard for real-world Ayurvedic raw material authentication.
              </p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {["Python", "TensorFlow", "React", "Computer Vision"].map(
                  (t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-[8px] md:text-[10px] border border-zinc-800 px-2 md:px-3 py-1 rounded-full uppercase tracking-widest text-zinc-500 font-bold"
                    >
                      {t}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS & EDUCATION GRID */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          <section id="skills">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-zinc-500 font-mono mb-6 md:mb-8 tracking-widest uppercase"
            >
              Expertise
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              {Object.entries(skills).map(([cat, items], catIndex) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 className="text-zinc-500 text-[10px] md:text-xs uppercase mb-2 md:mb-3 font-bold">
                    {cat}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, color: "#10b981" }}
                        className="text-base md:text-lg font-medium border-b border-transparent hover:border-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="education">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm text-zinc-500 font-mono mb-6 md:mb-8 tracking-widest uppercase"
            >
              Education
            </motion.h2>
            <div className="space-y-6 md:space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-4 md:pl-6 border-l border-zinc-800"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-white rounded-full" />
                  <span className="text-[10px] md:text-xs text-zinc-500 font-mono">
                    {edu.year}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold">{edu.degree}</h4>
                  <p className="text-zinc-400 text-xs md:text-sm">
                    {edu.school}
                  </p>
                  <p className="text-white font-mono text-sm md:text-base mt-1 md:mt-2">
                    {edu.score}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* CONTACT SECTION */}
        <section
          id="contact"
          className="py-20 md:py-32 border-t border-zinc-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-6 md:mb-8">
                Let's <br /> Connect
              </h2>
              <p className="text-zinc-500 italic max-w-xs leading-relaxed text-sm md:text-base">
                Currently open for 2026/27 internships.
              </p>
            </motion.div>

            <div className="md:w-1/2 w-full space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 md:pb-8 hover:border-white transition-colors cursor-pointer group"
              >
                <span className="text-zinc-600 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-0">
                  Email
                </span>
                <span className="text-lg md:text-2xl lg:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors break-all">
                  riteshpatel1884@gmail.com
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-6 md:pb-8 pt-6 md:pt-8 hover:border-white transition-colors cursor-pointer group"
              >
                <span className="text-zinc-600 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-0">
                  Phone
                </span>
                <span className="text-lg md:text-2xl lg:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  +91 8858295418
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-10 flex flex-col md:flex-row justify-between text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700 gap-2 md:gap-0"
      >
        <span>© Ritesh Patel — 2026</span>
        <span>Ghaziabad, India</span>
      </motion.footer>
    </div>
  );
}
