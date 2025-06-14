
import { useState, useEffect } from "react";
import { MessageCircle, X, Send, ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface UserPath {
  mainCategory?: string;
  subcategory?: string;
  specificProblem?: string;
  recommendedSolution?: string;
}

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  additionalInfo: string;
  consent: boolean;
}

const DecisionTreeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('greeting');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userPath, setUserPath] = useState<UserPath>({});
  const [isTyping, setIsTyping] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    additionalInfo: '',
    consent: false
  });
  const { toast } = useToast();

  const businessAreas = [
    'Website & Digital Presence',
    'Digital Marketing', 
    'Creative & Design',
    'Financial Operations',
    'Customer Relationships',
    'Sales & Lead Generation',
    'Human Resources',
    'Customer Support',
    'Project Management',
    'Administrative Operations',
    'Something else'
  ];

  const subcategories: Record<string, string[]> = {
    'Website & Digital Presence': ['Website Management', 'User Experience', 'Performance', 'Content Creation', 'Website Building', 'Something else'],
    'Digital Marketing': ['Social Media', 'Email Marketing', 'SEO & Content', 'Paid Advertising', 'Analytics', 'Something else'],
    'Creative & Design': ['Logo Design', 'Visual Content', 'Brand Consistency', 'Marketing Materials', 'Something else'],
    'Financial Operations': ['Document Processing', 'Financial Management', 'Expense Tracking', 'Reporting', 'Something else'],
    'Customer Relationships': ['Communication', 'Market Intelligence', 'Customer Insights', 'Retention', 'Something else'],
    'Sales & Lead Generation': ['Lead Generation', 'Sales Support', 'CRM Management', 'Proposal Creation', 'Something else'],
    'Human Resources': ['Recruitment', 'Employee Experience', 'Performance Management', 'Training', 'Something else'],
    'Customer Support': ['Inquiry Handling', 'Customer Insights', 'Response Management', 'Knowledge Base', 'Something else'],
    'Project Management': ['Task Optimization', 'Resource Management', 'Timeline Planning', 'Team Coordination', 'Something else'],
    'Administrative Operations': ['Document Management', 'Communication Support', 'Process Automation', 'Data Entry', 'Something else']
  };

  const specificProblems: Record<string, string[]> = {
    'Website Management': ['Outdated website content', 'Inconsistent design elements', 'Poor SEO performance', 'Difficult to update', 'Something else'],
    'User Experience': ['High bounce rates', 'Low conversion rates', 'Poor mobile experience', 'Confusing navigation', 'Something else'],
    'Social Media': ['Inconsistent posting schedule', 'Low engagement rates', 'Content creation struggles', 'Multiple platform management', 'Something else'],
    'Email Marketing': ['Low open rates', 'Poor email personalization', 'Ineffective timing', 'List management issues', 'Something else'],
    'Logo Design': ['Need a professional logo', 'Inconsistent brand application', 'Outdated design', 'Multiple format needs', 'Something else'],
    'Document Processing': ['Manual invoice processing', 'Time-consuming receipt management', 'Data entry errors', 'File organization', 'Something else'],
    'Lead Generation': ['Not enough quality leads', 'Poor lead qualification', 'Ineffective targeting', 'High cost per lead', 'Something else'],
    'Recruitment': ['Overwhelming resume screening', 'Inefficient interview scheduling', 'Poor candidate experience', 'Long hiring times', 'Something else']
  };

  const solutions: Record<string, string> = {
    'Outdated website content': 'Our AI content management system automatically identifies outdated content and suggests updates based on industry trends and your business goals. This reduces manual review time by 70% while keeping your site fresh and relevant.',
    'Low open rates': 'Our AI email optimization system analyzes recipient behavior patterns to determine optimal send times and creates personalized subject lines that increase open rates by an average of 35%.',
    'Inconsistent posting schedule': 'Our AI social media manager creates and schedules optimized content across platforms, maintaining consistent presence even when you\'re busy with other aspects of your business.',
    'Need a professional logo': 'Our AI-powered logo design system creates distinctive, professional logos based on your industry, values, and audience, generating multiple concepts in minutes instead of weeks.',
    'Manual invoice processing': 'Our AI document processing system automatically extracts, categorizes, and enters invoice data, reducing processing time by 80% and virtually eliminating errors.',
    'Not enough quality leads': 'Our AI lead generation system identifies high-potential prospects based on firmographic and behavioral data, delivering qualified leads that match your ideal customer profile.',
    'Overwhelming resume screening': 'Our AI recruitment assistant automatically screens applications to identify the most qualified candidates, reducing hiring time by 65% while improving candidate quality.'
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Welcome to 11th Temple Solutions! We help businesses leverage AI to save time and money. What area of your business would you like to improve today?");
    }
  }, [isOpen]);

  const addBotMessage = (text: string, delay: number = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date() }]);
      setIsTyping(false);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }]);
  };

  const handleBusinessAreaSelect = (area: string) => {
    addUserMessage(area);
    setUserPath(prev => ({ ...prev, mainCategory: area }));
    
    if (area === 'Something else') {
      setShowForm(true);
      addBotMessage("No problem! We'd love to learn more about your specific needs. Please fill out the form below and we'll get back to you with a customized solution.");
      return;
    }

    const subs = subcategories[area] || [];
    addBotMessage(`Great choice! ${area} offers excellent opportunities for AI enhancement. What specific aspect are you looking to improve?`);
    setCurrentStep('subcategory');
  };

  const handleSubcategorySelect = (subcategory: string) => {
    addUserMessage(subcategory);
    setUserPath(prev => ({ ...prev, subcategory }));
    
    if (subcategory === 'Something else') {
      setShowForm(true);
      addBotMessage("We'd love to learn more about your specific challenge. Please fill out the form below so Dan and Neil can provide you with a tailored solution.");
      return;
    }

    const problems = specificProblems[subcategory] || [];
    if (problems.length > 0) {
      addBotMessage(`${subcategory} is crucial for business growth. What's your biggest challenge currently?`);
      setCurrentStep('specificProblem');
    } else {
      setShowForm(true);
      addBotMessage("Let's get you connected with the right solution! Please fill out the form below and we'll provide specific recommendations for your needs.");
    }
  };

  const handleProblemSelect = (problem: string) => {
    addUserMessage(problem);
    setUserPath(prev => ({ ...prev, specificProblem: problem }));
    
    if (problem === 'Something else') {
      setShowForm(true);
      addBotMessage("We'd love to understand your unique challenge better. Please fill out the form below and our team will create a custom solution for you.");
      return;
    }

    const solution = solutions[problem];
    if (solution) {
      setUserPath(prev => ({ ...prev, recommendedSolution: solution }));
      addBotMessage(`We can help with that! ${solution} Would you like to learn more about this solution?`);
      setCurrentStep('solution');
    } else {
      setShowForm(true);
      addBotMessage("That's a common challenge many businesses face. Let's connect you with our team to discuss a tailored solution.");
    }
  };

  const handleLearnMore = () => {
    setShowForm(true);
    addBotMessage("Excellent! To provide you with specific information about how we can help your business, we'd like to learn a bit more about you.");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to be contacted to continue.",
        variant: "destructive",
      });
      return;
    }

    // Simulate email sending
    console.log('Sending lead email to hello@11thtemplesolutions.com and 11th-temple-solutions@mail.com');
    console.log('Lead Data:', {
      ...formData,
      userPath,
      timestamp: new Date().toISOString()
    });

    setFormSubmitted(true);
    toast({
      title: "Thank you!",
      description: "Your information has been sent. We'll contact you within 1 business day.",
    });
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('greeting');
    setUserPath({});
    setShowForm(false);
    setFormSubmitted(false);
    setFormData({
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      website: '',
      additionalInfo: '',
      consent: false
    });
  };

  const renderCurrentOptions = () => {
    if (formSubmitted) {
      return (
        <div className="space-y-4 text-center">
          <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-lg p-4">
            <h4 className="text-brand-lime font-semibold mb-2">Thanks for reaching out!</h4>
            <p className="text-brand-silver text-sm mb-4">Dan or Neil will contact you within 1 business day.</p>
            <Button 
              size="sm" 
              className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark mb-2"
              onClick={() => window.open('/consultation', '_blank')}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Free Consultation
            </Button>
            <p className="text-brand-silver text-xs">
              Or email us directly at hello@11thtemplesolutions.com
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetChat}
            className="border-brand-silver/30 text-brand-silver hover:bg-brand-silver hover:text-brand-navy"
          >
            Start New Conversation
          </Button>
        </div>
      );
    }

    if (showForm) {
      return (
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Input
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              required
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
            />
            <Input
              placeholder="Business Name *"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              required
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
            />
          </div>
          <Input
            type="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
          />
          <Input
            type="tel"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            required
            className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
          />
          <Input
            placeholder="Website URL (optional)"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
          />
          <Textarea
            placeholder="Additional information about your needs..."
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
            className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
            rows={3}
          />
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => handleInputChange('consent', e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-brand-silver text-xs">
              I agree to be contacted about AI solutions for my business
            </label>
          </div>
          <Button 
            type="submit" 
            size="sm" 
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark"
          >
            Get Expert Help
          </Button>
        </form>
      );
    }

    if (currentStep === 'greeting') {
      return (
        <div className="space-y-2">
          {businessAreas.map((area, index) => (
            <Button
              key={index}
              onClick={() => handleBusinessAreaSelect(area)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start border-brand-silver/30 text-brand-silver hover:bg-brand-lime hover:text-brand-navy text-xs"
            >
              {area}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'subcategory' && userPath.mainCategory) {
      const subs = subcategories[userPath.mainCategory] || [];
      return (
        <div className="space-y-2">
          {subs.map((sub, index) => (
            <Button
              key={index}
              onClick={() => handleSubcategorySelect(sub)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start border-brand-silver/30 text-brand-silver hover:bg-brand-lime hover:text-brand-navy text-xs"
            >
              {sub}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'specificProblem' && userPath.subcategory) {
      const problems = specificProblems[userPath.subcategory] || [];
      return (
        <div className="space-y-2">
          {problems.map((problem, index) => (
            <Button
              key={index}
              onClick={() => handleProblemSelect(problem)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start border-brand-silver/30 text-brand-silver hover:bg-brand-lime hover:text-brand-navy text-xs"
            >
              {problem}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'solution') {
      return (
        <div className="space-y-3">
          <Button
            onClick={handleLearnMore}
            size="sm"
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark"
          >
            Learn More About This Solution
          </Button>
          <Button
            onClick={resetChat}
            variant="outline"
            size="sm"
            className="w-full border-brand-silver/30 text-brand-silver hover:bg-brand-silver hover:text-brand-navy"
          >
            Explore Other Solutions
          </Button>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="bg-brand-navy-light border-brand-silver/20 h-full">
            <CardContent className="p-4 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-silver/20">
                <div>
                  <h3 className="text-white font-semibold text-sm">11th Temple Solutions</h3>
                  <p className="text-brand-silver text-xs">AI Business Solutions</p>
                </div>
                {currentStep !== 'greeting' && !showForm && (
                  <Button
                    onClick={resetChat}
                    variant="ghost"
                    size="sm"
                    className="text-brand-silver hover:text-white"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((message, index) => (
                  <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-2 rounded-lg max-w-xs text-xs ${
                      message.type === 'user' 
                        ? 'bg-brand-lime text-brand-navy' 
                        : 'bg-brand-navy text-brand-silver'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="text-left">
                    <div className="inline-block p-2 rounded-lg bg-brand-navy text-brand-silver text-xs">
                      <span className="animate-pulse">...</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Options */}
              <div>
                {renderCurrentOptions()}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default DecisionTreeChatbot;
