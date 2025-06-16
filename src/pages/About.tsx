import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

export default function About() {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64 md:h-96 flex items-center justify-center"
        style={{ backgroundImage: `url('/lovable-uploads/09998a9d-7586-4645-8991-c494c9493911.jpg')` }}>
        <div className="absolute inset-0 bg-brand-navy opacity-60"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-brand-lime">11th Temple Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-silver">
            Learn about our mission, values, and the team behind the AI innovation.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-brand-silver mb-6">
                At 11th Temple Solutions, our mission is to empower local businesses with cutting-edge AI automation solutions. We strive to simplify complex processes, enhance productivity, and foster sustainable growth, enabling our clients to thrive in an increasingly competitive market.
              </p>
              <Link to="/core-values">
                <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Our Core Values <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="/lovable-uploads/49f15e9a-456a-4499-8991-191e59989544.jpg"
                alt="Our Mission"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-brand-navy-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise */}
            <div className="bg-brand-navy rounded-lg p-6 shadow-md border border-brand-silver/20">
              <h3 className="text-xl font-bold text-white mb-2">Expertise</h3>
              <p className="text-brand-silver">
                Our team comprises AI specialists, software developers, and business strategists with years of experience in automation and digital transformation.
              </p>
            </div>
            {/* Customized Solutions */}
            <div className="bg-brand-navy rounded-lg p-6 shadow-md border border-brand-silver/20">
              <h3 className="text-xl font-bold text-white mb-2">Customized Solutions</h3>
              <p className="text-brand-silver">
                We understand that every business is unique. Our solutions are tailored to meet your specific needs and challenges, ensuring maximum impact and ROI.
              </p>
            </div>
            {/* Proven Results */}
            <div className="bg-brand-navy rounded-lg p-6 shadow-md border border-brand-silver/20">
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-brand-silver">
                We have a track record of delivering measurable results for our clients, from increased efficiency and reduced costs to improved customer satisfaction and revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="/lovable-uploads/f649999b-0115-4971-9071-ca9150a9b544.jpg"
                alt="Our Approach"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Strategic, Collaborative, and Results-Driven
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
                  <span className="font-semibold">Strategic Planning:</span> We start with a deep dive into your business to identify key areas for automation.
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
                  <span className="font-semibold">Collaborative Partnership:</span> We work closely with your team to ensure seamless integration and alignment with your business goals.
                </li>
                <li className="flex items-center text-brand-silver">
                  <CheckCircle className="h-5 w-5 text-brand-lime mr-2" />
                  <span className="font-semibold">Results-Driven Execution:</span> We focus on delivering measurable results, continuously optimizing our solutions to maximize your ROI.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      {/* <section className="py-12 bg-brand-navy-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-navy rounded-lg p-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-bold text-white text-center">John Doe</h3>
              <p className="text-brand-silver text-center">CEO</p>
            </div>
            <div className="bg-brand-navy rounded-lg p-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-bold text-white text-center">Jane Smith</h3>
              <p className="text-brand-silver text-center">CTO</p>
            </div>
            <div className="bg-brand-navy rounded-lg p-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-bold text-white text-center">Mike Johnson</h3>
              <p className="text-brand-silver text-center">AI Specialist</p>
            </div>
            <div className="bg-brand-navy rounded-lg p-4 shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-2"
              />
              <h3 className="text-xl font-bold text-white text-center">Emily Brown</h3>
              <p className="text-brand-silver text-center">Business Strategist</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Contact us today to learn more about how our AI automation solutions can help your business thrive.
          </p>
          <Link to="/contact">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
}
