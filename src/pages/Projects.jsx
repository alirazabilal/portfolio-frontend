import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import projectsData from "../data/projects.json";

const categories = ["All", "Web", "AI", "Backend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const featured = projectsData.filter((p) => p.featured);

  return (
    <>
      <Helmet>
        <title>Projects | Ali Raza Bilal</title>
      </Helmet>
      <SectionWrapper>
        <SectionHeading label="My Work" title="Featured Projects" />

        {/* Featured project hero */}
        {featured.length > 0 && (
          <motion.div
            className="glass rounded-3xl overflow-hidden mb-16 glow-cyan"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured[0].image}
                  alt={featured[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-cyan text-xs font-medium tracking-widest uppercase mb-2">
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {featured[0].title}
                </h3>
                <p className="text-slate-custom leading-relaxed mb-6">
                  {featured[0].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured[0].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs bg-cyan/10 text-cyan rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {featured[0].github !== "#" && (
                    <a
                      href={featured[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-custom hover:text-cyan transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  {featured[0].live !== "#" && (
                    <a
                      href={featured[0].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-custom hover:text-cyan transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-cyan text-navy"
                  : "glass text-slate-custom hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>
    </>
  );
}

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass rounded-2xl overflow-hidden group hover:border-cyan/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "perspective(1000px) rotateY(2deg) rotateX(-2deg)" : "perspective(1000px) rotateY(0) rotateX(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-60" />
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white hover:text-cyan transition-colors"
            >
              <FiGithub size={14} />
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white hover:text-cyan transition-colors"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-custom text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] bg-cyan/10 text-cyan rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
