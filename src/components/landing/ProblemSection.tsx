import { ShieldOff, SearchX, Puzzle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const problems = [
  {
    icon: ShieldOff,
    title: "Social Taboos",
    description: "Menstruation and gynecological health remain surrounded by stigma and silence, preventing women from seeking timely care.",
  },
  {
    icon: SearchX,
    title: "Lack of Early Detection",
    description: "Without smart guidance, many conditions go unnoticed until they become serious, putting women's health at risk.",
  },
  {
    icon: Puzzle,
    title: "Fragmented Care",
    description: "Women navigate disconnected healthcare systems with scattered records, making comprehensive care nearly impossible.",
  },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 gradient-pink-purple-subtle" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Women's Health Deserves <span className="text-gradient">Better</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Millions of women face barriers to quality gynecological care every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <div
              key={item.title}
              className={`bg-card rounded-2xl p-6 shadow-sm border border-border/50 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-pink-purple flex items-center justify-center">
                <item.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
