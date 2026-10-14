import { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  cubicBezier,
} from "framer-motion";
import { companyInfo } from "@/data/content";
import {
  Mail,
  Globe,
  Send,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

/* ─── micro helpers ─────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: cubicBezier(0.42, 0, 0.58, 1) },
});

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: cubicBezier(0.42, 0, 0.58, 1) },
});

/* ─── input component ───────────────────────────────────────── */

const Field = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  rows,
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}) => {
  const [focused, setFocused] = useState(false);
  const Tag = rows ? "textarea" : "input";

  return (
    <div className="relative flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-200
          ${focused ? "text-primary" : "text-muted-foreground"}`}
      >
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>

      <div
        className={`relative rounded-xl overflow-hidden transition-all duration-300
        ${focused ? "shadow-[0_0_0_1.5px_hsl(191_100%_50%_/_0.6),0_0_20px_hsl(191_100%_50%_/_0.08)]" : ""}`}
      >
        {/* bg */}
        <div
          className={`absolute inset-0 rounded-xl transition-colors duration-300
          ${focused ? "bg-card" : "bg-secondary/60"}`}
        />
        {/* border */}
        <div
          className={`absolute inset-0 rounded-xl border transition-colors duration-300
          ${focused ? "border-primary/40" : "border-border/30"}`}
        />

        <Tag
          id={id}
          type={type}
          rows={rows}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
          ) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`relative w-full px-4 py-3.5 bg-transparent text-foreground text-sm
            placeholder:text-muted-foreground/50 focus:outline-none resize-none transition-all`}
        />
      </div>
    </div>
  );
};

/* ─── service chips ─────────────────────────────────────────── */

const services = [
  "Web Development",
  "Mobile App",
  "AI Services",
  "Graphic Design",
  "Digital Marketing",
  "ERP / CRM",
  "Printing",
  "Other",
];

/* ═══════════════════════════════════════════════════════════ */

const Contact = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulated delay
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    setSelectedServices([]);
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO — editorial, parallax
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden"
      >
        {/* bg */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.09]" />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.11] bg-gradient-cyan" />
          <div
            className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, hsl(210 80% 55%), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 pt-40 pb-20"
        >
          {/* eyebrow */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary opacity-60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Contact Us
            </span>
          </motion.div>

          {/* split headline */}
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-end">
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold text-foreground leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
            >
              Let's Build
              <br />
              <span className="text-gradient-cyan">Together.</span>
            </motion.h1>

            <motion.div {...fadeUp(0.25)} className="pb-2">
              <p className="text-base lg:text-lg text-muted-foreground leading-[1.85] font-light mb-6">
                Ready to bring your vision to life? Tell us about your project
                and we'll get back to you within 24 hours.
              </p>
              {/* response promise */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                Typical response within{" "}
                <span className="text-foreground font-semibold ml-1">
                  4–8 hours
                </span>
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
              Fill in the form below
            </span>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          MAIN — form + info panel
      ══════════════════════════════════════════ */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-8 lg:gap-14 items-start">
            {/* ── LEFT: FORM ───────────────────────── */}
            <motion.div {...inView(0)}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* SUCCESS STATE */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-3xl border border-primary/20 bg-card/60 overflow-hidden p-12 lg:p-16 flex flex-col items-center text-center"
                  >
                    {/* glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" />
                    <div className="absolute inset-0 grid-bg opacity-[0.07]" />

                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-9 h-9 text-primary" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-foreground mb-3">
                        Message Sent!
                      </h2>
                      <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto mb-8">
                        Thanks for reaching out. Our team will review your
                        message and get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/50 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* FORM */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl border border-border/30 bg-card/40 overflow-hidden"
                  >
                    {/* top accent bar */}
                    <div className="h-0.5 w-full bg-gradient-cyan opacity-50" />

                    <div className="p-8 lg:p-10 flex flex-col gap-7">
                      {/* form header */}
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-display font-bold text-foreground text-lg leading-tight">
                            Project Brief
                          </h2>
                          <p className="text-xs text-muted-foreground">
                            Tell us what you're building
                          </p>
                        </div>
                      </div>

                      {/* name + email row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field
                          label="Full Name"
                          id="name"
                          value={formData.name}
                          onChange={(v) =>
                            setFormData({ ...formData, name: v })
                          }
                          placeholder="John Smith"
                          required
                        />
                        <Field
                          label="Email Address"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(v) =>
                            setFormData({ ...formData, email: v })
                          }
                          placeholder="john@company.com"
                          required
                        />
                      </div>

                      {/* company */}
                      <Field
                        label="Company / Organisation"
                        id="company"
                        value={formData.company}
                        onChange={(v) =>
                          setFormData({ ...formData, company: v })
                        }
                        placeholder="Your company name (optional)"
                      />

                      {/* service chips */}
                      <div className="flex flex-col gap-2.5">
                        <span className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">
                          Services Interested In
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {services.map((s) => {
                            const active = selectedServices.includes(s);
                            return (
                              <button
                                key={s}
                                type="button"
                                onClick={() => toggleService(s)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                                  ${
                                    active
                                      ? "bg-primary/15 border-primary/40 text-primary"
                                      : "bg-secondary/40 border-border/30 text-muted-foreground hover:border-border/60 hover:text-foreground"
                                  }`}
                              >
                                {active && <span className="mr-1">✓</span>}
                                {s}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* message */}
                      <Field
                        label="Project Details"
                        id="message"
                        value={formData.message}
                        onChange={(v) =>
                          setFormData({ ...formData, message: v })
                        }
                        placeholder="Describe your project, goals, timeline, or any specific requirements…"
                        required
                        rows={5}
                      />

                      {/* submit */}
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.98 }}
                        disabled={submitting}
                        className={`group relative flex items-center justify-center gap-3 w-full py-4 rounded-xl font-bold text-sm overflow-hidden transition-all duration-300
                          ${
                            submitting
                              ? "bg-primary/20 text-primary/60 cursor-not-allowed"
                              : "bg-gradient-cyan text-primary-foreground hover:opacity-90 hover:shadow-[0_0_32px_hsl(191_100%_50%_/_0.35)]"
                          }`}
                      >
                        {submitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 rounded-full border-2 border-primary/30 border-t-primary"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-muted-foreground/50">
                        We respect your privacy. No spam, ever.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── RIGHT: INFO PANEL ─────────────────── */}
            <motion.div
              {...inView(0.15)}
              className="flex flex-col gap-5 lg:sticky lg:top-28"
            >
              {/* consultation card */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/60">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-[0.07]" />
                <div className="relative z-10 p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold tracking-[0.15em] uppercase text-primary">
                      Free Offer
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-2">
                    Free 30-Min Consultation
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Not sure where to start? Book a free strategy session and
                    we'll help map out the perfect approach for your project.
                  </p>
                </div>
              </div>

              {/* contact details */}
              <div className="rounded-2xl border border-border/30 bg-card/40 overflow-hidden divide-y divide-border/20">
                {[
                  {
                    icon: Mail,
                    label: "Email Us",
                    value: companyInfo.email,
                    href: `mailto:${companyInfo.email}`,
                  },
                  {
                    icon: Globe,
                    label: "Visit Us",
                    value: companyInfo.website,
                    href: companyInfo.website,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-6 py-5 hover:bg-surface/40 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-foreground/80 group-hover:text-foreground transition-colors truncate">
                        {item.value}
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/0 group-hover:text-primary/60 transition-all shrink-0" />
                  </a>
                ))}
              </div>

              {/* response time badges */}
              <div className="rounded-2xl border border-border/30 bg-card/40 p-6 flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground">
                  What to Expect
                </span>
                {[
                  {
                    step: "01",
                    label: "Initial Response",
                    time: "Within 4–8 hrs",
                  },
                  {
                    step: "02",
                    label: "Project Scoping Call",
                    time: "Within 48 hrs",
                  },
                  {
                    step: "03",
                    label: "Detailed Proposal",
                    time: "Within 5 days",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-4">
                    <span className="text-xs font-bold text-primary/50 font-display w-6 shrink-0">
                      {s.step}
                    </span>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-foreground/80 block leading-tight">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {s.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

