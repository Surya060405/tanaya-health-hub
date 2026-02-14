import { AlertTriangle, Search, Layers } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cards = [
  {
    icon: AlertTriangle,
    title: "Challenges",
    description:
      "A complex social and economic challenge in most societies. Acute in large and diverse countries — pregnancy, periods, hormones, STDs, and cancer remain under-addressed.",
  },
  {
    icon: Search,
    title: "Causes",
    description:
      "Casual attitudes, social taboos, and inefficient medical systems affect women daily. Inadequate high-tech solutions exist for women's health analytics.",
  },
  {
    icon: Layers,
    title: "Gaps",
    description:
      "Many apps exist for health logistics and supply chains, but no comprehensive solution offers digital health analytics and cloud-based management for women.",
  },
];

const CriticalProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Critical Problems in <span className="text-gradient">Women's Health</span>
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Women's health — where do we stand today?
          </p>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`rounded-2xl bg-background p-6 shadow-soft border border-border/40 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Need of the hour gradient strip */}
        <div
          className={`max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 p-6 md:p-8 text-white text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="font-heading font-bold text-lg md:text-xl mb-3">The Need of the Hour</h3>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            A unified platform for data management, early detection, smart prediction, health guidance, efficient
            connections, and timely alerts — to save &amp; protect lives and improve end-to-end health infrastructure
            for women everywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CriticalProblemSection;
