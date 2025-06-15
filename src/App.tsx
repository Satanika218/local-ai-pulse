
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessibilityQuestion from "@/components/AccessibilityQuestion";
import Index from "./pages/Index";
import About from "./pages/About";
import CoreValues from "./pages/CoreValues";
import Services from "./pages/Services";
import ServicesOverview from "./pages/ServicesOverview";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Consultation from "./pages/Consultation";
import Privacy from "./pages/Privacy";
import ProcessAutomation from "./pages/ProcessAutomation";
import LocalSEO from "./pages/LocalSEO";
import CustomerService from "./pages/CustomerService";
import DataAnalytics from "./pages/DataAnalytics";
import WebsiteCreation from "./pages/WebsiteCreation";
import SalesLeadTools from "./pages/SalesLeadTools";
import AnalyticsAudit from "./pages/AnalyticsAudit";
import SEOAudit from "./pages/SEOAudit";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-overview" element={<ServicesOverview />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/services/customer-service" element={<CustomerService />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/website-creation" element={<WebsiteCreation />} />
          <Route path="/services/sales-lead-tools" element={<SalesLeadTools />} />
          <Route path="/analytics-audit" element={<AnalyticsAudit />} />
          <Route path="/seo-audit" element={<SEOAudit />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AccessibilityQuestion />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
