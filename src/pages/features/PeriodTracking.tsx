import { CalendarDays } from "lucide-react";
import FeaturePageLayout from "./FeaturePageLayout";

const PeriodTracking = () => (
  <FeaturePageLayout
    icon={CalendarDays}
    title="Period Tracking & Calendar"
    description="Track and record your periods with a smart calendar that highlights period days and predicts your next cycle's start and end dates."
    currentPath="/features/period-tracking"
    keyPoints={[
      { title: "Calendar View", description: "A visual calendar highlights your period days so you can see your cycle at a glance." },
      { title: "Next Period Estimates", description: "Get predicted start and end dates for your next period based on your logged cycle history." },
      { title: "Period Day Highlighting", description: "Period days are clearly marked on the calendar, making it simple to track cycle length and regularity." },
      { title: "Daily Health Profile Analysis", description: "Receive a brief analysis of your daily health profile on a regular basis to stay informed." },
    ]}
  />
);

export default PeriodTracking;
