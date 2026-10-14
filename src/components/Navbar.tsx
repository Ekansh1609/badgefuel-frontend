import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { navLinks, companyInfo } from "@/data/content";

/* ─── animation presets ─────────────────────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 8, scale: 0.97, transition: { duration: 0.15 } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const mobileChildVariants = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

/* ═══════════════════════════════════════════════════════════ */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setAtTop(window.scrollY < 4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close on route change */
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* hover intent helpers */
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-xl shadow-black/20"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ── Logo ── */}
            <Link
              to="/"
              className="relative flex items-center gap-3 group shrink-0"
            >
              {/* logo mark */}
              <img src="/logo.jpeg" alt={companyInfo.name} className="h-10 w-auto rounded object-contain" />
              <span className="text-lg lg:text-xl font-display font-bold text-gradient-cyan tracking-tight">
                {companyInfo.name}
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  /* services dropdown trigger */
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                        hover:bg-surface/60 hover:text-foreground
                        ${
                          location.pathname.startsWith("/services")
                            ? "text-primary bg-primary/8"
                            : "text-muted-foreground"
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>

                    {/* active underline */}
                    {location.pathname.startsWith("/services") && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-cyan rounded-full" />
                    )}

                    {/* ── Mega dropdown ── */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          onMouseEnter={openDropdown}
                          onMouseLeave={closeDropdown}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]"
                        >
                          <div
                            className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl shadow-black/50"
                            style={{
                              background: "hsl(220 18% 7% / 0.96)",
                              backdropFilter: "blur(24px)",
                            }}
                          >
                            {/* top accent bar */}
                            <div className="h-0.5 w-full bg-gradient-cyan opacity-60" />

                            <div className="p-3 grid grid-cols-2 gap-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`group/item relative flex items-start gap-3 p-3.5 rounded-xl transition-all duration-200
                                    hover:bg-surface/70
                                    ${
                                      child.flagship
                                        ? "border border-primary/15 bg-primary/[0.04]"
                                        : "border border-transparent hover:border-border/30"
                                    }`}
                                >
                                  {/* icon */}
                                  <div
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-200 group-hover/item:scale-110
                                    ${child.flagship ? "bg-primary/15" : "bg-surface"}`}
                                  >
                                    <child.icon
                                      className={`w-4 h-4 transition-colors ${child.flagship ? "text-primary" : "text-muted-foreground group-hover/item:text-primary"}`}
                                    />
                                  </div>

                                  {/* text */}
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-sm font-semibold text-foreground/80 group-hover/item:text-foreground transition-colors leading-snug">
                                        {child.label}
                                      </span>
                                      {child.flagship && (
                                        <span className="flex items-center gap-0.5 bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded-full">
                                          <Sparkles className="w-2.5 h-2.5 text-primary" />
                                          <span className="text-[9px] font-bold text-primary tracking-widest uppercase">
                                            AI
                                          </span>
                                        </span>
                                      )}
                                    </div>
                                    {child.summary && (
                                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-1">
                                        {child.summary}
                                      </p>
                                    )}
                                  </div>

                                  {/* arrow */}
                                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover/item:text-primary/60 transition-all shrink-0 mt-1" />
                                </Link>
                              ))}
                            </div>

                            {/* footer strip */}
                            <div className="mx-3 mb-3 p-3 rounded-xl bg-surface/40 border border-border/20 flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                Explore all {link.children.length} services
                              </span>
                              <Link
                                to={link.path}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2 transition-all"
                              >
                                View All <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  /* regular nav link */
                  <Link
                    key={link.label}
                    to={link.path}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      hover:bg-surface/60 hover:text-foreground
                      ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {link.label}
                    {isActive(link.path) && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-cyan rounded-full" />
                    )}
                  </Link>
                ),
              )}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-cyan text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold
                  hover:opacity-90 hover:shadow-[0_0_24px_hsl(191_100%_50%_/_0.4)] transition-all duration-300"
              >
                Get Consultation
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border/40 bg-surface/60 text-foreground transition-colors hover:border-primary/30"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE MENU — full-screen slide-in sheet
      ══════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* sheet */}
            <motion.div
              key="sheet"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(85vw,360px)] lg:hidden flex flex-col"
              style={{
                background: "hsl(220 18% 6% / 0.98)",
                backdropFilter: "blur(32px)",
                borderLeft: "1px solid hsl(220 15% 16% / 0.8)",
              }}
            >
              {/* sheet header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/30">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <img src="/logo.jpeg" alt={companyInfo.name} className="h-8 w-auto rounded object-contain" />
                  <span className="font-display font-bold text-gradient-cyan text-base">
                    {companyInfo.name}
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/40 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* nav links */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, idx) =>
                    link.children ? (
                      <div key={link.label}>
                        <button
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                          className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors
                            ${mobileServicesOpen ? "bg-surface text-foreground" : "text-muted-foreground hover:bg-surface/50 hover:text-foreground"}`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              variants={mobileChildVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="mt-1 ml-3 pl-3 border-l border-border/30 flex flex-col gap-0.5 pb-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.path}
                                    to={child.path}
                                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all
                                      ${
                                        location.pathname === child.path
                                          ? "text-primary bg-primary/8"
                                          : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                                      }`}
                                  >
                                    <child.icon
                                      className={`w-4 h-4 shrink-0 ${child.flagship ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`}
                                    />
                                    <span className="flex-1">
                                      {child.label}
                                    </span>
                                    {child.flagship && (
                                      <Sparkles className="w-3 h-3 text-primary shrink-0" />
                                    )}
                                  </Link>
                                ))}

                                {/* all services link */}
                                <Link
                                  to={link.path}
                                  className="flex items-center gap-2 px-3 py-2 mt-1 text-xs font-semibold text-primary hover:gap-3 transition-all"
                                >
                                  All Services{" "}
                                  <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.path}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all
                          ${
                            isActive(link.path)
                              ? "text-primary bg-primary/8 border border-primary/15"
                              : "text-muted-foreground hover:text-foreground hover:bg-surface/50"
                          }`}
                      >
                        {link.label}
                        {isActive(link.path) && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    ),
                  )}
                </div>
              </div>

              {/* sheet footer — CTA */}
              <div className="px-4 py-5 border-t border-border/30 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-cyan text-primary-foreground px-5 py-3.5 rounded-xl text-sm font-bold
                    hover:opacity-90 hover:shadow-[0_0_24px_hsl(191_100%_50%_/_0.35)] transition-all duration-300"
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-xs text-muted-foreground/50">
                  {companyInfo.name} · Digital Excellence
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
