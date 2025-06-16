import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

export default function SEOAudit() {
  const [websiteURL, setWebsiteURL] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);

  const handleAudit = async () => {
    // Placeholder for SEO audit logic
    setAuditResults({
      title: "Example SEO Audit",
      url: websiteURL,
      metrics: {
        performance: 85,
        accessibility: 92,
        bestPractices: 78,
        seo: 88,
      },
    });
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Free SEO Audit
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Enter your website URL to get a free SEO audit and identify areas
          for improvement.
        </p>
      </div>

      {/* Audit Input Section */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            placeholder="Enter your website URL"
            className="flex-grow px-4 py-2 rounded-md bg-brand-navy-light text-white border border-brand-silver/20 focus:outline-none focus:border-brand-lime"
            value={websiteURL}
            onChange={(e) => setWebsiteURL(e.target.value)}
          />
          <Button
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
            onClick={handleAudit}
          >
            Run Audit
          </Button>
        </div>
      </div>

      {/* Audit Results Section */}
      {auditResults && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                SEO Audit Results for {auditResults.url}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Placeholder for SEO metrics */}
                <div>
                  <h3 className="text-lg font-semibold text-brand-lime mb-2">
                    Performance: {auditResults.metrics.performance}%
                  </h3>
                  <p className="text-brand-silver">
                    Website loading speed and performance optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-lime mb-2">
                    Accessibility: {auditResults.metrics.accessibility}%
                  </h3>
                  <p className="text-brand-silver">
                    Website accessibility for all users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-lime mb-2">
                    Best Practices: {auditResults.metrics.bestPractices}%
                  </h3>
                  <p className="text-brand-silver">
                    Adherence to SEO best practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-lime mb-2">
                    SEO: {auditResults.metrics.seo}%
                  </h3>
                  <p className="text-brand-silver">
                    Overall SEO score and recommendations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Back to Services Overview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Link
          to="/services-overview"
          className="inline-flex items-center text-brand-lime hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services Overview
        </Link>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
