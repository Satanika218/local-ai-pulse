
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquare, X } from "lucide-react";
import BusinessConsultantChatbot from "./business-consultant-chatbot";

const ChatbotLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 md:right-8 w-16 h-16 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-navy shadow-lg z-50 animate-pulse-glow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </Button>
      {isOpen && <BusinessConsultantChatbot onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotLauncher;
