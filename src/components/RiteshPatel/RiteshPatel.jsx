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
  // 1 = 1
  // 2-5 = 2
  // 6-9 = 3
  // 10 = 4
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
      {/* Injecting CSS to hide scrollbars globally */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
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
            Manual Activity Log / Year 2026
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
                    className={`w-[14px] h-[14px] rounded-[2px] transition-all ${day.date !== "empty" ? "hover:ring-2 hover:ring-white/50 cursor-crosshair" : "opacity-10"}`}
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
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

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] border-b border-zinc-900 bg-black/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter uppercase">
            RITESH<span className="text-zinc-600">PATEL</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            {["About", "Projects", "Skills", "Contact"].map((t) => (
              <a
                key={t}
                href={`#${t.toLowerCase()}`}
                className="hover:text-white transition-colors uppercase"
              >
                {t}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <Linkedin
              size={18}
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            />
            <Github
              size={18}
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-44 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {" "}
            <span className="text-zinc-500 font-mono mb-4 block tracking-widest uppercase">
              Full Stack & ML Enthusiast
            </span>
            <h1 className="text-7xl md:text-[140px] font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              Building <br /> <span className="text-zinc-800">Future.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
              <span className="text-white">Third-year</span> CS student at{" "}
              <span className="text-white">KIET</span> focused on the
              intersection of{" "}
              <span className="text-white">Machine Learning</span> and{" "}
              <span className="text-white">Full-Stack Engineering</span>
            </p>
            <div className="flex gap-6 mt-10">
              <a href="#projects">
                <button className="bg-white cursor-pointer text-black px-8 py-4 font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 group">
                  VIEW PROJECTS{" "}
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </a>
            </div>
          </motion.div>
        </section>

        <GitHubContributionGraph />

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <h2 className="text-sm text-zinc-500 font-mono mb-12 tracking-widest uppercase">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 gap-12">
            <motion.div
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
                  (t) => (
                    <span
                      key={t}
                      className="text-[10px] border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest text-zinc-500 font-bold"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS & EDUCATION GRID */}
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <section id="skills">
            <h2 className="text-sm text-zinc-500 font-mono mb-8 tracking-widest uppercase">
              Expertise
            </h2>
            <div className="space-y-8">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat}>
                  <h4 className="text-zinc-500 text-xs uppercase mb-3 font-bold ">
                    {cat}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-lg font-medium border-b border-transparent hover:border-white transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="education">
            <h2 className="text-sm text-zinc-500 font-mono mb-8 tracking-widest uppercase">
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l border-zinc-800"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-white rounded-full" />
                  <span className="text-xs text-zinc-500 font-mono">
                    {edu.year}
                  </span>
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <p className="text-zinc-400 text-sm">{edu.school}</p>
                  <p className="text-white font-mono mt-2">{edu.score}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- IMAGE 3: LET'S CONNECT --- */}
        <section id="contact" className="py-32 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="md:w-1/2">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                Let's <br /> Connect
              </h2>
              <p className="text-zinc-500 italic max-w-xs leading-relaxed">
                Currently open for 2026/27 internships.
              </p>
            </div>

            <div className="md:w-1/2 w-full space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-8 hover:border-white transition-colors cursor-pointer group">
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Email
                </span>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  riteshpatel1884@gmail.com
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-zinc-900 pb-8 pt-8 hover:border-white transition-colors cursor-pointer group">
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em]">
                  Phone
                </span>
                <span className="text-2xl md:text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  +91 8858295418
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex justify-between text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
        <span>© Ritesh Patel — 2026</span>
        <span>Ghaziabad, India</span>
      </footer>
    </div>
  );
}
