import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

// --- Custom GitHub Graph Component ---
const GitHubCalendar = () => {
  // Simulating the 2026 data from your image
  const weeks = 52;
  const days = 7;

  // Generating a pattern similar to your image (Jan-Feb focus)
  const getIntensity = (w, d) => {
    if (w > 8) return 0; // Empty for future months
    if (w === 0 && d < 2) return 0; // Start of year
    const random = Math.random();
    if (random > 0.8) return 4; // Brightest green
    if (random > 0.6) return 2; // Mid green
    if (random > 0.3) return 1; // Light green
    return 0; // Empty
  };

  const colors = [
    "bg-zinc-900", // 0
    "bg-emerald-900/40", // 1
    "bg-emerald-700/60", // 2
    "bg-emerald-500/80", // 3
    "bg-emerald-400", // 4
  ];

  return (
    <div className="bg-black border border-zinc-800 rounded-xl p-6 font-mono">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-zinc-400 text-sm">236 contributions in 2026</h4>
        <div className="text-xs text-zinc-500">Contribution settings</div>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex gap-1">
          {Array.from({ length: weeks }).map((_, w) => (
            <div key={w} className="flex flex-col gap-1">
              {Array.from({ length: days }).map((_, d) => (
                <div
                  key={d}
                  className={`w-3 h-3 rounded-sm ${colors[getIntensity(w, d)]} transition-colors hover:ring-1 hover:ring-white/50`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-[10px] text-zinc-500">
        <div className="flex gap-4">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
        </div>
        <div className="flex items-center gap-1">
          <span>Less</span>
          {colors.map((c, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

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

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      {/* Dynamic Background Noise/Gradient */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            RITESH<span className="text-zinc-500">PATEL</span>
          </motion.div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/riteshpatel1884"
              className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/riteshpatel1884"
              className="p-2 hover:bg-zinc-900 rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-20">
        {/* HERO SECTION */}
        <section id="about" className="mb-32">
          <motion.div {...fadeInUp}>
            <span className="text-zinc-500 font-mono mb-4 block tracking-widest uppercase">
              Software Engineer & ML Enthusiast
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              CRAFTING <br />
              <span className="text-zinc-600">INTELLIGENT</span> <br />
              SOLUTIONS.
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Third-year CS student at KIET focused on the intersection of
              <span className="text-white"> Deep Learning</span> and
              <span className="text-white"> Full-Stack Engineering</span>.
              Currently building AI-powered tools for the future of healthcare.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-8 py-4 font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 group">
                VIEW PROJECTS{" "}
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </section>

        {/* CONTRIBUTION SECTION (The Green Boxes) */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold uppercase tracking-tighter">
                Commitment to Growth
              </h2>
              <div className="h-[1px] flex-1 bg-zinc-800" />
            </div>
            <GitHubCalendar />
          </motion.div>
        </section>

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
                  <h4 className="text-zinc-500 text-xs uppercase mb-3 font-bold">
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

        {/* CONTACT SECTION */}
        <section id="contact" className="border-t border-zinc-900 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-4">
                LET'S CONNECT
              </h2>
              <p className="text-zinc-500 max-w-sm italic">
                Currently open for 2026/27 internships and collaborative AI
                research.
              </p>
            </div>

            <div className="space-y-6 w-full md:w-auto">
              <a
                href="mailto:riteshpatel1884@gmail.com"
                className="group flex items-center justify-between gap-20 border-b border-zinc-800 pb-4 hover:border-white transition-all"
              >
                <span className="text-zinc-400 group-hover:text-white transition-colors uppercase font-mono text-sm">
                  Email
                </span>
                <span className="text-xl font-bold">
                  riteshpatel1884@gmail.com
                </span>
              </a>
              <a
                href="tel:+918858295418"
                className="group flex items-center justify-between gap-20 border-b border-zinc-800 pb-4 hover:border-white transition-all"
              >
                <span className="text-zinc-400 group-hover:text-white transition-colors uppercase font-mono text-sm">
                  Phone
                </span>
                <span className="text-xl font-bold">+91 8858295418</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-10 border-t border-zinc-900 text-center md:text-left">
        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
          &copy; 2026 Ritesh Patel &mdash; Built with React & Motion
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
