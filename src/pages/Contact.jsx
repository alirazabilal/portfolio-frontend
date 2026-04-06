import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FiSend,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiDownload,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const API = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Ali Raza Bilal</title>
      </Helmet>
      <SectionWrapper>
        <SectionHeading label="Get In Touch" title="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-slate-custom leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, and
                interesting projects. Whether you need a full-stack developer,
                want to discuss AI/ML, or just want to say hi — my inbox is
                always open.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="mailto:arazabilal2@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-cyan/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-cyan/10 rounded-lg flex items-center justify-center">
                  <FiMail className="text-cyan" />
                </div>
                <div>
                  <p className="text-xs text-slate-custom">Email</p>
                  <p className="text-sm text-white group-hover:text-cyan transition-colors">
                    arazabilal2@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <FiMapPin className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-custom">Location</p>
                  <p className="text-sm text-white">Lahore, Pakistan 🇵🇰</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/alirazabilal",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://linkedin.com/in/alirazabilal",
                  label: "LinkedIn",
                },
                {
                  icon: FiMail,
                  href: "mailto:arazabilal2@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-custom hover:text-cyan hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/10"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/assets/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 text-sm"
            >
              <FiDownload />
              Download Resume
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-slate-custom mb-2 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-navy-lighter border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors placeholder:text-slate-custom/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-slate-custom mb-2 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-navy-lighter border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors placeholder:text-slate-custom/50"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-custom mb-2 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-navy-lighter border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan/50 transition-colors resize-none placeholder:text-slate-custom/50"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan text-navy font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
              ) : status === "sent" ? (
                <>
                  <FiCheck /> Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <FiAlertCircle /> Failed — Try Again
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </SectionWrapper>
    </>
  );
}
