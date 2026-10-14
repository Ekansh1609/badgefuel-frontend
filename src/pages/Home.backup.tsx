import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Users,
  Rocket,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services, stats, whyChooseUs, companyInfo } from "@/data/content";

const whyIcons = [Target, Zap, TrendingUp, Shield, Rocket, Users];

const aiCapabilities = [
  { label: "Machine Learning", desc: "Predictive models & analytics" },
  { label: "NLP & Chatbots", desc: "Conversational AI systems" },
  { label: "Computer Vision", desc: "Image & video intelligence" },
  { label: "Generative AI", desc: "LLM-powered applications" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.07 } } },
  item: {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

/* ═══════════════════════════════════════════════════════════ */

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — full viewport, editorial asymmetric
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* parallax background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.12]" />
          <div className="absolute inset-0 bg-gradient-radial" />
          {/* main cyan orb — top left */}
          {/* <div className="absolute -top-48 -left-32 w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.13] bg-gradient-cyan" /> */}
          {/* blue orb — bottom right */}
          <div
            className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, hsl(210 80% 55%), transparent)",
            }}
          />
          {/* small pulsing orb */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.05] bg-gradient-cyan animate-pulse_glow" /> */}
        </motion.div>

        {/* hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 pt-36 pb-24"
        >
          {/* top status pill */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <div className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full border border-primary/20">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground">
                AI-Powered Solutions &nbsp;·&nbsp; 200+ Projects Delivered
              </span>
            </div>
          </motion.div>

          {/* two-column layout — headline left, descriptor right */}
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-end">
            {/* left — massive headline */}
            <div>
              <motion.h1
                {...fadeUp(0.1)}
                className="font-display font-bold leading-[0.88] tracking-tight"
                style={{ fontSize: "clamp(3.8rem, 11vw, 9.5rem)" }}
              >
                <span className="text-gradient-cyan block mb-1">
                  {companyInfo.name}
                </span>
                <span
                  className="text-foreground block"
                  style={{
                    fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)",
                    lineHeight: "1.15",
                    letterSpacing: "0.08em",
                  }}
                >
                  {companyInfo.tagline
                    .split(" ")
                    .reduce(
                      (lines: string[][], word, i) => {
                        const mid = Math.ceil(
                          companyInfo.tagline.split(" ").length / 2,
                        );
                        if (i < mid) {
                          lines[0].push(word);
                        } else {
                          lines[1].push(word);
                        }
                        return lines;
                      },
                      [[], []],
                    )
                    .map((line, i) => (
                      <span key={i} className="block leading-[1.15]">
                        {line.join(" ")}
                      </span>
                    ))}
                </span>
              </motion.h1>

              {/* CTA row — inline with headline block */}
              <motion.div
                {...fadeUp(0.3)}
                className="flex flex-col sm:flex-row items-start gap-4 mt-12"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-cyan text-primary-foreground px-7 py-4 rounded-full font-semibold text-sm hover:opacity-90 hover:gap-4 hover:shadow-[0_0_40px_hsl(191_100%_50%_/_0.35)] transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground px-7 py-4 rounded-full font-semibold text-sm transition-all duration-300"
                >
                  Explore Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>

            {/* right — description + marquee stat column */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-6 pb-2">
              <p className="text-base lg:text-lg text-muted-foreground leading-[1.85] font-light">
                We transform ambitious ideas into powerful digital realities —
                Web, Mobile, AI, Design, ERP — one team, complete capability.
              </p>

              {/* mini stat strip */}
              <div className="flex gap-6 pt-4 border-t border-border/20">
                {stats.slice(0, 2).map((s) => (
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
            transition={{ delay: 1.5 }}
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
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          STATS — divided full-bleed strip
      ══════════════════════════════════════════ */}
      <section className="relative border-y border-border/20 overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />

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
                className="group relative flex flex-col items-center justify-center py-14 px-6 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.035] transition-colors duration-500" />
                <span
                  className="font-display font-bold text-gradient-cyan leading-none block"
                  style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground mt-3 block">
                  {stat.label}
                </span>
                {/* bottom accent line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-10 bg-gradient-cyan transition-all duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES — masonry-feel mixed grid
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[clamp(8rem,20vw,18rem)] leading-none text-foreground/[0.022] select-none pointer-events-none hidden lg:block pr-4">
          WORK
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          {/* section header — left editorial */}
          <motion.div
            {...inView(0)}
            className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-3">
                What We Do
              </span>
              <h2
                className="font-display font-bold text-foreground leading-tight"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Our Core
                <br />
                <span className="text-gradient-cyan">Services</span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-3">
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed lg:text-right">
                Eight specialized verticals. One team. Complete digital
                transformation.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* service cards grid */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {services.map((service, i) => (
              <motion.div key={service.id} variants={stagger.item}>
                <ServiceCard {...service} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY CHOOSE — feature rows with index nums
      ══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-card/30 to-card/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-border/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/20" />

        <div className="container mx-auto px-4 lg:px-8">
          {/* header */}
          <motion.div {...inView(0)} className="mb-20">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary block mb-3">
              Why Badgefuel
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end gap-8">
              <h2
                className="font-display font-bold text-foreground leading-tight flex-1"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
              >
                Built <span className="text-gradient-cyan">Different.</span>
              </h2>
              <div className="h-px lg:h-auto lg:w-px lg:self-stretch bg-border/30 shrink-0" />
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                We combine strategic thinking with technical precision —
                delivering work that performs as beautifully as it looks.
              </p>
            </div>
          </motion.div>

          {/* features — 3 col grid */}
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={stagger.item}
                  className="group relative flex flex-col gap-5 p-7 rounded-2xl border border-border/25 bg-card/35 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                >
                  {/* radial hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 0% 0%, hsl(43 50% 54% / 0.06) 0%, transparent 65%)",
                    }}
                  />

                  <div className="flex items-start justify-between">
                    {/* icon */}
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {/* index */}
                    <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground/35 font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ChevronRight className="w-3.5 h-3.5 text-primary/0 group-hover:text-primary/50 transition-all duration-300 translate-x-0 group-hover:translate-x-1 mt-auto" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AI FLAGSHIP — immersive split section
      ══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden">
        {/* bg wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-blue-500/[0.04]" />
        <div className="absolute inset-0 grid-bg opacity-[0.07]" />
        {/* large ambient glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.08] bg-gradient-cyan" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
            {/* left — text */}
            <motion.div {...inView(0)}>
              <div className="inline-flex items-center gap-2.5 bg-primary/10 border border-primary/25 px-4 py-2 rounded-full mb-8">
                <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-xs font-bold text-primary tracking-widest uppercase">
                  Flagship Service
                </span>
              </div>

              <h2
                className="font-display font-bold text-foreground leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                AI Services That Deliver{" "}
                <span className="text-gradient-cyan">Real ROI</span>
              </h2>

              <p className="text-muted-foreground leading-[1.9] text-base mb-10">
                From predictive analytics and NLP chatbots to computer vision
                and generative AI — we build practical, measurable AI solutions
                that solve real business problems and deliver genuine returns
                from day one.
              </p>

              {/* capability rows */}
              <div className="flex flex-col gap-0 mb-10">
                {aiCapabilities.map((cap, i) => (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    className="group flex items-center justify-between py-4 border-b border-border/20 hover:border-primary/20 transition-colors last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-semibold text-foreground/80 group-hover:text-foreground text-sm transition-colors">
                        {cap.label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {cap.desc}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services/ai"
                className="group inline-flex items-center gap-3 bg-gradient-cyan text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 hover:shadow-[0_0_35px_hsl(191_100%_50%_/_0.3)] transition-all duration-300"
              >
                Explore AI Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* right — data viz card */}
            <motion.div {...inView(0.2)} className="relative">
              {/* decorative corner brackets */}
              <div className="absolute -top-5 -left-5 w-10 h-10 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute -bottom-5 -right-5 w-10 h-10 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />

              {/* main card */}
              <div className="relative rounded-3xl bg-card/60 border border-primary/15 backdrop-blur-sm overflow-hidden p-8 lg:p-10">
                {/* inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
                <div className="absolute inset-0 grid-bg opacity-[0.08]" />

                {/* header */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                    AI Performance Metrics
                  </span>
                  <div className="flex items-center gap-2 text-xs text-primary/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    Live
                  </div>
                </div>

                {/* 2×2 stat grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      label: "Model Accuracy",
                      value: "99.2%",
                      change: "+2.1%",
                    },
                    { label: "Cost Reduction", value: "40%", change: "+12%" },
                    {
                      label: "Faster Delivery",
                      value: "10×",
                      change: "vs manual",
                    },
                    {
                      label: "AI Models Built",
                      value: "50+",
                      change: "& deployed",
                    },
                  ].map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="group relative p-5 rounded-2xl bg-card/70 border border-border/30 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        style={{
                          background:
                            "radial-gradient(ellipse at 0% 0%, hsl(43 50% 54% / 0.06) 0%, transparent 70%)",
                        }}
                      />
                      <div className="font-display font-bold text-gradient-cyan text-2xl leading-none block mb-1">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {s.label}
                      </div>
                      <div className="text-[10px] font-semibold text-primary/60 tracking-wide">
                        {s.change}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* bottom bar chart visual */}
                <div className="relative z-10 mt-2">
                  <div className="text-xs text-muted-foreground/50 mb-3 tracking-wide">
                    Project success rate
                  </div>
                  <div className="flex items-end gap-1.5 h-12">
                    {[45, 60, 55, 75, 65, 85, 80, 95, 88, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.5 + i * 0.05,
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex-1 rounded-t-sm"
                        style={{
                          background:
                            i === 9
                              ? "linear-gradient(180deg, hsl(43 60% 65%), hsl(43 45% 40%))"
                              : "hsl(220 15% 20%)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING MANIFESTO — full-bleed banner
      ══════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-card/40 border-y border-border/20" />
        <div className="absolute inset-0 grid-bg opacity-[0.07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-[0.09] bg-gradient-cyan" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <motion.div {...inView(0)} className="max-w-5xl mx-auto text-center">
            <p
              className="font-display font-bold text-foreground/90 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
            >
              One team.{" "}
              <span className="text-gradient-cyan">Complete capability.</span>
              <br />
              Extraordinary results.
            </p>
            <p className="text-muted-foreground mt-6 text-base leading-relaxed max-w-xl mx-auto">
              Join 200+ businesses who trust Badgefuel to turn their boldest
              ideas into market-leading digital products.
            </p>
            <motion.div
              {...inView(0.2)}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-gradient-cyan text-primary-foreground px-8 py-4 rounded-full font-semibold text-sm hover:opacity-90 hover:shadow-[0_0_40px_hsl(191_100%_50%_/_0.3)] transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
              >
                Our Story <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;

