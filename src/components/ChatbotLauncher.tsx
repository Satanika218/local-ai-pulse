
import { useState } from "react";
import { Button } from "./ui/button";
import { MessageSquare, X } from "lucide-react";
import BusinessConsultantChatbot from "./business-consultant-chatbot";

const ChatbotLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-brand-lime hover:bg-brand-lime-dark text-brand-navy shadow-xl z-[9998] animate-pulse-glow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? <X size={50} /> : <MessageSquare size={50} />}
      </Button>
      {isOpen && <BusinessConsultantChatbot onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatbotLauncher;
