import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DownloadSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="download" className="py-16 md:py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 gradient-pink-purple opacity-[0.06]" />
      <div
        className={`container mx-auto px-4 md:px-8 relative z-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Start Your Journey with <span className="text-gradient">TANAYA</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Download the app and take the first step toward smarter, safer, and more empowered gynecological care.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Google Play */}
          <a href="#" className="inline-block">
            <Button size="lg" className="gradient-pink-purple text-primary-foreground rounded-xl px-8 h-14 text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 gap-3">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199 2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658l10.937 6.333-2.302 2.302L5.864 2.658z"/></svg>
              Google Play
            </Button>
          </a>

          {/* App Store */}
          <div className="relative inline-block">
            <Button size="lg" variant="outline" className="rounded-xl px-8 h-14 text-base border-primary/30 text-foreground gap-3 opacity-70 cursor-not-allowed">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              App Store
            </Button>
            <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-0.5 rounded-full">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
