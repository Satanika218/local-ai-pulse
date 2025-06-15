
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  initialPurposeOptions, 
  businessAreas, 
  biggestChallenges, 
  techLevels, 
  secondLevelQuestions,
  understandingOptions 
} from './conversationData';

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

interface OptionsRendererProps {
  currentStep: string;
  userPath: UserPath;
  onInitialPurpose: (purpose: string) => void;
  onBusinessArea: (area: string) => void;
  onBiggestChallenge: (challenge: string) => void;
  onTechLevel: (level: string) => void;
  onSpecificProblem: (problem: string) => void;
  onProblemDetails: (details: string) => void;
  onUnderstandsProblem: (understanding: string) => void;
  onSolutionInterest: (interested: boolean) => void;
}

const OptionsRenderer = ({
  currentStep,
  userPath,
  onInitialPurpose,
  onBusinessArea,
  onBiggestChallenge,
  onTechLevel,
  onSpecificProblem,
  onProblemDetails,
  onUnderstandsProblem,
  onSolutionInterest
}: OptionsRendererProps) => {
  if (currentStep === 'greeting') {
    return (
      <div className="space-y-2">
        {initialPurposeOptions.map((purpose, index) => (
          <Button
            key={index}
            onClick={() => onInitialPurpose(purpose)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {purpose}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'businessArea') {
    return (
      <div className="space-y-2">
        {businessAreas.map((area, index) => (
          <Button
            key={index}
            onClick={() => onBusinessArea(area)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {area}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'biggestChallenge') {
    return (
      <div className="space-y-2">
        {biggestChallenges.map((challenge, index) => (
          <Button
            key={index}
            onClick={() => onBiggestChallenge(challenge)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {challenge}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'techLevel') {
    return (
      <div className="space-y-2">
        {techLevels.map((level, index) => (
          <Button
            key={index}
            onClick={() => onTechLevel(level)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {level}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'specificProblem' && userPath.businessArea) {
    const options = secondLevelQuestions[userPath.businessArea]?.options || [];
    return (
      <div className="space-y-2">
        {options.map((problem, index) => (
          <Button
            key={index}
            onClick={() => onSpecificProblem(problem)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {problem}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'problemDetails') {
    return (
      <div className="space-y-2">
        <Input
          placeholder="Tell me more about your situation..."
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              const value = (e.target as HTMLInputElement).value;
              if (value.trim()) {
                onProblemDetails(value);
                (e.target as HTMLInputElement).value = '';
              }
            }
          }}
          className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
        />
      </div>
    );
  }

  if (currentStep === 'understandsProblem') {
    return (
      <div className="space-y-2">
        {understandingOptions.map((option, index) => (
          <Button
            key={index}
            onClick={() => onUnderstandsProblem(option)}
            variant="outline"
            size="sm"
            className="w-full text-left justify-start bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime text-xs"
          >
            {option}
          </Button>
        ))}
      </div>
    );
  }

  if (currentStep === 'solutionExplanation') {
    return (
      <div className="space-y-2">
        <Button
          onClick={() => onSolutionInterest(true)}
          size="sm"
          className="w-full bg-brand-lime text-black hover:bg-black hover:text-brand-lime"
        >
          Yes, tell me more!
        </Button>
        <Button
          onClick={() => onSolutionInterest(false)}
          variant="outline"
          size="sm"
          className="w-full bg-brand-lime text-black border-brand-lime hover:bg-black hover:text-brand-lime"
        >
          Explore other solutions
        </Button>
      </div>
    );
  }

  return null;
};

export default OptionsRenderer;
