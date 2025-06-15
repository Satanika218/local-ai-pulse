
import { Bot, TrendingUp, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesChatbot from "@/components/ServicesChatbot";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-brand-lime" />,
      title: "Process Automation",
      description: "Streamline your local business operations with intelligent automation that knows your community.",
      fullDescription: "Transform repetitive tasks into automated workflows that understand your local business context. Our AI-powered automation solutions eliminate manual processes while maintaining the personal touch your community expects. From invoice processing to customer onboarding, we automate what matters most to your local operations.",
      benefits: [
        "Save 40+ hours per week on manual tasks",
        "Reduce human error by 95%",
        "24/7 automated operations",
        "Custom workflows for your business"
      ],
      link: "/services/process-automation"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-lime" />,
      title: "Local SEO AI",
      description: "Dominate local search results with AI that understands your neighbourhood's unique characteristics.",
      fullDescription: "Leverage AI that truly understands your local market dynamics to dominate search results in your area. Our Local SEO AI analyses neighbourhood patterns, local events, and community behaviour to optimise your online presence for maximum local visibility and customer acquisition.",
      benefits: [
        "Increase local search visibility by 200%",
        "Attract more foot traffic from your area",
        "Automated local content creation",
        "Community-focused keyword optimisation"
      ],
      link: "/services/local-seo"
    },
    {
      icon: <Users className="h-12 w-12 text-brand-lime" />,
      title: "Customer Insights",
      description: "Understand your local customers better with AI-driven analytics and behavioural patterns.",
      fullDescription: "Gain deep insights into your local customer base with AI analytics that reveal shopping patterns, preferences, and behaviours unique to your community. Make data-driven decisions that resonate with your local market and increase customer lifetime value through personalised experiences.",
      benefits: [
        "Understand local buying patterns",
        "Predict seasonal demand fluctuations",
        "Personalise customer experiences",
        "Increase customer retention by 45%"
      ],
      link: "/services/data-analytics"
    },
    {
      icon: <Zap className="h-12 w-12 text-brand-lime" />,
      title: "Smart Responses",
      description: "AI-powered customer service that speaks your local language and culture.",
      fullDescription: "Deploy intelligent customer service agents that understand your local dialect, cultural nuances, and community values. Our Smart Response system provides 24/7 customer support while maintaining the personal, friendly service your local customers expect and deserve.",
      benefits: [
        "24/7 intelligent customer support",
        "Instant response to customer inquiries",
        "Local cultural understanding",
        "Seamless escalation to human agents"
      ],
      link: "/services/customer-service"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-brand-lime">AI Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Discover how our four core AI automation services can transform your local business 
              operations and help you better serve your community.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="bg-brand-navy border-brand-silver/20 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        {service.icon}
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-brand-silver text-lg mb-6">{service.fullDescription}</p>
                      <div className="space-y-3 mb-6">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                            <span className="text-brand-silver">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-center">
                        <Link to={service.link}>
                          <Button className="bg-brand-silver text-black hover:bg-brand-silver/90 font-semibold">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                      <h4 className="text-xl font-bold text-white mb-4">Why Choose This Service?</h4>
                      <p className="text-brand-silver mb-6">
                        {service.description} Our solution is specifically designed for local businesses 
                        who want to leverage cutting-edge technology while maintaining their community connection.
                      </p>
                      <Link to="/consultation">
                        <Button variant="outline" className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy w-full">
                          Get Free Consultation
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Choose the services that fit your needs or get a custom package designed for your local business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-silver text-black hover:bg-brand-silver/90 font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesChatbot />
      <Footer />
    </div>
  );
};

export default ServicesOverview;
