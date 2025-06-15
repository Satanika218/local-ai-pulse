
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  website: string;
  additionalInfo: string;
  consent: boolean;
}

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

interface ContactFormProps {
  formData: FormData;
  userPath: UserPath;
  formSubmitted: boolean;
  onInputChange: (field: keyof FormData, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onReset: () => void;
}

const ContactForm = ({ 
  formData, 
  userPath, 
  formSubmitted, 
  onInputChange, 
  onSubmit, 
  onReset 
}: ContactFormProps) => {
  if (formSubmitted) {
    return (
      <div className="space-y-4 text-center">
        <div className="bg-brand-lime/10 border border-brand-lime/30 rounded-lg p-4">
          <h4 className="text-brand-lime font-semibold mb-2">Thanks for reaching out!</h4>
          <p className="text-brand-silver text-sm mb-4">Dan or Neil will contact you within 1 business day.</p>
          <Button 
            size="sm" 
            className="bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime mb-2"
            onClick={() => window.open('/consultation', '_blank')}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Free Consultation
          </Button>
          <p className="text-brand-silver text-xs">
            Or email us directly at hello@11thtemplesolutions.com
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onReset}
          className="border-brand-lime text-brand-lime hover:bg-brand-navy hover:text-brand-lime"
        >
          Start New Conversation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Input
          placeholder="Full Name *"
          value={formData.fullName}
          onChange={(e) => onInputChange('fullName', e.target.value)}
          required
          className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
        />
        <Input
          placeholder="Business Name *"
          value={formData.businessName}
          onChange={(e) => onInputChange('businessName', e.target.value)}
          required
          className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
        />
      </div>
      <Input
        type="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={(e) => onInputChange('email', e.target.value)}
        required
        className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
      />
      <Input
        type="tel"
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={(e) => onInputChange('phone', e.target.value)}
        required
        className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
      />
      <Input
        placeholder="Website URL (optional)"
        value={formData.website}
        onChange={(e) => onInputChange('website', e.target.value)}
        className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
      />
      <Textarea
        placeholder="Tell us more about your specific needs..."
        value={formData.additionalInfo}
        onChange={(e) => onInputChange('additionalInfo', e.target.value)}
        className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
        rows={3}
      />
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="consent"
          checked={formData.consent}
          onChange={(e) => onInputChange('consent', e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="consent" className="text-brand-silver text-xs">
          I agree to be contacted about AI solutions for my business
        </label>
      </div>
      <Button 
        type="submit" 
        size="sm" 
        className="w-full bg-brand-lime text-brand-navy hover:bg-brand-navy hover:text-brand-lime"
      >
        Get Expert Help
      </Button>
    </form>
  );
};

export default ContactForm;
