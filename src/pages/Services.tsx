
import { Bot, TrendingUp, Users, BarChart, CheckCircle, ArrowRight, Search, FileText, Eye, Lightbulb, Wrench, TrendingUp as Growth, Globe, Palette, Shield, Zap, MessageCircle, Clock, DollarSign, UserCheck, Briefcase, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
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

  const businessAreas = [
    {
      icon: <Globe className="h-8 w-8 text-brand-lime" />,
      title: "Website & Digital Presence",
      description: "Professional websites and digital solutions that convert visitors into customers.",
      solutions: [
        "AI-powered website building and optimization",
        "Mobile-responsive design with fast loading",
        "SEO optimization for local search visibility",
        "User experience improvements to reduce bounce rates"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
      title: "Digital Marketing",
      description: "AI-driven marketing strategies that attract and retain customers.",
      solutions: [
        "Automated social media content creation and scheduling",
        "Personalized email marketing campaigns",
        "Local SEO to dominate search results",
        "Content optimization for maximum engagement"
      ]
    },
    {
      icon: <Palette className="h-8 w-8 text-brand-lime" />,
      title: "Creative & Design",
      description: "Professional visual identity and marketing materials that captivate audiences.",
      solutions: [
        "AI-powered logo design and brand development",
        "Automated graphic creation for social media",
        "Consistent brand application across all materials",
        "Professional image enhancement and editing"
      ]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-lime" />,
      title: "Financial Operations",
      description: "Streamline financial processes with intelligent automation.",
      solutions: [
        "Automated invoice and receipt processing",
        "AI-powered cash flow forecasting",
        "Budget variance tracking and alerts",
        "Financial document classification and storage"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      title: "Customer Relationships",
      description: "Build stronger connections with AI-powered customer insights.",
      solutions: [
        "Personalized customer communication at scale",
        "Intelligent customer segmentation",
        "Competitive intelligence and market analysis",
        "Trend identification for emerging opportunities"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-brand-lime" />,
      title: "Sales & Lead Generation",
      description: "Automate your sales pipeline and generate more qualified leads.",
      solutions: [
        "AI-powered lead generation and qualification",
        "Automated follow-up sequences",
        "Professional proposal generation",
        "Sales pipeline optimization and tracking"
      ]
    },
    {
      icon: <UserCheck className="h-8 w-8 text-brand-lime" />,
      title: "Human Resources",
      description: "Streamline HR processes from recruitment to employee engagement.",
      solutions: [
        "Automated resume screening and candidate matching",
        "AI-powered interview scheduling coordination",
        "Personalized employee onboarding experiences",
        "Employee sentiment analysis and engagement tracking"
      ]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-lime" />,
      title: "Customer Support",
      description: "Provide exceptional 24/7 support with AI-powered solutions.",
      solutions: [
        "Intelligent chatbots for instant customer service",
        "Automated response suggestions for support teams",
        "Customer satisfaction sentiment analysis",
        "Predictive customer churn prevention"
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-brand-lime" />,
      title: "Project Management",
      description: "Optimize workflows and resource allocation with smart automation.",
      solutions: [
        "AI-powered task prioritization and scheduling",
        "Predictive project timeline generation",
        "Team workload optimization and balancing",
        "Automated time tracking and categorization"
      ]
    },
    {
      icon: <FolderOpen className="h-8 w-8 text-brand-lime" />,
      title: "Administrative Operations",
      description: "Eliminate manual tasks with intelligent document and communication management.",
      solutions: [
        "Automated document classification and organization",
        "Smart email management and prioritization",
        "AI-powered meeting scheduling coordination",
        "Intelligent data extraction from any document type"
      ]
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

      {/* Free Audit Tools Section - Moved Up */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Free <span className="text-brand-lime">Audit Tools</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Get instant insights into your website's performance with our comprehensive audit tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {auditTools.map((tool, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 group">
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

      {/* Business Areas Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Business <span className="text-brand-lime">Solutions</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              From digital presence to operational efficiency, we cover all aspects of your business with AI-powered solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessAreas.map((area, index) => (
              <Card key={index} className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.title}</h3>
                  </div>
                  
                  <p className="text-brand-silver mb-4">{area.description}</p>
                  
                  <div className="space-y-2">
                    {area.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-brand-lime flex-shrink-0 mt-0.5" />
                        <span className="text-brand-silver text-sm">{solution}</span>
                      </div>
                    ))}
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
