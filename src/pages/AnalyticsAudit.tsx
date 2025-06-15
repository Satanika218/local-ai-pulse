
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BarChart, FileText } from "lucide-react";
import AnalyticsAuditForm from "@/components/AnalyticsAuditForm";
import AuditResults from "@/components/AuditResults";

export interface AuditData {
  websiteUrl: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  industry: string;
  targetLocation: string;
  monthlyVisitors: string;
  primaryGoals: string[];
  currentChallenges: string[];
  gdprConsent: boolean;
}

const AnalyticsAudit = () => {
  const [auditData, setAuditData] = useState<AuditData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAuditSubmit = (data: AuditData) => {
    setAuditData(data);
    setShowResults(true);
  };

  const startNewAudit = () => {
    setAuditData(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Free Analytics <span className="text-brand-lime">Audit Tool</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Get a comprehensive analysis of your website's performance with actionable 
              insights and recommendations tailored to your local market.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showResults ? (
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                  <FileText className="h-6 w-6 text-brand-lime" />
                  Website Analytics Audit
                </CardTitle>
                <p className="text-brand-silver">
                  Complete the form below to receive your personalized analytics audit report
                </p>
              </CardHeader>
              <CardContent>
                <AnalyticsAuditForm onSubmit={handleAuditSubmit} />
              </CardContent>
            </Card>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Your Analytics Audit Report</h2>
                <Button 
                  onClick={startNewAudit}
                  variant="outline"
                  className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy"
                >
                  Start New Audit
                </Button>
              </div>
              {auditData && <AuditResults auditData={auditData} />}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyticsAudit;
