
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuditData } from "@/pages/AnalyticsAudit";
import ContactInfoSection from "./analytics-audit/ContactInfoSection";
import BusinessInfoSection from "./analytics-audit/BusinessInfoSection";
import GoalsAndChallengesSection from "./analytics-audit/GoalsAndChallengesSection";
import GDPRConsentSection from "./analytics-audit/GDPRConsentSection";

interface AnalyticsAuditFormProps {
  onSubmit: (data: AuditData) => void;
}

const AnalyticsAuditForm = ({ onSubmit }: AnalyticsAuditFormProps) => {
  const [formData, setFormData] = useState<AuditData>({
    websiteUrl: "",
    businessName: "",
    contactName: "",
    contactEmail: "",
    industry: "",
    targetLocation: "",
    monthlyVisitors: "",
    primaryGoals: [],
    currentChallenges: [],
    gdprConsent: false
  });

  const processUrl = (url: string): string => {
    let processedUrl = url.trim();
    if (processedUrl && !/^https?:\/\//i.test(processedUrl)) {
      // Remove www. if it exists at the beginning
      if (processedUrl.startsWith('www.')) {
        processedUrl = processedUrl.substring(4);
      }
      processedUrl = `https://www.${processedUrl}`;
    }
    return processedUrl;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      alert("Please consent to data processing to continue.");
      return;
    }

    const processedUrl = processUrl(formData.websiteUrl);

    onSubmit({
      ...formData,
      websiteUrl: processedUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <ContactInfoSection formData={formData} setFormData={setFormData} />
      <BusinessInfoSection formData={formData} setFormData={setFormData} />
      <GoalsAndChallengesSection formData={formData} setFormData={setFormData} />
      <GDPRConsentSection formData={formData} setFormData={setFormData} />

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
      >
        Generate My Free Analytics Audit
      </Button>
    </form>
  );
};

export default AnalyticsAuditForm;
