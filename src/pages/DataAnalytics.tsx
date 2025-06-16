import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import { BarChart3, Database, Code, FileCode, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function DataAnalytics() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">Data Analytics</span> Solutions
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Unlock the power of your data with our comprehensive analytics solutions.
        </p>
        <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
          Get Started
        </Button>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Key <span className="text-brand-lime">Features</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Data Visualization</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Transform raw data into actionable insights with interactive dashboards and visualizations.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <Database className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Data Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Seamlessly connect to various data sources and consolidate information for a unified view.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <Code className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Custom Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Develop custom analytics solutions tailored to your specific business needs and objectives.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 4 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <FileCode className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Predictive Modeling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Leverage predictive modeling techniques to forecast future trends and make data-driven decisions.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 5 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Performance Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Monitor key performance indicators (KPIs) and track progress towards your business goals.
              </p>
            </CardContent>
          </Card>

          {/* Feature Card 6 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <Users className="h-8 w-8 text-brand-lime mb-2" />
              <CardTitle className="text-xl font-bold text-white">Customer Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver">
                Gain insights into customer behavior, preferences, and trends to improve engagement and loyalty.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          <span className="text-brand-lime">Benefits</span> of Data Analytics
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center text-brand-silver">
            <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
            Improved Decision-Making
          </li>
          <li className="flex items-center text-brand-silver">
            <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
            Increased Efficiency
          </li>
          <li className="flex items-center text-brand-silver">
            <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
            Enhanced Customer Experience
          </li>
          <li className="flex items-center text-brand-silver">
            <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
            Competitive Advantage
          </li>
          <li className="flex items-center text-brand-silver">
            <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
            Data-Driven Insights
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Unlock Your Data Potential Today
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us to learn more about our data analytics solutions and how they can benefit your business.
        </p>
        <Link to="/contact">
          <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
