
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { CheckCircle, Heart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-brand-lime">11th Temple Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              We're a UK-based AI automation company with deep roots in rural and local business communities. 
              We understand rural business challenges through firsthand regional experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-brand-lime">Mission</span>
              </h2>
              <p className="text-xl text-brand-silver mb-6">
                To empower UK local businesses with cutting-edge AI automation whilst preserving the personal touch 
                and community connection that makes them special.
              </p>
              <p className="text-brand-silver mb-8">
                We believe that rural and local businesses are the backbone of British communities. Our technology 
                solutions are designed to help them thrive in the digital age without losing their authentic, 
                personal approach to customer service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">UK-focused solutions with local market understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">Full GDPR compliance and UK data protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">Rural business experience and community understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-lime flex-shrink-0" />
                  <span className="text-brand-silver">GMT/BST support hours and local availability</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why We're Different</h3>
                <p className="text-brand-silver mb-6">
                  Unlike large tech companies, we understand the unique challenges facing UK rural and local businesses. 
                  We've lived in these communities, worked with these businesses, and understand what really matters.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Heart className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <p className="text-brand-silver text-sm">Community First</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-brand-lime mx-auto mb-2" />
                    <p className="text-brand-silver text-sm">Local Knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand-lime">Core Values</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              These principles guide everything we do and every solution we create for UK businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Heart className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Community Connection</h3>
              <p className="text-brand-silver">
                We believe technology should strengthen community bonds, not replace them. Our solutions help 
                businesses serve their local customers better whilst maintaining personal relationships.
              </p>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Local Understanding</h3>
              <p className="text-brand-silver">
                Rural businesses face unique challenges. We understand seasonal variations, limited resources, 
                and the importance of word-of-mouth reputation in close-knit communities.
              </p>
            </div>
            <div className="bg-brand-navy border border-brand-silver/20 rounded-2xl p-8 text-center">
              <Zap className="h-12 w-12 text-brand-lime mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Practical Innovation</h3>
              <p className="text-brand-silver">
                We focus on AI solutions that solve real problems and deliver measurable results. No 
                unnecessary complexity - just practical technology that works for UK businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UK Focus Section */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proudly <span className="text-brand-lime">UK-Based</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Our understanding of British business culture, regulatory requirements, and community dynamics 
              comes from being part of these communities ourselves.
            </p>
          </div>
          
          <div className="bg-brand-navy-light border border-brand-silver/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">UK Compliance & Standards</h3>
                <ul className="space-y-3 text-brand-silver">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Full GDPR compliance and UK data protection adherence</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Understanding of UK business regulations and requirements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>GMT/BST operating hours and local support availability</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>UK-based data storage and processing where required</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Regional Expertise</h3>
                <ul className="space-y-3 text-brand-silver">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Deep understanding of Welsh rural business challenges</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Experience with Scottish Highland and Border communities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Knowledge of English countryside and market town dynamics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span>Understanding of seasonal business variations across the UK</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Let's discuss how our UK-focused AI solutions can help your local business thrive whilst 
            maintaining the community connection that makes you special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                Get In Touch
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

export default About;
