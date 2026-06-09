import { useState } from "react";
import { Smartphone, GitMerge, Radio, Database, Rocket, Search } from "lucide-react";
import { CORE_CAPABILITIES } from "../data";

export default function Capabilities() {
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (id: string) => {
    switch (id) {
      case "Smartphone":
        return <Smartphone size={22} />;
      case "GitMerge":
        return <GitMerge size={22} />;
      case "Radio":
        return <Radio size={22} />;
      case "Database":
        return <Database size={22} />;
      case "Rocket":
        return <Rocket size={22} />;
      default:
        return <Smartphone size={22} />;
    }
  };

  // Filter components based on skill keyword search
  const filteredCapabilities = CORE_CAPABILITIES.filter((grp) => {
    const textToSearch = `${grp.title} ${grp.description} ${grp.skills.join(" ")}`.toLowerCase();
    return textToSearch.includes(searchQuery.toLowerCase());
  });

  return (
    <section className="bg-surface-container-low py-24 border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Paragraph section identifier header */}
        <div className="flex flex-col gap-4 mb-12 text-center items-center max-w-4xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-wider text-secondary uppercase bg-secondary/5 px-4 py-1.5 rounded-full border border-secondary/10">
            ENGINEERING SCOPE & INDEX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-geist tracking-tight text-primary">
            CORE ENGINEERING CAPABILITIES
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant max-w-2xl leading-relaxed">
            Areas of Android engineering where I have delivered production-ready solutions and contributed to real-world products.
          </p>

          {/* Interactive filter search bar */}
          <div className="relative w-full max-w-md mt-6">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Filter capability by technology (e.g., Kotlin, Room, MVVM)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-surface-white border border-border-subtle rounded-xl text-sm placeholder-text-muted focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all shadow-xxs"
            />
          </div>
        </div>

        {/* Dynamic Grid layout */}
        {filteredCapabilities.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-surface-white border border-border-subtle rounded-2xl shadow-xxs hover:shadow-xs hover:border-secondary/25 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {getIcon(cap.iconId)}
                </div>
                <h3 className="text-lg font-bold font-geist text-primary tracking-tight mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mb-6 leading-relaxed">
                  {cap.description}
                </p>

                {/* Badges container */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface-container text-primary text-xs font-semibold rounded-lg border border-border-subtle/50 transition-colors group-hover:bg-surface-container-high"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-surface-white border border-border-subtle border-dashed rounded-2xl max-w-md mx-auto">
            <p className="text-sm font-semibold text-primary mb-1">No matching capabilities found</p>
            <p className="text-xs text-text-muted">Try looking for terms like "Agora", "SQLite", "Compose", or "MVVM".</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-1.5 bg-secondary text-white text-xs font-semibold rounded-lg hover:bg-secondary-container transition-all active:scale-95"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
