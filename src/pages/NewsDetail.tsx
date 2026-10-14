import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Hash, Share2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import { newsData } from "@/data/news";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const news = newsData.find((n) => n.id === newsId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsId]);

  if (!news) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">News Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
        <Link
          to="/news"
          className="inline-flex items-center gap-2 bg-gradient-cyan text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="relative pt-28 pb-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 right-0 h-[60vh] bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-[0.08] bg-gradient-cyan pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
          {/* Back Button */}
          <motion.div {...fadeUp(0)} className="mb-10">
            <button
              onClick={() => navigate("/news")}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-border/40 flex items-center justify-center bg-surface/50 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to News
            </button>
          </motion.div>

          {/* Header */}
          <header className="mb-12">
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-4 mb-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <div className="flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full">
                <Hash className="w-3.5 h-3.5" />
                {news.category}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {news.date}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {news.author}
              </div>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {news.title}
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="text-xl text-muted-foreground leading-relaxed font-light">
              {news.summary}
            </motion.p>
          </header>
        </div>

        {/* Hero Image */}
        <motion.div
          {...fadeUp(0.4)}
          className="container mx-auto px-4 lg:px-8 max-w-5xl mb-16"
        >
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Article Body */}
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div
            {...fadeUp(0.5)}
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Share / Bottom Bar */}
          <motion.div
            {...fadeUp(0.6)}
            className="mt-16 pt-8 border-t border-border/30 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Share Article</span>
              <button className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all bg-surface/50">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </article>

      <CTASection />
    </>
  );
};

export default NewsDetail;
