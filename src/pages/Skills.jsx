import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaShopify,
  FaUnity,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPytorch,
  SiOpencv,
  SiFlutter,
  SiTailwindcss,
  SiDjango,
  SiNumpy,
} from "react-icons/si";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { skills, radarData } from "../data/content";

const iconMap = {
  "React JS": FaReact,
  "Next JS": SiNextdotjs,
  "HTML/CSS/JS": FaHtml5,
  "React Native": FaReact,
  Flutter: SiFlutter,
  TailwindCSS: SiTailwindcss,
  "Node.js / Express": FaNodeJs,
  "Django / Flask": SiDjango,
  MongoDB: SiMongodb,
  SQL: SiMongodb,
  "REST APIs": FaNodeJs,
  "Shopify Development": FaShopify,
  Python: FaPython,
  PyTorch: SiPytorch,
  OpenCV: SiOpencv,
  "NumPy / Pandas": SiNumpy,
  "Machine Learning": FaPython,
  MLOps: FaDocker,
  AWS: FaAws,
  Docker: FaDocker,
  "Git / GitHub": FaGitAlt,
  DevOps: FaDocker,
  "Unity3D / VR": FaUnity,
  Automation: FaGitAlt,
};

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const Icon = iconMap[name] || FaReact;

  return (
    <motion.div
      ref={ref}
      className="glass rounded-xl p-4 hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/5 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Icon className="text-cyan text-lg group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium text-white">{name}</span>
        </div>
        <motion.span
          className="text-cyan text-sm font-bold tabular-nums"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          {inView ? <Counter target={level} /> : "0%"}
        </motion.span>
      </div>
      <div className="h-2 bg-navy-lighter rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan to-cyan/60"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  return <>{count}%</>;
}

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Skills | Ali Raza Bilal</title>
      </Helmet>
      <SectionWrapper>
        <SectionHeading label="My Expertise" title="Skills & Technologies" />

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Skill categories */}
          <div className="lg:col-span-2 space-y-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan rounded-full" />
                  {category}
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.05}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Radar chart */}
          <motion.div
            className="glass rounded-2xl p-6 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-display font-bold text-white mb-6">
              Skills Overview
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData} outerRadius="75%">
                <PolarGrid stroke="#1a2342" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "#8892b0", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={false}
                  axisLine={false}
                />
                <Radar
                  dataKey="value"
                  stroke="#00f5d4"
                  fill="#00f5d4"
                  fillOpacity={0.15}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
