
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Star, Bot, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-brand-lime" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation solutions tailored for UK businesses.",
      link: "/services/process-automation"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Local SEO AI",
      description: "Dominate local search results with AI that understands your community's unique characteristics and UK market dynamics."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Customer Insights",
      description: "Understand your local customers better with AI-driven analytics and behavioural patterns specific to UK markets."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Smart Responses",
      description: "AI-powered customer service that speaks your local language, understands UK culture, and operates within GMT/BST hours."
    }
  ];

  const benefits = [
    "30% increase in local customer engagement across UK markets",
    "50% reduction in operational costs for SMEs", 
    "24/7 intelligent customer support with UK data protection compliance",
    "Real-time local market insights tailored for British businesses"
  ];

  const testimonials = [
    {
      name: "Sarah Williams",
      business: "Williams & Co. Solicitors, Cardiff",
      content: "11th Temple's automation solutions helped us serve 60% more clients whilst maintaining the personal touch our Welsh community expects.",
      rating: 5
    },
    {
      name: "James McKenzie", 
      business: "Highland Farm Shop, Scottish Borders",
      content: "Their local SEO AI increased our online orders by 45% and helped us reach customers we never thought possible in rural Scotland.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      business: "Cotswold Craft Brewery",
      content: "The customer insights tool revealed buying patterns we'd never noticed. Sales are up 35% and we understand our community better than ever.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            {/* Logo above main text */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
                alt="11th Temple Solutions Logo" 
                className="h-64 w-64 mx-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powering <span className="gradient-text">Local Business</span>
              <br />with AI Automation
            </h1>
            <p className="text-xl text-brand-silver mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge AI automation solutions tailored specifically for UK local businesses. 
              Our deep understanding of British community dynamics and rural business challenges helps your business thrive in the digital age.
            </p>
            <div className="flex justify-center">
              <Link to="/services-overview">
                <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold glow-effect animate-pulse-glow">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Local Knowledge, <span className="text-brand-lime">Global Technology</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Our AI solutions are designed specifically for UK local businesses who want to leverage automation 
              whilst maintaining their community connection and complying with British data protection standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link}>
                <Card className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 hover:glow-effect group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-brand-silver">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Results for <span className="text-brand-lime">UK Local Businesses</span>
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Our AI automation solutions are specifically designed to understand and leverage local UK market dynamics, 
                giving your business a competitive edge in your community whilst ensuring full compliance with UK data protection regulations.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-brand-silver mb-6">
                  Join hundreds of UK local businesses already using our AI automation solutions.
                </p>
                <Link to="/consultation">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-brand-lime">UK Partners</span> Say
            </h2>
            <p className="text-xl text-brand-silver">
              Results from local businesses across Wales, Scotland, and England.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-lime fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-silver mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-brand-silver/20 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-brand-lime text-sm">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UK Compliance Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">UK Compliant & Secure</h3>
            <p className="text-brand-silver mb-6 max-w-3xl mx-auto">
              All our AI solutions are designed with UK data protection regulations in mind. We understand the importance of 
              GDPR compliance, local data storage requirements, and maintaining the trust your community places in your business.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">GDPR Compliant</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">UK Data Storage</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">Local Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Get a free consultation and discover how AI automation can transform your UK business whilst maintaining your local community connection.
          </p>
          <div className="flex justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Index;
