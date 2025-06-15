
import React from 'react';

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
  return (
    <div className="flex-1 overflow-y-auto space-y-3 mb-4">
      {messages.map((message, index) => (
        <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
          <div className={`inline-block p-2 rounded-lg max-w-xs text-xs ${
            message.type === 'user' 
              ? 'bg-brand-lime text-brand-navy' 
              : 'bg-brand-navy text-brand-silver'
          }`}>
            {message.text}
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="text-left">
          <div className="inline-block p-2 rounded-lg bg-brand-navy text-brand-silver text-xs">
            <span className="animate-pulse">...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageList;
