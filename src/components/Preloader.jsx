import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-navy"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="flex flex-col items-center gap-4">
        <motion.div
          className="text-6xl md:text-8xl font-display font-bold tracking-tighter"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-white">A</span>
          <span className="text-cyan">R</span>
          <span className="text-white">B</span>
        </motion.div>
        <motion.div
          className="w-48 h-0.5 bg-navy-lighter rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan to-gold rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
          />
        </motion.div>
        <motion.p
          className="text-slate-custom text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Experience
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
