import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { whoWeAre, ourPromise, whyChooseUs, stats } from "@/data/content";
import {
  Target,
  Zap,
  TrendingUp,
  Shield,
  Rocket,
  Users,
  Heart,
  Lightbulb,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ─── DATA ─────────────────────────────────────────────────── */

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We push boundaries and embrace emerging technologies to keep you ahead of the curve.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    desc: "Your success is our success. Every decision we make starts and ends with your needs.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparent communication, honest timelines, and absolutely no hidden surprises.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    desc: "We deliver quality that exceeds expectations, without exception, every single time.",
  },
];

/* ─── animation presets ─────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
});

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.08 } } },
  item: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  },
};

/* ═══════════════════════════════════════════════════════════ */

const About = () => {
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
          HERO — full viewport, editorial split
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
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="absolute inset-0 bg-gradient-radial opacity-80" />

          {/* Animated Network Node Background */}
          <div className="absolute top-1/2 right-[-20%] md:right-[-5%] -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] opacity-[0.25] pointer-events-none animate-[spin_120s_linear_infinite]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Connecting Lines */}
              <line x1="100" y1="100" x2="40" y2="40" stroke="currentColor" strokeWidth="0.2" className="text-primary/40" />
              <line x1="100" y1="100" x2="160" y2="30" stroke="currentColor" strokeWidth="0.2" className="text-primary/40" />
              <line x1="100" y1="100" x2="170" y2="150" stroke="currentColor" strokeWidth="0.2" className="text-primary/40" />
              <line x1="100" y1="100" x2="50" y2="160" stroke="currentColor" strokeWidth="0.2" className="text-primary/40" />
              <line x1="40" y1="40" x2="160" y2="30" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />
              <line x1="160" y1="30" x2="170" y2="150" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />
              <line x1="170" y1="150" x2="50" y2="160" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />
              <line x1="50" y1="160" x2="40" y2="40" stroke="currentColor" strokeWidth="0.1" className="text-primary/20" />

              {/* Concentric rings to symbolize unity */}
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="2 4" className="text-primary" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-primary/50" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-primary/30" />

              {/* Nodes */}
              <circle cx="100" cy="100" r="3" className="fill-primary" />
              <circle cx="100" cy="100" r="8" fill="none" stroke="currentColor" strokeWidth="0.4" className="text-primary/40" />
              <circle cx="40" cy="40" r="2" className="fill-primary/80" />
              <circle cx="160" cy="30" r="2.5" className="fill-primary/80" />
              <circle cx="170" cy="150" r="2" className="fill-primary/80" />
              <circle cx="50" cy="160" r="2.5" className="fill-primary/80" />
              <circle cx="40" cy="40" r="5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/50" />
              <circle cx="160" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/50" />
              <circle cx="50" cy="160" r="7" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/50" />
              <circle cx="170" cy="150" r="5" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-primary/50" />
            </svg>
          </div>
          {/* cyan orb top-right */}
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.12] bg-gradient-cyan" />
          {/* blue tint bottom-left */}
          <div
            className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, hsl(210 80% 55%), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-16"
        >
          {/* eyebrow */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3">
            <div className="h-px w-10 bg-primary opacity-60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              About Badgefuel
            </span>
          </motion.div>

          {/* two-column asymmetric title block */}
          <div className="grid lg:grid-cols-[1fr_auto] lg:gap-x-16 items-end -mt-2 lg:-mt-4 relative z-10">
            {/* left — giant headline */}
            <motion.div {...fadeUp(0.1)}>
              <h1
                className="font-display font-bold text-foreground leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
              >
                {whoWeAre.title.split(" ").map((word, i, arr) => (
                  <span key={i}>
                    <span
                      className={
                        i >= arr.length - 2 ? "text-gradient-cyan" : ""
                      }
                    >
                      {word}
                    </span>
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* right — rotated label + year pill */}
            <motion.div
              {...fadeUp(0.25)}
              className="hidden lg:flex flex-col items-end gap-4 pb-3"
            >
              <div
                className="writing-mode-vertical text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground/50"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                Est. 2019 · Digital Excellence
              </div>
              <div className="w-px h-20 bg-border/40" />
            </motion.div>
          </div>

          {/* description — offset indent */}
          <motion.div {...fadeUp(0.3)} className="mt-10 lg:ml-[18%] max-w-2xl">
            <p className="text-lg md:text-xl text-muted-foreground leading-[1.85] font-light">
              {whoWeAre.description}
            </p>
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-16 flex items-center gap-3 text-muted-foreground/40"
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
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          STATS — full-bleed ticker strip
      ══════════════════════════════════════════ */}
      <section className="relative py-0 border-y border-border/20 overflow-hidden">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border/20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col items-center justify-center py-12 px-6 text-center relative overflow-hidden"
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
                {/* counter number */}
                <span
                  className="font-display font-bold text-gradient-cyan leading-none block"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mt-3 block">
                  {stat.label}
                </span>
                {/* bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 bg-gradient-cyan transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PHILOSOPHY — immersive split with quote
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* faint background text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[clamp(8rem,22vw,20rem)] leading-none text-foreground/[0.025] select-none pointer-events-none hidden lg:block pr-4">
          WHY
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
            {/* left column */}
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-4">
                Our Philosophy
              </span>
              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Built on craft.
                <br />
                Driven by
                <br />
                <em className="text-gradient-cyan not-italic">purpose.</em>
              </h2>
              <p className="text-muted-foreground leading-[1.9] text-base mb-8">
                {whoWeAre.philosophy}
              </p>

              {/* philosophy sub-points */}
              <div className="flex flex-col gap-3">
                {[
                  "Strategy before execution",
                  "Design with intention",
                  "Technology as a tool, not a goal",
                ].map((pt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {pt}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* right column — promise card */}
            <motion.div {...fadeUp(0.2)} className="relative">
              {/* top-right decorative bracket */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/30 rounded-bl-lg" />

              <div className="relative rounded-3xl overflow-hidden border border-primary/15 bg-card/60 backdrop-blur-sm p-10 lg:p-12">
                {/* inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                {/* grid texture */}
                <div className="absolute inset-0 grid-bg opacity-[0.06]" />

                <div className="relative z-10">
                  {/* giant quote */}
                  <div className="font-display text-[5rem] leading-none text-primary/20 -mt-4 mb-2 select-none">
                    "
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-5">
                    {ourPromise.title}
                  </h3>
                  <p className="text-muted-foreground leading-[1.9] text-base">
                    {ourPromise.description}
                  </p>

                  {/* signature line */}
                  <div className="mt-8 pt-6 border-t border-border/30 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-cyan flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-sm font-display">
                        B
                      </span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-foreground tracking-wide block">
                        Badgefuel Studio
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Our founding promise
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          VALUES — asymmetric bento grid
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* header — left-aligned editorial */}
          <motion.div
            {...fadeUp(0)}
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-3">
                Core Values
              </span>
              <h2
                className="font-display font-bold text-foreground leading-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                What Drives
                <br />
                <span className="text-gradient-cyan">Everything We Do</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed lg:text-right">
              These aren't posters on a wall. They're the decisions we make
              every day, in every project.
            </p>
          </motion.div>

          {/* bento grid — 2 tall + 2 wide */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((v, i) => {
              const isLarge = i === 0 || i === 3;
              return (
                <motion.div
                  key={v.title}
                  variants={stagger.item}
                  className={`group relative rounded-3xl border border-border/30 bg-card/50 overflow-hidden
                    hover:border-primary/25 transition-all duration-500 p-8 flex flex-col justify-between
                    ${isLarge ? "lg:row-span-1 min-h-[280px]" : "min-h-[240px]"}`}
                >
                  {/* hover bg glow */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-500" />
                  {/* large ghost icon bg */}
                  <v.icon className="absolute -bottom-4 -right-4 w-28 h-28 text-foreground/[0.03] group-hover:text-primary/[0.06] transition-colors duration-500" />

                  <div className="relative z-10">
                    {/* numbered label */}
                    <span className="text-xs font-bold text-primary/50 tracking-[0.2em] block mb-4">
                      0{i + 1}
                    </span>
                    {/* icon */}
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                      <v.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.desc}
                    </p>
                  </div>

                  {/* bottom right arrow */}
                  <ChevronRight className="relative z-10 w-4 h-4 text-muted-foreground/0 group-hover:text-primary/50 self-end mt-6 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE — alternating feature rows
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        {/* background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-card/30 to-card/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-border/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* section header */}
          <motion.div {...fadeUp(0)} className="mb-20">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-3">
              Our Advantage
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6">
              <h2
                className="font-display font-bold text-foreground leading-tight flex-1"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Why Leading Brands
                <br />
                Choose <span className="text-gradient-cyan">Badgefuel</span>
              </h2>
              <div className="h-px lg:h-auto lg:w-px lg:self-stretch bg-border/30 lg:mx-8 shrink-0" />
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                We combine strategic thinking with technical precision and
                creative excellence — delivering work that performs as
                beautifully as it looks.
              </p>
            </div>
          </motion.div>

          {/* feature grid — masonry-style */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={stagger.item}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-border/25 bg-card/35 hover:bg-card/60 hover:border-primary/20 transition-all duration-400 overflow-hidden"
              >
                {/* hover radial glow from top-left */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 0%, hsl(43 50% 54% / 0.07) 0%, transparent 65%)",
                  }}
                />

                {/* index number */}
                <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground/40 font-display">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* dot + title */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <h3 className="font-display font-bold text-foreground text-base leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                  {item.description}
                </p>

                {/* hover arrow */}
                <div className="pl-5 mt-auto">
                  <ChevronRight className="w-3.5 h-3.5 text-primary/0 group-hover:text-primary/50 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING BANNER — full-bleed manifesto
      ══════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        {/* layered bg */}
        <div className="absolute inset-0 bg-card/50 border-y border-border/20" />
        <div className="absolute inset-0 grid-bg opacity-[0.07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[100px] opacity-[0.08] bg-gradient-cyan" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <p
              className="font-display font-bold text-foreground/90 leading-[1.15] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              We don't just build products —<br />
              <span className="text-gradient-cyan">we build futures.</span>
            </p>
            <p className="text-muted-foreground mt-6 text-base leading-relaxed max-w-xl mx-auto">
              Every line of code, every pixel, every strategy is crafted with
              one purpose: to make your business extraordinary.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-10"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-cyan text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all hover:gap-4 hover:shadow-[0_0_40px_hsl(191_100%_50%_/_0.3)] duration-300"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;

