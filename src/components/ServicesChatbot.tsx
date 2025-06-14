
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m here to help you find the perfect AI solution for your business. What are your main needs today?' }
  ]);
  const [selectedService, setSelectedService] = useState('');

  const serviceOptions = [
    'Website & Digital Presence',
    'Digital Marketing', 
    'Creative & Design',
    'Financial Operations',
    'Customer Relationships',
    'Sales & Lead Generation',
    'Human Resources',
    'Customer Support',
    'Project Management',
    'Administrative Operations'
  ];

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setMessages(prev => [...prev, 
      { type: 'user', text: service },
      { type: 'bot', text: `Great choice! ${service} is one of our key specialties. Let me connect you with the right specialist. Would you like to schedule a consultation to discuss your specific needs?` }
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark shadow-lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96">
          <Card className="bg-brand-navy-light border-brand-silver/20 h-full">
            <CardContent className="p-4 h-full flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                {messages.map((message, index) => (
                  <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block p-2 rounded-lg max-w-xs ${
                      message.type === 'user' 
                        ? 'bg-brand-lime text-brand-navy' 
                        : 'bg-brand-navy text-brand-silver'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-brand-silver text-sm">Select a service area:</p>
                    {serviceOptions.map((service, index) => (
                      <Button
                        key={index}
                        onClick={() => handleServiceSelect(service)}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start border-brand-silver/30 text-brand-silver hover:bg-brand-lime hover:text-brand-navy text-xs"
                      >
                        {service}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
              
              {selectedService && (
                <div className="text-center">
                  <Button 
                    size="sm" 
                    className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark"
                    onClick={() => window.location.href = '/consultation'}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ServicesChatbot;
