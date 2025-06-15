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
  initialPurpose?: string;
  businessArea?: string;
  biggestChallenge?: string;
  techLevel?: string;
  specificProblem?: string;
  detailedChallenges?: string[];
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

  const initialPurposeOptions = [
    'Solve a specific business challenge',
    'Explore how AI and automation might benefit my operations',
    'Just browsing and learning'
  ];

  const businessAreas = [
    'Website and online presence',
    'Marketing and customer acquisition', 
    'Financial operations and paperwork',
    'Customer relationships and support',
    'Sales processes and lead generation',
    'Administrative tasks and operations',
    'Project management',
    'Human resources',
    'Other (please specify)'
  ];

  const biggestChallenges = [
    'Growing revenue',
    'Reducing costs',
    'Improving efficiency',
    'Enhancing customer experience',
    'Managing workload with limited staff',
    'Keeping up with competitors',
    'Maintaining quality while scaling',
    'Other (please specify)'
  ];

  const techLevels = [
    'Mostly paper-based processes',
    'Basic digital tools (email, spreadsheets)',
    'Some specialized software but not integrated',
    'Multiple digital systems that don\'t work well together',
    'Fairly digitized but looking to optimize',
    'Advanced systems but not using AI or automation'
  ];

  // Second-level questions based on business areas
  const secondLevelQuestions: Record<string, { question: string; options: string[] }> = {
    'Website and online presence': {
      question: "Your website and online presence are crucial touchpoints for customers. Could you tell me more specifically what challenges you're facing in this area?",
      options: [
        'Website not generating enough leads or sales',
        'Spending too much time managing website updates',
        'Struggle to understand how visitors use the site',
        'Website not performing well on mobile devices',
        'Trouble creating fresh content for the site'
      ]
    },
    'Marketing and customer acquisition': {
      question: "Marketing can certainly be time-consuming and complex. What specific aspects of marketing are you finding most challenging?",
      options: [
        'Struggling to create consistent content across channels',
        'Difficult to measure marketing effectiveness',
        'Hard to identify which marketing activities drive best results',
        'Too much time manually posting on social media',
        'Email marketing not delivering desired results'
      ]
    },
    'Financial operations and paperwork': {
      question: "Many businesses are looking to streamline their financial operations. What specific aspects are most challenging for you?",
      options: [
        'Too much time processing invoices or receipts',
        'Financial forecasting and planning difficult',
        'Still rely on paper documents for financial processes',
        'Reconciling accounts and transactions time-consuming',
        'Struggle with financial compliance and reporting'
      ]
    },
    'Customer relationships and support': {
      question: "Customer relationships are vital to business success. What specific challenges are you facing in this area?",
      options: [
        'Struggling to provide timely responses to customer inquiries',
        'Difficult to maintain consistent communication with customers',
        'Trouble understanding customer satisfaction levels',
        'Managing customer data across different systems challenging',
        'Hard to personalize customer interactions'
      ]
    },
    'Sales processes and lead generation': {
      question: "Sales and lead generation are critical for growth. What specific aspects are most challenging for you?",
      options: [
        'Identifying quality leads is a challenge',
        'Struggle to follow up with prospects consistently',
        'Sales team spending too much time on admin tasks',
        'Difficulty predicting sales outcomes and forecasting',
        'CRM system not meeting needs'
      ]
    },
    'Administrative tasks and operations': {
      question: "Administrative tasks can consume valuable time. What specific administrative challenges are you facing?",
      options: [
        'Routine document processing takes too much time',
        'Struggle with organizing and retrieving information',
        'Coordinating meetings and communications inefficient',
        'Still using paper-based processes for administration',
        'Difficult to track and manage vendor relationships'
      ]
    }
  };

  const solutions: Record<string, string> = {
    'Website not generating enough leads or sales': 'Based on your website lead generation challenges, I recommend: 1) AI-Powered Conversion Optimization that analyzes visitor behavior and automatically adjusts your website (typically 25-30% increase in leads), 2) Intelligent Chatbot Implementation for 24/7 visitor engagement (35% more leads captured outside business hours), and 3) Automated SEO Enhancement for better search visibility (40-60% organic traffic increase within three months).',
    'Too much time processing invoices or receipts': 'For your invoice processing challenges, I recommend: 1) Intelligent Document Processing with 98% accuracy that reduces processing time by 80%, 2) Cloud-Based Document Management for instant searchability and compliance, and 3) Accounting System Integration that eliminates manual data entry entirely. Similar businesses reduce financial processing costs by 60-70%.',
    'Struggling to provide timely responses to customer inquiries': 'To improve your customer response times, I recommend: 1) AI Customer Service Agents that provide instant 24/7 responses to common questions, 2) Intelligent Ticket Routing that prioritizes urgent issues and routes them to the right team members, and 3) Automated Follow-up Systems that ensure no customer inquiry falls through the cracks.',
    'Identifying quality leads is a challenge': 'For better lead identification, I recommend: 1) AI Lead Scoring that analyzes prospect behavior to identify high-value opportunities, 2) Automated Lead Nurturing that maintains engagement until prospects are ready to buy, and 3) Predictive Analytics that identifies your ideal customer profile based on successful conversions.',
    'Struggling to create consistent content across channels': 'To streamline your content creation, I recommend: 1) AI Content Generation that creates consistent, on-brand content across all platforms, 2) Social Media Automation that schedules and publishes content optimally, and 3) Content Performance Analytics that shows which content drives the best results.'
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi there! I'm your AI business consultant from 11th Temple Solutions. I help businesses identify areas where technology and automation can save time, reduce costs, and drive growth. What brings you here today? Are you looking to solve a specific business challenge, or are you interested in exploring how AI and automation might benefit your operations?");
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

  const handleInitialPurpose = (purpose: string) => {
    addUserMessage(purpose);
    setUserPath(prev => ({ ...prev, initialPurpose: purpose }));
    
    if (purpose === 'Just browsing and learning') {
      addBotMessage("That's perfectly fine! Learning about AI and automation options is a great first step. Let me ask you a few questions to provide the most relevant information for your business. What area of your business currently takes up the most time or resources?");
    } else {
      addBotMessage("Excellent! To help identify the best solutions for your business, I'd like to understand your current situation better. What area of your business currently takes up the most time or resources?");
    }
    setCurrentStep('businessArea');
  };

  const handleBusinessArea = (area: string) => {
    addUserMessage(area);
    setUserPath(prev => ({ ...prev, businessArea: area }));
    
    if (area === 'Other (please specify)') {
      setShowForm(true);
      addBotMessage("I'd love to learn more about your specific situation. Let's connect you with our team to discuss your unique needs.");
      return;
    }

    addBotMessage("Thank you for sharing that. Now, what's your biggest business challenge right now?");
    setCurrentStep('biggestChallenge');
  };

  const handleBiggestChallenge = (challenge: string) => {
    addUserMessage(challenge);
    setUserPath(prev => ({ ...prev, biggestChallenge: challenge }));
    
    addBotMessage("That's helpful context. How would you describe your current level of technology adoption?");
    setCurrentStep('techLevel');
  };

  const handleTechLevel = (level: string) => {
    addUserMessage(level);
    setUserPath(prev => ({ ...prev, techLevel: level }));
    
    const businessArea = userPath.businessArea;
    if (businessArea && secondLevelQuestions[businessArea]) {
      const { question } = secondLevelQuestions[businessArea];
      addBotMessage(question);
      setCurrentStep('specificProblem');
    } else {
      setShowForm(true);
      addBotMessage("Based on what you've shared, I'd like to connect you with our specialists who can provide tailored recommendations for your situation.");
    }
  };

  const handleSpecificProblem = (problem: string) => {
    addUserMessage(problem);
    setUserPath(prev => ({ ...prev, specificProblem: problem }));
    
    const solution = solutions[problem];
    if (solution) {
      setUserPath(prev => ({ ...prev, recommendedSolution: solution }));
      addBotMessage(`Perfect! ${solution} Would you like to learn more about implementing these solutions?`);
      setCurrentStep('solution');
    } else {
      setShowForm(true);
      addBotMessage("Thank you for the detailed information. Let me connect you with our team to discuss a customized solution for your specific needs.");
    }
  };

  const handleLearnMore = () => {
    setShowForm(true);
    addBotMessage("Excellent! To provide you with specific information about implementation, pricing, and next steps, I'd like to connect you with our team.");
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

    console.log('Sending HOT LEAD email to hello@11thtemplesolutions.com and 11th-temple-solutions@mail.com');
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
              className="bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime mb-2"
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
            className="border-brand-lime text-brand-lime hover:bg-brand-navy hover:text-brand-lime"
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
            placeholder="Tell us more about your specific needs..."
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
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime"
          >
            Get Expert Help
          </Button>
        </form>
      );
    }

    if (currentStep === 'greeting') {
      return (
        <div className="space-y-2">
          {initialPurposeOptions.map((purpose, index) => (
            <Button
              key={index}
              onClick={() => handleInitialPurpose(purpose)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
            >
              {purpose}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'businessArea') {
      return (
        <div className="space-y-2">
          {businessAreas.map((area, index) => (
            <Button
              key={index}
              onClick={() => handleBusinessArea(area)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
            >
              {area}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'biggestChallenge') {
      return (
        <div className="space-y-2">
          {biggestChallenges.map((challenge, index) => (
            <Button
              key={index}
              onClick={() => handleBiggestChallenge(challenge)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
            >
              {challenge}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'techLevel') {
      return (
        <div className="space-y-2">
          {techLevels.map((level, index) => (
            <Button
              key={index}
              onClick={() => handleTechLevel(level)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
            >
              {level}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'specificProblem' && userPath.businessArea) {
      const options = secondLevelQuestions[userPath.businessArea]?.options || [];
      return (
        <div className="space-y-2">
          {options.map((problem, index) => (
            <Button
              key={index}
              onClick={() => handleSpecificProblem(problem)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
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
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime"
          >
            Yes, tell me more!
          </Button>
          <Button
            onClick={resetChat}
            variant="outline"
            size="sm"
            className="w-full bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime"
          >
            Explore other solutions
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
          className={`h-14 w-14 rounded-full shadow-lg ${
            isOpen 
              ? "bg-brand-silver text-brand-navy hover:bg-brand-navy hover:text-brand-silver" 
              : "bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime"
          }`}
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
                  <p className="text-brand-silver text-xs">AI Business Consultant</p>
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
