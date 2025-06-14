
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Consultation from "./pages/Consultation";
import ProcessAutomation from "./pages/ProcessAutomation";
import LocalSEO from "./pages/LocalSEO";
import CustomerService from "./pages/CustomerService";
import DataAnalytics from "./pages/DataAnalytics";
import WebsiteCreation from "./pages/WebsiteCreation";
import SalesLeadTools from "./pages/SalesLeadTools";
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
          <Route path="/services" element={<Services />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/local-seo" element={<LocalSEO />} />
          <Route path="/services/customer-service" element={<CustomerService />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/website-creation" element={<WebsiteCreation />} />
          <Route path="/services/sales-lead-tools" element={<SalesLeadTools />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AccessibilityToolbar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
