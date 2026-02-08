import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CriticalProblemSection from "@/components/landing/CriticalProblemSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesDeepDive from "@/components/landing/FeaturesDeepDive";
import ImpactSection from "@/components/landing/ImpactSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CriticalProblemSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesDeepDive />
        <ImpactSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
