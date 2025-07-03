
import { Search, BarChart3, Shield, CheckCircle, Brain, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Link } from "react-router-dom";

const FreeTools = () => {
  const tools = [
    {
      icon: <Search className="h-12 w-12 text-brand-navy" />,
      title: "SEO Audit Tool",
      description: "Analyze your search engine optimization and get actionable recommendations. Export as PDF.",
      link: "/seo-audit",
      color: "bg-yellow-100 border-yellow-200",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-white"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-brand-navy" />,
      title: "Analytics Audit Tool",
      description: "Review your website analytics setup and discover optimization opportunities. Export as PDF.",
      link: "/analytics-audit",
      color: "bg-blue-100 border-blue-200",
      buttonColor: "bg-blue-500 hover:bg-blue-600 text-white"
    },
    {
      icon: <Brain className="h-12 w-12 text-brand-navy" />,
      title: "Digital Skills in the Workplace Quiz",
      description: "Assess your team's essential digital capabilities and identify training needs for UK businesses.",
      link: "/digital-skills-quiz",
      color: "bg-green-100 border-green-200",
      buttonColor: "bg-green-500 hover:bg-green-600 text-white"
    },
    {
      icon: <Shield className="h-12 w-12 text-brand-navy" />,
      title: "GDPR Compliance Quiz",
      description: "Test your knowledge of UK data protection requirements and avoid costly compliance failures.",
      link: "/gdpr-quiz",
      color: "bg-red-100 border-red-200",
      buttonColor: "bg-red-500 hover:bg-red-600 text-white"
    },
    {
      icon: <Eye className="h-12 w-12 text-brand-navy" />,
      title: "Website Audit Tool",
      description: "Get a comprehensive analysis of your website's performance, SEO, and user experience.",
      link: "/website-audit",
      color: "bg-purple-100 border-purple-200",
      buttonColor: "bg-purple-500 hover:bg-purple-600 text-white"
    }
  ];

  const benefits = [
    "Professional-grade assessments at no cost",
    "Instant PDF reports for your records",
    "Identify critical business gaps quickly",
    "UK-specific compliance requirements",
    "Actionable recommendations included"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Free Business <span className="text-yellow-300">Tools</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Professional-grade tools to help you assess and improve your digital presence
            </p>
            <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
              Get instant insights with our comprehensive audit tools and assessments, designed specifically for UK businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className={`${tool.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 rounded-2xl overflow-hidden group`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="bg-white rounded-full p-4 shadow-lg">
                      {tool.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">{tool.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Link to={tool.link} className="block">
                    <Button className={`w-full ${tool.buttonColor} font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-lg`}>
                      Start Assessment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Why Use Our <span className="text-blue-600">Free Tools?</span>
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards improving your business with our professional assessment tools.
              </p>
              <Link to="/consultation">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl">
                  Discuss Your Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help Interpreting Your Results?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Our experts can help you understand your assessments and create an action plan
          </p>
          <Link to="/consultation">
            <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold px-8 py-4 rounded-xl text-lg">
              Lets Talk - Free 30min Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default FreeTools;
