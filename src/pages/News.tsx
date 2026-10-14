import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, User, Hash } from "lucide-react";
import CTASection from "@/components/CTASection";
import { newsData, NewsItem } from "@/data/news";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const NewsCard = ({ news, index }: { news: NewsItem; index: number }) => {
  return (
    <Link to={`/news/${news.id}`} className="block h-full group">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.65,
          delay: (index % 3) * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative h-full flex flex-col rounded-2xl border border-border/25 bg-card/40 overflow-hidden
          transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30
          hover:border-border/50 hover:bg-card/65"
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-opacity duration-1000 ease-out pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 0% 0%, hsl(191 100% 50% / 0.1) 0%, transparent 65%)`,
          }}
        />

        {/* top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cyan opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Image wrapper */}
        <div className="relative h-48 w-full overflow-hidden border-b border-border/20">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-background/80 backdrop-blur-md border border-border/50 px-2.5 py-1 rounded-full">
            <Hash className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
              {news.category}
            </span>
          </div>
        </div>

        {/* main content */}
        <div className="relative z-10 flex flex-col flex-1 p-6 gap-4">
          {/* metadata row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground/80">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{news.author}</span>
            </div>
          </div>

          {/* title + summary */}
          <div className="flex-1">
            <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {news.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {news.summary}
            </p>
          </div>

          {/* bottom row */}
          <div className="pt-4 border-t border-border/20 group-hover:border-primary/15 transition-colors duration-300 flex items-center justify-between mt-auto">
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/80 transition-colors duration-300">
              Read Article
            </span>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center border border-border/25
                group-hover:border-primary/30 group-hover:bg-primary/10
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                transition-all duration-300"
            >
              <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const News = () => {
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
        className="relative min-h-[50vh] flex items-center overflow-hidden pt-24"
      >
        {/* bg layers */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.09]" />
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          
          <div className="absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08] bg-gradient-cyan animate-pulse_glow" />
          
          <div
            className="absolute bottom-0 -right-40 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06]"
            style={{
              background: "radial-gradient(circle, hsl(215 65% 53%), transparent)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 lg:px-8 py-16"
        >
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary opacity-60" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
              Insights & Updates
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold text-foreground leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Latest in <span className="text-gradient-cyan">Tech News.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-base lg:text-lg text-muted-foreground leading-[1.85] font-light max-w-2xl">
              Stay ahead of the curve with our curated coverage of breakthrough technologies, industry shifts, and innovations shaping the digital frontier.
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          NEWS GRID
      ══════════════════════════════════════════ */}
      <section className="relative pb-28 pt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((news, i) => (
              <NewsCard key={news.id} news={news} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default News;
