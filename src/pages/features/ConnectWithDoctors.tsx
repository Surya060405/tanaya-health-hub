import { UserRoundSearch } from "lucide-react";
import FeaturePageLayout from "./FeaturePageLayout";

const ConnectWithDoctors = () => (
  <FeaturePageLayout
    icon={UserRoundSearch}
    title="Connect with Doctors"
    description="TANAYA shares detailed reports of your cycles with in-house experts to get the most optimal answers to your health queries."
    currentPath="/features/connect-with-doctors"
    keyPoints={[
      { title: "Cycle Report Sharing", description: "Your detailed cycle reports are shared directly with medical professionals for informed consultations." },
      { title: "In-House Expert Access", description: "Connect with TANAYA's in-house health experts without needing to visit a clinic." },
      { title: "Personalized Answers", description: "Get answers tailored to your specific health data rather than generic advice." },
      { title: "Confidential Consultations", description: "All interactions with doctors are private and handled with care." },
    ]}
  />
);

export default ConnectWithDoctors;
