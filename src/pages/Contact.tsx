
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Have a <span className="text-brand-lime">Friendly Chat</span> About Your Business
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-4">
              We understand business schedules - we're flexible around farming season, market days, and the rhythms of community-focused enterprises.
            </p>
            <p className="text-lg text-brand-silver max-w-3xl mx-auto">
              No corporate pressure, no overwhelming tech talk - just a genuine conversation about how technology might help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-brand-lime mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Address</h3>
                    <p className="text-brand-silver">Newtown, Powys, Wales</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-brand-lime mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-brand-silver">07218 170 298</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-brand-lime mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-brand-silver">hello@11thtemplesolutions.com</p>
                    <p className="text-brand-silver text-sm">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* UK Focus */}
              <div className="mt-12 p-6 bg-brand-navy-light border border-brand-silver/20 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">UK-Based Support</h3>
                <p className="text-brand-silver mb-4">
                  As a UK-based company, we understand the unique challenges facing British businesses. 
                  We provide regional support with full knowledge of UK regulations, market conditions, and community dynamics.
                </p>
                <ul className="space-y-2 text-brand-silver">
                  <li>• GDPR compliant solutions</li>
                  <li>• UK data protection standards</li>
                  <li>• Regional market understanding</li>
                  <li>• Rural business expertise</li>
                </ul>
              </div>
            </div>

            {/* Contact Options */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">How Can We Help?</h2>
              
              <div className="space-y-6">
                <Card className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <MessageSquare className="h-6 w-6 text-brand-lime mr-3" />
                      Free Consultation
                    </CardTitle>
                    <CardDescription className="text-brand-silver">
                      Book a free consultation to discuss your business needs and how AI automation can help. No obligation, a simple conversation between business people who understand the regional landscape.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/consultation">
                      <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                        Learn How We Can Give You Time With a Free Consultation
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Phone className="h-6 w-6 text-brand-lime mr-3" />
                      Call Us Direct
                    </CardTitle>
                    <CardDescription className="text-brand-silver">
                      Speak directly with our team for immediate assistance. We understand the rhythms of rural business.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full"
                      onClick={() => window.open('tel:07218170298')}
                    >
                      Call 07218 170 298
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Mail className="h-6 w-6 text-brand-lime mr-3" />
                      Email Us
                    </CardTitle>
                    <CardDescription className="text-brand-silver">
                      Send us a detailed message about your requirements and we'll respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full"
                      onClick={() => window.open('mailto:hello@11thtemplesolutions.com')}
                    >
                      Send Email
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Access to Audits */}
              <div className="mt-8 p-6 bg-brand-navy-light border border-brand-silver/20 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Free Business Audits</h3>
                <p className="text-brand-silver mb-4">
                  Get immediate insights into your business with our free audit tools:
                </p>
                <div className="space-y-3">
                  <Link to="/seo-audit">
                    <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                      Free SEO Audit
                    </Button>
                  </Link>
                  <Link to="/analytics-audit">
                    <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                      Free Analytics Audit
                    </Button>
                  </Link>
                  <Link to="/digital-skills-audit">
                    <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                      Digital Skills Assessment
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Contact;
