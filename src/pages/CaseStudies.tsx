import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const caseStudies = [
  {
    id: "customer-service",
    title: "Enhanced Customer Service",
    customer: "Tech Solutions Inc.",
    date: "2023-08-15",
    employees: 500,
    tags: ["Customer Service", "AI Chatbots", "Automation"],
    stars: 4.5,
    content: (
      <>
        <CardDescription>
          Tech Solutions Inc. improved customer satisfaction by 40% using our AI-powered chatbots.
        </CardDescription>
        <p>
          By implementing AI-driven chatbots, Tech Solutions Inc. was able to provide 24/7 customer support,
          reducing response times and improving overall customer satisfaction. The AI chatbots handled routine
          inquiries, allowing human agents to focus on more complex issues.
        </p>
      </>
    ),
  },
  {
    id: "lead-generation",
    title: "Lead Generation Automation",
    customer: "Marketing Pro Agency",
    date: "2023-07-01",
    employees: 150,
    tags: ["Lead Generation", "Marketing Automation", "AI"],
    stars: 5,
    content: (
      <>
        <CardDescription>
          Marketing Pro Agency increased lead generation by 60% with our AI-driven marketing automation.
        </CardDescription>
        <p>
          Our AI-driven marketing automation helped Marketing Pro Agency identify and nurture high-quality leads,
          resulting in a significant increase in lead generation. The AI system analyzed customer data to
          personalize marketing messages and optimize campaign performance.
        </p>
      </>
    ),
  },
  {
    id: "process-automation",
    title: "Streamlined Business Processes",
    customer: "Global Enterprises Ltd.",
    date: "2023-06-10",
    employees: 1200,
    tags: ["Process Automation", "Efficiency", "AI"],
    stars: 4,
    content: (
      <>
        <CardDescription>
          Global Enterprises Ltd. reduced operational costs by 30% through our AI-powered process automation.
        </CardDescription>
        <p>
          By automating routine tasks and streamlining workflows, Global Enterprises Ltd. was able to significantly
          reduce operational costs. The AI system automated data entry, invoice processing, and other time-consuming
          tasks, freeing up employees to focus on more strategic initiatives.
        </p>
      </>
    ),
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Customer <span className="text-brand-lime">Success Stories</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto mb-8">
              Explore how businesses like yours have achieved remarkable results with our AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={caseStudies[0].id} className="w-full">
            <TabsList className="flex space-x-4 p-2 bg-brand-navy border border-brand-silver/20 rounded-full">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="data-[state=active]:bg-brand-lime data-[state=active]:text-brand-navy text-brand-silver rounded-full px-4 py-2 font-medium text-sm focus:outline-none transition-colors"
                >
                  {study.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {caseStudies.map((study) => (
              <TabsContent
                key={study.id}
                value={study.id}
                className="mt-8"
              >
                <Card className="bg-brand-navy border border-brand-silver/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">{study.title}</CardTitle>
                    <div className="flex items-center space-x-2 text-brand-silver">
                      <Star className="h-5 w-5 text-brand-lime" />
                      <span>{study.stars}</span>
                      <Calendar className="h-5 w-5 ml-4" />
                      <span>{new Date(study.date).toLocaleDateString()}</span>
                      <Users className="h-5 w-5 ml-4" />
                      <span>{study.employees} Employees</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} className="bg-brand-silver text-black">{tag}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {typeof study.content === 'string' ? (
                      <CardDescription className="text-brand-silver">{study.content}</CardDescription>
                    ) : (
                      study.content
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Achieve Your Own Success Story?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Contact us today to learn how our AI automation solutions can drive growth and efficiency for your business.
          </p>
          <Link to="/consultation">
            <Button size="lg" className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default CaseStudies;
