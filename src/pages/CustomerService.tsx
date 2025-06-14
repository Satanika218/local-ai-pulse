
import { Users, CheckCircle, ArrowRight, MessageCircle, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CustomerService = () => {
  const features = [
    "24/7 intelligent customer support agents",
    "Local dialect and cultural understanding",
    "Seamless handoff to human agents when needed",
    "Multi-channel support (chat, email, phone)",
    "Integration with your existing systems",
    "Continuous learning and improvement"
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-lime" />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry, even outside business hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-lime" />,
      title: "Instant Responses",
      description: "Provide immediate answers to common customer questions"
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-lime" />,
      title: "Local Understanding",
      description: "AI agents that understand your local community and culture"
    }
  ];

  const capabilities = [
    "Answer frequently asked questions instantly",
    "Process orders and bookings automatically",
    "Provide product information and recommendations",
    "Handle appointment scheduling and changes",
    "Collect customer feedback and reviews",
    "Escalate complex issues to human staff"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Users className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer Service <span className="text-brand-lime">Agents</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Provide exceptional 24/7 customer support with AI agents that understand 
              your local community and speak your customers' language.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Try AI Customer Service
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
              Intelligent Customer <span className="text-brand-lime">Support</span>
            </h2>
            <p className="text-xl text-brand-silver">
              AI-powered customer service that feels personal and local.
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
              Why Choose AI <span className="text-brand-lime">Customer Service</span>
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

      {/* Capabilities Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our AI Agents <span className="text-brand-lime">Can Do</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Comprehensive customer support capabilities designed for local businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{capability}</span>
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
            Ready to Enhance Customer Support?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Starting at £149/month. Get a free demo and see how AI can transform your customer service.
          </p>
          <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Schedule Free Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerService;
