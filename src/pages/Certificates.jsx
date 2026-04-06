import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiX, FiAward, FiFilter } from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { certificates } from "../data/content";

const categories = ["All", "Web Dev", "AI", "DevOps"];

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Certificates | Ali Raza Bilal</title>
      </Helmet>
      <SectionWrapper>
        <SectionHeading label="Achievements" title="Certificates & Awards" />

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
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/5"
                onClick={() => setLightbox(cert)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <FiAward className="text-gold" size={16} />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-bold text-white text-sm group-hover:text-cyan transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-slate-custom text-xs mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[85vh] w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute -top-12 right-0 text-white hover:text-cyan transition-colors"
                >
                  <FiX size={28} />
                </button>
                <img
                  src={lightbox.image}
                  alt={lightbox.name}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-display font-bold text-white">
                    {lightbox.name}
                  </h3>
                  <p className="text-slate-custom text-sm mt-1">
                    {lightbox.issuer} • {lightbox.date}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionWrapper>
    </>
  );
}
