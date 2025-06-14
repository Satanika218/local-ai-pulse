
import { ArrowRight, Bot, TrendingUp, Users, Zap, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-brand-lime" />,
      title: "Process Automation",
      description: "Streamline your local business operations with intelligent automation that knows your community."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Local SEO AI",
      description: "Dominate local search results with AI that understands your neighborhood's unique characteristics."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Customer Insights",
      description: "Understand your local customers better with AI-driven analytics and behavioral patterns."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Smart Responses",
      description: "AI-powered customer service that speaks your local language and culture."
    }
  ];

  const benefits = [
    "30% increase in local customer engagement",
    "50% reduction in operational costs", 
    "24/7 intelligent customer support",
    "Real-time local market insights"
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      business: "Martinez Family Restaurant",
      content: "11th Temple's local AI solutions increased our online orders by 40% in just 3 months!",
      rating: 5
    },
    {
      name: "Mike Thompson", 
      business: "Thompson Auto Repair",
      content: "Their automation helped us serve 60% more customers while maintaining personal service.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 circuit-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            {/* Logo above main text - significantly increased size for better visibility */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
                alt="11th Temple Solutions" 
                className="h-64 w-64 mx-auto drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering <span className="gradient-text">Local Business</span>
              <br />with AI Automation
            </h1>
            <p className="text-xl text-brand-silver mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge AI automation solutions tailored specifically for local businesses. 
              Our deep understanding of community dynamics helps your business thrive in the digital age.
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
              Our AI solutions are designed specifically for local businesses who want to leverage automation 
              while maintaining their community connection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to="/services-overview">
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
                Proven Results for <span className="text-brand-lime">Local Businesses</span>
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Our AI automation solutions are specifically designed to understand and leverage local market dynamics, 
                giving your business a competitive edge in your community.
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
                  Join hundreds of local businesses already using our AI automation solutions.
                </p>
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Get Free Consultation
                </Button>
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
              What Our <span className="text-brand-lime">Local Partners</span> Say
            </h2>
            <p className="text-xl text-brand-silver">
              Real results from real local businesses in your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
                    <p className="text-brand-lime">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Local Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Get a free consultation and discover how AI automation can transform your local business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
