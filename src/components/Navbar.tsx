import { useState, useEffect } from "react";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Nav items from image/HTML
  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Monitor scroll for header shade and active anchor highlight
  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection tracking for highlights
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - 85;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-surface-white/95 backdrop-blur-md shadow-sm border-b border-border-subtle"
          : "bg-surface/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 h-20">
        {/* Brand/Name */}
        <div className="flex flex-col">
          <span
            onClick={() => handleNavClick("home")}
            className="text-lg font-bold tracking-tight text-primary cursor-pointer hover:text-secondary hover:opacity-90 transition-colors"
          >
            Jeffin Johny
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-text-muted">
            Senior Android Engineer
          </span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm tracking-wide font-medium transition-colors relative py-1.5 cursor-pointer ${
                activeSection === item.id
                  ? "text-secondary font-semibold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile menu trigger and Call-To-Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-all cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {theme === "dark" ? <Sun size={18} className="text-secondary" /> : <Moon size={18} />}
          </button>

          <a
            href="/assets/JEFFIN_JOHNY_2026_ANDROID_DEVOLOPER%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary font-medium text-xs font-mono uppercase tracking-wider rounded-lg hover:bg-secondary active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <FileText size={14} />
            Download Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-on-surface hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-white border-b border-border-subtle shadow-lg flex flex-col p-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-medium py-2.5 px-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-secondary/10 text-secondary font-semibold"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center py-2 px-3 border-t border-border-subtle/40">
            <span className="text-sm font-medium text-on-surface-variant font-geist">Theme Mode</span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 py-1.5 px-3.5 bg-surface-container rounded-lg font-mono text-xs text-secondary font-bold hover:bg-surface-container-high transition-colors cursor-pointer"
            >
              {theme === "dark" ? (
                <>
                  <Sun size={14} /> BRIGHT
                </>
              ) : (
                <>
                  <Moon size={14} /> DARK
                </>
              )}
            </button>
          </div>

          <a
            href="/assets/JEFFIN_JOHNY_2026_ANDROID_DEVOLOPER%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-on-primary font-medium text-xs font-mono uppercase tracking-wider rounded-lg hover:bg-secondary active:scale-95 transition-all shadow-sm cursor-pointer"
          >
            <FileText size={14} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
