
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [{
    name: "Dan Armour",
    role: "Co-Founder, Sales & AI Strategist",
    experience: "15+ years in sales, business development and tech deployment. Local to Shropshire, Dan brings deep understanding of rural business challenges and opportunities."
  }, {
    name: "Neil Owen",
    role: "Co-Founder, Head of Local Partnerships",
    experience: "20+ years in community business relations, operations specialist and local advocate. Born and raised in the heart of Powys, Neil understands the unique dynamics of local Welsh communities."
  }];
  
  const values = [{
    icon: <Target className="h-8 w-8 text-brand-lime" />,
    title: "Local Focus",
    description: "We understand that every community is unique and tailor our solutions accordingly."
  }, {
    icon: <Users className="h-8 w-8 text-brand-lime" />,
    title: "Human-Centered AI",
    description: "Our AI enhances human capabilities rather than replacing the personal touch."
  }, {
    icon: <Award className="h-8 w-8 text-brand-lime" />,
    title: "Excellence",
    description: "We're committed to delivering exceptional results for every local business partner."
  }, {
    icon: <TrendingUp className="h-8 w-8 text-brand-lime" />,
    title: "Growth",
    description: "We measure our success by the growth and success of our local business partners."
  }];
  
  return <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo above title - doubled in size */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
                alt="11th Temple Solutions" 
                className="h-48 w-48 mx-auto"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-brand-lime">11th Temple Solutions</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">We're a dedicated team of AI specialists and local business advocates, committed to bridging the gap between cutting-edge technology and community-focused commerce.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission: <span className="text-brand-lime">Powering Human Potential</span>
              </h2>
              <p className="text-brand-silver text-lg mb-6">
                At 11th Temple Solutions, we believe that AI should amplify human capabilities, not replace them. 
                Our mission is to deliver AI automation solutions that help local businesses thrive while 
                maintaining their unique community connections.
              </p>
              <p className="text-brand-silver text-lg">
                We understand that local businesses are the backbone of communities. That's why we've developed 
                AI solutions that respect local culture, understand regional nuances, and enhance the personal 
                relationships that make local businesses special.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-brand-lime/20 to-brand-silver/20 rounded-2xl p-8 backdrop-blur-sm border border-brand-silver/20">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-brand-silver mb-4 text-base">To be the catalyst for human potential in a digital world, transforming businesses through intelligent automation while strengthening the fabric of our local communities.</p>
                <p className="text-brand-silver mb-4 text-base">Heralding from the Marshes where Wales and England meet, both founders have a passion for the area, having worked and lived locally, there's a vested interest in seeing local businesses not just exist but thrive and increase the opportunities for those locally.</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-lime">
                  </div>
                    <div className="text-brand-silver text-sm">
                  </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-lime">
                  </div>
                    <div className="text-brand-silver text-sm">
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-brand-lime">Core Values</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-4">
              These principles guide every decision we make and every solution we develop.
            </p>
            <p className="text-brand-lime text-lg">
              Click on any value to learn how we put it into practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Link key={index} to="/core-values" className="block">
                <Card className="bg-brand-navy-light border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-brand-silver">{value.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-brand-lime">Expert Team</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Our team combines deep technical expertise with genuine passion for local business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => <Card key={index} className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-lime to-brand-silver rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-navy">
                      {index === 0 ? "D.A" : "N.O"}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-brand-lime mb-3">{member.role}</p>
                  <p className="text-brand-silver text-sm">{member.experience}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default About;
