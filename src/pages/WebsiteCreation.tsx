
import { Globe, CheckCircle, ArrowRight, Smartphone, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WebsiteCreation = () => {
  const features = [
    "Custom responsive design optimized for local search",
    "AI-powered content creation and optimization",
    "Local SEO integration from day one",
    "Mobile-first design for on-the-go customers",
    "Fast loading speeds and performance optimization",
    "Ongoing maintenance and security updates"
  ];

  const benefits = [
    {
      icon: <Smartphone className="h-8 w-8 text-brand-lime" />,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices, especially mobile"
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Lightning Fast",
      description: "Optimized for speed to keep customers engaged"
    },
    {
      icon: <Palette className="h-8 w-8 text-brand-lime" />,
      title: "Local Brand Design",
      description: "Custom design that reflects your local community"
    }
  ];

  const includes = [
    "Professional custom website design",
    "Local business schema and SEO setup",
    "Contact forms and appointment booking",
    "Google Maps integration and directions",
    "Social media integration and sharing",
    "Analytics tracking and performance monitoring"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website <span className="text-brand-lime">Creation</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Get a professional, fast, and SEO-optimized website designed specifically 
              for local businesses in your community.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Get Your Website
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
              Professional Website <span className="text-brand-lime">Features</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Everything your local business needs to succeed online.
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
              Why Choose Our <span className="text-brand-lime">Websites</span>
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

      {/* Includes Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What's <span className="text-brand-lime">Included</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Complete website package designed for local business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((include, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{include}</span>
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
            Ready for Your New Website?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Starting at £499 one-time. Get a free design consultation and see your vision come to life.
          </p>
          <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Start Website Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteCreation;
