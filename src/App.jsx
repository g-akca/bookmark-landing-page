import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base text-blue-950 min-h-screen bg-white">
      <Header openMenu={() => setIsMenuOpen(true)} />

      <main className="flex flex-col gap-32">
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />

      {isMenuOpen && (
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      )}
    </div>
  )
}

export default App
