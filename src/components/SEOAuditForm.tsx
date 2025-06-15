import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEOAuditData } from "@/pages/SEOAudit";

interface SEOAuditFormProps {
  onSubmit: (data: SEOAuditData) => void;
}

const SEOAuditForm = ({ onSubmit }: SEOAuditFormProps) => {
  const [formData, setFormData] = useState<SEOAuditData>({
    websiteUrl: "",
    businessName: "",
    contactName: "",
    contactEmail: "",
    industry: "",
    targetLocation: "",
    primaryKeywords: [],
    currentRanking: "",
    competitors: [],
    seoGoals: [],
    currentIssues: [],
    gdprConsent: false
  });

  const [keywordInput, setKeywordInput] = useState("");
  const [competitorInput, setCompetitorInput] = useState("");
  const [showOtherIndustry, setShowOtherIndustry] = useState(false);
  const [otherIndustry, setOtherIndustry] = useState("");

  const industries = [
    "Accounting/Financial/Insurance",
    "Administration", 
    "Aerospace",
    "Advertising",
    "Air Force",
    "Army",
    "Automotive",
    "Aviation",
    "Building Services",
    "Catering",
    "Charity",
    "Child and Social Care",
    "Construction",
    "Contracting",
    "Customer Services",
    "Dental",
    "Distribution/Driving",
    "Education",
    "Electrical",
    "Electronics",
    "Energy",
    "Engineering",
    "FMCG",
    "Government",
    "Graduate",
    "Health",
    "Hospitality/Hotel",
    "HR",
    "IT/Technical",
    "Legal",
    "Logistics",
    "Management",
    "Manufacturing",
    "Marketing",
    "Media",
    "Medical",
    "Military/Emergency",
    "Navy",
    "Nursing",
    "Oil & Gas",
    "Personnel",
    "Pharmaceutical",
    "Property",
    "Public Sector",
    "Purchasing",
    "Recruitment",
    "Retail",
    "Sales",
    "Scientific",
    "Secretarial",
    "Surveying"
  ];

  const seoGoals = [
    "Improve local search rankings",
    "Increase organic traffic",
    "Beat specific competitors",
    "Rank for branded keywords",
    "Improve mobile search visibility",
    "Enhance local business listings"
  ];

  const currentIssues = [
    "Low search rankings",
    "Website not mobile-friendly",
    "Slow page loading speed",
    "Missing meta descriptions",
    "Poor local SEO presence",
    "Outdated content"
  ];

  const handleKeywordAdd = () => {
    if (keywordInput.trim() && !formData.primaryKeywords.includes(keywordInput.trim())) {
      setFormData(prev => ({
        ...prev,
        primaryKeywords: [...prev.primaryKeywords, keywordInput.trim()]
      }));
      setKeywordInput("");
    }
  };

  const handleKeywordRemove = (keyword: string) => {
    setFormData(prev => ({
      ...prev,
      primaryKeywords: prev.primaryKeywords.filter(k => k !== keyword)
    }));
  };

  const handleCompetitorAdd = () => {
    if (competitorInput.trim() && !formData.competitors.includes(competitorInput.trim())) {
      setFormData(prev => ({
        ...prev,
        competitors: [...prev.competitors, competitorInput.trim()]
      }));
      setCompetitorInput("");
    }
  };

  const handleCompetitorRemove = (competitor: string) => {
    setFormData(prev => ({
      ...prev,
      competitors: prev.competitors.filter(c => c !== competitor)
    }));
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      seoGoals: checked 
        ? [...prev.seoGoals, goal]
        : prev.seoGoals.filter(g => g !== goal)
    }));
  };

  const handleIssueChange = (issue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentIssues: checked 
        ? [...prev.currentIssues, issue]
        : prev.currentIssues.filter(i => i !== issue)
    }));
  };

  const handleIndustryChange = (value: string) => {
    if (value === "other-specify") {
      setShowOtherIndustry(true);
      setFormData(prev => ({ ...prev, industry: "" }));
    } else {
      setShowOtherIndustry(false);
      setOtherIndustry("");
      setFormData(prev => ({ ...prev, industry: value }));
    }
  };

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
    const finalIndustry = showOtherIndustry ? otherIndustry : formData.industry;

    onSubmit({
      ...formData,
      websiteUrl: processedUrl,
      industry: finalIndustry
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Contact Information Section */}
      <div className="border-b border-brand-silver/20 pb-6">
        <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contactName" className="text-brand-silver">Your Name *</Label>
            <Input
              id="contactName"
              placeholder="John Smith"
              value={formData.contactName}
              onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
              required
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
          <div>
            <Label htmlFor="contactEmail" className="text-brand-silver">Email Address *</Label>
            <Input
              id="contactEmail"
              type="email"
              placeholder="john@company.com"
              value={formData.contactEmail}
              onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
              required
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Business Information</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="websiteUrl" className="text-brand-silver">Website URL *</Label>
            <Input
              id="websiteUrl"
              placeholder="example.co.uk or www.example.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
              required
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
          <div>
            <Label htmlFor="businessName" className="text-brand-silver">Business Name *</Label>
            <Input
              id="businessName"
              placeholder="Your Business Name"
              value={formData.businessName}
              onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
              required
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="industry" className="text-brand-silver">Industry *</Label>
          <Select onValueChange={handleIndustryChange}>
            <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry.toLowerCase().replace(/[^a-z0-9]/g, '-')}>
                  {industry}
                </SelectItem>
              ))}
              <SelectItem value="other-specify">Other (please specify)</SelectItem>
            </SelectContent>
          </Select>
          
          {showOtherIndustry && (
            <Input
              placeholder="Please specify your industry"
              value={otherIndustry}
              onChange={(e) => setOtherIndustry(e.target.value)}
              className="mt-2 bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
              required
            />
          )}
        </div>
        <div>
          <Label htmlFor="targetLocation" className="text-brand-silver">Target Location *</Label>
          <Input
            id="targetLocation"
            placeholder="City, Region"
            value={formData.targetLocation}
            onChange={(e) => setFormData(prev => ({ ...prev, targetLocation: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
          />
        </div>
      </div>

      <div>
        <Label className="text-brand-silver">Current Search Ranking</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, currentRanking: value }))}>
          <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
            <SelectValue placeholder="How well do you rank currently?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="page-1">Page 1 (Top 10)</SelectItem>
            <SelectItem value="page-2-3">Page 2-3 (11-30)</SelectItem>
            <SelectItem value="beyond-page-3">Beyond Page 3</SelectItem>
            <SelectItem value="not-ranking">Not ranking / Don't know</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Primary Keywords</Label>
        <div className="flex gap-2 mb-3">
          <Input
            placeholder="Enter a keyword"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleKeywordAdd())}
          />
          <Button type="button" onClick={handleKeywordAdd} className="bg-brand-lime text-brand-navy">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.primaryKeywords.map((keyword) => (
            <span
              key={keyword}
              className="bg-brand-lime text-brand-navy px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {keyword}
              <button
                type="button"
                onClick={() => handleKeywordRemove(keyword)}
                className="hover:bg-brand-navy hover:text-brand-lime rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Main Competitors</Label>
        <div className="flex gap-2 mb-3">
          <Input
            placeholder="Enter competitor website"
            value={competitorInput}
            onChange={(e) => setCompetitorInput(e.target.value)}
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime focus:ring-brand-lime"
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleCompetitorAdd())}
          />
          <Button type="button" onClick={handleCompetitorAdd} className="bg-brand-lime text-brand-navy">
            Add
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.competitors.map((competitor) => (
            <span
              key={competitor}
              className="bg-brand-silver text-brand-navy px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {competitor}
              <button
                type="button"
                onClick={() => handleCompetitorRemove(competitor)}
                className="hover:bg-brand-navy hover:text-brand-silver rounded-full w-4 h-4 flex items-center justify-center"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">SEO Goals (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {seoGoals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2">
              <Checkbox 
                id={goal}
                checked={formData.seoGoals.includes(goal)}
                onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
              />
              <Label htmlFor={goal} className="text-brand-silver text-sm">{goal}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Current SEO Issues (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {currentIssues.map((issue) => (
            <div key={issue} className="flex items-center space-x-2">
              <Checkbox 
                id={issue}
                checked={formData.currentIssues.includes(issue)}
                onCheckedChange={(checked) => handleIssueChange(issue, checked as boolean)}
              />
              <Label htmlFor={issue} className="text-brand-silver text-sm">{issue}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* GDPR Consent */}
      <div className="border-t border-brand-silver/20 pt-6">
        <div className="flex items-start space-x-3">
          <Checkbox 
            id="gdprConsent"
            checked={formData.gdprConsent}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))}
            required
          />
          <div className="flex-1">
            <Label htmlFor="gdprConsent" className="text-brand-silver text-sm leading-relaxed">
              I consent to 11th Temple processing my personal data to provide the SEO audit and contact me about relevant services. 
              You can withdraw consent at any time. View our{" "}
              <a href="/privacy" className="text-brand-lime hover:text-brand-lime-dark underline">
                Privacy Policy
              </a>{" "}
              for more information. *
            </Label>
          </div>
        </div>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
      >
        Generate My Free SEO Audit
      </Button>
    </form>
  );
};

export default SEOAuditForm;
