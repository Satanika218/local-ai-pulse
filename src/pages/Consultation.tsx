
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/Footer";
import ChatbotLauncher from "@/components/ChatbotLauncher";

const Consultation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      alert("Please accept the privacy policy to proceed.");
      return;
    }

    // Handle form submission logic here
    console.log("Form submitted", { 
      name, 
      email, 
      phone, 
      message, 
      gdprConsent, 
      marketingConsent,
      submittedAt: new Date().toISOString()
    });
    
    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setGdprConsent(false);
    setMarketingConsent(false);
    
    alert("Thank you for your submission! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-brand-navy-light py-12 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Let's Chat About Your Business
        </h1>
        <p className="text-brand-silver text-lg">
          Get expert advice on how AI can transform your business. 
          No obligation, a simple conversation between business people who understand the regional landscape.
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
              Name *
            </label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email *
            </label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-brand-navy placeholder:text-gray-500 border-brand-silver focus:border-brand-lime focus:ring-brand-lime"
              placeholder="Your Email"
              required
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

          {/* GDPR Consent Section */}
          <div className="space-y-4 p-4 bg-brand-navy-light rounded-lg border border-brand-silver/20">
            <h3 className="text-lg font-semibold text-white">Data Protection & Privacy</h3>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="gdpr-consent"
                checked={gdprConsent}
                onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="gdpr-consent" className="text-sm text-brand-silver">
                I consent to 11th Temple Solutions processing my personal data for the purpose of responding to my consultation request. 
                I understand my data will be processed in accordance with your Privacy Policy and I have the right to withdraw consent at any time. *
              </label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="marketing-consent"
                checked={marketingConsent}
                onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="marketing-consent" className="text-sm text-brand-silver">
                I would like to receive marketing communications about 11th Temple Solutions' services and industry insights. 
                I can unsubscribe at any time. (Optional)
              </label>
            </div>
            
            <p className="text-xs text-brand-silver">
              Your data is processed under Art. 6.1.a (consent) and Art. 6.1.b (contract performance) of the GDPR. 
              We will not share your data with third parties without your explicit consent.
            </p>
          </div>

          <div>
            <Button
              type="submit"
              disabled={!gdprConsent}
              className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime/90 font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Let's talk - 30mins to See How We Can Help - Free
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
