import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Moon,
  Sun,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = {
    bg: darkMode ? "bg-zinc-950" : "bg-neutral-50",
    text: darkMode ? "text-zinc-100" : "text-zinc-900",
    textSecondary: darkMode ? "text-zinc-400" : "text-zinc-600",
    card: darkMode ? "bg-zinc-900" : "bg-white",
    cardHover: darkMode ? "hover:bg-zinc-800" : "hover:bg-neutral-100",
    border: darkMode ? "border-zinc-800" : "border-zinc-200",
    accent: darkMode ? "text-emerald-400" : "text-emerald-600",
    accentBg: darkMode ? "bg-emerald-400/10" : "bg-emerald-600/10",
    button: darkMode
      ? "bg-zinc-800 hover:bg-zinc-700"
      : "bg-zinc-900 hover:bg-zinc-800",
    buttonText: darkMode ? "text-zinc-100" : "text-white",
  };

  const skills = {
    "Programming & Languages": ["Java", "Python"],
    "AI/ML": [
      "TensorFlow",
      "Scikit-learn",
      "Image Processing",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
    "Web Development": ["MongoDB", "Express.js", "React.js", "Node.js"],
    Tools: ["Git", "GitHub"],
  };

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "KIET Group of Institutions, Ghaziabad",
      board: "AKTU",
      duration: "2023 - 2027",
      gpa: "7.39 GPA",
    },
    {
      degree: "Higher Secondary Education (12th ISC)",
      institution: "Rani Laxmi Bai School, Lucknow",
      duration: "2021 - 2022",
      gpa: "84%",
    },
    {
      degree: "Secondary Education (10th ICSE)",
      institution: "Rani Laxmi Bai School, Lucknow",
      duration: "2019 - 2020",
      gpa: "86%",
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const NavLink = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeSection === id
          ? `${theme.accentBg} ${theme.accent} font-medium`
          : `${theme.textSecondary} ${theme.cardHover}`
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 w-96 h-96 ${darkMode ? "bg-emerald-500/5" : "bg-emerald-500/10"} rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 ${darkMode ? "bg-blue-500/5" : "bg-blue-500/10"} rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 ${theme.card} border-b ${theme.border} backdrop-blur-lg bg-opacity-80`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-lg ${theme.accentBg} flex items-center justify-center`}
              >
                <span className={`text-xl font-bold ${theme.accent}`}>RP</span>
              </div>
              <span className="font-semibold text-lg hidden sm:inline">
                Ritesh Patel
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden md:flex gap-2">
                <NavLink id="about" icon={Briefcase} label="About" />
                <NavLink id="projects" icon={Code} label="Projects" />
                <NavLink id="skills" icon={BookOpen} label="Skills" />
                <NavLink id="education" icon={Award} label="Education" />
              </div>

              <button
                onClick={toggleTheme}
                className={`ml-2 p-2 rounded-lg ${theme.button} ${theme.buttonText} transition-all duration-300`}
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section id="about" className="mb-16 sm:mb-24">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div
                className={`inline-block px-4 py-2 rounded-full ${theme.accentBg} ${theme.accent} text-sm font-medium`}
              >
                Available for Opportunities
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span
                  className={`${theme.accent} inline-block transform hover:scale-105 transition-transform duration-300`}
                >
                  Ritesh Patel
                </span>
              </h1>
              <p
                className={`text-xl sm:text-2xl ${theme.textSecondary} max-w-3xl`}
              >
                BTech Computer Science Student | Machine Learning Enthusiast |
                Full-Stack Developer
              </p>
            </div>

            <p
              className={`${theme.textSecondary} text-lg max-w-3xl leading-relaxed`}
            >
              Motivated and curious 3rd-year student at KIET Group of
              Institutions, Ghaziabad, with a strong interest in machine
              learning and full-stack development. Experienced in building
              real-world AI solutions and passionate about solving complex
              problems with cutting-edge technologies.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/riteshpatel1884"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${theme.card} border ${theme.border} ${theme.cardHover} transition-all duration-300 hover:scale-110`}
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/riteshpatel1884"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg ${theme.card} border ${theme.border} ${theme.cardHover} transition-all duration-300 hover:scale-110`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            Featured Projects
          </h2>
          <div
            className={`${theme.card} border ${theme.border} rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 group`}
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`px-3 py-1 rounded-full ${theme.accentBg} ${theme.accent} text-sm font-medium`}
              >
                In Progress
              </div>
              <ExternalLink
                className={`w-5 h-5 ${theme.textSecondary} group-hover:${theme.accent} transition-colors duration-300`}
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:${theme.accent} transition-colors duration-300">
              Image-Based Medicinal Plant Classifier using Machine Learning
            </h3>

            <div className="space-y-4 mb-6">
              <p className={theme.textSecondary}>
                Developing a machine learning-based image processing tool to
                identify over 120+ medicinal plant species from raw image
                datasets.
              </p>

              <ul className={`space-y-2 ${theme.textSecondary}`}>
                <li className="flex items-start gap-2">
                  <span className={theme.accent}>•</span>
                  <span>
                    Preprocessed a dataset of 1,000+ images with data
                    augmentation and trained classification models
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={theme.accent}>•</span>
                  <span>
                    Integrating the solution into a lightweight web app using
                    the MERN stack
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={theme.accent}>•</span>
                  <span>
                    Supporting Ayurvedic research by authenticating and
                    classifying herbal raw materials
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "TensorFlow",
                "Scikit-learn",
                "MERN Stack",
                "Image Processing",
              ].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full ${theme.border} border text-sm ${theme.textSecondary}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className={`${theme.card} border ${theme.border} rounded-2xl p-6 hover:shadow-xl transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold mb-4 ${theme.accent}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 rounded-lg ${theme.accentBg} ${theme.textSecondary} text-sm hover:${theme.accent} transition-colors duration-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`${theme.card} border ${theme.border} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {edu.degree}
                    </h3>
                    <p className={`${theme.textSecondary} mb-1`}>
                      {edu.institution}
                    </p>
                    {edu.board && (
                      <p className={`text-sm ${theme.textSecondary}`}>
                        {edu.board}
                      </p>
                    )}
                  </div>
                  <div className="text-left sm:text-right space-y-1">
                    <p className={`${theme.accent} font-semibold`}>
                      {edu.duration}
                    </p>
                    <p className={`text-lg font-bold ${theme.text}`}>
                      {edu.gpa}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
            Certifications
          </h2>
          <div
            className={`${theme.card} border ${theme.border} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-lg ${theme.accentBg} ${theme.accent}`}
              >
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Oracle Cloud Infrastructure 2025 Generative AI Professional
                </h3>
                <p className={theme.textSecondary}>Issued: August 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Get In Touch Section */}
        <section id="contact" className="mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className={`${theme.textSecondary} text-lg mb-12 max-w-2xl`}>
            I'm always interested in hearing about new opportunities,
            collaborations, or just connecting with fellow developers and ML
            enthusiasts. Feel free to reach out!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:riteshpatel1884@gmail.com"
                className={`flex items-center gap-4 ${theme.textSecondary} hover:${theme.accent} transition-colors duration-300`}
              >
                <Mail className="w-6 h-6" />
                <span className="text-lg">riteshpatel1884@gmail.com</span>
              </a>
              <a
                href="tel:+918858295418"
                className={`flex items-center gap-4 ${theme.textSecondary} hover:${theme.accent} transition-colors duration-300`}
              >
                <Phone className="w-6 h-6" />
                <span className="text-lg">+91 8858295418</span>
              </a>
            </div>

            {/* Right Column - Social Links */}
            <div className="space-y-4">
              <a
                href="https://github.com/riteshpatel1884"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-6 ${theme.card} border ${theme.border} rounded-xl ${theme.cardHover} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4">
                  <Github className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-lg">GitHub</h3>
                    <p className={`${theme.textSecondary} text-sm`}>
                      @riteshpatel1884
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className={`w-5 h-5 ${theme.textSecondary} group-hover:${theme.accent} transition-colors duration-300`}
                />
              </a>

              <a
                href="https://linkedin.com/in/riteshpatel1884"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-6 ${theme.card} border ${theme.border} rounded-xl ${theme.cardHover} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <p className={`${theme.textSecondary} text-sm`}>
                      Connect with me
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className={`w-5 h-5 ${theme.textSecondary} group-hover:${theme.accent} transition-colors duration-300`}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t ${theme.border} pt-8 text-center`}>
          <p className={`${theme.textSecondary} text-sm`}>
            © 2026 Ritesh Patel. Built with passion and curiosity.
          </p>
        </footer>
      </main>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 ${theme.card} border-t ${theme.border} backdrop-blur-lg bg-opacity-95 z-50`}
      >
        <div className="flex justify-around items-center h-16 px-4">
          <button
            onClick={() => scrollToSection("about")}
            className={`flex flex-col items-center gap-1 ${activeSection === "about" ? theme.accent : theme.textSecondary}`}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">About</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`flex flex-col items-center gap-1 ${activeSection === "projects" ? theme.accent : theme.textSecondary}`}
          >
            <Code className="w-5 h-5" />
            <span className="text-xs">Projects</span>
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`flex flex-col items-center gap-1 ${activeSection === "skills" ? theme.accent : theme.textSecondary}`}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">Skills</span>
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={`flex flex-col items-center gap-1 ${activeSection === "education" ? theme.accent : theme.textSecondary}`}
          >
            <Award className="w-5 h-5" />
            <span className="text-xs">Education</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
