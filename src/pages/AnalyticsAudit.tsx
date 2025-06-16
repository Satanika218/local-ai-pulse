import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

export default function AnalyticsAudit() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await fetch(`/api/analytics-audit?url=${url}`);
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
          Free Analytics Audit
        </h1>
        <p className="text-lg text-brand-silver mb-8">
          Enter your website URL to receive a comprehensive analytics audit report.
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
            {isLoading ? "Loading..." : "Get Audit"}
          </Button>
        </div>
      </div>

      {/* Results Section */}
      {results && (
        <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">Audit Results</h2>
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardContent>
              <pre className="text-white">{JSON.stringify(results, null, 2)}</pre>
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
