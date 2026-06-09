import { useState } from "react";
import { Briefcase, Calendar, CheckSquare, Sparkles, ChevronDown, ChevronUp, Users } from "lucide-react";
import { TIMELINE_EXPERIENCE } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Experience() {
  const [expandedRoleIdx, setExpandedRoleIdx] = useState<number | null>(null);

  const toggleExpandRole = (idx: number) => {
    if (expandedRoleIdx === idx) {
      setExpandedRoleIdx(null);
    } else {
      setExpandedRoleIdx(idx);
    }
  };

  const featuredRole = TIMELINE_EXPERIENCE.find((exp) => exp.isFeatured);
  const coreRoles = TIMELINE_EXPERIENCE.filter((exp) => !exp.isFeatured);

  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto px-6 md:px-12 border-b border-border-subtle">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Sticky Left Info Panel */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-secondary uppercase bg-secondary/5 px-3 py-1.5 rounded-full border border-secondary/10 inline-block">
              CAREER JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-geist tracking-tight text-primary leading-tight">
              Professional Journey
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Over 6+ years, I've helped build Android applications ranging from enterprise solutions to real-time communication platforms, collaborating with cross-functional teams to deliver production-ready mobile experiences.
            </p>
          </div>
        </div>

        {/* Timeline & Roles Right Panel */}
        <div className="lg:col-span-8 space-y-12">
          {/* Featured Role Card */}
          {featuredRole && (
            <div className="bg-surface-white p-8 sm:p-12 rounded-3xl border border-border-subtle shadow-xs relative overflow-hidden">
              {/* Background ambient gradient glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-secondary/5 rounded-full blur-[40px]" />

              <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/15 text-[10px] font-mono font-bold rounded-lg uppercase tracking-wider mb-4">
                    <Sparkles size={11} className="text-secondary" />
                    FEATURED ROLE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-geist text-primary tracking-tight">
                    {featuredRole.role}
                  </h3>
                  <p className="text-secondary font-bold text-base sm:text-lg">
                    {featuredRole.company}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted bg-surface-container-low px-4 py-2 rounded-xl border border-border-subtle">
                  <Calendar size={14} />
                  <span>{featuredRole.period}</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm sm:text-base font-bold text-primary mb-4 leading-relaxed">
                    Contributed to Flashat development, a high-growth real-time social communication platform with over 500K+ downloads.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm text-on-surface-variant font-medium">
                    {featuredRole.achievements?.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckSquare size={16} className="text-success-teal shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenge Callout Box */}
                {featuredRole.challenge && (
                  <div className="p-6 bg-surface-container-low rounded-2xl border border-border-subtle">
                    <p className="text-[10px] font-mono tracking-widest text-text-muted font-bold uppercase mb-2">
                      TECHNICAL CHALLENGE SOLVED
                    </p>
                    <p className="text-xs sm:text-sm text-on-surface-variant italic font-geist font-medium leading-relaxed">
                      "{featuredRole.challenge}"
                    </p>
                  </div>
                )}

                {/* Team & Technologies tags */}
                <div className="flex flex-col gap-4 pt-4 border-t border-border-subtle/50">
                  {featuredRole.collaborators && (
                    <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
                      <Users size={14} className="text-secondary" />
                      <span>{featuredRole.collaborators}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {featuredRole.skills?.map((sk) => (
                      <span
                        key={sk}
                        className="px-3 py-1 bg-primary text-on-primary text-[10px] font-mono font-bold uppercase tracking-wider rounded-full hover:bg-secondary transition-all"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Compact Timeline Roles */}
          <div className="relative border-l-2 border-border-subtle pl-8 md:pl-10 space-y-10 py-2">
            {coreRoles.map((role, idx) => {
              const isExpanded = expandedRoleIdx === idx;
              return (
                <div key={idx} className="relative group select-none">
                  {/* Timeline bullet handle */}
                  <div className="absolute -left-[38px] md:-left-[46px] top-1 w-4 h-4 rounded-full border-4 border-surface-white bg-on-surface-variant group-hover:bg-secondary transition-colors" />

                  <div
                    onClick={() => toggleExpandRole(idx)}
                    className="cursor-pointer p-4 rounded-xl hover:bg-surface-container-low border border-transparent hover:border-border-subtle/50 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 mb-2">
                      <h4 className="font-bold text-sm sm:text-base font-geist text-primary tracking-tight group-hover:text-secondary transition-colors">
                        {role.role} | <span className="text-on-surface-variant">{role.company}</span>
                      </h4>
                      <span className="text-[10px] font-mono font-semibold text-text-muted bg-surface-container-high/40 px-3 py-1 rounded-sm tracking-wider uppercase">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-2">
                      {role.description}
                    </p>

                    {/* Expand icon toggles */}
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-secondary uppercase tracking-wider font-semibold pt-1">
                      <span>{isExpanded ? "Show Less" : "Explore Technical Details"}</span>
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </div>

                    {/* Smooth height display expansion */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-dashed border-border-subtle/60 text-xs sm:text-sm text-on-surface-variant space-y-3"
                        >
                          {role.skills && (
                            <div className="flex flex-wrap gap-1.5">
                              {role.skills.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 bg-secondary/5 border border-secondary/15 text-secondary text-[10px] font-mono rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className="text-xs leading-relaxed">
                            Contributed within agile frameworks, delivering high-impact feature branches inside modular setups. Performed automated device layout optimizations, ensuring stable performance across varied mobile form factors.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
