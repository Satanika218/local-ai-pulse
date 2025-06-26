
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Consultation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { name, email, phone, message });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-brand-navy-light py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Free Consultation
        </h1>
        <p className="text-brand-silver text-lg">
          Get expert advice on how AI can transform your business.
        </p>
      </div>

      {/* Consultation Form */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white mb-2"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white mb-2"
            >
              Phone
            </label>
            <Input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Phone"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white mb-2"
            >
              Message
            </label>
            <Textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold py-3 text-lg"
            >
              Request Consultation
            </Button>
          </div>
        </form>
      </div>

      <Footer />
      <ChatbotLauncher />
    </div>
  );
};

export default Consultation;
