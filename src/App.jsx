import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base text-blue-950 min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <DownloadSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
