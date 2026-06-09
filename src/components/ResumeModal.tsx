import { X, Download, Copy, Briefcase, Calendar, Mail, Linkedin, Github, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { PERSONAL_METARGETS, TIMELINE_EXPERIENCE, CORE_CAPABILITIES } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const copyTextToClipboard = () => {
    const textContent = `
JEFFIN JOHNY
Senior Android Architect / Engineer
Email: ${PERSONAL_METARGETS.email}
LinkedIn: ${PERSONAL_METARGETS.linkedinUrl}
GitHub: ${PERSONAL_METARGETS.githubUrl}

SUMMARY:
Highly accomplished Senior Android Engineer with 6+ years of expertise. Specializing in high-performance WebRTC integrations, real-time communication protocols, and modern Android architecture design. Tested and delivered scalable structures for more than 500K+ users.

EXPERIENCE:
${TIMELINE_EXPERIENCE.map(exp => `
- ${exp.role} at ${exp.company} (${exp.period})
  ${exp.description}
  Key skills: ${exp.skills?.join(", ") || ""}
`).join("\n")}

CAPABILITIES:
${CORE_CAPABILITIES.map(cap => `
- ${cap.title}: ${cap.skills.join(", ")}
`).join("\n")}
    `;

    navigator.clipboard.writeText(textContent.trim()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-surface-white w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-2xl shadow-2xl border border-border-subtle flex flex-col overflow-hidden z-10"
          >
            {/* Top Bar Actions */}
            <div className="flex items-center justify-between px-6 py-4 bg-primary-container text-on-primary-container border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-success-teal animate-pulse" />
                <span className="text-xs font-mono tracking-widest uppercase text-surface-white opacity-90">
                  Interactive Resume v2026/06
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyTextToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 text-white rounded-lg hover:bg-white/20 active:scale-95 transition-all text-xs font-medium"
                  title="Copy full text formatted resume"
                >
                  <Copy size={14} />
                  {copied ? "Copied!" : "Copy Text"}
                </button>
                <a
                  href={`mailto:${PERSONAL_METARGETS.email}?subject=Requesting%20PDF%20Resume`}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-white rounded-lg hover:bg-secondary-container active:scale-95 transition-all text-xs font-medium"
                >
                  <Download size={14} />
                  Request PDF
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-white/15 rounded-lg text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Document Body scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-surface-container-lowest">
              {/* Profile Header */}
              <div className="border-b border-border-subtle pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <h1 className="text-3xl font-bold font-geist text-primary tracking-tight">
                    {PERSONAL_METARGETS.name}
                  </h1>
                  <p className="text-secondary font-medium font-geist text-lg">
                    {PERSONAL_METARGETS.title}
                  </p>
                  <p className="text-xs font-mono text-on-surface-variant mt-1.5">
                    India / Remote Availability
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-on-surface-variant font-medium">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-secondary" />
                    <span>{PERSONAL_METARGETS.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin size={14} className="text-secondary" />
                    <span>linkedin.com/in/jeffinjohny</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github size={14} className="text-secondary" />
                    <span>github.com/jeffinjohny</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h2 className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
                  Executive Alignment
                </h2>
                <p className="text-on-surface text-sm md:text-base leading-relaxed">
                  Innovative Senior Android Architect with an expansive track record of establishing high-throughput video-conferencing channels, scaling local-first sync loops, and leading core feature teams. Expert in Kotlin, Jetpack Compose, WebRTC, socket integrations, and optimizing system reliability across diverse hardware.
                </p>
              </div>

              {/* Core capabilities */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border-subtle">
                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
                    Technical Credentials
                  </h2>
                  <div className="space-y-3">
                    {CORE_CAPABILITIES.map((grp) => (
                      <div key={grp.title} className="space-y-1">
                        <h3 className="text-xs font-bold text-primary font-geist">
                          {grp.title}
                        </h3>
                        <p className="text-xs text-on-surface-variant leading-tight">
                          {grp.skills.join(" • ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
                    Core Metrics Summary
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-surface-container-low rounded-lg border border-border-subtle">
                      <p className="text-2xl font-bold text-primary font-geist">6+ Years</p>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        Experience
                      </p>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg border border-border-subtle">
                      <p className="text-2xl font-bold text-primary font-geist">500K+</p>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        Downloads Accrued
                      </p>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg border border-border-subtle">
                      <p className="text-2xl font-bold text-primary font-geist">100+</p>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        App Store Releases
                      </p>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg border border-border-subtle">
                      <p className="text-2xl font-bold text-primary font-geist">RTC</p>
                      <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider">
                        Real-time focus
                      </p>
                    </div>
                  </div>
                  <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/10 flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-secondary mt-0.5 shrink-0" />
                    <p className="text-xs text-on-surface-variant">
                      Known for solving Android OEM-specific audio & memory thread pooling defects that reduce standard app crashes on dynamic audio streams by over 30%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Exp timeline */}
              <div className="space-y-4 pt-4 border-t border-border-subtle">
                <h2 className="text-xs font-mono font-bold tracking-widest text-secondary uppercase">
                  Employment Chronicles
                </h2>
                <div className="space-y-6">
                  {TIMELINE_EXPERIENCE.map((milestone, idx) => (
                    <div key={idx} className="relative pl-5 border-l-2 border-border-subtle space-y-2">
                      <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-secondary rounded-full" />
                      <div className="flex flex-col md:flex-row md:items-center justify-between text-xs font-mono text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <Briefcase size={12} className="text-secondary" />
                          <span className="font-bold text-primary text-sm font-geist">
                            {milestone.role}
                          </span>
                          <span className="text-secondary font-semibold">
                            @ {milestone.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{milestone.period}</span>
                        </div>
                      </div>
                      <p className="text-xs text-on-surface leading-normal">
                        {milestone.description}
                      </p>
                      {milestone.isFeatured && milestone.achievements && (
                        <ul className="text-xs text-on-surface-variant space-y-1 pl-4 list-disc mt-2">
                          {milestone.achievements.map((ach, i) => (
                            <li key={i}>{ach}</li>
                          ))}
                        </ul>
                      )}
                      {milestone.skills && (
                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {milestone.skills.map((sk) => (
                            <span
                              key={sk}
                              className="px-2 py-0.5 bg-surface-container text-primary font-mono text-[9px] rounded"
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer tag */}
              <div className="pt-6 border-t border-border-subtle text-center">
                <p className="text-xs text-on-surface-variant font-mono">
                  Referenced with integrity strictly representing real production records.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
