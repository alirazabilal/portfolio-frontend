import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { experience, education } from "../data/content";

const interests = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Cloud & DevOps",
  "Open Source",
  "Problem Solving",
  "System Design",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Ali Raza Bilal</title>
      </Helmet>
      <SectionWrapper>
        <SectionHeading label="Who I Am" title="About Me" />

        {/* Top row: Photo + Bio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Photo */}
          <motion.div
            className="relative mx-auto lg:mx-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-gold/10 rounded-3xl blur-[40px]" />
            <div className="relative glass rounded-3xl p-3 glow-cyan">
              <img
                src="/assets/pic2.png"
                alt="Ali Raza Bilal"
                className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -top-3 -right-3 glass rounded-xl px-4 py-2 text-xs font-bold text-cyan"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              3+ Years Exp
            </motion.div>
            <motion.div
              className="absolute -bottom-3 -left-3 glass rounded-xl px-4 py-2 text-xs font-bold text-gold flex items-center gap-1"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <FiMapPin size={12} /> Lahore, Pakistan
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              A Passionate{" "}
              <span className="gradient-text">Software Engineer</span>
            </h3>
            <div className="space-y-4 text-slate-custom leading-relaxed">
              <p>
                I&apos;m a Computer Science undergraduate at Information Technology
                University (ITU), Lahore, passionate about coding and technology
                innovation. With hands-on experience in full-stack development,
                AI/ML/Computer Vision, and cloud deployment, I enjoy solving complex
                problems and creating practical solutions.
              </p>
              <p>
                Currently working as a Full Stack Software Engineer at Intellimind
                Pvt. Ltd., where I build and deploy production systems for
                international clients — from custom Shopify stores to complex
                payment integration backends.
              </p>
              <p>
                I stay updated with the latest industry trends and strive to
                contribute meaningfully to cutting-edge projects. My research
                experience at CAAISC, ITU in AI content detection and generative
                AI further strengthens my technical foundation.
              </p>
            </div>

            {/* Interest tags */}
            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {interests.map((tag) => (
                <motion.span
                  key={tag}
                  variants={itemVariants}
                  className="px-4 py-2 glass rounded-full text-xs font-medium text-cyan hover:bg-cyan/10 transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-display font-bold text-white mb-12 text-center">
            <FiBriefcase className="inline mr-2 text-cyan" />
            Work Experience
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent" />

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan rounded-full -translate-x-1/2 mt-6 shadow-lg shadow-cyan/50" />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:border-cyan/30 transition-colors">
                    <div className="flex items-center gap-2 text-cyan text-xs font-medium mb-2">
                      <FiCalendar size={12} />
                      {exp.period}
                    </div>
                    <h4 className="text-lg font-display font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-gold text-sm font-medium mt-1">
                      {exp.company}
                    </p>
                    <p className="text-slate-custom text-sm mt-3 leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.highlights.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs text-cyan/70 bg-cyan/5 px-2 py-1 rounded"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            🎓 Education
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {education.map((ed, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 hover:border-cyan/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-cyan text-xs font-medium">{ed.period}</p>
                <h4 className="text-lg font-display font-bold text-white mt-2">
                  {ed.degree}
                </h4>
                <p className="text-slate-custom text-sm mt-1">{ed.school}</p>
                {ed.gpa && (
                  <p className="text-gold text-sm font-semibold mt-2">
                    {ed.gpa}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
