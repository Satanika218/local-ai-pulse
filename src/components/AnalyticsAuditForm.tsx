import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AuditData } from "@/pages/AnalyticsAudit";

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

  const goals = [
    "Increase website traffic",
    "Improve conversion rates",
    "Generate more leads",
    "Boost local visibility",
    "Enhance user engagement",
    "Improve customer retention"
  ];

  const challenges = [
    "Low website traffic",
    "Poor conversion rates",
    "High bounce rate",
    "Lack of local visibility",
    "Difficulty tracking ROI",
    "Understanding customer behavior"
  ];

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      primaryGoals: checked 
        ? [...prev.primaryGoals, goal]
        : prev.primaryGoals.filter(g => g !== goal)
    }));
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      currentChallenges: checked 
        ? [...prev.currentChallenges, challenge]
        : prev.currentChallenges.filter(c => c !== challenge)
    }));
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

    onSubmit({
      ...formData,
      websiteUrl: processedUrl,
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
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver"
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
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver"
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
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver"
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
              className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver"
            />
          </div>
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
            className="bg-brand-navy-light border-brand-silver/30 text-white placeholder:text-brand-silver"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="monthlyVisitors" className="text-brand-silver">Monthly Website Visitors</Label>
        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, monthlyVisitors: value }))}>
          <SelectTrigger className="bg-brand-navy-light border-brand-silver/30 text-white">
            <SelectValue placeholder="Select visitor range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-500">0 - 500</SelectItem>
            <SelectItem value="500-2000">500 - 2,000</SelectItem>
            <SelectItem value="2000-5000">2,000 - 5,000</SelectItem>
            <SelectItem value="5000-10000">5,000 - 10,000</SelectItem>
            <SelectItem value="10000+">10,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Primary Goals (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {goals.map((goal) => (
            <div key={goal} className="flex items-center space-x-2">
              <Checkbox 
                id={goal}
                checked={formData.primaryGoals.includes(goal)}
                onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
              />
              <Label htmlFor={goal} className="text-brand-silver text-sm">{goal}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-brand-silver mb-3 block">Current Challenges (select all that apply)</Label>
        <div className="grid md:grid-cols-2 gap-3">
          {challenges.map((challenge) => (
            <div key={challenge} className="flex items-center space-x-2">
              <Checkbox 
                id={challenge}
                checked={formData.currentChallenges.includes(challenge)}
                onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
              />
              <Label htmlFor={challenge} className="text-brand-silver text-sm">{challenge}</Label>
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
              I consent to 11th Temple processing my personal data to provide the analytics audit and contact me about relevant services. 
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
        Generate My Free Analytics Audit
      </Button>
    </form>
  );
};

export default AnalyticsAuditForm;
