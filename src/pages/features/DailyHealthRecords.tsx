import { ClipboardList } from "lucide-react";
import FeaturePageLayout from "./FeaturePageLayout";

const DailyHealthRecords = () => (
  <FeaturePageLayout
    icon={ClipboardList}
    title="Daily Health Records"
    description="Log daily symptoms like mood, discharge, breast pain, headaches, and more to build a complete health picture. Each day's record is date-stamped for easy reference."
    currentPath="/features/daily-health-records"
    keyPoints={[
      { title: "Date-Wise Health Logging", description: "Every entry is recorded with a date stamp, making it easy to review your health history day by day." },
      { title: "Mood Tracking", description: "Track your daily mood — Happy, Sad, Anxious, and more — to identify emotional patterns across your cycle." },
      { title: "Discharge Monitoring", description: "Record discharge levels such as Decreased, Normal, or Increased for a clearer picture of your reproductive health." },
      { title: "Physical Symptom Recording", description: "Log symptoms like breast pain, itching, giddiness, and headache to share accurate data with your doctor." },
    ]}
  />
);

export default DailyHealthRecords;
