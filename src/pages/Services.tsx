import { Bot, TrendingUp, Users, BarChart, CheckCircle, ArrowRight, Search, FileText, Eye, Lightbulb, Wrench, TrendingUp as Growth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12 text-brand-lime" />,
      title: "Process Automation",
      description: "Streamline your business operations with intelligent automation that understands your local workflow.",
      features: [
        "Custom workflow automation",
        "Local compliance integration",
        "Staff training and onboarding",
        "24/7 monitoring and support"
      ],
      link: "/services/process-automation"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-lime" />,
      title: "Local SEO AI",
      description: "Dominate local search results with AI that knows your neighbourhood better than your competition.",
      features: [
        "Local keyword optimisation",
        "Community event integration",
        "Review management automation",
        "Local citation building"
      ],
      link: "/services/local-seo",
      hasAudit: true,
      auditLink: "/seo-audit",
      auditText: "Get Free SEO Audit"
    },
    {
      icon: <Users className="h-12 w-12 text-brand-lime" />,
      title: "Customer Service Agents",
      description: "Provide 24/7 customer support that speaks your customers' language and understands local culture.",
      features: [
        "Local dialect recognition",
        "Community-aware responses",
        "Seamless human handoff",
        "Multi-channel support"
      ],
      link: "/services/customer-service"
    },
    {
      icon: <BarChart className="h-12 w-12 text-brand-lime" />,
      title: "Data Analytics",
      description: "Get insights that matter to your local market with AI-powered analytics and reporting.",
      features: [
        "Local market analysis",
        "Customer behaviour insights",
        "Competitive intelligence",
        "Custom reporting dashboards"
      ],
      link: "/services/data-analytics",
      hasAudit: true,
      auditLink: "/analytics-audit",
      auditText: "Get Free Analytics Audit"
    }
  ];

  const auditTools = [
    {
      icon: <Search className="h-12 w-12 text-brand-lime" />,
      title: "Free SEO Audit Tool",
      description: "Get a comprehensive analysis of your website's SEO performance with actionable insights and recommendations.",
      features: [
        "Complete SEO performance analysis",
        "Local search optimization review",
        "Competitor comparison insights",
        "Actionable improvement recommendations"
      ],
      link: "/seo-audit"
    },
    {
      icon: <FileText className="h-12 w-12 text-brand-lime" />,
      title: "Free Analytics Audit Tool",
      description: "Discover how your website performs and get personalized recommendations to improve your online presence.",
      features: [
        "Website performance analysis",
        "User behavior insights",
        "Conversion tracking review",
        "Growth opportunity identification"
      ],
      link: "/analytics-audit"
    }
  ];

  const processSteps = [
    {
      icon: <Eye className="h-8 w-8 text-brand-navy" />,
      title: "Discovery & Assessment",
      description: "We analyse your business operations and local market to identify automation opportunities."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-navy" />, 
      title: "Custom Solution Design",
      description: "Our team designs AI solutions specifically tailored to your business and community needs."
    },
    {
      icon: <Wrench className="h-8 w-8 text-brand-navy" />,
      title: "Implementation & Training",
      description: "We implement the solution with comprehensive training for your team and ongoing support."
    },
    {
      icon: <Growth className="h-8 w-8 text-brand-navy" />,
      title: "Optimisation & Growth",
      description: "Continuous monitoring and optimisation to ensure maximum performance and ROI."
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
              AI Automation <span className="text-brand-lime">Services</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Comprehensive solutions designed specifically for local businesses. We combine cutting-edge technology with local market knowledge.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-brand-silver mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                        <span className="text-brand-silver">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-3 pt-4 border-t border-brand-silver/20">
                    <Link to={service.link}>
                      <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark w-full">
                        Learn More
                      </Button>
                    </Link>
                    {service.hasAudit && service.auditLink && (
                      <Link to={service.auditLink}>
                        <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy w-full">
                          {service.auditText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit Tools Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Free <span className="text-brand-lime">Audit Tools</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Get instant insights into your website's performance with our comprehensive audit tools.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {auditTools.map((tool, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{tool.title}</h3>
                      <p className="text-brand-silver mb-4">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                        <span className="text-brand-silver">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center pt-4 border-t border-brand-silver/20">
                    <Link to={tool.link}>
                      <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                        Start Free Audit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand-lime">Implementation Process</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              A proven methodology that ensures successful AI automation deployment for your local business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-lime to-brand-silver rounded-full mx-auto flex items-center justify-center">
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-lime to-brand-silver transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-brand-silver">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Contact us today for a free consultation and discover how our AI automation solutions 
            can transform your local business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-navy">
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
