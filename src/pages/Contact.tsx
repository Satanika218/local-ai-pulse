import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic form validation
    if (!name || !email || !message) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields.",
      });
      return;
    }

    // Simulate form submission (replace with actual submission logic)
    console.log("Form submitted", { name, email, message });
    toast({
      title: "Success",
      description: "Your message has been sent!",
    });

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact <span className="text-brand-lime">Us</span>
        </h1>
        <p className="text-xl text-brand-silver max-w-2xl mx-auto mb-6">
          We're here to help! Reach out with any questions or inquiries.
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 pb-16">
        {/* Contact Form */}
        <Card className="bg-brand-navy-light border border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Send us a message</CardTitle>
            <CardDescription className="text-brand-silver">We'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-brand-navy border-brand-silver/50 text-white placeholder:text-brand-silver"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-brand-navy border-brand-silver/50 text-white placeholder:text-brand-silver"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-brand-navy border-brand-silver/50 text-white placeholder:text-brand-silver min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-brand-navy-light border border-brand-silver/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Contact Information</CardTitle>
            <CardDescription className="text-brand-silver">Get in touch with us.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3 text-brand-silver">
              <MapPin className="h-5 w-5 text-brand-lime" />
              <span>123 Main Street, Anytown, USA</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-silver">
              <Phone className="h-5 w-5 text-brand-lime" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-silver">
              <Mail className="h-5 w-5 text-brand-lime" />
              <span>hello@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-silver">
              <Clock className="h-5 w-5 text-brand-lime" />
              <span>Mon - Fri: 9am - 5pm</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Contact;
