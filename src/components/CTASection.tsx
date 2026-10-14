import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Business?",
  description = "Let's build something extraordinary together. Get in touch with our team for a free consultation.",
}: CTASectionProps) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* bg layers — matching site */}
      <div className="absolute inset-0 bg-card/50 border-y border-border/20" />
      <div className="absolute inset-0 grid-bg opacity-[0.07]" />
      {/* cyan orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[110px] opacity-[0.09] bg-gradient-cyan pointer-events-none" />
      {/* blue tint bottom */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(210 80% 55%), transparent)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-primary opacity-50" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Let's Work Together
            </span>
            <div className="h-px w-8 bg-primary opacity-50" />
          </motion.div>

          {/* headline */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-display font-bold text-foreground/90 leading-[1.1] tracking-tight text-center mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {/* split last two words gold — same pattern as About page */}
            {title
              .split(" ")
              .reduce(
                (lines: string[][], word, i, arr) => {
                  const breakAt = arr.length - 2;
                  if (i < breakAt) lines[0].push(word);
                  else lines[1].push(word);
                  return lines;
                },
                [[], []],
              )
              .map((line, i) => (
                <span
                  key={i}
                  className={`block ${i === 1 ? "text-gradient-cyan" : ""}`}
                >
                  {line.join(" ")}
                </span>
              ))}
          </motion.h2>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-base md:text-lg text-muted-foreground leading-[1.85] font-light text-center max-w-xl mx-auto mb-10"
          >
            {description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-cyan text-primary-foreground px-7 py-4 rounded-full font-semibold text-sm hover:opacity-90 hover:gap-4 hover:shadow-[0_0_40px_hsl(191_100%_50%_/_0.3)] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground px-7 py-4 rounded-full font-semibold text-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Explore Services
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              "200+ Projects Delivered",
              "Free 30-Min Strategy Call",
              "Response Within 4–8 hrs",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-muted-foreground/50"
              >
                <div className="w-1 h-1 rounded-full bg-primary/40 shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

