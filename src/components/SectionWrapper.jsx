import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ children, className = "", id }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`min-h-screen px-6 lg:px-8 max-w-7xl mx-auto w-full py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}
