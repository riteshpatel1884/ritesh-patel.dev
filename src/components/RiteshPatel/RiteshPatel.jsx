import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Linkedin,
  Mail,
  Code,
} from "lucide-react";

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
    score: "7.39 GPA",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "Rani Laxmi Bai School",
    year: "2021 - 2022",
    score: "84%",
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
};

const GitHubContributionGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
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

    while (allDays.length % 7 !== 0) allDays.push({ date: "empty", month: -1 });
    const weeksData = [];
    for (let i = 0; i < allDays.length; i += 7)
      weeksData.push(allDays.slice(i, i + 7));

    setWeeks(weeksData);
    setTotalCommits(commitSum);
  }, []);

  const getColor = (level) => {
    const colors = ["#16161e", "#053629", "#076b4b", "#0eb17a", "#00ffa2"];
    return colors[level] || colors[0];
  };

  return (
    <section className="w-full bg-black border border-zinc-900 rounded-[32px] p-8 md:p-12 my-20 shadow-2xl overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(0, 255, 162, 0.3);
          }
          50% {
            box-shadow: 0 0 15px rgba(0, 255, 162, 0.6), 0 0 25px rgba(0, 255, 162, 0.3);
          }
        }
        
        .contribution-box-active {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="flex-1 pr-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold uppercase tracking-tighter whitespace-nowrap">
              Commitment to Growth
            </h2>
            <div className="h-[1px] w-full bg-zinc-800" />
          </div>
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mt-3">
            Activity Log / Year 2026
          </p>
        </div>
        <div className="text-right mt-4 md:mt-0">
          <span className="text-5xl font-black text-[#34d399] tracking-tighter leading-none">
            {totalCommits}
          </span>
          <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-2">
            Total Contributions
          </p>
        </div>
      </div>

      <div className="relative overflow-x-auto no-scrollbar pb-4 pt-10">
        <div className="flex gap-1.5 min-w-max">
          {weeks.map((week, wi) => {
            const firstDayOfMonth = week.find((d) => d.day === 1);
            const showLabel =
              firstDayOfMonth || (wi === 0 && week[3].month === 0);
            return (
              <div
                key={wi}
                className="flex flex-col gap-1.5 flex-shrink-0 relative"
              >
                {showLabel && (
                  <span className="absolute -top-8 left-0 text-[10px] font-black text-zinc-500 uppercase tracking-widest">
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
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: (wi * 7 + di) * 0.002,
                      duration: 0.3,
                    }}
                    whileHover={{
                      scale: 1.3,
                      zIndex: 10,
                      transition: { duration: 0.2 },
                    }}
                    className={`w-[14px] h-[14px] rounded-[2px] transition-all ${
                      day.date !== "empty"
                        ? "hover:ring-2 hover:ring-white/50 cursor-crosshair"
                        : "opacity-10"
                    } ${day.level >= 2 ? "contribution-box-active" : ""}`}
                    style={{
                      backgroundColor:
                        day.date === "empty" ? "#111" : getColor(day.level),
                    }}
                  >
                    {/* Inner glow for active boxes */}
                    {day.level >= 3 && (
                      <motion.div
                        className="absolute inset-0 rounded-[2px]"
                        animate={{
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: Math.random() * 2,
                        }}
                        style={{
                          background: `radial-gradient(circle, ${getColor(day.level)} 0%, transparent 70%)`,
                        }}
                      />
                    )}
                  </motion.div>
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
            className="fixed z-[100] bg-white text-black px-4 py-2 rounded-lg shadow-2xl pointer-events-none border border-zinc-200"
            style={{
              left: Math.min(hoverData.x + 20, window.innerWidth - 180),
              top: hoverData.y - 60,
            }}
          >
            <p className="text-[10px] font-black uppercase text-zinc-400">
              Activity Report
            </p>
            <p className="text-sm font-black">{hoverData.count} Commits</p>
            <p className="text-[10px] opacity-60 font-medium">
              {hoverData.date}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Animated background particles
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-500/20 rounded-full"
          initial={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            x:
              Math.random() *
              (typeof window !== "undefined" ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== "undefined" ? window.innerHeight : 1000),
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tighter uppercase"
          >
            RITESH<span className="text-zinc-600">PATEL</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500"
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
            className="flex gap-4"
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
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero Section - Centered and Animated */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center relative"
        >
          <AnimatedBackground />

          {/* Spotlight effect following mouse */}
          <motion.div
            className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
          />

          <div className="text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-zinc-500 font-mono mb-6 block tracking-widest uppercase text-sm"
            >
              Full Stack & ML Enthusiast
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-7xl md:text-[140px] lg:text-[180px] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  BUILDING
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-zinc-800"
                >
                  FUTURE.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
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
              className="flex gap-6 justify-center"
            >
              <a href="#projects">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white cursor-pointer text-black px-10 py-5 font-bold hover:bg-zinc-200 transition-all flex items-center gap-3 group text-lg"
                >
                  VIEW PROJECTS
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </motion.button>
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ duration: 2, delay: 1.2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
                <div className="w-1 h-2 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>
          </div>
        </section>

        <GitHubContributionGraph />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 font-mono mb-12 tracking-widest uppercase"
          >
            Selected Work
          </motion.h2>
          <div className="grid grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative border-l border-zinc-800 pl-8 py-4 hover:border-white transition-colors"
            >
              <span className="text-xs text-zinc-500 font-mono mb-2 block">
                01 / MACHINE LEARNING
              </span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-zinc-300 transition-colors">
                Image-Based Medicinal Plant Classifier
              </h3>
              <p className="text-zinc-400 max-w-2xl mb-6">
                A high-precision tool classifying 120+ medicinal plant species.
                Integrating a custom CNN architecture with a MERN stack
                dashboard for real-world Ayurvedic raw material authentication.
              </p>
              <div className="flex gap-3 flex-wrap">
                {["Python", "TensorFlow", "React", "Computer Vision"].map(
                  (t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="text-[10px] border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest text-zinc-500 font-bold"
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
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <section id="skills">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm text-zinc-500 font-mono mb-8 tracking-widest uppercase"
            >
              Expertise
            </motion.h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([cat, items], catIndex) => (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h4 className="text-zinc-500 text-xs uppercase mb-3 font-bold">
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
                        className="text-lg font-medium border-b border-transparent hover:border-white transition-all cursor-default"
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
              className="text-sm text-zinc-500 font-mono mb-8 tracking-widest uppercase"
            >
              Education
            </motion.h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-6 border-l border-zinc-800"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-white rounded-full" />
                  <span className="text-xs text-zinc-500 font-mono">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-zinc-400 text-sm">{edu.school}</p>
                  <p className="text-white font-mono mt-2">{edu.score}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Let's <br /> Connect
              </h2>
              <p className="text-zinc-500 italic max-w-xs leading-relaxed">
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
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-8 hover:border-white transition-colors cursor-pointer group"
              >
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Email
                </span>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  riteshpatel1884@gmail.com
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-8 pt-8 hover:border-white transition-colors cursor-pointer group"
              >
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Phone
                </span>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
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
        className="max-w-6xl mx-auto px-6 py-10 flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700"
      >
        <span>© Ritesh Patel — 2026</span>
        <span>Ghaziabad, India</span>
      </motion.footer>
    </div>
  );
}
