import { Activity, Baby, Bot, Stethoscope, BarChart3, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const deepFeatures = [
  { icon: Activity, title: "Menstrual & Hormonal Analytics", description: "Deep insights into your cycle patterns, hormonal fluctuations, and predictive analytics for better health planning." },
  { icon: Baby, title: "Pregnancy & Fertility Guidance", description: "Comprehensive support from fertility tracking through each trimester with personalized milestones." },
  { icon: Bot, title: "AI Chatbot – 24/7 Support", description: "Ask health questions anytime. Our AI assistant provides instant, reliable guidance when you need it most." },
  { icon: Stethoscope, title: "Expert Consultation", description: "Book appointments with certified gynecologists for professional medical advice and second opinions." },
  { icon: BarChart3, title: "Health Reports & Trends", description: "Visual health dashboards showing trends over time so you and your doctor stay informed." },
  { icon: Cloud, title: "Secure Cloud Records", description: "All your health data stored securely in the cloud — accessible only to you, always available." },
];

const FeaturesDeepDive = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Designed for <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A comprehensive suite of tools built with care and backed by science.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deepFeatures.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl p-6 transition-all duration-700 ${
                i % 2 === 0 ? "bg-muted/50" : "bg-accent/50"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <item.icon size={32} className="text-primary mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDeepDive;
