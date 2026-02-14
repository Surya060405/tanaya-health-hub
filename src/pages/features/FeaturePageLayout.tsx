import { Link } from "react-router-dom";
import { ArrowLeft, type LucideIcon } from "lucide-react";
import { ClipboardList, CalendarDays, HeartPulse, BrainCircuit, UserRoundSearch, ShieldPlus } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const allFeatures = [
  { icon: ClipboardList, title: "Daily Health Records", path: "/features/daily-health-records" },
  { icon: CalendarDays, title: "Period Tracking & Calendar", path: "/features/period-tracking" },
  { icon: HeartPulse, title: "Symptom Logging", path: "/features/symptom-logging" },
  { icon: BrainCircuit, title: "AI-Powered Recommendations", path: "/features/ai-recommendations" },
  { icon: UserRoundSearch, title: "Connect with Doctors", path: "/features/connect-with-doctors" },
  { icon: ShieldPlus, title: "Health Profile & Guidance", path: "/features/health-profile" },
];

interface FeaturePageLayoutProps {
  icon: LucideIcon;
  title: string;
  description: string;
  keyPoints: { title: string; description: string }[];
  currentPath: string;
}

const FeaturePageLayout = ({ icon: Icon, title, description, keyPoints, currentPath }: FeaturePageLayoutProps) => {
  const otherFeatures = allFeatures.filter((f) => f.path !== currentPath);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 py-12">
        <Link to="/#features" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-pink-purple mb-6">
            <Icon size={32} className="text-primary-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {keyPoints.map((point, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 ${i % 2 === 0 ? "bg-muted/50" : "bg-accent/50"}`}
            >
              <h3 className="font-heading font-semibold text-base mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Explore Other Features */}
        <div className="border-t border-border/50 pt-12">
          <h2 className="font-heading text-2xl font-bold text-center mb-8">Explore Other Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {otherFeatures.map((f) => (
              <Link
                key={f.path}
                to={f.path}
                className="flex items-center gap-3 rounded-xl p-4 bg-muted/30 hover:bg-muted/60 transition-colors"
              >
                <f.icon size={20} className="text-primary shrink-0" />
                <span className="text-sm font-medium">{f.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturePageLayout;
