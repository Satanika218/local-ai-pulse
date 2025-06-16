import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Camera, Megaphone, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const DesignMarketing = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Design & <span className="text-brand-lime">Marketing</span> Solutions
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Elevate your brand with AI-powered design and marketing solutions that captivate your audience and drive engagement.
            </p>
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Transform Your <span className="text-brand-lime">Visual Identity</span>
              </h2>
              <p className="text-brand-silver mb-6">
                In today's digital landscape, your visual identity is often the first impression potential customers have of your business. Our AI-powered design solutions help you create a cohesive, professional brand identity that resonates with your target audience.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional logo design and brand development",
                  "Consistent visual identity across all platforms",
                  "Eye-catching social media graphics and templates",
                  "Print materials that reinforce your brand message"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-navy-light p-6 rounded-2xl border border-brand-silver/20">
              <Palette className="h-16 w-16 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Design Services</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "AI-powered logo design and brand identity",
                  "Social media graphics and templates",
                  "Print materials (business cards, brochures, etc.)",
                  "Website design and visual elements",
                  "Product photography enhancement",
                  "Custom illustrations and infographics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 bg-brand-navy-light p-6 rounded-2xl border border-brand-silver/20">
              <Megaphone className="h-16 w-16 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Services</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Content marketing strategy and execution",
                  "Email marketing campaigns and automation",
                  "Social media management and engagement",
                  "Local SEO optimization",
                  "PPC campaign management",
                  "Marketing analytics and reporting"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Amplify Your <span className="text-brand-lime">Marketing Impact</span>
              </h2>
              <p className="text-brand-silver mb-6">
                Marketing is no longer about shouting the loudest—it's about connecting with the right audience at the right time with the right message. Our AI-powered marketing solutions help you cut through the noise and make meaningful connections with potential customers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Data-driven marketing strategies tailored to your audience",
                  "Consistent, engaging content across all channels",
                  "Automated campaigns that nurture leads and drive conversions",
                  "Detailed analytics to measure and optimize performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Capture Your <span className="text-brand-lime">Best Moments</span>
              </h2>
              <p className="text-brand-silver mb-6">
                High-quality visual content is essential for engaging your audience. Our AI-enhanced photography solutions help you showcase your products, services, and team in the best possible light.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professional product photography enhancement",
                  "AI-powered image editing and retouching",
                  "Virtual staging and environment creation",
                  "Consistent visual style across all imagery"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-navy-light p-6 rounded-2xl border border-brand-silver/20">
              <Camera className="h-16 w-16 text-brand-lime mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Photography Services</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Product photography enhancement",
                  "Background removal and replacement",
                  "Color correction and consistency",
                  "Image resizing for different platforms",
                  "Photo restoration and enhancement",
                  "Virtual staging for real estate"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our <span className="text-brand-lime">Design & Marketing</span> Solutions?
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Our AI-powered approach delivers professional results at a fraction of the time and cost of traditional agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-12 w-12 text-brand-lime" />,
                title: "Increased Engagement",
                description: "Professional design and targeted marketing significantly increase customer engagement and conversion rates."
              },
              {
                icon: <Palette className="h-12 w-12 text-brand-lime" />,
                title: "Consistent Brand Identity",
                description: "Maintain a cohesive visual identity across all touchpoints to build brand recognition and trust."
              },
              {
                icon: <Megaphone className="h-12 w-12 text-brand-lime" />,
                title: "Targeted Messaging",
                description: "Reach the right audience with the right message at the right time through data-driven marketing strategies."
              }
            ].map((benefit, i) => (
              <Card key={i} className="bg-brand-navy border-brand-silver/20">
                <CardHeader>
                  <div className="mb-2">{benefit.icon}</div>
                  <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-silver">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Success <span className="text-brand-lime">Stories</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              See how our design and marketing solutions have helped local businesses thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Local Bakery Rebrand</CardTitle>
                <CardDescription className="text-brand-silver">
                  Complete visual identity refresh and marketing campaign
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-silver mb-4">
                  A family-owned bakery was struggling to stand out in a competitive market. We created a fresh, modern brand identity and implemented a targeted local marketing campaign.
                </p>
                <p className="text-brand-lime font-semibold">Results:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">43% increase in foot traffic</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">68% increase in social media engagement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">52% increase in online orders</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Real Estate Photography Enhancement</CardTitle>
                <CardDescription className="text-brand-silver">
                  AI-powered image enhancement for property listings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-brand-silver mb-4">
                  A local real estate agency was struggling with low-quality property photos. We implemented our AI image enhancement solution to transform their listing photos.
                </p>
                <p className="text-brand-lime font-semibold">Results:</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">37% increase in listing views</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">28% reduction in days on market</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-lime mr-2 flex-shrink-0" />
                    <span className="text-brand-silver">15% increase in average sale price</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
                View More Case Studies <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Contact us today to discuss how our design and marketing solutions can help your business stand out and connect with more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consultation">
              <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy">
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

export default DesignMarketing;
