
import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ChatErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Chat error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-brand-silver">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span>Something went wrong with the chat</span>
          </div>
          <Button 
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onReset();
            }}
            size="sm"
            className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark"
          >
            Restart Chat
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChatErrorBoundary;
