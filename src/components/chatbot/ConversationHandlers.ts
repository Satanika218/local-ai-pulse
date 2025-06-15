
import { solutionRecommendations, problemDetailsQuestions, secondLevelQuestions } from './conversationData';

interface UserPath {
  initialPurpose?: string;
  businessArea?: string;
  biggestChallenge?: string;
  techLevel?: string;
  specificProblem?: string;
  problemDetails?: string;
  understandsProblem?: string;
  recommendedSolution?: string;
}

export const generateSolutionExplanation = (problem: string, userPath: UserPath): string => {
  const solutions = solutionRecommendations[problem];
  
  if (solutions) {
    let explanation = `Great! Based on what you've shared about ${problem.toLowerCase()}, here are solutions that could help:\n\n`;
    
    solutions.solutions.forEach((solution, index) => {
      explanation += `${index + 1}. **${solution.name}**: ${solution.description} ${solution.benefit}\n\n`;
    });
    
    explanation += "Would you like to learn more about any of these options?";
    return explanation;
  }
  
  // Default solution explanation for problems without specific recommendations
  if (problem === 'Creating a professional logo and visual identity that represents your business') {
    return "Perfect! We can help you create a professional brand identity that truly represents your business. Think of it like having a professional designer who understands your industry and target customers. We can create everything from logos to business cards to website designs that work together as a cohesive brand. Most businesses see increased customer trust and recognition within just a few weeks of implementing a professional brand identity. Would this kind of comprehensive branding support be valuable for your business?";
  }
  
  if (problem === 'You\'re not sure how to start converting paper documents to digital') {
    return "Excellent! Going paperless is easier than most people think. We can help you set up a system that's like having a super-organized filing assistant who never loses anything. Imagine being able to find any document in seconds just by typing a few words, and having everything safely backed up so you never have to worry about losing important papers. We typically help businesses go 80% paperless within the first month. Does this kind of organized, searchable document system sound helpful?";
  }
  
  if (problem === 'You\'re not sure what "the cloud" actually means for your business') {
    return "Great question! Think of the cloud like having a super-secure, always-available office that you can access from anywhere. Instead of your important files being stuck on one computer, they're safely stored online where you can reach them from your office, home, or even your phone. It's like upgrading from a single filing cabinet to having a whole organized warehouse that's always available when you need it. Most businesses find the cloud actually makes their work easier and more flexible. Would you like to understand how this could work specifically for your business?";
  }
  
  // Generic response for other problems
  return "Based on your situation, there are definitely automated solutions that can help streamline this process for you. The key is finding the right combination of tools that work specifically for your business. Would you like to discuss some options that might fit your needs?";
};

export const generateUnderstandingSummary = (problem: string, details?: string): string => {
  if (problem === 'Not enough people are contacting you or buying through your website') {
    return "So it sounds like people are visiting your website but not taking the next step to contact you or make a purchase. This often happens when visitors can't quickly find what they're looking for or don't feel confident enough to reach out. Does that capture the main issue?";
  }
  
  if (problem === 'Processing bills, receipts and invoices takes too long') {
    return "I see, so you're spending considerable time on manual data entry and document handling. This is actually one of the most common time drains for businesses. Does it feel like this task is taking time away from more important business activities?";
  }
  
  if (problem === 'Responding to customer questions quickly enough') {
    return "It sounds like you want to respond to customers quickly but sometimes get overwhelmed with the volume or timing of inquiries. Quick responses really do make a difference in customer satisfaction. Is that the main challenge?";
  }
  
  if (problem === 'Identifying which potential customers are most likely to buy') {
    return "So you're getting leads but finding that many aren't a good fit, which means time spent on prospects who won't convert. That can be really frustrating and inefficient. Is that hitting the mark?";
  }
  
  if (problem === 'Creating regular posts, emails or content to share with customers') {
    return "It sounds like you know content is important but finding the time and knowing what to create is the challenge. Staying consistent across multiple platforms can definitely feel overwhelming. Does that sound right?";
  }
  
  // Default summary
  return "Based on what you've shared, it seems like this area is taking up more time and energy than you'd like, and you're looking for ways to make it more efficient. Does that capture the main issue?";
};

export const getNextStepOptions = (): Array<{ text: string; description: string }> => [
  {
    text: "A free 30-minute chat with one of our specialists to discuss this solution in more detail",
    description: "This is a no-obligation conversation to explore how we might help your specific situation"
  },
  {
    text: "A short case study showing how another business solved similar challenges",
    description: "This is a real-world example of how a business like yours benefited from our solutions"
  },
  {
    text: "A personalized recommendation with pricing options and implementation timeline",
    description: "This is a custom plan created specifically for your business needs"
  }
];
