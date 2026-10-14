import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Cpu,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { services } from "@/data/content";

/* ─── tiny helpers ─────────────────────────────────────────── */

const gradientMap = {
  "from-blue-500 to-cyan-500": "linear-gradient(135deg,#3b82f6,#06b6d4)",
  "from-green-500 to-emerald-500": "linear-gradient(135deg,#22c55e,#10b981)",
  "from-pink-500 to-rose-500": "linear-gradient(135deg,#ec4899,#f43f5e)",
  "from-orange-500 to-amber-500": "linear-gradient(135deg,#f97316,#f59e0b)",
  "from-violet-500 to-purple-500": "linear-gradient(135deg,#8b5cf6,#a855f7)",
  "from-teal-500 to-cyan-500": "linear-gradient(135deg,#14b8a6,#06b6d4)",
  "from-indigo-500 to-blue-500": "linear-gradient(135deg,#6366f1,#3b82f6)",
  "from-amber-500 to-yellow-500": "linear-gradient(135deg,#f59e0b,#eab308)",
};

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.07 } } },
  item: {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

/* ─── sub-components ───────────────────────────────────────── */

function SectionBlock({ section, sIdx, color }) {
  const even = sIdx % 2 === 0;
  const accentColor =
    gradientMap[color] || "linear-gradient(135deg,#b8933a,#8a6a28)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* section header — offset accent bar */}
      <div className="flex items-start gap-6 mb-10">
        <div
          className="hidden lg:block w-1 shrink-0 rounded-full mt-1"
          style={{
            background: accentColor,
            height: "3.5rem",
            opacity: 0.9,
          }}
        />
        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
            {String(sIdx + 1).padStart(2, "0")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
            {section.title}
          </h2>
          {section.description && (
            <p className="text-muted-foreground leading-relaxed mt-3 max-w-2xl text-base">
              {section.description}
            </p>
          )}
        </div>
      </div>

      {section.items && (
        <motion.div
          variants={stagger.container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`grid gap-3 ${
            section.items.length > 4
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {section.items.map((item, i) => {
            const [title, ...descParts] = item.split(" — ");
            const desc = descParts.join(" — ");
            return (
              <motion.div
                key={i}
                variants={stagger.item}
                className="group relative flex gap-4 p-5 rounded-2xl border border-border/30 bg-card/40 hover:bg-card/70 hover:border-primary/25 transition-all duration-300 overflow-hidden"
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at 0% 50%, ${accentColor.match(/#[a-f0-9]+/gi)?.[0] ?? "#b8933a"}18 0%, transparent 70%)`,
                  }}
                />
                {/* check icon */}
                <div
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: accentColor, opacity: 0.85 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="relative">
                  <h4 className="font-semibold text-foreground text-sm leading-snug">
                    {title}
                  </h4>
                  {desc && (
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
                {/* trailing arrow on hover */}
                <ChevronRight className="ml-auto shrink-0 w-4 h-4 text-muted-foreground/0 group-hover:text-primary/60 transition-all duration-300 self-center" />
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}

/* ─── main component ───────────────────────────────────────── */

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!service) return <Navigate to="/services" />;

  const Icon = service.icon;
  const accentGradient =
    gradientMap[service.color] || "linear-gradient(135deg,#b8933a,#8a6a28)";
  const accentStart = accentGradient.match(/#[a-f0-9]+/gi)?.[0] ?? "#b8933a";

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — full-bleed, editorial, parallax
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[65vh] flex items-center overflow-hidden"
      >
        {/* layered background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* grid */}
          <div className="absolute inset-0 grid-bg opacity-10" />

          {/* dynamic giant service icon watermark */}
          <div 
             className="absolute top-1/2 md:-right-20 right-[-40%] -translate-y-1/2 opacity-[0.035] pointer-events-none"
             style={{ color: accentStart }}
          >
             <Icon style={{ width: "800px", height: "800px" }} />
          </div>

          {/* radial gold glow top */}
          <div className="absolute inset-0 bg-gradient-radial" />
          {/* large accent orb — positioned off-center */}
          <div
            className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full blur-[120px] opacity-20"
            style={{ background: accentGradient }}
          />
          {/* smaller orb bottom-left */}
          <div
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full blur-[90px] opacity-10"
            style={{ background: accentGradient }}
          />
          {/* animated pulse glow (flagship only) */}
          {service.flagship && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse_glow opacity-10"
              style={{ background: accentGradient }}
            />
          )}
        </motion.div>

        {/* content area */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 pt-32 pb-12"
        >
          {/* back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
              All Services
            </Link>
          </motion.div>

          {/* flagship badge */}
          {service.flagship && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Flagship Service
              </span>
            </motion.div>
          )}

          {/* big number — decorative */}
          <div className="absolute right-8 top-28 lg:top-36 font-display font-bold text-[clamp(6rem,18vw,16rem)] leading-none text-foreground/[0.03] select-none pointer-events-none hidden lg:block">
            {String(services.findIndex((s) => s.id === serviceId) + 1).padStart(
              2,
              "0",
            )}
          </div>

          {/* icon + title row — broken grid */}
          <div className="flex flex-col gap-6 max-w-5xl">
            {/* icon pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ background: accentGradient }}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div
                className="h-px flex-1 max-w-[80px] opacity-40"
                style={{ background: accentGradient }}
              />
            </motion.div>

            {/* headline — editorial large */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display font-bold text-foreground leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              {service.title}
            </motion.h1>

            {/* summary line with accent color dot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: accentGradient }}
              />
              <span className="text-sm font-medium text-muted-foreground tracking-wide">
                {service.summary}
              </span>
            </motion.div>
          </div>

          {/* description — wide but offset */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 max-w-3xl lg:ml-20"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-[1.8] font-light">
              {service.description}
            </p>
          </motion.div>

          {/* scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex items-center gap-3 text-muted-foreground/50"
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

        {/* bottom edge fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
      </section>

      {/* ══════════════════════════════════════════
          SECTIONS — asymmetric alternating layout
      ══════════════════════════════════════════ */}
      <section className="relative py-8">
        {/* vertical timeline line */}
        <div
          className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px opacity-[0.06] hidden xl:block"
          style={{ background: accentGradient }}
        />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-24 py-16">
            {service.sections.map((section, sIdx) => (
              <div
                key={sIdx}
                className={`${
                  sIdx % 2 === 1
                    ? "lg:pl-12 lg:border-l border-border/20"
                    : "lg:pr-12"
                }`}
              >
                <SectionBlock
                  section={section}
                  sIdx={sIdx}
                  color={service.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGIES — immersive full-width card
      ══════════════════════════════════════════ */}
      {service.technologies && (
        <section className="relative py-8 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden"
            >
              {/* card bg */}
              <div className="absolute inset-0 bg-card border border-border/40" />
              {/* accent gradient wash */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{ background: accentGradient }}
              />
              {/* grid texture */}
              <div className="absolute inset-0 grid-bg opacity-10" />
              {/* large blurred icon background */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 opacity-[0.04]">
                <Cpu className="w-full h-full text-primary" />
              </div>

              <div className="relative z-10 p-10 lg:p-14">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* left label */}
                  <div className="lg:w-72 shrink-0">
                    <div
                      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl mb-4"
                      style={{
                        background: `${accentStart}18`,
                        border: `1px solid ${accentStart}30`,
                      }}
                    >
                      <Cpu className="w-4 h-4" style={{ color: accentStart }} />
                      <span
                        className="text-xs font-bold tracking-[0.15em] uppercase"
                        style={{ color: accentStart }}
                      >
                        Tech Stack
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                      Technologies
                      <br />
                      We Use
                    </h2>
                  </div>

                  {/* right — parsed tech pills */}
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-[1.9] text-base">
                      {service.technologies}
                    </p>
                    {/* tech pill row — parse comma/semicolons into tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {service.technologies
                        .split(/[,;]/)
                        .map((t) => t.trim())
                        .filter(Boolean)
                        .slice(0, 16)
                        .map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full border border-border/50 text-muted-foreground bg-card/60 hover:border-primary/30 hover:text-foreground transition-colors cursor-default font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          PROCESS — horizontal step timeline
      ══════════════════════════════════════════ */}
      {service.process && (
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start"
            >
              {/* sticky label */}
              <div className="lg:w-64 shrink-0 lg:sticky lg:top-32">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                  How We Work
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground leading-tight">
                  Our
                  <br />
                  Process
                </h2>
                <div
                  className="mt-4 h-1 w-12 rounded-full"
                  style={{ background: accentGradient }}
                />
              </div>

              {/* process text + visual steps */}
              <div className="flex-1">
                <p className="text-muted-foreground leading-[1.9] text-base mb-10 max-w-2xl">
                  {service.process}
                </p>

                {/* extract numbered steps from process text */}
                <div className="flex flex-col gap-0">
                  {[
                    "Discovery & Analysis",
                    "Strategy & Planning",
                    "Design & Development",
                    "Testing & QA",
                    "Launch & Support",
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="group flex items-center gap-5 py-4 border-b border-border/20 hover:border-primary/20 transition-colors last:border-0"
                    >
                      <span
                        className="text-xs font-bold font-display tabular-nums w-8 shrink-0"
                        style={{ color: accentStart }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                        {step}
                      </span>
                      <div
                        className="ml-auto w-0 group-hover:w-8 h-px transition-all duration-300"
                        style={{ background: accentGradient }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          WHY CHOOSE — split layout with big quote
      ══════════════════════════════════════════ */}
      {service.whyChoose && (
        <section className="relative py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              background: `radial-gradient(ellipse at 80% 50%, ${accentStart} 0%, transparent 60%)`,
            }}
          />
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* giant decorative quote mark */}
              <div className="absolute -top-8 -left-4 font-display text-[12rem] leading-none text-foreground/[0.03] select-none pointer-events-none">
                "
              </div>

              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                <div className="lg:w-64 shrink-0">
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-3">
                    Our Difference
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    Why Choose
                    <br />
                    Badgefuel
                  </h2>
                  <div
                    className="mt-4 h-1 w-12 rounded-full"
                    style={{ background: accentGradient }}
                  />
                </div>

                <div className="flex-1 max-w-2xl">
                  <p className="text-lg md:text-xl text-foreground/80 leading-[1.85] font-light">
                    {service.whyChoose}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          COMMITMENT (AI page) — premium bordered
      ══════════════════════════════════════════ */}
      {service.commitment && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${accentStart}30` }}
            >
              {/* gradient wash */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  background: `linear-gradient(135deg, ${accentStart}40 0%, transparent 60%)`,
                }}
              />
              {/* grid */}
              <div className="absolute inset-0 grid-bg opacity-[0.08]" />

              <div className="relative z-10 p-10 lg:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accentGradient }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                    Our Commitment
                  </h2>
                </div>
                <p className="text-muted-foreground leading-[1.9] text-base max-w-3xl">
                  {service.commitment}
                </p>

                {/* three pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  {["Accuracy", "Transparency", "Ethics"].map((pillar, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-border/30 bg-card/40"
                    >
                      <span
                        className="text-xs font-bold tracking-[0.15em] uppercase block mb-2"
                        style={{ color: accentStart }}
                      >
                        0{i + 1}
                      </span>
                      <span className="font-display font-semibold text-foreground text-lg">
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          OTHER SERVICES — editorial marquee-style
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                Explore More
              </span>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                Other Services
              </h3>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services
              .filter((s) => s.id !== service.id)
              .map((s, i) => {
                const sGrad = gradientMap[s.color] || accentGradient;
                const sAccent = sGrad.match(/#[a-f0-9]+/gi)?.[0] ?? "#b8933a";
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={`/services/${s.id}`}
                      className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-border/30 bg-card/40 hover:bg-card/70 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                        style={{
                          background: `radial-gradient(ellipse at 0% 0%, ${sAccent}14 0%, transparent 70%)`,
                        }}
                      />
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: sGrad, opacity: 0.85 }}
                      >
                        <s.icon
                          className="w-4.5 h-4.5 text-white"
                          style={{ width: "1.1rem", height: "1.1rem" }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors leading-snug relative">
                        {s.shortTitle}
                      </span>
                      <p className="text-xs text-muted-foreground line-clamp-2 relative">
                        {s.summary}
                      </p>
                      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-primary/60 transition-colors mt-auto relative" />
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServiceDetail;
