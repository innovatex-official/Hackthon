import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import FeaturesSection from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

import InnovateXPromo from "./components/InnovateXPromo";

export default function InnovatexLanding() {
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <FeaturesSection />
      <FAQ />
      <InnovateXPromo />
      <Footer />
    </div>
  );
}
