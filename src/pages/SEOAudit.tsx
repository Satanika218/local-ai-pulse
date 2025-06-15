
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, FileText } from "lucide-react";
import SEOAuditForm from "@/components/SEOAuditForm";
import SEOAuditResults from "@/components/SEOAuditResults";

export interface SEOAuditData {
  websiteUrl: string;
  businessName: string;
  industry: string;
  targetLocation: string;
  primaryKeywords: string[];
  currentRanking: string;
  competitors: string[];
  seoGoals: string[];
  currentIssues: string[];
}

const SEOAudit = () => {
  const [auditData, setAuditData] = useState<SEOAuditData | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleAuditSubmit = (data: SEOAuditData) => {
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
            <Search className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Free SEO <span className="text-brand-lime">Audit Tool</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Get a comprehensive analysis of your website's SEO performance with actionable 
              insights and recommendations to improve your search rankings.
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
                  Website SEO Audit
                </CardTitle>
                <p className="text-brand-silver">
                  Complete the form below to receive your personalized SEO audit report
                </p>
              </CardHeader>
              <CardContent>
                <SEOAuditForm onSubmit={handleAuditSubmit} />
              </CardContent>
            </Card>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Your SEO Audit Report</h2>
                <Button 
                  onClick={startNewAudit}
                  variant="outline"
                  className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy"
                >
                  Start New Audit
                </Button>
              </div>
              {auditData && <SEOAuditResults auditData={auditData} />}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOAudit;
