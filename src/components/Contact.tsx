import { useState, FormEvent } from "react";
import { Mail, Send, CheckCircle2, Linkedin, Github } from "lucide-react";
import { PERSONAL_METARGETS } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
      <div className="bg-[#0f172a] dark:bg-[#090b11] text-white rounded-[32px] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl border border-slate-800/40">
        {/* Background ambient light vectors */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary rounded-full blur-[100px] opacity-25 select-none pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent-linear rounded-full blur-[100px] opacity-15 select-none pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-geist tracking-tight text-white leading-tight">
            Let's Build Something Great
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Currently available for <span className="text-white underline font-semibold">Full-Time</span> roles,{" "}
            <span className="text-white underline font-semibold">Remote</span> projects, and{" "}
            <span className="text-white underline font-semibold">High-Impact Freelance</span> work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <a
              href={`mailto:${PERSONAL_METARGETS.email}`}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 active:scale-95 transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
            >
              <Mail size={18} />
              Email Me Direct
            </a>

            <button
              onClick={() => setShowInquiryForm(!showInquiryForm)}
              className="w-full sm:w-auto px-8 py-4 border border-slate-700 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={16} />
              {showInquiryForm ? "Hide form" : "Submit Quick Message"}
            </button>

            {/* Social link buttons matching footer specs */}
            <div className="flex gap-3">
              <a
                href={PERSONAL_METARGETS.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={PERSONAL_METARGETS.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-white/10 active:scale-95 transition-all text-white"
                title="GitHub Repository"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Collapsible interactive email form */}
          <AnimatePresence>
            {showInquiryForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden max-w-lg mx-auto pt-6 text-left"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-slate-500 placeholder-slate-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-slate-500 placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
                      Proposed Inquiry
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Discussing full time roles, remote team alignment, specialized Android consulting..."
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-slate-500 placeholder-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-secondary hover:bg-opacity-90 text-white text-xs font-mono uppercase font-bold tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send size={14} /> Send Message
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 p-3 bg-success-teal/20 border border-success-teal/30 text-success-teal rounded-lg text-xs"
                      >
                        <CheckCircle2 size={16} className="shrink-0" />
                        <span>Thank you! Your message was submitted successfully. I will get back to you shortly.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
