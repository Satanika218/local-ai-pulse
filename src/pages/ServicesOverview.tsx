import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function ServicesOverview() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">AI Automation Services</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Comprehensive solutions designed specifically for local businesses. We combine cutting-edge technology with local market knowledge.
        </p>
        <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
          Download Service Guide (.PDF)
        </Button>
      </div>

      {/* Services Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Explore Our <span className="text-brand-lime">AI Solutions</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Website & Digital Presence */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Globe className="h-10 w-10 text-brand-lime mb-4" />
              <CardTitle className="text-xl font-bold text-white">
                Website & Digital Presence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver mb-4">
                Professional websites and digital solutions that convert visitors
                into customers.
              </CardDescription>
              <Link to="/services/website-creation">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Digital Marketing */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-brand-lime mb-4" />
              <CardTitle className="text-xl font-bold text-white">
                Digital Marketing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver mb-4">
                AI-driven marketing strategies that attract and retain customers.
              </CardDescription>
              <Link to="/services/design-marketing">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Sales & Lead Generation */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Zap className="h-10 w-10 text-brand-lime mb-4" />
              <CardTitle className="text-xl font-bold text-white">
                Sales & Lead Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver mb-4">
                Automate your sales pipeline and generate more qualified leads.
              </CardDescription>
              <Link to="/services/sales-lead-tools">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Customer Relationships */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Users className="h-10 w-10 text-brand-lime mb-4" />
              <CardTitle className="text-xl font-bold text-white">
                Customer Relationships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver mb-4">
                Build stronger connections with AI-powered customer insights.
              </CardDescription>
              <Link to="/services/customer-service">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Process Automation */}
          <Card className="bg-brand-navy-light border border-brand-silver/20">
            <CardHeader>
              <Zap className="h-10 w-10 text-brand-lime mb-4" />
              <CardTitle className="text-xl font-bold text-white">
                Process Automation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-silver mb-4">
                Streamline operations with intelligent automation.
              </CardDescription>
              <Link to="/services/process-automation">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold w-full">
                  Learn More <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your AI Journey?
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us today for a free consultation and discover how our AI
          automation solutions can transform your local business.
        </p>
        <Link to="/consultation">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Schedule Consultation
          </Button>
        </Link>
      </div>
      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
