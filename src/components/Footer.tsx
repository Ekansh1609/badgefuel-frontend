import { Link } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import { companyInfo, services } from "@/data/content";
import { Mail, Globe, ArrowRight, ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.7, delay, ease: easeInOut },
});

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "All Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/20 bg-background">
      {/* background layers — matching site style */}
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[120px] opacity-[0.07] pointer-events-none"
        style={{ background: "hsl(43 50% 54%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* ── TOP MANIFESTO STRIP ── */}
        <motion.div
          {...fadeUp(0)}
          className="py-14 md:py-20 border-b border-border/20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          {/* giant wordmark */}
          <div>
            <Link
              to="/"
              className="font-display font-bold text-gradient-cyan leading-none block"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
            >
              {companyInfo.name}
            </Link>
            <p
              className="text-muted-foreground/60 font-light mt-2 tracking-wide"
              style={{ fontSize: "clamp(0.8rem, 1.8vw, 1rem)" }}
            >
              {companyInfo.tagline}
            </p>
          </div>

          {/* CTA block */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:pb-2">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-cyan text-primary-foreground px-6 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 hover:gap-4 hover:shadow-[0_0_36px_hsl(191_100%_50%_/_0.3)] transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-border/50 hover:border-primary/40 text-muted-foreground hover:text-foreground px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="py-14 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-10 lg:gap-8 border-b border-border/20">
          {/* col 1 — brand info */}
          <motion.div
            {...fadeUp(0.05)}
            className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5"
          >
            <p className="text-sm text-muted-foreground leading-[1.85] font-light max-w-xs">
              We transform ambitious ideas into powerful digital realities —
              Web, Mobile, AI, Design, ERP — one team, complete capability.
            </p>

            {/* contact links */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${companyInfo.email}`}
                className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail className="w-3 h-3 text-primary" />
                </div>
                {companyInfo.email}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
              </a>
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Globe className="w-3 h-3 text-primary" />
                </div>
                {companyInfo.website}
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
              </a>
            </div>
          </motion.div>

          {/* col 2 — services */}
          <motion.div {...fadeUp(0.1)}>
            {/* eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-5 bg-primary opacity-50" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-primary">
                Services
              </span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.id}`}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* col 3 — company */}
          <motion.div {...fadeUp(0.15)}>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-px w-5 bg-primary opacity-50" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-primary">
                Company
              </span>
            </div>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* col 4 — ready to start card */}
          <motion.div {...fadeUp(0.2)}>
            <div className="relative rounded-2xl overflow-hidden border border-primary/15 bg-card/40 p-6">
              {/* inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 grid-bg opacity-[0.05] pointer-events-none" />
              {/* top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cyan opacity-40" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                    Free Consultation
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-2">
                  Ready to build something extraordinary?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  Free 30-min strategy session. No commitments, just clarity.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all duration-300"
                >
                  Book a Call
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-xs text-muted-foreground/50 text-center sm:text-left">
            {companyInfo.copyright}
          </p>

          {/* est. pill */}
          <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground/30 font-semibold tracking-[0.2em] uppercase">
            <span>Est. 2019</span>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/20" />
            <span>Digital Excellence</span>
          </div>

          <a
            href={companyInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-200"
          >
            {companyInfo.website}
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

