
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Star, Bot, Zap, PoundSterling } from "lucide-react";
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
      description: "Streamline the manual tasks that too many businesses struggle with due to limited skilled staff. We're tailor-made for the hundreds of SMEs and family-run businesses across the border counties and Wales.",
      link: "/services/process-automation"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Regional SEO AI",
      description: "Help your business compete with larger urban competitors. Essential for businesses serving both Welsh and English markets in the border counties."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Customer Insights",
      description: "Understand your customer's patterns, seasonal variations, and community dynamics. Crucial for the productivity boost that smaller teams need."
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Smart Responses",
      description: "Handle customer inquiries when you're busy with other work or serving customers face-to-face. Perfect for independent businesses wearing multiple hats."
    }
  ];

  const benefits = [
    "30% increase in community customer engagement across UK markets",
    "50% reduction in operational costs for SMEs", 
    "24/7 intelligent customer support with UK data protection compliance",
    "Real-time regional market insights tailored for British businesses"
  ];

  const testimonials = [
    {
      name: "Anonymous Construction Company",
      business: "Mid-Wales",
      content: "Saved us 10 hours per week on admin tasks. Now I can focus on what matters - serving our community.",
      rating: 5
    },
    {
      name: "Anonymous Professional Services", 
      business: "Border Counties",
      content: "Our customer response times improved dramatically.",
      rating: 5
    },
    {
      name: "Anonymous Independent Retailer",
      business: "Herefordshire",
      content: "Finally, technology that makes sense for a unique business like ours.",
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
              Powering <span className="gradient-text">Community-Focused Business</span>
              <br />with AI Automation
            </h1>
            <p className="text-xl text-brand-silver mb-4 max-w-3xl mx-auto">
              Serving the heart of Wales and the border counties - where community matters and every business counts
            </p>
            <p className="text-base text-brand-silver mb-8 max-w-3xl mx-auto">
              We understand rural business challenges: geographic isolation, limited tech support, and knowledge gaps in an increasingly tech-driven world - we work with you to craft the right solution.
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

      {/* Understanding Rural Business Realities Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              You're Not Alone in Feeling <span className="text-brand-lime">Uncertain About AI</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              92.6% of Welsh SMEs haven't adopted AI yet - and there are many reasons why. We endeavour to understand the unique nuances of each business:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Rural Business Challenges We Understand</h3>
              <ul className="space-y-4 text-brand-silver">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Seasonal fluctuations that affect cash flow</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Geographic isolation from tech support or qualified staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Wearing multiple hats with limited staff</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Serving both Welsh and English markets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-3 mt-1 flex-shrink-0" />
                  <span>Balancing tradition with innovation</span>
                </li>
              </ul>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Our Approach</h3>
              <p className="text-brand-silver mb-6">
                That's why we focus on incremental, non-intimidating digital adoption that works for community-rooted businesses. No corporate jargon, no overwhelming tech - just practical solutions that fit your world.
              </p>
              <div className="bg-brand-lime/10 border border-brand-lime/20 rounded-lg p-4">
                <p className="text-brand-silver text-sm italic">
                  Construction businesses (16% of all SMEs) and professional services (14% of SMEs) have seen the biggest benefits from starting small with AI automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-brand-navy to-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Community Understanding, <span className="text-brand-lime">Global Technology</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Our AI solutions are designed specifically for UK independent businesses who want to leverage automation 
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
                Proven Results for <span className="text-brand-lime">UK Independent Businesses</span>
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Our AI automation solutions are specifically designed to understand and leverage regional UK market dynamics, 
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
                <div className="flex items-center justify-center mb-4">
                  <PoundSterling className="h-16 w-16 text-brand-lime" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Reduce Costs by 60%</h3>
                <p className="text-brand-silver mb-6 text-center">
                  Lower operational expenses through intelligent automation
                </p>
                <Link to="/consultation">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                    Let's Talk - Free - How Can We Help?
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
              What <span className="text-brand-lime">Rural Businesses</span> Are Saying
            </h2>
            <p className="text-xl text-brand-silver">
              Results from independent businesses across Wales and the border counties.
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
            <h3 className="text-2xl font-bold text-white mb-4">UK-Based Support</h3>
            <p className="text-brand-silver mb-6 max-w-3xl mx-auto">
              As a UK-based company, we understand the unique challenges facing British businesses. 
              We provide regional support with full knowledge of UK regulations, market conditions, and community dynamics.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">GDPR Compliant Solutions</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">UK Data Protection Standards</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">Regional Market Understanding</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                <p className="text-brand-silver">Rural Business Expertise</p>
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
            Learn how AI automation can transform your UK business whilst maintaining your community connection. 
            No obligation, a simple conversation between business people who understand the regional landscape, dispensing with tech jargon.
          </p>
          <div className="flex justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Let's Talk - Free - How Can We Help?
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
