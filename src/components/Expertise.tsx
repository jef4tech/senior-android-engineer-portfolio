import { useState } from "react";
import { Activity, ShoppingCart, Wrench, Check, Hourglass, CloudSun, Quote } from "lucide-react";
import { DOMAIN_CONTRIBUTIONS, PROJECTS, AUXILIARY_PROJECTS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Expertise() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (iconId: string) => {
    switch (iconId) {
      case "Activity":
        return <Activity size={22} />;
      case "ShoppingCart":
        return <ShoppingCart size={22} />;
      case "Wrench":
        return <Wrench size={22} />;
      default:
        return <Activity size={22} />;
    }
  };

  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      {/* Eyebrow & Headline Header */}
      <div className="flex flex-col gap-4 mb-16">
        <span className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
          PRODUCTS & DOMAINS EXPERIENCE
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-geist tracking-tight text-primary">
          Industry Expertise & Contributions
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Over 6+ years, I have contributed to Android applications across real-time communication, healthcare CRM, e-commerce, service booking, and personal productivity domains.
        </p>
      </div>

      <div className="space-y-16">
        {/* Featured Product: Flashat */}
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="bg-surface-white rounded-3xl border border-border-subtle shadow-xs hover:shadow-xs transition-all overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Left Column Image */}
              <div className="lg:col-span-6 aspect-video lg:aspect-auto relative min-h-[300px] overflow-hidden">
                <img
                  alt={proj.title}
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-700"
                  src={proj.imageUrl}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-on-primary text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg z-10 border border-white/10 shadow-md">
                  FEATURED WORK
                </span>
                <div className="absolute bottom-6 left-6 text-white text-xs font-mono lowercase tracking-wide drop-shadow-sm">
                  {proj.company} • {proj.duration}
                </div>
              </div>

              {/* Right Column Details */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2.5 mb-6">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-mono font-semibold tracking-wider rounded-full border border-secondary/15">
                    {proj.downloads} Downloads
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-mono font-semibold tracking-wider rounded-full border border-secondary/15">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-geist tracking-tight text-primary mb-4">
                  {proj.title}
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  {proj.description}
                </p>

                {/* Direct quote style callout */}
                <div className="p-5 bg-surface-container-low rounded-2xl border border-border-subtle mb-8 flex gap-3">
                  <Quote size={20} className="text-secondary shrink-0 pt-1" />
                  <p className="text-xs sm:text-sm italic font-geist text-on-surface-variant font-medium leading-relaxed">
                    "{proj.challenge}"
                  </p>
                </div>

                {/* Sub Technical Achievements list dropdown / collapse */}
                <div className="mb-8">
                  <h4 className="text-[11px] font-mono tracking-widest text-text-muted uppercase mb-3">
                    Key Implementations
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-on-surface-variant font-medium">
                    {proj.impact.map((imp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={14} className="text-success-teal shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface-container text-primary text-[11px] font-mono font-bold tracking-tight rounded-lg border border-border-subtle/50 shadow-xxs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Industry Domains Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {DOMAIN_CONTRIBUTIONS.map((domain, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedDomain(selectedDomain === domain.title ? null : domain.title)}
              className={`p-8 bg-surface-white border rounded-2xl shadow-xxs flex flex-col cursor-pointer hover:shadow-xs transition-all ${
                selectedDomain === domain.title ? "border-secondary ring-1 ring-secondary/20" : "border-border-subtle"
              }`}
            >
              <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-xl flex items-center justify-center mb-6">
                {getIcon(domain.iconId)}
              </div>
              <h4 className="text-lg font-bold font-geist text-primary tracking-tight mb-2">
                {domain.title}
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mb-6 leading-relaxed">
                {domain.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6 mt-auto">
                {domain.achievements.map((ach, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-teal shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border-subtle/40 flex justify-between items-center text-[10px] font-mono text-secondary uppercase tracking-wider">
                <span>{domain.tag}</span>
                <span className="text-[10px] text-text-muted/65 hover:underline">
                  {selectedDomain === domain.title ? "Collapse detail" : "Interactive Click"}
                </span>
              </div>

              {/* Expand details smoothly */}
              <AnimatePresence>
                {selectedDomain === domain.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 pt-4 border-t border-dashed border-border-subtle text-xs text-on-surface-variant space-y-2"
                  >
                    <p className="font-semibold text-primary">Architectural Delivery Details:</p>
                    <p className="text-[11px] leading-relaxed">
                      Implemented custom repository workflows, utilizing local room databases to synchronize API endpoints. Configured state containers to guarantee near-instant UI refresh upon database synchronization.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Auxiliary side projects section */}
        <div className="grid md:grid-cols-2 gap-8">
          {AUXILIARY_PROJECTS.map((aux, idx) => (
            <div key={idx} className="p-6 bg-surface-container-low border border-border-subtle rounded-2xl flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-widest block mb-1">
                    {aux.category}
                  </span>
                  <h4 className="text-lg font-bold font-geist text-primary tracking-tight">
                    {aux.title}
                  </h4>
                </div>
                {aux.isComingSoon ? (
                  <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/10 text-[9px] font-mono font-bold rounded uppercase tracking-wider animate-pulse">
                    COMING SOON
                  </span>
                ) : (
                  <span className="p-1 px-2.5 bg-secondary/15 text-secondary border border-secondary/15 text-[9px] font-mono font-bold rounded uppercase tracking-wider">
                    OPERATIONAL APP
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-text-muted mb-5 leading-normal">
                {aux.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {aux.techStack.map((tech) => (
                  <span key={tech} className="text-[10px] uppercase font-mono tracking-wider font-semibold text-on-surface-variant">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
