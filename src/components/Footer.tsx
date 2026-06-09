import { PERSONAL_METARGETS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-surface-white border-t border-border-subtle py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand alignment Column */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="text-xl font-bold tracking-tight text-primary font-geist">
            Jeffin Johny
          </div>
          <p className="text-text-muted text-xs sm:text-sm text-center md:text-left max-w-xs leading-normal">
            © 2026 Senior Android Architect. Built for performance and scale.
          </p>
        </div>

        {/* Directory links Column set in Mono Caps */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] font-mono font-semibold tracking-wider text-text-muted">
          <a
            href={PERSONAL_METARGETS.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href={PERSONAL_METARGETS.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-secondary transition-colors"
          >
            TWITTER
          </a>
          <a
            href={`mailto:${PERSONAL_METARGETS.email}`}
            className="hover:text-secondary transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
