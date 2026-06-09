/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Expertise from "./components/Expertise";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed antialiased">
      {/* Top Main Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Flow Layout */}
      <main className="pt-20">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <Metrics />
        <Expertise />
        <Capabilities />
        <Experience />
        <Values />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Interactive PDF Resume Modal Dialog */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
