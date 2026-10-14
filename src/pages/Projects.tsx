import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Hash, Code2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import { projectsData, ProjectItem } from "@/data/projects";

// Distinct categories from projects data
const categories = ["All", ...Array.from(new Set(projectsData.map((p) => p.categoryName)))];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full flex flex-col rounded-2xl border border-border/25 bg-card/40 overflow-hidden
        transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 hover:border-border/50"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cyan opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-20" />

      {/* Image container */}
      <div className="relative h-56 w-full overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-background/80 backdrop-blur-md border border-border/50 px-2.5 py-1 rounded-full">
          <Hash className="w-3 h-3 text-primary" />
          <span className="text-[10px] font-bold text-foreground tracking-widest uppercase">
            {project.categoryName}
          </span>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col flex-1 p-6 gap-4 bg-card/40 group-hover:bg-card/65 transition-colors duration-500">
        <div className="flex-1">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
            {project.client}
          </div>
          <h3 className="font-display font-bold text-foreground text-xl leading-snug mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-medium bg-surface border border-border/40 text-muted-foreground"
            >
              <Code2 className="w-3 h-3 opacity-70" />
              {tech}
            </span>
          ))}
        </div>

        {/* Action button */}
        {project.liveUrl && (
          <div className="pt-4 mt-2 border-t border-border/20 group-hover:border-primary/15 transition-colors duration-300">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary/80 hover:text-primary transition-colors duration-300"
            >
              View Project
              <div className="w-6 h-6 rounded-full flex items-center justify-center border border-primary/30 group-hover:bg-primary/10 transition-colors">
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((p) => p.categoryName === activeTab);

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-[55vh] flex items-center overflow-hidden pt-24"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
        >
          <div className="absolute inset-0 grid-bg opacity-[0.09]" />
          <div className="absolute inset-0 bg-gradient-radial opacity-60" />
          
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.08] bg-gradient-cyan animate-pulse_glow" />
          
          <div
            className="absolute bottom-0 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.05]"
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
              Our Portfolio
            </span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display font-bold text-foreground leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
            >
              Work That <span className="text-gradient-cyan">Transforms.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-base lg:text-lg text-muted-foreground leading-[1.85] font-light max-w-2xl">
              Explore our diverse range of successful projects spanning web, mobile, AI, and design. We build digital solutions that drive real business results.
            </motion.p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      </section>

      {/* ══════════════════════════════════════════
          FILTER & GRID
      ══════════════════════════════════════════ */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Tabs */}
          <div className="mb-12 flex items-center justify-start lg:justify-center overflow-x-auto pb-4 scrollbar-hide hide-scrollbar">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-surface/50 border border-border/40 backdrop-blur-md min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === cat
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-surface/60"
                  }`}
                >
                  {activeTab === cat && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-cyan rounded-full"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State Fallback (just in case) */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}

        </div>
      </section>

      <CTASection />
      
      {/* Utility to hide scrollbar for tabs on mobile */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </>
  );
};

export default Projects;
