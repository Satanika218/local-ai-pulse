
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-brand-navy-light py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About 11th Temple Solutions
          </h1>
          <p className="text-xl text-brand-silver leading-relaxed">
            Empowering Welsh SMEs through innovative AI solutions and digital transformation
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-brand-silver max-w-3xl mx-auto">
              To democratize AI technology for small and medium enterprises in Wales, 
              helping them compete in the digital age through accessible, practical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Focused Solutions</h3>
                <p className="text-brand-silver">
                  We deliver targeted AI solutions that address real business challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-brand-silver">
                  Cutting-edge technology made accessible for traditional industries.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy-light border-brand-silver/20">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-brand-silver">
                  Committed to delivering exceptional results and ongoing support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 bg-brand-navy-light">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-lg text-brand-silver">
              Meet the experts behind 11th Temple Solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-brand-lime rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-navy">DA</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dan Armour</h3>
                <p className="text-brand-lime font-medium mb-3">Co-Founder & Technical Director</p>
                <p className="text-brand-silver">
                  Leading AI implementation and technical strategy with extensive experience 
                  in machine learning and business automation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-brand-lime rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-brand-navy">NO</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Neil Owen</h3>
                <p className="text-brand-lime font-medium mb-3">Co-Founder & Business Development</p>
                <p className="text-brand-silver">
                  Specializing in digital transformation strategy and helping SMEs 
                  navigate their journey to technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-lime mb-3">Accessibility</h3>
              <p className="text-brand-silver">
                Making advanced AI technology accessible and understandable for all businesses, 
                regardless of their technical background.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-lime mb-3">Partnership</h3>
              <p className="text-brand-silver">
                Building long-term partnerships with our clients, supporting their growth 
                and evolution in the digital landscape.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-lime mb-3">Local Focus</h3>
              <p className="text-brand-silver">
                Proudly Welsh, we understand the unique challenges and opportunities 
                facing businesses in our communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-brand-lime mb-3">Results-Driven</h3>
              <p className="text-brand-silver">
                Every solution we implement is designed to deliver measurable improvements 
                to your business operations and bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default About;
