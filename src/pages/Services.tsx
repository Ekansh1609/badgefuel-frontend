import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] flex items-center overflow-hidden"
      >
        {/* bg layers */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.09]" />
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          
          {/* Animated Cyber-Globe graphic */}
          <div className="absolute top-1/2 md:right-[-5%] right-[-30%] -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] opacity-[0.22] pointer-events-none animate-[spin_60s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" className="text-primary/60" />
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary" transform="rotate(0 50 50)" />
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary" transform="rotate(60 50 50)" />
              <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-primary" transform="rotate(120 50 50)" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="4 4" className="text-blue-500/50" />
            </svg>
          </div>

          {/* cyan orb top-right layered behind globe */}
          <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.11] bg-gradient-cyan animate-pulse_glow" />
          
          {/* blue tint bottom-left */}
          <div
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, hsl(215 65% 53%), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-12"
        >
          {/* eyebrow */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary opacity-60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Our Services
            </span>
          </motion.div>

          {/* split headline + descriptor */}
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-end">
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold text-foreground leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Everything You
              <br />
              Need to <span className="text-gradient-cyan">Dominate</span>
              <br />
              <span className="text-gradient-cyan">Digital.</span>
            </motion.h1>

            <motion.div {...fadeUp(0.2)} className="pb-2 flex flex-col gap-6">
              <p className="text-base lg:text-lg text-muted-foreground leading-[1.85] font-light">
                Eight specialized verticals. One team. Complete digital
                transformation capability — strategy through execution.
              </p>

              {/* mini stat strip */}
              <div className="flex gap-8 pt-4 border-t border-border/20">
                {[
                  { value: "8", label: "Verticals" },
                  { value: "200+", label: "Projects" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="font-display font-bold text-gradient-cyan text-2xl block">
                      {s.value}
                    </span>
                    <span className="text-xs text-muted-foreground tracking-wide uppercase">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex items-center gap-3 text-muted-foreground/40"
          >
            <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
            <span className="text-xs tracking-[0.2em] uppercase font-medium">
              Browse services
            </span>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════════ */}
      <section className="relative pb-28 pt-4">
        <div className="container mx-auto px-4 lg:px-8">
          {/* section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-2">
                All Capabilities
              </span>
              <h2
                className="font-display font-bold text-foreground leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                What We{" "}
                <span className="text-gradient-cyan">Build & Deliver</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed sm:text-right">
              Click any service to explore deliverables, process, and case
              examples.
            </p>
          </motion.div>

          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;

