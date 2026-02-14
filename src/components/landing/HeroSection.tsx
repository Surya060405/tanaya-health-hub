import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-primary text-sm font-medium mb-6 animate-fade-up">
            <Sparkles size={16} />
            AI-Powered Women's Health
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient">TANAYA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Caring for Daughters
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Your trusted AI-powered companion for gynecological health, guidance, and care.
          </p>

          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            From periods to pregnancy, hormones to fertility — TANAYA provides personalized insights, expert support, and safe digital care for women at every stage of life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a href="#download">
              <Button size="lg" className="gradient-pink-purple text-primary-foreground rounded-full px-8 text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                Download the App
              </Button>
            </a>
            <a href="#features">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/30 text-primary hover:bg-primary/5">
                Explore How TANAYA Helps
                <ArrowDown size={16} className="ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
