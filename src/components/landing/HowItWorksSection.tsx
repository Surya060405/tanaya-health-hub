import { ClipboardList, Lightbulb, UserCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { icon: ClipboardList, number: "01", title: "Track & Share", description: "Log your health data easily — cycles, symptoms, lifestyle habits — all in one secure place." },
  { icon: Lightbulb, number: "02", title: "Get Smart Insights", description: "TANAYA's AI analyzes your patterns and delivers personalized alerts and recommendations." },
  { icon: UserCheck, number: "03", title: "Connect with Experts", description: "When you need professional care, instantly connect with verified gynecologists." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-16 md:py-24 gradient-pink-purple-subtle" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">TANAYA</span> Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to better gynecological health.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-4 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex-1 text-center relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-secondary/30" />
              )}

              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-pink-purple flex items-center justify-center shadow-lg shadow-primary/20">
                <step.icon size={28} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-primary/60 tracking-widest uppercase">Step {step.number}</span>
              <h3 className="font-heading font-semibold text-lg mt-1 mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
