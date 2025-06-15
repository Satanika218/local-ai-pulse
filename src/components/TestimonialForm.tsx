
import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface TestimonialFormData {
  name: string;
  businessName: string;
  servicesDescription: string;
  impact: string;
  rating: number;
  permission: boolean;
}

const TestimonialForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    businessName: '',
    servicesDescription: '',
    impact: '',
    rating: 0,
    permission: false
  });
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleInputChange = (field: keyof TestimonialFormData, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStarClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.businessName || !formData.servicesDescription || !formData.impact || formData.rating === 0 || !formData.permission) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all fields, provide a rating, and grant permission to use your testimonial.",
        variant: "destructive"
      });
      return;
    }

    // For now, just show a success message
    // Once Supabase is connected, this will send actual emails
    console.log('Testimonial submission:', formData);
    
    toast({
      title: "Testimonial Submitted!",
      description: "Thank you for your testimonial. We'll review it and may contact you for approval before featuring it on our website."
    });

    // Reset form
    setFormData({
      name: '',
      businessName: '',
      servicesDescription: '',
      impact: '',
      rating: 0,
      permission: false
    });
  };

  return (
    <Card className="bg-brand-navy-light border-brand-silver/20">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">Your Name *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="businessName" className="text-white mb-2 block">Business Name *</Label>
              <Input
                id="businessName"
                type="text"
                value={formData.businessName}
                onChange={(e) => handleInputChange('businessName', e.target.value)}
                className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60"
                placeholder="Enter your business name"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="servicesDescription" className="text-white mb-2 block">Services We Provided *</Label>
            <Textarea
              id="servicesDescription"
              value={formData.servicesDescription}
              onChange={(e) => handleInputChange('servicesDescription', e.target.value)}
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 min-h-[100px]"
              placeholder="Briefly describe the services 11th Temple Solutions provided to your business"
              required
            />
          </div>

          <div>
            <Label htmlFor="impact" className="text-white mb-2 block">Impact on Your Business *</Label>
            <Textarea
              id="impact"
              value={formData.impact}
              onChange={(e) => handleInputChange('impact', e.target.value)}
              className="bg-brand-navy border-brand-silver/30 text-white placeholder:text-brand-silver/60 min-h-[120px]"
              placeholder="Describe the impact our solutions had on your business (e.g., increased efficiency, revenue growth, time savings, etc.)"
              required
            />
          </div>

          <div>
            <Label className="text-white mb-3 block">Rate Your Experience *</Label>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="p-1 transition-colors duration-200"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= (hoveredStar || formData.rating)
                        ? 'text-brand-lime fill-current'
                        : 'text-brand-silver/40'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-3 text-brand-silver">
                {formData.rating > 0 ? `${formData.rating} star${formData.rating !== 1 ? 's' : ''}` : 'No rating selected'}
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="permission"
              checked={formData.permission}
              onChange={(e) => handleInputChange('permission', e.target.checked)}
              className="mt-1 h-4 w-4 text-brand-lime border-brand-silver/30 rounded focus:ring-brand-lime focus:ring-2"
              required
            />
            <Label htmlFor="permission" className="text-brand-silver text-sm leading-relaxed">
              I give permission for 11th Temple Solutions to use this testimonial on their website and marketing materials. *
            </Label>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold"
          >
            <Send className="h-5 w-5 mr-2" />
            Submit Testimonial
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TestimonialForm;
