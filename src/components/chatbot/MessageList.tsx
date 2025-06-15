
import React, { useEffect, useRef } from 'react';

interface ChatMessage {
  type: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

interface MessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

const MessageList = ({ messages, isTyping }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div 
      className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-64"
      role="log"
      aria-live="polite"
      aria-label="Chat conversation"
    >
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}
          role="listitem"
        >
          <div 
            className={`inline-block p-2 rounded-lg max-w-xs text-xs ${
              message.type === 'user' 
                ? 'bg-brand-lime text-brand-navy' 
                : 'bg-brand-navy-light text-brand-silver border border-brand-silver/20'
            }`}
            aria-label={`${message.type === 'user' ? 'Your message' : 'Bot response'} at ${message.timestamp.toLocaleTimeString()}`}
          >
            {message.text}
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="text-left" role="status" aria-label="Bot is typing">
          <div className="inline-block p-2 rounded-lg bg-brand-navy-light text-brand-silver border border-brand-silver/20 text-xs">
            <span className="animate-pulse">...</span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
