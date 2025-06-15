
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
    industry: "",
    targetLocation: "",
    primaryKeywords: [],
    currentRanking: "",
    competitors: [],
    seoGoals: [],
    currentIssues: []
  });

  const [keywordInput, setKeywordInput] = useState("");
  const [competitorInput, setCompetitorInput] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let processedUrl = formData.websiteUrl.trim();
    if (processedUrl && !/^https?:\/\//i.test(processedUrl)) {
      processedUrl = `https://${processedUrl}`;
    }

    onSubmit({
      ...formData,
      websiteUrl: processedUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="websiteUrl" className="text-brand-silver">Website URL *</Label>
          <Input
            id="websiteUrl"
            type="url"
            placeholder="https://yourwebsite.com"
            value={formData.websiteUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, websiteUrl: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white"
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
            className="bg-brand-navy-light border-brand-silver/30 text-white"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="industry" className="text-brand-silver">Industry *</Label>
          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
            <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="restaurant">Restaurant</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="professional-services">Professional Services</SelectItem>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="beauty">Beauty & Wellness</SelectItem>
              <SelectItem value="automotive">Automotive</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="targetLocation" className="text-brand-silver">Target Location *</Label>
          <Input
            id="targetLocation"
            placeholder="City, Region"
            value={formData.targetLocation}
            onChange={(e) => setFormData(prev => ({ ...prev, targetLocation: e.target.value }))}
            required
            className="bg-brand-navy-light border-brand-silver/30 text-white"
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
            className="bg-brand-navy-light border-brand-silver/30 text-white"
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
            className="bg-brand-navy-light border-brand-silver/30 text-white"
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
