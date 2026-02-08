import { Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ImpactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="py-16 md:py-24 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-pink-purple flex items-center justify-center">
            <Heart size={32} className="text-primary-foreground" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Built for <span className="text-gradient">Every Woman</span>. Everywhere.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Every daughter deserves access to safe, smart, and stigma-free healthcare. TANAYA is more than an app — it's a movement to empower women with the knowledge and care they deserve, from their first period to every milestone that follows.
          </p>
          <p className="text-base text-muted-foreground/80 leading-relaxed mb-8">
            We believe preventive care saves lives. By combining AI intelligence with medical expertise, TANAYA helps mothers care for daughters, women care for themselves, and communities break the silence around gynecological health — one conversation at a time.
          </p>
          <blockquote className="italic text-primary font-medium text-lg border-l-4 border-primary/30 pl-6 text-left max-w-xl mx-auto">
            "When we care for our daughters, we care for the future."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
