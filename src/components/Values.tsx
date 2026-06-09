import { Lightbulb, ShieldCheck, Users } from "lucide-react";
import { CORE_VALUES } from "../data";

export default function Values() {
  const getIcon = (id: string) => {
    switch (id) {
      case "Lightbulb":
        return <Lightbulb size={24} />;
      case "ShieldCheck":
        return <ShieldCheck size={24} />;
      case "Users":
        return <Users size={24} />;
      default:
        return <Lightbulb size={24} />;
    }
  };

  return (
    <section className="py-24 bg-surface-container-highest/50 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-8 bg-surface-white rounded-3xl border border-border-subtle/70 shadow-xxs hover:shadow-xs transition-shadow flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-secondary/5 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                {getIcon(val.iconId)}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-geist text-primary tracking-tight">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
