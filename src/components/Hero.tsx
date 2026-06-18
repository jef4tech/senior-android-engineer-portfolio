import { Calendar, Download, Cpu, Rocket, ArrowDownRight, ArrowRight } from "lucide-react";
import { PERSONAL_METARGETS } from "../data";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const topOffset = element.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center py-20 bg-gradient-to-b from-surface via-surface-container-low to-surface-white overflow-hidden border-b border-border-subtle"
    >
      {/* Decorative ambient background blur vectors */}
      <div className="absolute -top-40 -left-60 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] bg-accent-linear/5 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        {/* Status Indicator Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 bg-secondary/5 text-secondary rounded-full border border-secondary/15 shadow-sm text-xs font-mono font-medium tracking-wider uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-success-teal animate-pulse" />
          AVAILABLE FOR PRODUCT COMPANIES & REMOTE TEAMS
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-geist tracking-tight leading-[1.1] text-primary"
        >
          Senior Android Engineer Building Reliable <br className="hidden md:block" /> Android Products From Idea to Production
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          With {PERSONAL_METARGETS.experienceYears} of experience building production Android applications, I specialize in real-time communication systems, modern Android architecture, feature ownership, and Play Store delivery.
        </motion.p>

        {/* Primary Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
        >
          <a
            href="/assets/JEFFIN_JOHNY_2026_ANDROID_DEVOLOPER%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-on-primary font-semibold rounded-xl hover:bg-secondary active:scale-95 transition-all shadow-lg hover:shadow-secondary/20 cursor-pointer"
          >
            Download Resume
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={scrollToProjects}
            className="group flex items-center justify-center gap-2 px-8 py-4 border-2 border-border-subtle bg-surface-white text-primary font-semibold rounded-xl hover:bg-surface-container-low active:scale-95 transition-all cursor-pointer"
          >
            View Projects
            <ArrowDownRight size={16} className="group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Instant highlight capabilities widgets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16 pt-8 border-t border-border-subtle/60"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-surface-white/60 rounded-xl border border-border-subtle/80 shadow-xs hover:border-secondary/20 transition-all">
            <div className="p-2 bg-secondary/5 text-secondary rounded-lg shrink-0">
              <Calendar size={18} />
            </div>
            <span className="text-xs sm:text-sm font-medium text-on-surface-variant font-geist text-left">
              6+ Years Experience
            </span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-surface-white/60 rounded-xl border border-border-subtle/80 shadow-xs hover:border-secondary/20 transition-all">
            <div className="p-2 bg-secondary/5 text-secondary rounded-lg shrink-0">
              <Download size={18} />
            </div>
            <span className="text-xs sm:text-sm font-medium text-on-surface-variant font-geist text-left">
              500K+ Downloads
            </span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-surface-white/60 rounded-xl border border-border-subtle/80 shadow-xs hover:border-secondary/20 transition-all">
            <div className="p-2 bg-secondary/5 text-secondary rounded-lg shrink-0">
              <Cpu size={18} />
            </div>
            <span className="text-xs sm:text-sm font-medium text-on-surface-variant font-geist text-left">
              Real-Time Systems
            </span>
          </div>

          <div className="flex items-center gap-3 px-4 py-3 bg-surface-white/60 rounded-xl border border-border-subtle/80 shadow-xs hover:border-secondary/20 transition-all">
            <div className="p-2 bg-secondary/5 text-secondary rounded-lg shrink-0">
              <Rocket size={18} />
            </div>
            <span className="text-xs sm:text-sm font-medium text-on-surface-variant font-geist text-left">
              Play Store Releases
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
