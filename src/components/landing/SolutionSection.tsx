import { Brain, CalendarHeart, BellRing, ShieldCheck, MessageCircle, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  { icon: Brain, title: "AI-Powered Insights", description: "Personalized health analytics powered by advanced AI that understands your unique patterns." },
  { icon: CalendarHeart, title: "Period, Fertility & Pregnancy", description: "Comprehensive tracking for every phase — menstrual cycles, ovulation windows, and pregnancy milestones." },
  { icon: BellRing, title: "Smart Alerts & Warnings", description: "Timely notifications for irregularities, upcoming cycles, and health checkup reminders." },
  { icon: ShieldCheck, title: "Secure Health Records", description: "Your data stays encrypted and private. Access your complete health history anytime, anywhere." },
  { icon: MessageCircle, title: "Expert Consultation", description: "Connect with verified gynecologists through chat or video for professional guidance." },
  { icon: Lock, title: "Privacy-First Design", description: "Built from the ground up with privacy and stigma-free care as core principles." },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            One Platform. <span className="text-gradient">Complete Care.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need for gynecological wellness, all in one safe space.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-muted group-hover:gradient-pink-purple flex items-center justify-center transition-all duration-300">
                <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
