import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiArrowRight, FiDownload, FiChevronDown } from "react-icons/fi";
import ParticlesBg from "../components/ParticlesBg";

const roles = [
  "Full Stack Developer",
  "AI Enthusiast",
  "Software Engineer",
  "Problem Solver",
  "Backend Architect",
  "ML Researcher",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.substring(0, displayText.length - 1)
              : current.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>
      <Helmet>
        <title>Ali Raza Bilal | Full Stack Developer & AI Enthusiast</title>
      </Helmet>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particles */}
        <ParticlesBg />

        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[128px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-20">
          {/* Left: Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-cyan text-sm md:text-base font-medium tracking-widest uppercase mb-4 font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my world
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Ali Raza Bilal</span>
            </motion.h1>

            <motion.div
              className="mt-4 text-xl md:text-2xl lg:text-3xl font-display font-medium text-slate-custom h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-7 bg-cyan ml-1 animate-pulse" />
            </motion.div>

            <motion.p
              className="mt-6 text-slate-custom text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              CS undergraduate at ITU Lahore with a passion for building
              scalable full-stack applications, AI/ML systems, and solving
              complex engineering problems.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-cyan text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 text-sm"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/assets/cv.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-cyan/30 text-cyan rounded-xl hover:bg-cyan/10 transition-all duration-300 text-sm"
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-cyan/20 rounded-3xl blur-[60px] scale-110" />
              <div className="relative glass rounded-3xl p-2 glow-cyan">
                <img
                  src="/assets/pic2.png"
                  alt="Ali Raza Bilal"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                  loading="eager"
                />
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 text-xs font-semibold text-cyan"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                3.65 CGPA
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 text-xs font-semibold text-gold"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                Open to Work
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link to="/about" className="flex flex-col items-center gap-2 text-slate-custom hover:text-cyan transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <FiChevronDown size={20} />
          </Link>
        </motion.div>
      </div>
    </>
  );
}
