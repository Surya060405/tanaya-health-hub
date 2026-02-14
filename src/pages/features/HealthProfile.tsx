import { ShieldPlus } from "lucide-react";
import FeaturePageLayout from "./FeaturePageLayout";

const HealthProfile = () => (
  <FeaturePageLayout
    icon={ShieldPlus}
    title="Health Profile & Guidance"
    description="Maintain a comprehensive health profile with personalized wellness guidance, warnings, and actionable insights."
    currentPath="/features/health-profile"
    keyPoints={[
      { title: "Profile Management", description: "Keep your personal and health information up to date in one place." },
      { title: "Wellness Guidance", description: "Receive guidance tailored to your health profile to support your well-being." },
      { title: "Health Warnings", description: "Get timely warnings when your logged data indicates something that needs attention." },
      { title: "Settings & Sharing", description: "Manage your preferences and share your health profile with trusted contacts or doctors." },
    ]}
  />
);

export default HealthProfile;
