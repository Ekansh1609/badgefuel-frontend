import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  summary: string;
  icon: React.ElementType;
  color: string;
  index: number;
  flagship?: boolean;
}

const glowColorMap: Record<string, string> = {
  "from-blue-500 to-cyan-500": "#3b82f6",
  "from-green-500 to-emerald-500": "#22c55e",
  "from-pink-500 to-rose-500": "#ec4899",
  "from-orange-500 to-amber-500": "#f97316",
  "from-violet-500 to-purple-500": "#8b5cf6",
  "from-teal-500 to-cyan-500": "#14b8a6",
  "from-indigo-500 to-blue-500": "#6366f1",
  "from-amber-500 to-yellow-500": "#f59e0b",
};

const ServiceCard = ({
  id,
  title,
  summary,
  icon: Icon,
  color,
  index,
  flagship,
}: ServiceCardProps) => {
  const glowColor = glowColorMap[color] ?? "#b8933a";

  return (
    <Link to={`/services/${id}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.65,
          delay: index * 0.07,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`relative h-full flex flex-col p-7 rounded-2xl border overflow-hidden
          transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30
          ${
            flagship
              ? "border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.07]"
              : "border-border/25 bg-card/40 hover:border-border/50 hover:bg-card/65"
          }`}
      >
        {/* per-card radial glow — top-left on hover, lingering exit */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-opacity duration-1000 ease-out pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, ${glowColor}18 0%, transparent 65%)`,
          }}
        />

        {/* grid texture — appears on hover */}
        <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none" />

        {/* top accent line — gold for flagship, color for rest */}
        <div
          className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-300
            ${flagship ? "bg-gradient-cyan opacity-50" : "opacity-0 group-hover:opacity-60"}`}
          style={
            !flagship
              ? {
                  background: `linear-gradient(to right, ${glowColor}, transparent)`,
                }
              : undefined
          }
        />

        {/* flagship badge */}
        {flagship && (
          <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
              Flagship
            </span>
          </div>
        )}

        {/* main content */}
        <div className="relative z-10 flex flex-col h-full gap-5">
          {/* icon + index row */}
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center
                shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}
            >
              <Icon
                className="text-white"
                style={{ width: "1.3rem", height: "1.3rem" }}
              />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground/25 font-display mt-1">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* title + description */}
          <div>
            <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </div>

          {/* bottom row */}
          <div className="mt-auto pt-4 border-t border-border/20 group-hover:border-primary/15 transition-colors duration-300 flex items-center justify-between">
            <span
              className="text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
              style={{ color: `${glowColor}88` }}
            >
              Explore
            </span>
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center border border-border/25
                group-hover:border-primary/30 group-hover:bg-primary/10
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                transition-all duration-300"
            >
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;

