import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, TrendingUp, Target, AlertTriangle, CheckCircle } from "lucide-react";
import { SEOAuditData } from "@/pages/SEOAudit";
import { generateSEOAuditPDF } from "@/utils/seoAuditPDFGenerator";

interface SEOAuditResultsProps {
  auditData: SEOAuditData;
}

const logoUrl = "/lovable-uploads/75f77758-fb5a-45f9-a0e0-770aa7766795.png";

const SEOAuditResults = ({ auditData }: SEOAuditResultsProps) => {
  // Make sure score is generated only once per audit
  const [score] = useState(() => Math.floor(Math.random() * 35) + 55);

  const handleDownloadPDF = async () => {
    await generateSEOAuditPDF(auditData, score, logoUrl);
  };

  // Generate mock SEO insights based on the form data
  const generateInsights = () => {
    const insights = {
      score,
      strengths: [],
      weaknesses: [],
      recommendations: []
    };

    // Add insights based on industry
    if (auditData.industry === "retail") {
      insights.recommendations.push("Optimize product pages for local search terms");
      insights.recommendations.push("Implement structured data for products");
    }

    if (auditData.industry === "restaurant") {
      insights.recommendations.push("Optimize for 'near me' searches");
      insights.recommendations.push("Improve Google My Business listing");
    }

    // Add insights based on current ranking
    if (auditData.currentRanking === "not-ranking") {
      insights.weaknesses.push("Website not appearing in search results");
      insights.recommendations.push("Implement basic on-page SEO fundamentals");
    }

    if (auditData.currentRanking === "beyond-page-3") {
      insights.weaknesses.push("Low search visibility");
      insights.recommendations.push("Improve content quality and keyword targeting");
    }

    // Add insights based on goals
    if (auditData.seoGoals.includes("Improve local search rankings")) {
      insights.recommendations.push("Optimize for local SEO keywords");
      insights.recommendations.push("Build local citations and directory listings");
    }

    if (auditData.seoGoals.includes("Beat specific competitors")) {
      insights.recommendations.push("Conduct competitive analysis and gap identification");
      insights.strengths.push("Clear competitive targets identified");
    }

    // Add insights based on issues
    if (auditData.currentIssues.includes("Slow page loading speed")) {
      insights.recommendations.push("Optimize website performance and loading speed");
      insights.weaknesses.push("Page speed optimization needed");
    }

    if (auditData.currentIssues.includes("Missing meta descriptions")) {
      insights.recommendations.push("Add compelling meta descriptions to all pages");
      insights.weaknesses.push("Missing or poor meta descriptions");
    }

    // Default recommendations and insights
    insights.recommendations.push("Improve internal linking structure");
    insights.recommendations.push("Create location-specific landing pages");
    insights.strengths.push("Good keyword targeting potential");
    insights.weaknesses.push("Limited backlink profile");

    return insights;
  };

  const insights = generateInsights();

  return (
    <div className="space-y-6">
      {/* Header Card with Score */}
      <Card className="bg-gradient-to-r from-brand-navy to-brand-navy-light border-brand-silver/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                SEO Audit Report
              </CardTitle>
              <p className="text-brand-silver">
                Analysis for {auditData.businessName} • {auditData.targetLocation}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-lime">{insights.score}</div>
              <div className="text-brand-silver text-sm">SEO Score</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleDownloadPDF}
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF Report
          </Button>
        </CardContent>
      </Card>

      {/* Keywords Analysis */}
      {auditData.primaryKeywords.length > 0 && (
        <Card className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white">Keyword Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-brand-lime font-semibold mb-2">Primary Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {auditData.primaryKeywords.map((keyword) => (
                    <span key={keyword} className="bg-brand-lime text-brand-navy px-2 py-1 rounded text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              {auditData.competitors.length > 0 && (
                <div>
                  <h4 className="text-brand-lime font-semibold mb-2">Competitors</h4>
                  <div className="flex flex-wrap gap-2">
                    {auditData.competitors.map((competitor) => (
                      <span key={competitor} className="bg-brand-silver text-brand-navy px-2 py-1 rounded text-sm">
                        {competitor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Insights Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-brand-lime" />
              SEO Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {insights.strengths.map((strength, index) => (
                <li key={index} className="text-brand-silver flex items-start gap-2">
                  <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                  {strength}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Areas for Improvement */}
        <Card className="bg-brand-navy border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {insights.weaknesses.map((weakness, index) => (
                <li key={index} className="text-brand-silver flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  {weakness}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-brand-lime" />
            Priority SEO Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-brand-navy-light rounded-lg">
                <div className="bg-brand-lime text-brand-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-brand-silver">{recommendation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <Card className="bg-brand-navy border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-brand-lime" />
            Next Steps
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-brand-silver/10 rounded-lg p-6">
          <p className="text-brand-silver mb-4">
            Ready to improve your search rankings? Our team at 11th Temple can help you:
          </p>
          <ul className="space-y-2 text-brand-silver mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Implement comprehensive SEO strategy
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Optimize for local search rankings
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Create high-quality, SEO-optimized content
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-brand-lime" />
              Monitor and report on SEO progress
            </li>
          </ul>
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Schedule Free SEO Consultation
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOAuditResults;
