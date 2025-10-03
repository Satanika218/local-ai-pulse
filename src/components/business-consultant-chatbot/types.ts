export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ConversationNode {
  id: string;
  text: string;
  options?: ConversationOption[];
}

export interface ConversationOption {
  text: string;
  keywords?: string[];
  next: string;
}

export interface LLMResponse {
  content: string;
  confidence: number;
  sourceDocuments?: string[];
}

export interface ChatbotState {
  currentNode: string;
  messages: ChatMessage[];
  isLoading: boolean;
  useLLM: boolean;
  isLLMInitialized: boolean;
}

export interface LLMConfig {
  apiKey?: string;
  model?: string;
  maxTokens?: number;
  temperature?: number;
}