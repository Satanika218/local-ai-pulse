
import { Target, CheckCircle, ArrowRight, Users, TrendingUp, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SalesLeadTools = () => {
  const features = [
    "Local lead generation and qualification",
    "Automated follow-up sequences and nurturing",
    "CRM integration and contact management",
    "Email marketing and campaign automation",
    "Local prospect identification and targeting",
    "Sales pipeline tracking and optimisation"
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Quality Local Leads",
      description: "Generate high-quality leads from your local community"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Increase Conversion",
      description: "Convert more prospects into paying customers"
    },
    {
      icon: <Mail className="h-8 w-8 text-brand-lime" />,
      title: "Automated Nurturing",
      description: "Keep prospects engaged with automated follow-ups"
    }
  ];

  const tools = [
    "Lead capture forms and landing pages",
    "Email sequences and drip campaigns",
    "Local directory and citation monitoring",
    "Social media lead generation tools",
    "Customer referral tracking systems",
    "Sales performance analytics and reporting"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Target className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sales & Lead <span className="text-brand-lime">Tools</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Generate more local leads and convert them into loyal customers with 
              AI-powered sales and marketing automation tools.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Boost Your Sales
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
              Complete Sales <span className="text-brand-lime">Automation</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Everything you need to generate and convert local leads.
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
              Grow Your Local <span className="text-brand-lime">Customer Base</span>
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

      {/* Tools Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Sales <span className="text-brand-lime">Tools</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Comprehensive toolkit for local business sales success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{tool}</span>
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
            Ready to Generate More Leads?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Starting at £179/month. Get a free lead generation audit and discover new opportunities.
          </p>
          <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Get Lead Generation Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesLeadTools;
