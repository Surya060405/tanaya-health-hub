import { HeartPulse } from "lucide-react";
import FeaturePageLayout from "./FeaturePageLayout";

const SymptomLogging = () => (
  <FeaturePageLayout
    icon={HeartPulse}
    title="Symptom Logging"
    description="Select and submit symptoms from a visual grid to keep an accurate record of how you feel each day."
    currentPath="/features/symptom-logging"
    keyPoints={[
      { title: "Visual Symptom Grid", description: "Choose from a clear grid of symptoms including Abdomen Pain, Breast Pain, Nausea, Itching, Giddiness, Bloated, Headache, and Sleeping Problems." },
      { title: "Quick Submission", description: "Select one or more symptoms and submit them in seconds — no lengthy forms required." },
      { title: "8 Trackable Symptoms", description: "Cover the most common health concerns with eight distinct symptom categories, each with its own icon." },
      { title: "Historical Records", description: "All logged symptoms are saved and can be reviewed later to identify recurring patterns." },
    ]}
  />
);

export default SymptomLogging;
