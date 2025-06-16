
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search, TrendingUp, AlertCircle } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

export type SEOAuditData = {
  url: string;
  overallScore: number;
  technicalSEO: {
    score: number;
    issues: string[];
  };
  contentSEO: {
    score: number;
    recommendations: string[];
  };
  keywords: {
    primary: string[];
    secondary: string[];
    suggestions: string[];
  };
  recommendations: string[];
};

export default function SEOAudit() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState<SEOAuditData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await fetch(`/api/seo-audit?url=${url}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Free SEO Audit
        </h1>
        <p className="text-lg text-brand-silver mb-8">
          Get a comprehensive SEO analysis of your website with actionable recommendations.
        </p>

        {/* URL Input and Submit */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Input
            type="url"
            placeholder="Enter your website URL"
            className="w-full md:w-auto text-black"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button onClick={handleSubmit} disabled={isLoading}>
            <Search className="mr-2 h-4 w-4" />
            {isLoading ? "Analyzing..." : "Get SEO Audit"}
          </Button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">SEO Audit Results</h2>
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-brand-lime" />
                    Overall Score: {results.overallScore}/100
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-brand-lime">Technical SEO</h4>
                      <p className="text-brand-silver">Score: {results.technicalSEO.score}/100</p>
                      <ul className="text-brand-silver text-sm mt-2">
                        {results.technicalSEO.issues.map((issue, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="mr-2 h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-brand-lime">Content SEO</h4>
                      <p className="text-brand-silver">Score: {results.contentSEO.score}/100</p>
                      <ul className="text-brand-silver text-sm mt-2">
                        {results.contentSEO.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <TrendingUp className="mr-2 h-4 w-4 text-brand-lime mt-0.5 flex-shrink-0" />
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Keywords Analysis</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-brand-lime">Primary Keywords</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {results.keywords.primary.map((keyword, index) => (
                          <span key={index} className="bg-brand-lime text-brand-navy px-2 py-1 rounded text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-brand-lime">Keyword Suggestions</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {results.keywords.suggestions.map((keyword, index) => (
                          <span key={index} className="bg-brand-navy border border-brand-lime text-brand-lime px-2 py-1 rounded text-sm">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start text-brand-silver">
                      <TrendingUp className="mr-2 h-4 w-4 text-brand-lime mt-0.5 flex-shrink-0" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Back to Home */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
        <Link to="/" className="text-brand-lime hover:underline flex items-center justify-center gap-2">
          <ArrowLeft /> Back to Home
        </Link>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
