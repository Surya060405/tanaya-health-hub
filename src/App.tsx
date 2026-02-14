import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DailyHealthRecords from "./pages/features/DailyHealthRecords";
import PeriodTracking from "./pages/features/PeriodTracking";
import SymptomLogging from "./pages/features/SymptomLogging";
import AIRecommendations from "./pages/features/AIRecommendations";
import ConnectWithDoctors from "./pages/features/ConnectWithDoctors";
import HealthProfile from "./pages/features/HealthProfile";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features/daily-health-records" element={<DailyHealthRecords />} />
          <Route path="/features/period-tracking" element={<PeriodTracking />} />
          <Route path="/features/symptom-logging" element={<SymptomLogging />} />
          <Route path="/features/ai-recommendations" element={<AIRecommendations />} />
          <Route path="/features/connect-with-doctors" element={<ConnectWithDoctors />} />
          <Route path="/features/health-profile" element={<HealthProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
