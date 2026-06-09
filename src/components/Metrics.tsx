import { IMPACT_METRICS } from "../data";
import { motion } from "motion/react";

export default function Metrics() {
  return (
    <section className="bg-surface-white py-14 sm:py-20 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 select-none">
          {IMPACT_METRICS.map((metric, i) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className="flex flex-col gap-1.5 p-4 rounded-xl hover:bg-surface-container-low transition-all duration-300 pointer-events-auto group border border-transparent hover:border-border-subtle/45"
            >
              <span className="text-3xl sm:text-4xl font-extrabold font-geist text-primary tracking-tight transition-transform group-hover:scale-105 duration-300 block origin-left">
                {metric.value}
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-text-muted uppercase leading-tight">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
