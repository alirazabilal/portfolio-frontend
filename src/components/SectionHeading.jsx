export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-16 text-center">
      <p className="text-cyan text-sm font-medium tracking-widest uppercase mb-3 font-display">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
        {title}
      </h2>
      <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-cyan to-gold rounded-full" />
    </div>
  );
}
