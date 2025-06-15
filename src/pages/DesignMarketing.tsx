
import { Palette, Camera, Monitor, Briefcase, BookOpen, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const DesignMarketing = () => {
  const serviceCategories = [
    {
      title: "Brand Development",
      icon: <Palette className="h-8 w-8 text-brand-lime" />,
      services: [
        "Branding Guidelines: Create comprehensive style guides ensuring consistency across all platforms",
        "Logo Design: Develop distinctive, memorable logos that embody your brand essence",
        "Brand Identity Systems: Design cohesive visual elements that build recognition and trust"
      ]
    },
    {
      title: "Digital Presence",
      icon: <Monitor className="h-8 w-8 text-brand-lime" />,
      services: [
        "Website Building & Renovation: Craft responsive, visually stunning websites that convert visitors",
        "UI/UX Design: Create intuitive, engaging digital interfaces that enhance user experience",
        "Accessibility Design: Ensure your digital products are inclusive and accessible to all users"
      ]
    },
    {
      title: "Visual Content Creation",
      icon: <Camera className="h-8 w-8 text-brand-lime" />,
      services: [
        "Photography & Videography: Deliver high-quality custom visual content that tells your story",
        "Illustrations & Custom Artwork: Develop original artwork that sets your brand apart",
        "Social Media Content: Design scroll-stopping visuals optimized for each platform"
      ]
    },
    {
      title: "Marketing Materials",
      icon: <Briefcase className="h-8 w-8 text-brand-lime" />,
      services: [
        "Print & Digital Collateral: Design professional marketing materials that drive action",
        "Email Marketing Templates: Create branded email designs that improve engagement",
        "Packaging Design: Develop product packaging that stands out on shelves and screens"
      ]
    },
    {
      title: "Digital Products",
      icon: <BookOpen className="h-8 w-8 text-brand-lime" />,
      services: [
        "eBooks & Workbooks: Design professional digital products that showcase your expertise",
        "Presentation Templates: Create branded presentation designs that impress audiences",
        "Digital Planners: Develop functional, beautiful digital planning tools"
      ]
    },
    {
      title: "Knowledge Transfer",
      icon: <Users className="h-8 w-8 text-brand-lime" />,
      services: [
        "Workshops & Training: Empower your team with practical design skills and knowledge",
        "Brand Management Systems: Implement tools to maintain visual consistency across your organization"
      ]
    }
  ];

  const benefits = [
    "Strategic visual design that works hard for your business",
    "Aesthetic excellence combined with strategic thinking",
    "Visual systems that drive engagement and support growth",
    "Comprehensive brand consistency across all platforms",
    "Professional design expertise without in-house costs",
    "Faster time-to-market for visual content"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Brand's <span className="text-brand-lime">Visual Identity</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-4xl mx-auto mb-8">
              Elevate your brand with our comprehensive suite of visual design services. Our expert team delivers strategic solutions that captivate audiences and strengthen your market presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Visual Design Services
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Comprehensive design solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0 mt-1" />
                        <p className="text-brand-silver">{service}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Visual Design Services?
              </h2>
              <p className="text-xl text-brand-silver mb-8">
                Our approach combines aesthetic excellence with strategic thinking. We don't just make things look good—we create visual systems that work hard for your business, driving engagement and supporting your growth objectives.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-navy-light rounded-2xl p-8 border border-brand-silver/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-brand-silver mb-6">
                Transform how your brand looks and performs with our expert design services. Contact us today for a consultation.
              </p>
              <div className="space-y-4">
                <Link to="/consultation" className="block">
                  <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy font-semibold w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Related Services
            </h2>
            <p className="text-xl text-brand-silver">
              Explore our other solutions that complement your design needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6 text-center">
                <Monitor className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Website Creation</h3>
                <p className="text-brand-silver mb-4">Modern, responsive websites that convert</p>
                <Link to="/services/website-creation">
                  <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local SEO AI</h3>
                <p className="text-brand-silver mb-4">Boost your local visibility</p>
                <Link to="/services/local-seo">
                  <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Customer Service</h3>
                <p className="text-brand-silver mb-4">AI-powered customer support</p>
                <Link to="/services/customer-service">
                  <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default DesignMarketing;
