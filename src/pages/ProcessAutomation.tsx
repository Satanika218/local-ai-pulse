import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Clock, Users, TrendingUp, MessageCircle, BarChart3, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function ProcessAutomation() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-brand-lime">Process Automation</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          Streamline your business operations with AI-powered process automation.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Zap className="h-5 w-5 text-brand-lime" />
                <span>Automated Workflows</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Design and automate complex workflows to reduce manual effort and improve efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Customizable workflow templates</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Real-time monitoring and reporting</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Integration with existing systems</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Clock className="h-5 w-5 text-brand-lime" />
                <span>Task Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Automate task assignments, track progress, and ensure timely completion of projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated task scheduling</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Progress tracking and notifications</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Resource allocation and optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <Users className="h-5 w-5 text-brand-lime" />
                <span>Team Collaboration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Enhance team collaboration with automated communication and document sharing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated meeting scheduling</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Secure document sharing and version control</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Integrated communication channels</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-brand-lime" />
                <span>Performance Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Gain insights into your business processes with real-time analytics and reporting.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Customizable dashboards and reports</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated data collection and analysis</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Performance tracking and optimization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-brand-lime" />
                <span>Customer Communication</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Automate customer communication to improve engagement and satisfaction.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated email and SMS campaigns</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Personalized customer interactions</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Feedback collection and analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Card 6 */}
          <Card className="bg-brand-navy-light border border-brand-silver/20 shadow transition-transform hover:-translate-y-2">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center space-x-2">
                <FolderOpen className="h-5 w-5 text-brand-lime" />
                <span>Document Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-brand-silver mb-4">
                Automate document processing and organization to reduce paperwork and improve efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated document scanning and OCR</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Secure document storage and retrieval</span>
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-4 w-4 text-brand-lime mr-2" />
                  <span>Automated document routing and approval</span>
                </li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Automate Your Business Processes?
        </h2>
        <p className="text-xl text-brand-silver mb-6">
          Contact us today for a free consultation and discover how our AI automation solutions can transform your local business.
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
