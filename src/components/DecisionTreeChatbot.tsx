
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
  problemDetails?: string;
  understandsProblem?: string;
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
    'Website compliance and technical performance',
    'Going paperless',
    'Moving to the cloud',
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
    },
    'Website compliance and technical performance': {
      question: "Making sure your website follows privacy rules and performs well is important for any business. What's your main concern in this area?",
      options: [
        'You\'re not sure if your website is following GDPR privacy rules',
        'You want to check if your website is working properly and securely',
        'You\'re concerned about cookies and privacy notices on your website',
        'You\'ve heard about website accessibility but don\'t know if your site complies',
        'You\'re worried about potential fines or legal issues related to your website',
        'You want to know how well your website performs compared to competitors'
      ]
    },
    'Going paperless': {
      question: "Moving away from paper documents can save space, time, and trees. What's your main concern about going paperless?",
      options: [
        'You\'re not sure how to start converting paper documents to digital',
        'You\'re worried about the security of digital documents',
        'You need certain documents to have signatures or be legally valid',
        'You\'re concerned about finding digital documents when you need them',
        'Your team is used to paper processes and might resist change',
        'You need to keep some paper records for compliance or regulatory reasons'
      ]
    },
    'Moving to the cloud': {
      question: "Storing your information and running programs over the internet instead of just on your computer can be a big change. What's your main question or concern about moving to the cloud?",
      options: [
        'You\'re not sure what "the cloud" actually means for your business',
        'You\'re concerned about the security of your information online',
        'You\'re worried about what happens if the internet goes down',
        'You\'re not sure if cloud solutions will work with your existing systems',
        'You\'re concerned about the cost of cloud services',
        'You\'re worried about being dependent on another company for your systems'
      ]
    }
  };

  // Third-level questions for GDPR compliance
  const gdprThirdLevelQuestions: Record<string, { question: string; options: string[] }> = {
    'You\'re not sure if your website is following GDPR privacy rules': {
      question: "I understand you're concerned about whether your website follows GDPR privacy rules. Many business owners find this confusing, and you're not alone - about 70% of small businesses aren't fully confident in their GDPR compliance. To help identify the best solution, could you tell me:",
      options: [
        'Does your website collect any personal information from visitors, like names, email addresses, or phone numbers?',
        'Do you have a privacy policy on your website that explains how you use people\'s information?',
        'Does your website use forms where people can submit their details?',
        'Do you know if your website uses cookies to track visitor behavior?'
      ]
    },
    'You want to check if your website is working properly and securely': {
      question: "I understand you want to check if your website is working properly and securely. A thorough website audit can identify issues you might not be aware of. To recommend the most helpful approach, could you tell me:",
      options: [
        'Have you noticed any specific problems with your website, like slow loading or error messages?',
        'When was the last time someone checked your website for technical or security issues?',
        'Do you sell products or take payments directly through your website?',
        'Are you concerned more about how well your website works, or about potential security vulnerabilities?'
      ]
    }
  };

  // Follow-up questions to understand the problem better
  const problemDetailsQuestions: Record<string, string> = {
    'Website not generating enough leads or sales': 'I understand that can be frustrating. Can you tell me - when people visit your website, do you know where they typically leave without taking action? For example, do they browse your services but not contact you, or do they leave right from the homepage?',
    'Too much time processing invoices or receipts': 'That sounds like it takes up a lot of your valuable time. Can you help me understand your current process? Are you manually typing information from paper invoices into your computer, or are you dealing with digital files that still need manual sorting?',
    'Struggling to provide timely responses to customer inquiries': 'Customer response time is so important for business success. Are your customers mainly reaching out through email, phone calls, or through your website? And what would you consider a "timely" response in your business?',
    'Identifying quality leads is a challenge': 'Lead quality can make such a difference to your sales success. When you do get leads, are you finding that many of them aren\'t a good fit for your services, or is it more that you\'re not getting enough leads in the first place?',
    'Struggling to create consistent content across channels': 'Content creation can definitely feel overwhelming. Are you trying to manage social media, email newsletters, website content, or all of the above? And is the challenge more about finding time to create content or knowing what content to create?'
  };

  // Understanding check questions
  const understandingOptions = [
    'Yes, that sounds exactly like my situation',
    'Partially, but there are other factors involved',
    'Not quite, let me explain more'
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage("Hi there! I'm your AI business consultant from 11th Temple Solutions. I help businesses identify areas where technology and automation can save time, reduce costs, and drive growth. What brings you here today?");
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
    
    // Check if this is a GDPR compliance or website audit question
    if (userPath.businessArea === 'Website compliance and technical performance') {
      const gdprQuestion = gdprThirdLevelQuestions[problem];
      if (gdprQuestion) {
        addBotMessage(gdprQuestion.question);
        setCurrentStep('gdprThirdLevel');
        return;
      }
    }
    
    // Ask follow-up question to understand the problem better
    const followUpQuestion = problemDetailsQuestions[problem];
    if (followUpQuestion) {
      addBotMessage(followUpQuestion);
      setCurrentStep('problemDetails');
    } else {
      // For problems without specific follow-ups, go to understanding check
      addBotMessage("I want to make sure I understand your situation correctly. Based on what you've told me, it sounds like you're facing challenges with time management and efficiency in this area. Does that sound right?");
      setCurrentStep('understandsProblem');
    }
  };

  const handleGdprThirdLevel = (answer: string) => {
    addUserMessage(answer);
    setUserPath(prev => ({ ...prev, problemDetails: answer }));
    
    const problem = userPath.specificProblem;
    let solutionExplanation = '';
    
    if (problem === 'You\'re not sure if your website is following GDPR privacy rules') {
      solutionExplanation = "Based on what you've shared about your GDPR compliance concerns, here are three approaches that could help:\n\n1. **Website Privacy Check-Up**: We can perform a thorough review of your website to identify any GDPR compliance issues and provide a clear action plan to fix them. Think of it like a health check-up for your website's privacy practices. This typically gives business owners peace of mind and a clear roadmap for compliance.\n\n2. **Privacy Essentials Package**: We can implement the core privacy elements your website needs - including a properly written privacy policy, compliant cookie notices, and secure forms. It's like having a privacy expert set up all the necessary safeguards for your business. Most businesses find this reduces their compliance concerns by over 90%.\n\n3. **Ongoing Compliance Monitoring**: We can set up a system that continuously checks your website for compliance issues as regulations change or if your website is updated. It's similar to having a security guard who's always on duty, watching for potential problems.\n\nIt's worth noting that proper GDPR compliance not only helps you avoid potential fines (which can be up to £17.5 million or 4% of annual turnover), but it also builds trust with your customers. Would you like to learn more about any of these options?";
    } else if (problem === 'You want to check if your website is working properly and securely') {
      solutionExplanation = "Based on what you've shared about checking your website's performance and security, here are three approaches that could help:\n\n1. **Complete Website Health Check**: We can perform a comprehensive audit of your website that examines everything from loading speed to security vulnerabilities. It's like taking your car for a full service where mechanics check everything from the engine to the brakes. Businesses typically discover 12-15 improvement opportunities they weren't aware of.\n\n2. **Security-Focused Audit**: We can conduct a specialized security assessment that identifies vulnerabilities hackers could exploit. Think of it as having a security expert check all the locks and alarm systems in your building. This typically gives business owners confidence that their website and customer data are protected.\n\n3. **Performance Optimization Review**: We can analyze what's making your website slow or difficult to use and provide specific recommendations to fix these issues. It's similar to having an efficiency expert streamline a manufacturing process. Most businesses see page loading times improve by 40-60% after implementing our recommendations.\n\nRegular website audits are like preventative healthcare - they catch small issues before they become serious problems. Which of these options sounds most helpful for your situation?";
    }
    
    addBotMessage(solutionExplanation);
    setCurrentStep('solutionExplanation');
  };

  const handleProblemDetails = (details: string) => {
    addUserMessage(details);
    setUserPath(prev => ({ ...prev, problemDetails: details }));
    
    // Now provide understanding summary and check
    const problem = userPath.specificProblem;
    let summary = '';
    
    if (problem === 'Website not generating enough leads or sales') {
      summary = "So it sounds like people are visiting your website but not taking the next step to contact you or make a purchase. This often happens when visitors can't quickly find what they're looking for or don't feel confident enough to reach out. Does that capture the main issue?";
    } else if (problem === 'Too much time processing invoices or receipts') {
      summary = "I see, so you're spending considerable time on manual data entry and document handling. This is actually one of the most common time drains for businesses. Does it feel like this task is taking time away from more important business activities?";
    } else if (problem === 'Struggling to provide timely responses to customer inquiries') {
      summary = "It sounds like you want to respond to customers quickly but sometimes get overwhelmed with the volume or timing of inquiries. Quick responses really do make a difference in customer satisfaction. Is that the main challenge?";
    } else if (problem === 'Identifying quality leads is a challenge') {
      summary = "So you're getting leads but finding that many aren't a good fit, which means time spent on prospects who won't convert. That can be really frustrating and inefficient. Is that hitting the mark?";
    } else if (problem === 'Struggling to create consistent content across channels') {
      summary = "It sounds like you know content is important but finding the time and knowing what to create is the challenge. Staying consistent across multiple platforms can definitely feel overwhelming. Does that sound right?";
    } else {
      summary = "Based on what you've shared, it seems like this area is taking up more time and energy than you'd like, and you're looking for ways to make it more efficient. Does that capture the main issue?";
    }
    
    addBotMessage(summary);
    setCurrentStep('understandsProblem');
  };

  const handleUnderstandsProblem = (understanding: string) => {
    addUserMessage(understanding);
    setUserPath(prev => ({ ...prev, understandsProblem: understanding }));
    
    if (understanding === 'Not quite, let me explain more') {
      setShowForm(true);
      addBotMessage("I'd love to understand your situation better. Let me connect you with one of our specialists who can have a more detailed conversation about your specific needs.");
      return;
    }
    
    // Now provide a conversational solution explanation
    const problem = userPath.specificProblem;
    let solutionExplanation = '';
    
    if (problem === 'Website not generating enough leads or sales') {
      solutionExplanation = "Great! So there are actually several ways we can help with this. Think of it like having a sales assistant working on your website 24/7. We can add tools that watch how visitors use your site and automatically make small improvements to encourage them to contact you. We can also add a friendly chat feature that answers common questions instantly and captures contact information when you're not available. Would you like to learn more about how these kinds of tools work?";
    } else if (problem === 'Too much time processing invoices or receipts') {
      solutionExplanation = "Perfect! What we can do is essentially teach a computer to read your invoices and receipts just like you do, but much faster. Imagine being able to take a photo of an invoice with your phone, and having all the important information automatically entered into your accounting system within seconds. We can set up a system that handles about 95% of your document processing automatically, only asking for your review on unusual items. Does that sound like something that would help?";
    } else if (problem === 'Struggling to provide timely responses to customer inquiries') {
      solutionExplanation = "Excellent! Think of this like having a knowledgeable team member available 24/7 who never gets tired and always responds instantly. We can set up an intelligent system that answers common customer questions immediately, and for more complex issues, it can gather the initial information and make sure the inquiry gets to the right person on your team. This means customers get instant help for simple questions, and you get better organized information for the complex ones. Does this approach sound helpful?";
    } else if (problem === 'Identifying quality leads is a challenge') {
      solutionExplanation = "Great! We can help you set up a system that's like having an experienced salesperson evaluate every lead before it gets to you. The system learns from your successful customers to identify which new prospects are most likely to become good clients. It can also nurture potential customers automatically until they're ready to buy, so you're not spending time on people who aren't ready yet. Would this kind of lead filtering and nurturing be valuable for your business?";
    } else if (problem === 'Struggling to create consistent content across channels') {
      solutionExplanation = "Perfect! We can help you set up a system that's like having a marketing assistant who knows your business well. It can help create content ideas based on what works in your industry, write posts in your brand voice, and even schedule them across your different platforms automatically. Think of it as taking one good piece of content and intelligently adapting it for different platforms and audiences. Does this kind of content assistance sound useful?";
    } else {
      solutionExplanation = "Based on your situation, there are definitely automated solutions that can help streamline this process for you. The key is finding the right combination of tools that work specifically for your business. Would you like to discuss some options that might fit your needs?";
    }
    
    addBotMessage(solutionExplanation);
    setCurrentStep('solutionExplanation');
  };

  const handleSolutionInterest = (interested: boolean) => {
    if (interested) {
      addUserMessage("Yes, that sounds helpful!");
      setShowForm(true);
      addBotMessage("Excellent! I'd love to connect you with one of our specialists who can show you exactly how these solutions would work for your specific business and provide you with pricing and implementation details.");
    } else {
      addUserMessage("I'd like to explore other options");
      // Reset to explore other areas
      addBotMessage("No problem at all! Let's explore other areas of your business. What other area takes up significant time or resources that we haven't discussed yet?");
      setCurrentStep('businessArea');
    }
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
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
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
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
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
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
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
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
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
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
            >
              {problem}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'gdprThirdLevel' && userPath.specificProblem) {
      const gdprOptions = gdprThirdLevelQuestions[userPath.specificProblem]?.options || [];
      return (
        <div className="space-y-2">
          {gdprOptions.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleGdprThirdLevel(option)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
            >
              {option}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'problemDetails') {
      return (
        <div className="space-y-2">
          <Input
            placeholder="Tell me more about your situation..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const value = (e.target as HTMLInputElement).value;
                if (value.trim()) {
                  handleProblemDetails(value);
                  (e.target as HTMLInputElement).value = '';
                }
              }
            }}
            className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
          />
        </div>
      );
    }

    if (currentStep === 'understandsProblem') {
      return (
        <div className="space-y-2">
          {understandingOptions.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleUnderstandsProblem(option)}
              variant="outline"
              size="sm"
              className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
            >
              {option}
            </Button>
          ))}
        </div>
      );
    }

    if (currentStep === 'solutionExplanation') {
      return (
        <div className="space-y-2">
          <Button
            onClick={() => handleSolutionInterest(true)}
            size="sm"
            className="w-full bg-brand-lime text-black hover:bg-black hover:text-brand-lime"
          >
            Yes, tell me more!
          </Button>
          <Button
            onClick={() => handleSolutionInterest(false)}
            variant="outline"
            size="sm"
            className="w-full bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime"
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
