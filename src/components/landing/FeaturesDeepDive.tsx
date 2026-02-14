import { Link } from "react-router-dom";
import { ClipboardList, CalendarDays, HeartPulse, BrainCircuit, UserRoundSearch, ShieldPlus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const deepFeatures = [
  { icon: ClipboardList, title: "Daily Health Records", description: "Log daily symptoms like mood, discharge, breast pain, headaches, and more to build a complete health picture.", path: "/features/daily-health-records" },
  { icon: CalendarDays, title: "Period Tracking & Calendar", description: "Track and record your periods with a smart calendar that predicts your next cycle start and end dates.", path: "/features/period-tracking" },
  { icon: HeartPulse, title: "Symptom Logging", description: "Select and track symptoms like abdomen pain, nausea, itching, giddiness, bloating, and sleeping problems.", path: "/features/symptom-logging" },
  { icon: BrainCircuit, title: "AI-Powered Recommendations", description: "Get detailed reports, analysis, and timely notifications so you never miss important health updates.", path: "/features/ai-recommendations" },
  { icon: UserRoundSearch, title: "Connect with Doctors", description: "Share detailed cycle reports with in-house experts to get the most optimal answers to your health queries.", path: "/features/connect-with-doctors" },
  { icon: ShieldPlus, title: "Health Profile & Guidance", description: "Maintain a comprehensive health profile with personalized wellness guidance, warnings, and actionable insights.", path: "/features/health-profile" },
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
            <Link
              to={item.path}
              key={item.title}
              className={`rounded-2xl p-6 transition-all duration-700 hover:shadow-md ${
                i % 2 === 0 ? "bg-muted/50" : "bg-accent/50"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <item.icon size={32} className="text-primary mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDeepDive;
