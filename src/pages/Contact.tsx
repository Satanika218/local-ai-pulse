
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DecisionTreeChatbot from "@/components/DecisionTreeChatbot";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-brand-lime" />,
      title: "Email Us",
      details: "Hello@11thtemplesolutions.com",
      description: "Send us an e-mail anytime and we'll get back to you ASAP"
    },
    {
      icon: <Phone className="h-6 w-6 text-brand-lime" />,
      title: "Call Us or WhatsApp",
      details: "+44 7312 190 728",
      description: "Mon-Sun 10:00 - 20:00"
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-lime" />,
      title: "Based In",
      details: "Newtown, Powys",
      description: "Local Knowledge - Nationwide Coverage"
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-lime" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "Typically same day"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-brand-lime">Touch</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Ready to transform your local business with AI automation? 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-brand-navy border-brand-silver/20 hover:border-brand-lime/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-brand-lime font-medium mb-1">{info.details}</p>
                  <p className="text-brand-silver text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your <span className="text-brand-lime">AI Journey Today</span>
            </h2>
            <p className="text-xl text-brand-silver">
              Fill out the form below and we'll get back to you with a customised solution proposal.
            </p>
          </div>

          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-white font-medium mb-2">
                      Business Name
                    </label>
                    <Input
                      id="business"
                      name="business"
                      type="text"
                      value={formData.business}
                      onChange={handleChange}
                      className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime"
                      placeholder="Enter your business name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 focus:border-brand-lime min-h-[120px]"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked <span className="text-brand-lime">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  How quickly can you implement AI automation for my business?
                </h3>
                <p className="text-brand-silver">
                  Implementation timelines vary based on complexity, but most local businesses see initial 
                  automation benefits within 2-4 weeks. We work with your schedule to minimise disruption.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you provide training for our staff?
                </h3>
                <p className="text-brand-silver">
                  Absolutely! We include comprehensive training as part of every implementation. Our team 
                  ensures your staff is comfortable and confident using the new AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-brand-navy border-brand-silver/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What makes your local approach different?
                </h3>
                <p className="text-brand-silver">
                  We understand that local businesses have unique community connections and cultural nuances. 
                  Our AI solutions are designed to enhance these relationships, not replace them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <DecisionTreeChatbot />
      <Footer />
    </div>
  );
};

export default Contact;
