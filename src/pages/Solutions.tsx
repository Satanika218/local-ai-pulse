
import { useState } from "react";
import { Bot, TrendingUp, Users, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Solutions = () => {
  const businessAreas = [
    {
      id: "customer-growth",
      title: "Customer Growth & Marketing",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Drive customer acquisition and retention with AI-powered marketing solutions tailored for regional businesses.",
      services: [
        {
          icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
          title: "Local SEO AI",
          description: "Boost your local visibility and attract more nearby customers with our AI-powered local SEO services.",
          benefits: [
            "Free SEO audit and report",
            "Location-specific keyword optimization", 
            "Google Business Profile optimization",
            "Local citation building"
          ],
          link: "/services/local-seo",
          primaryCta: "Learn More",
          secondaryCta: "Get Free Audit",
          secondaryLink: "/seo-audit"
        }
      ]
    },
    {
      id: "operational-efficiency", 
      title: "Operational Efficiency",
      icon: <Bot className="h-6 w-6" />,
      description: "Streamline your operations with intelligent automation that eliminates manual tasks and reduces costs.",
      services: [
        {
          icon: <Bot className="h-8 w-8 text-brand-lime" />,
          title: "Process Automation",
          description: "Transform repetitive tasks into automated workflows that understand your local business context.",
          benefits: [
            "Save 40+ hours per week on manual tasks",
            "Reduce human error by 95%",
            "24/7 automated operations",
            "Custom workflows for your business"
          ],
          link: "/services/process-automation",
          primaryCta: "Learn More"
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
          title: "Data Analytics",
          description: "Make data-driven decisions with AI analytics that reveal insights unique to your local market.",
          benefits: [
            "Free analytics audit and report",
            "Understand local buying patterns",
            "Predict seasonal demand fluctuations",
            "Increase customer retention by 45%"
          ],
          link: "/services/data-analytics",
          primaryCta: "Learn More",
          secondaryCta: "Get Free Audit", 
          secondaryLink: "/analytics-audit"
        }
      ]
    },
    {
      id: "customer-experience",
      title: "Customer Experience", 
      icon: <Users className="h-6 w-6" />,
      description: "Deliver exceptional customer experiences with AI-powered service solutions that work around the clock.",
      services: [
        {
          icon: <Users className="h-8 w-8 text-brand-lime" />,
          title: "Smart Customer Service",
          description: "AI-powered customer service that speaks your local language and understands your community values.",
          benefits: [
            "24/7 intelligent customer support",
            "Instant response to customer inquiries", 
            "Local cultural understanding",
            "Seamless escalation to human agents"
          ],
          link: "/services/customer-service",
          primaryCta: "Learn More"
        },
        {
          icon: <Bot className="h-8 w-8 text-brand-lime" />,
          title: "Website Creation & Optimization",
          description: "Modern, mobile-friendly websites designed to convert visitors into customers.",
          benefits: [
            "Mobile-optimized design",
            "Fast loading speeds",
            "SEO-friendly structure", 
            "Easy content management"
          ],
          link: "/services/website-creation",
          primaryCta: "Learn More"
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security & Compliance",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect your business data and ensure compliance with robust security solutions.",
      services: [
        {
          icon: <Shield className="h-8 w-8 text-brand-lime" />,
          title: "Security & Compliance",
          description: "Comprehensive data protection and compliance management for peace of mind.",
          benefits: [
            "GDPR compliance support",
            "Secure data storage solutions",
            "Regular security audits",
            "24/7 monitoring and alerts"
          ],
          link: "/contact",
          primaryCta: "Contact Us"
        }
      ]
    },
    {
      id: "business-resilience", 
      title: "Business Resilience",
      icon: <Zap className="h-6 w-6" />,
      description: "Ensure your business stays operational with robust continuity and infrastructure support.",
      services: [
        {
          icon: <Zap className="h-8 w-8 text-brand-lime" />,
          title: "Sales & Lead Generation Tools",
          description: "Automate your sales pipeline and generate more qualified leads for your business.",
          benefits: [
            "Automated lead capture",
            "CRM integration",
            "Sales pipeline optimization",
            "Performance tracking and analytics"
          ],
          link: "/services/sales-lead-tools",
          primaryCta: "Learn More"
        }
      ]
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
              Business <span className="text-brand-lime">Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Discover AI automation solutions organized by business function to help you solve specific challenges and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs Section - Fixed responsive layout */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="customer-growth" className="w-full">
            {/* Improved responsive tabs grid */}
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-brand-navy border border-brand-silver/20 mb-8 gap-1 h-auto p-2">
              {businessAreas.map((area) => (
                <TabsTrigger 
                  key={area.id} 
                  value={area.id}
                  className="flex flex-col items-center space-y-2 p-3 text-brand-silver data-[state=active]:text-brand-lime data-[state=active]:bg-brand-lime/10 h-auto min-h-[80px] text-center"
                >
                  <div className="flex-shrink-0">{area.icon}</div>
                  <span className="text-xs font-medium leading-tight">{area.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {businessAreas.map((area) => (
              <TabsContent key={area.id} value={area.id} className="space-y-8 mt-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">{area.title}</h2>
                  <p className="text-xl text-brand-silver max-w-3xl mx-auto">{area.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {area.services.map((service, index) => (
                    <Card key={index} className="bg-brand-navy border-brand-silver/20 h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          {service.icon}
                          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-brand-silver text-lg mb-6">{service.description}</p>
                        <div className="space-y-3 mb-8">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                              <span className="text-brand-silver">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link to={service.link} className="flex-1">
                            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                              {service.primaryCta}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                          {service.secondaryCta && service.secondaryLink && (
                            <Link to={service.secondaryLink} className="flex-1">
                              <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                                {service.secondaryCta}
                              </Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Success Story Section */}
                <div className="bg-brand-silver/10 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                  <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
                  <p className="text-brand-silver mb-6">
                    See how businesses like yours have transformed their operations with our solutions.
                  </p>
                  <Link to="/case-studies">
                    <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                      View Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Choose the solutions that fit your needs or get a custom package designed for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-silver text-black hover:bg-brand-silver-dark font-semibold">
                Contact Us
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

export default Solutions;
