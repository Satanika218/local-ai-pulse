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
    'Administrative Operations'
  ];

  // Streamlined problem suggestions for each category
  const categoryProblems: Record<string, string[]> = {
    'Website & Digital Presence': [
      'Website is outdated and looks unprofessional',
      'Website loads slowly and has poor mobile experience',
      'Website doesn\'t generate leads or sales'
    ],
    'Digital Marketing': [
      'Social media posting is inconsistent and time-consuming',
      'Email marketing has low open rates and engagement',
      'SEO performance is poor with low search rankings'
    ],
    'Creative & Design': [
      'Need professional logo and consistent branding',
      'Creating marketing materials takes too much time',
      'Visual content lacks quality and consistency'
    ],
    'Financial Operations': [
      'Invoice processing and data entry is manual and slow',
      'Expense tracking and financial reporting is disorganized',
      'Cash flow forecasting is inaccurate'
    ],
    'Customer Relationships': [
      'Customer communication is generic and impersonal',
      'Missing insights about customer behavior and preferences',
      'Difficulty retaining customers and predicting churn'
    ],
    'Sales & Lead Generation': [
      'Not generating enough quality leads',
      'Sales follow-up is inconsistent and manual',
      'Lead qualification and scoring is ineffective'
    ],
    'Human Resources': [
      'Resume screening and hiring process is overwhelming',
      'Employee onboarding lacks consistency',
      'Performance management and feedback is inefficient'
    ],
    'Customer Support': [
      'Response times to customer inquiries are too slow',
      'Support quality is inconsistent across team',
      'Cannot handle support volume during peak times'
    ],
    'Project Management': [
      'Task prioritization and deadlines are poorly managed',
      'Team workload is unbalanced and inefficient',
      'Project timelines are unrealistic and often missed'
    ],
    'Administrative Operations': [
      'Document management is disorganized and time-consuming',
      'Email overload is reducing productivity',
      'Manual data entry creates errors and delays'
    ]
  };

  const solutions: Record<string, string> = {
    'Website is outdated and looks unprofessional': 'Our AI website builder creates modern, professional websites tailored to your industry in days instead of months, with mobile optimization and SEO built-in.',
    'Website loads slowly and has poor mobile experience': 'Our performance optimization AI automatically improves site speed and mobile responsiveness, typically increasing page load speeds by 60% and mobile user engagement by 40%.',
    'Website doesn\'t generate leads or sales': 'Our conversion optimization AI analyzes user behavior and implements improvements that have increased lead generation by 35-50% for our clients.',
    'Social media posting is inconsistent and time-consuming': 'Our AI social media manager creates and schedules optimized content across all platforms, maintaining consistent presence while saving 15+ hours per week.',
    'Email marketing has low open rates and engagement': 'Our AI email optimization system analyzes recipient behavior to determine optimal send times and creates personalized subject lines that increase open rates by 35%.',
    'SEO performance is poor with low search rankings': 'Our AI-powered SEO system continuously optimizes your site against 200+ ranking factors, typically boosting organic traffic by 40-60% within three months.',
    'Need professional logo and consistent branding': 'Our AI design system creates professional logos and brand guidelines based on your industry and values, delivering complete brand identity in minutes instead of weeks.',
    'Creating marketing materials takes too much time': 'Our AI design assistant creates professional graphics, presentations, and marketing materials without requiring design expertise, reducing creation time by 80%.',
    'Visual content lacks quality and consistency': 'Our automated image enhancement AI processes and optimizes visual content at scale, ensuring consistent quality and style across all materials.',
    'Invoice processing and data entry is manual and slow': 'Our AI document processing system automatically extracts, categorizes, and enters invoice data, reducing processing time by 80% and virtually eliminating errors.',
    'Expense tracking and financial reporting is disorganized': 'Our AI expense management system automatically categorizes expenses and generates financial reports, integrating seamlessly with your accounting software.',
    'Cash flow forecasting is inaccurate': 'Our predictive financial AI analyzes historical patterns and market trends to provide accurate cash flow forecasts, helping you make confident business decisions.',
    'Customer communication is generic and impersonal': 'Our AI personalization engine creates individualized communications that speak directly to each customer\'s needs, increasing engagement by 40% on average.',
    'Missing insights about customer behavior and preferences': 'Our customer analysis AI identifies meaningful behavioral patterns and preferences, providing actionable insights to improve satisfaction and retention.',
    'Difficulty retaining customers and predicting churn': 'Our predictive AI identifies customers showing signs of disengagement before they leave, enabling proactive retention efforts that reduce churn by 30%.',
    'Not generating enough quality leads': 'Our AI lead generation system identifies high-potential prospects based on behavioral data, delivering qualified leads that match your ideal customer profile.',
    'Sales follow-up is inconsistent and manual': 'Our automated follow-up system ensures timely, personalized communication throughout the sales cycle, increasing conversion rates by 28% on average.',
    'Lead qualification and scoring is ineffective': 'Our lead scoring AI automatically evaluates prospects based on likelihood to convert, helping your sales team focus on the most promising opportunities.',
    'Resume screening and hiring process is overwhelming': 'Our AI recruitment assistant automatically screens applications to identify qualified candidates, reducing hiring time by 65% while improving candidate quality.',
    'Employee onboarding lacks consistency': 'Our AI onboarding system creates personalized experiences for new hires, ensuring they receive the right information at the right time for faster productivity.',
    'Performance management and feedback is inefficient': 'Our AI performance system tracks key metrics and provides automated feedback suggestions, improving employee engagement and development.',
    'Response times to customer inquiries are too slow': 'Our AI chatbot handles common inquiries instantly, 24/7, while routing complex issues to the right team members, improving satisfaction by 42%.',
    'Support quality is inconsistent across team': 'Our response suggestion AI provides optimal answers based on successful past interactions, ensuring consistent, high-quality service across all team members.',
    'Cannot handle support volume during peak times': 'Our AI support system automatically scales to handle increased volume, managing routine inquiries while prioritizing urgent issues for human attention.',
    'Task prioritization and deadlines are poorly managed': 'Our AI task manager automatically prioritizes work based on deadlines, dependencies, and business impact, ensuring your team focuses on what matters most.',
    'Team workload is unbalanced and inefficient': 'Our resource optimization AI balances workloads across your team based on skills and availability, improving productivity by 25-35% without increasing headcount.',
    'Project timelines are unrealistic and often missed': 'Our predictive project AI generates accurate timelines based on historical data and team capacity, preventing missed deadlines and scope creep.',
    'Document management is disorganized and time-consuming': 'Our AI document system automatically classifies, tags, and organizes files, making information instantly retrievable instead of lost in folders.',
    'Email overload is reducing productivity': 'Our email management AI prioritizes messages, drafts responses, and handles routine correspondence, typically saving 5-10 hours per week per employee.',
    'Manual data entry creates errors and delays': 'Our intelligent document processing AI extracts key information from any document type, eliminating manual data entry and reducing processing time by 85%.'
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi! I'm here to help you find the perfect AI solution for your business. What area would you like to improve?");
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
    
    const problems = categoryProblems[area] || [];
    addBotMessage(`Great! Here are some common ${area.toLowerCase()} challenges. Which sounds most like your situation?`);
    setCurrentStep('problemSelection');
  };

  const handleProblemSelect = (problem: string) => {
    addUserMessage(problem);
    setUserPath(prev => ({ ...prev, specificProblem: problem }));
    
    if (problem === "Not sure / Something else") {
      setShowForm(true);
      addBotMessage("No problem! Let's get you connected with our experts who can understand your specific needs.");
      return;
    }

    const solution = solutions[problem];
    if (solution) {
      setUserPath(prev => ({ ...prev, recommendedSolution: solution }));
      addBotMessage(`Perfect! ${solution} Would you like to learn more about this solution?`);
      setCurrentStep('solution');
    } else {
      setShowForm(true);
      addBotMessage("Let's connect you with our team to discuss a tailored solution for your specific needs.");
    }
  };

  const handleLearnMore = () => {
    setShowForm(true);
    addBotMessage("Excellent! To provide you with specific information about implementation and pricing, we'd like to learn more about your business.");
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
          {businessAreas.map((area, index) => (
            <Button
              key={index}
              onClick={() => handleBusinessAreaSelect(area)}
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

    if (currentStep === 'problemSelection' && userPath.mainCategory) {
      const problems = categoryProblems[userPath.mainCategory] || [];
      return (
        <div className="space-y-2">
          {problems.map((problem, index) => (
            <Button
              key={index}
              onClick={() => handleProblemSelect(problem)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
            >
              {problem}
            </Button>
          ))}
          <Button
            onClick={() => handleProblemSelect("Not sure / Something else")}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-brand-navy border-brand-lime hover:bg-brand-navy hover:text-brand-lime text-xs"
          >
            Not sure / Something else
          </Button>
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
          className="h-14 w-14 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime shadow-lg"
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
