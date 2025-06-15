
import { Bot, CheckCircle, ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { useState } from "react";

const ProcessAutomation = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const features = [
    "Custom workflow automation tailored to your business",
    "Local compliance and regulation integration",
    "Staff training and comprehensive onboarding",
    "24/7 monitoring and technical support",
    "Seamless integration with existing systems",
    "Real-time performance analytics and reporting"
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-lime" />,
      title: "Save 40+ Hours Weekly",
      description: "Automate repetitive tasks and focus on growing your business"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Increase Efficiency by 60%",
      description: "Streamlined processes that work around the clock"
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Reduce Human Error",
      description: "Consistent, accurate results every time"
    }
  ];

  const useCases = [
    "Automated invoice processing and payment reminders",
    "Customer onboarding and welcome sequences",
    "Inventory management and reorder notifications",
    "Appointment scheduling and confirmation",
    "Social media posting and engagement",
    "Email marketing campaigns and follow-ups"
  ];

  const handleGetStarted = () => {
    setIsChatbotOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bot className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Process <span className="text-brand-lime">Automation</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Transform your business operations with intelligent automation that understands 
              your local workflow and eliminates time-consuming manual tasks.
            </p>
            <Button 
              size="lg" 
              className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
              onClick={handleGetStarted}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What's <span className="text-brand-lime">Included</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Everything you need to automate your business processes effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                <span className="text-brand-silver text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your <span className="text-brand-lime">Business</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20 text-center">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-brand-silver">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular <span className="text-brand-lime">Use Cases</span>
            </h2>
            <p className="text-xl text-brand-silver">
              See how local businesses are automating their operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{useCase}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Processes?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Get a free consultation to see how we can streamline your operations.
          </p>
          <Button 
            size="lg" 
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
            onClick={handleGetStarted}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      
      {isChatbotOpen && (
        <div className="fixed inset-0 z-[9999]">
          <ChatbotLauncher />
        </div>
      )}
    </div>
  );
};

export default ProcessAutomation;
