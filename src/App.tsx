/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Expertise from "./components/Expertise";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Values from "./components/Values";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed antialiased">
      {/* Top Main Navigation */}
      <Navbar />

      {/* Main Flow Layout */}
      <main className="pt-20">
        <Hero />
        <Metrics />
        <Expertise />
        <Capabilities />
        <Experience />
        <Values />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
