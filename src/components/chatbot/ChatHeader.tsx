
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  currentStep: string;
  showForm: boolean;
  onReset: () => void;
}

const ChatHeader = ({ currentStep, showForm, onReset }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4 pb-2 border-b border-brand-silver/20">
      <div>
        <h3 className="text-white font-semibold text-sm">11th Temple Solutions</h3>
        <p className="text-brand-silver text-xs">AI Business Consultant</p>
      </div>
      {currentStep !== 'greeting' && !showForm && (
        <Button
          onClick={onReset}
          variant="ghost"
          size="sm"
          className="text-brand-silver hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default ChatHeader;
