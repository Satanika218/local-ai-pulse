
import { BarChart, CheckCircle, ArrowRight, PieChart, LineChart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataAnalytics = () => {
  const features = [
    "Real-time local market analysis and insights",
    "Customer behavior tracking and analytics",
    "Competitive intelligence and monitoring",
    "Custom reporting dashboards and alerts",
    "ROI tracking and performance metrics",
    "Predictive analytics for business planning"
  ];

  const benefits = [
    {
      icon: <PieChart className="h-8 w-8 text-brand-lime" />,
      title: "Local Market Insights",
      description: "Understand your community's unique buying patterns and preferences"
    },
    {
      icon: <LineChart className="h-8 w-8 text-brand-lime" />,
      title: "Performance Tracking",
      description: "Monitor key metrics and identify growth opportunities"
    },
    {
      icon: <Target className="h-8 w-8 text-brand-lime" />,
      title: "Data-Driven Decisions",
      description: "Make informed business decisions based on real data"
    }
  ];

  const analytics = [
    "Customer acquisition and retention analysis",
    "Local market trends and seasonal patterns",
    "Competitor pricing and strategy analysis",
    "Website and social media performance",
    "Sales funnel optimization insights",
    "Customer lifetime value calculations"
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BarChart className="h-20 w-20 text-brand-lime mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data <span className="text-brand-lime">Analytics</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Get powerful insights that matter to your local market with AI-powered 
              analytics and reporting tailored to your community.
            </p>
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Unlock Business Insights
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
              Comprehensive <span className="text-brand-lime">Analytics Suite</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Everything you need to understand and grow your local business.
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
              Turn Data Into <span className="text-brand-lime">Growth</span>
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

      {/* Analytics Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="text-brand-lime">Analyze</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Comprehensive analytics tailored to local business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analytics.map((analytic, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{analytic}</span>
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
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Starting at £249/month. Get a free analytics audit and discover hidden opportunities.
          </p>
          <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Get Free Analytics Audit
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalytics;
