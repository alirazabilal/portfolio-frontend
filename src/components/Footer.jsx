import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/alirazabilal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-custom hover:text-cyan transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/alirazabilal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-custom hover:text-cyan transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:arazabilal2@gmail.com"
            className="text-slate-custom hover:text-cyan transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
        <p className="text-slate-custom text-sm flex items-center gap-1">
          Built with <FiHeart className="text-cyan" size={14} /> by Ali Raza Bilal &copy; {new Date().getFullYear()}
        </p>
        <Link
          to="/contact"
          className="text-sm text-slate-custom hover:text-cyan transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </footer>
  );
}
