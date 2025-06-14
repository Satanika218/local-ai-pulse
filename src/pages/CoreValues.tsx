
import { Target, Users, Award, TrendingUp, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CoreValues = () => {
  const valueDetails = [
    {
      icon: <Target className="h-12 w-12 text-brand-lime" />,
      title: "Local Focus",
      subtitle: "We understand that every community is unique and tailor our solutions accordingly.",
      explanation: "Our approach begins with understanding your local market dynamics, customer demographics, and community culture. We don't believe in one-size-fits-all solutions.",
      howWeDo: [
        "Conduct thorough local market analysis before any implementation",
        "Customize AI responses to reflect local dialects, preferences, and cultural nuances",
        "Partner with local business networks and chambers of commerce",
        "Ensure our AI solutions respect local business practices and customer expectations",
        "Provide ongoing support from team members who understand your regional market"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-brand-lime" />,
      title: "Human-Centered AI",
      subtitle: "Our AI enhances human capabilities rather than replacing the personal touch.",
      explanation: "We believe AI should amplify what makes your business special - the human connections, local knowledge, and personal service that customers value.",
      howWeDo: [
        "Design AI systems that handle routine tasks, freeing staff for meaningful customer interactions",
        "Maintain human oversight and intervention capabilities in all automated processes",
        "Train AI to recognize when human intervention is needed and seamlessly transfer control",
        "Preserve your business's unique voice and personality in all AI communications",
        "Ensure customers always have access to real human support when they need it"
      ]
    },
    {
      icon: <Award className="h-12 w-12 text-brand-lime" />,
      title: "Excellence",
      subtitle: "We're committed to delivering exceptional results for every local business partner.",
      explanation: "Excellence isn't just about the technology we deploy - it's about the measurable impact on your business operations, customer satisfaction, and bottom line.",
      howWeDo: [
        "Implement rigorous testing and quality assurance processes before any system goes live",
        "Provide comprehensive training and documentation for your team",
        "Establish clear performance metrics and regular monitoring systems",
        "Offer continuous optimization based on real-world performance data",
        "Maintain 24/7 system monitoring with rapid response to any issues"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-brand-lime" />,
      title: "Growth",
      subtitle: "We measure our success by the growth and success of our local business partners.",
      explanation: "Your growth is our primary metric of success. We're invested in your long-term prosperity and work as true partners in your business development.",
      howWeDo: [
        "Set clear, measurable goals aligned with your business objectives",
        "Provide detailed analytics and reporting on performance improvements",
        "Regularly review and adjust strategies based on your evolving needs",
        "Offer scalable solutions that grow with your business",
        "Connect you with other successful local businesses in our network for mutual growth opportunities"
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
            <Link to="/about" className="inline-flex items-center space-x-2 text-brand-lime hover:text-brand-lime/80 mb-8">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to About</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              How We Live Our <span className="text-brand-lime">Core Values</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Our values aren't just words on a page - they're the foundation of everything we do. 
              Here's how we put each principle into practice for our local business partners.
            </p>
          </div>
        </div>
      </section>

      {/* Values Details Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {valueDetails.map((value, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="bg-brand-navy border-brand-silver/20 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        {value.icon}
                        <div>
                          <h2 className="text-2xl font-bold text-white">{value.title}</h2>
                          <p className="text-brand-lime text-lg">{value.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-brand-silver text-lg mb-6">{value.explanation}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="bg-brand-navy border-brand-silver/20 h-full">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-white mb-6">How We Do It:</h3>
                      <ul className="space-y-4">
                        {value.howWeDo.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-brand-lime rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-brand-silver">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Our <span className="text-brand-lime">Values</span> in Action?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Let's discuss how these principles can transform your business operations and customer relationships.
          </p>
          <Link to="/consultation">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold text-lg px-8 py-3">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoreValues;
