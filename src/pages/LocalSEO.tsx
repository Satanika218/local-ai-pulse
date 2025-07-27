
import { TrendingUp, CheckCircle, ArrowRight, Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LocalSEO = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSEOAudit = () => {
    navigate('/seo-audit');
  };

  const features = [
    "Local keyword research and optimization",
    "Google My Business management and optimization",
    "Local citation building and management",
    "Review management and response automation",
    "Local content creation and optimization",
    "Community event integration and promotion"
  ];

  const benefits = [
    {
      icon: <Search className="h-8 w-8 text-brand-lime" />,
      title: "Dominate Local Search",
      description: "Appear at the top of local search results for your target keywords"
    },
    {
      icon: <MapPin className="h-8 w-8 text-brand-lime" />,
      title: "Increase Local Visibility",
      description: "Get found by customers in your immediate area"
    },
    {
      icon: <Star className="h-8 w-8 text-brand-lime" />,
      title: "Build Online Reputation",
      description: "Manage and improve your online reviews and ratings"
    }
  ];

  const services = [
    "Local keyword optimization for your neighborhood",
    "Google My Business profile optimization",
    "Local directory submissions and citations",
    "Online review management and responses",
    "Local content marketing strategies",
    "Competition analysis and monitoring"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Local SEO <span className="text-brand-lime">AI</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Top local search results with AI that understands your business' unique characteristics and customer behavior patterns.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Boost Local Rankings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is Local SEO Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
              What is Local SEO?
            </h2>
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 text-left">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <p className="text-lg text-gray-700 mb-4">
                    Local SEO is like putting up a big, bright sign that helps people in your area find your business when they search online.
                  </p>
                  <p className="text-lg text-gray-700">
                    When someone nearby searches for "best restaurant near me" or "plumber in [your town]", Local SEO makes sure your business shows up at the top of their results instead of your competitors.
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    It's like the difference between having your shop on a busy main street versus being hidden down a back alley. Local SEO moves you to the main street of the internet where local customers can easily find you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Local SEO <span className="text-brand-lime">Solution</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Everything you need to dominate local search results.
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
              Why Local SEO <span className="text-brand-lime">Matters</span>
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

      {/* Services Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand-lime">Services</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Comprehensive local SEO services tailored to your community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{service}</span>
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
            Ready to Dominate Local Search?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Get a free SEO audit and discover hidden opportunities to improve your rankings.
          </p>
          <Button 
            size="lg" 
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
            onClick={handleSEOAudit}
          >
            Get Free SEO Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalSEO;
