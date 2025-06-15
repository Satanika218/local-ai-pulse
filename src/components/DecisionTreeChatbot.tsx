import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import ChatHeader from "./chatbot/ChatHeader";
import MessageList from "./chatbot/MessageList";
import OptionsRenderer from "./chatbot/OptionsRenderer";
import ContactForm from "./chatbot/ContactForm";
import { secondLevelQuestions, problemDetailsQuestions } from "./chatbot/conversationData";
import { generateSolutionExplanation, generateUnderstandingSummary } from "./chatbot/ConversationHandlers";

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
    
    if (area === 'Something else (please tell me more)') {
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
    
    const followUpQuestion = problemDetailsQuestions[problem];
    if (followUpQuestion) {
      addBotMessage(followUpQuestion);
      setCurrentStep('problemDetails');
    } else {
      // Generate understanding summary for problems without specific follow-up questions
      const summary = generateUnderstandingSummary(problem);
      addBotMessage(summary);
      setCurrentStep('understandsProblem');
    }
  };

  const handleProblemDetails = (details: string) => {
    addUserMessage(details);
    setUserPath(prev => ({ ...prev, problemDetails: details }));
    
    // Generate understanding summary based on the specific problem
    const problem = userPath.specificProblem;
    if (problem) {
      const summary = generateUnderstandingSummary(problem, details);
      addBotMessage(summary);
    } else {
      addBotMessage("Based on what you've shared, it seems like this area is taking up more time and energy than you'd like, and you're looking for ways to make it more efficient. Does that capture the main issue?");
    }
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
    
    // Generate solution explanation based on the specific problem
    const problem = userPath.specificProblem;
    if (problem) {
      const solutionExplanation = generateSolutionExplanation(problem, userPath);
      addBotMessage(solutionExplanation);
    } else {
      addBotMessage("Based on your situation, there are definitely automated solutions that can help streamline this process for you. The key is finding the right combination of tools that work specifically for your business. Would you like to discuss some options that might fit your needs?");
    }
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
              <ChatHeader 
                currentStep={currentStep}
                showForm={showForm}
                onReset={resetChat}
              />

              <MessageList 
                messages={messages}
                isTyping={isTyping}
              />
              
              <div>
                {showForm ? (
                  <ContactForm
                    formData={formData}
                    userPath={userPath}
                    formSubmitted={formSubmitted}
                    onInputChange={handleInputChange}
                    onSubmit={handleFormSubmit}
                    onReset={resetChat}
                  />
                ) : (
                  <OptionsRenderer
                    currentStep={currentStep}
                    userPath={userPath}
                    onInitialPurpose={handleInitialPurpose}
                    onBusinessArea={handleBusinessArea}
                    onBiggestChallenge={handleBiggestChallenge}
                    onTechLevel={handleTechLevel}
                    onSpecificProblem={handleSpecificProblem}
                    onProblemDetails={handleProblemDetails}
                    onUnderstandsProblem={handleUnderstandsProblem}
                    onSolutionInterest={handleSolutionInterest}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default DecisionTreeChatbot;
