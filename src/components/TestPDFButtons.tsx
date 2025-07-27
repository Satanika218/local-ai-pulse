import { Button } from "@/components/ui/button";
import { Download, FileText, BarChart, Search } from "lucide-react";
import { generateTestSEOPDF, generateTestAnalyticsPDF, generateTestServicesPDF } from "@/utils/testPDFGenerators";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const TestPDFButtons = () => {
  const [isGenerating, setIsGenerating] = useState<string | null>(null);

  const handleGeneratePDF = async (type: string, generator: () => Promise<void>) => {
    setIsGenerating(type);
    try {
      await generator();
    } catch (error) {
      console.error(`Error generating ${type} PDF:`, error);
    } finally {
      setIsGenerating(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="bg-brand-navy-light border border-brand-silver/20">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white text-center">
            Test PDF Downloads
          </CardTitle>
          <p className="text-brand-silver text-center">
            Generate sample PDFs to review the rebranding without filling out forms
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {/* SEO Audit PDF Test */}
            <div className="text-center">
              <div className="bg-brand-navy p-6 rounded-lg border border-brand-silver/20 mb-4">
                <Search className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">SEO Audit Report</h3>
                <p className="text-brand-silver text-sm mb-4">
                  Sample SEO audit with recommendations and scoring
                </p>
                <Button 
                  onClick={() => handleGeneratePDF("SEO", generateTestSEOPDF)}
                  disabled={isGenerating === "SEO"}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold w-full"
                >
                  {isGenerating === "SEO" ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-navy"></div>
                      Generating...
                    </div>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Test SEO PDF
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Analytics Audit PDF Test */}
            <div className="text-center">
              <div className="bg-brand-navy p-6 rounded-lg border border-brand-silver/20 mb-4">
                <BarChart className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Analytics Audit Report</h3>
                <p className="text-brand-silver text-sm mb-4">
                  Sample analytics audit with insights and recommendations
                </p>
                <Button 
                  onClick={() => handleGeneratePDF("Analytics", generateTestAnalyticsPDF)}
                  disabled={isGenerating === "Analytics"}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold w-full"
                >
                  {isGenerating === "Analytics" ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-navy"></div>
                      Generating...
                    </div>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Test Analytics PDF
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Services PDF Test */}
            <div className="text-center">
              <div className="bg-brand-navy p-6 rounded-lg border border-brand-silver/20 mb-4">
                <FileText className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Services Guide</h3>
                <p className="text-brand-silver text-sm mb-4">
                  Comprehensive AI services guide and offerings
                </p>
                <Button 
                  onClick={() => handleGeneratePDF("Services", generateTestServicesPDF)}
                  disabled={isGenerating === "Services"}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold w-full"
                >
                  {isGenerating === "Services" ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-navy"></div>
                      Generating...
                    </div>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      Test Services PDF
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-brand-navy rounded-lg border border-brand-silver/20">
            <p className="text-brand-silver text-sm text-center">
              <strong className="text-brand-lime">Note:</strong> These are sample PDFs with test data to showcase the new branding and layout.
              Real audit PDFs will contain your actual business information and analysis.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TestPDFButtons;