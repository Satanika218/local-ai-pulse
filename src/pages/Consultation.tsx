
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Consultation = () => {
  const benefits = [
    "Personalized AI strategy for your business",
    "Local market analysis and opportunities",
    "Implementation roadmap and timeline",
    "ROI projections and cost-benefit analysis",
    "Ongoing support and training options"
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Free AI <span className="text-brand-lime">Consultation</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can help you harness 
              the full power of automation while maintaining your local community connections.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-brand-lime">Local AI Expertise?</span>
              </h2>
              <p className="text-brand-silver text-lg mb-6">
                AI is everywhere in the conversation, but many businesses haven't harnessed its full potential. 
                That's where we come in. We specialize in working with local businesses because we understand 
                the unique challenges and opportunities that come with serving your community.
              </p>
              <p className="text-brand-silver text-lg mb-6">
                Our goal is to help elevate entire communities by enabling local businesses to grow, eliminate 
                menial tasks, and focus on the parts of their business that truly drive growth and customer satisfaction.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-brand-lime flex-shrink-0" />
                    <span className="text-brand-silver">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card 
                className="bg-brand-navy border-brand-silver/20 cursor-pointer hover:border-brand-lime/50 transition-all duration-300"
                onClick={scrollToBooking}
              >
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Schedule Your Session</h3>
                  <p className="text-brand-silver mb-4">Book a free 30-minute consultation at your convenience</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Response</h3>
                  <p className="text-brand-silver mb-4">Get actionable insights and next steps within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-brand-navy border-brand-silver/20">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-brand-lime mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Local Expertise</h3>
                  <p className="text-brand-silver mb-4">Work with experts who understand your local market</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduler Section */}
      <section id="booking-section" className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your <span className="text-brand-lime">Free Consultation</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Choose a time that works for you and let's start your AI transformation journey.
            </p>
          </div>

          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardContent className="p-8">
              <div className="w-full" style={{ minHeight: '600px' }}>
                <iframe 
                  src="https://11th-temple-ai-solutions.youcanbook.me/"
                  width="100%" 
                  height="600"
                  frameBorder="0"
                  title="Book a Consultation"
                  className="rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
