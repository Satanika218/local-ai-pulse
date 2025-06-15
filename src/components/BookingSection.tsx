import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookingSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const [showDisclosure, setShowDisclosure] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');
    
    if (consent === 'accepted') {
      setShowDisclosure(false);
    } else if (!consent) {
      setShowDisclosure(true);
    }
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleConsentAndProceed = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setHasConsent(true);
    setShowDisclosure(false);
  };

  if (showDisclosure) {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <AlertCircle className="h-12 w-12 text-brand-lime mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Data Processing Disclosure</h3>
          <div className="space-y-4 text-brand-silver">
            <p>
              To schedule your consultation, we'll connect you to our secure booking system powered by YouCanBook.me.
            </p>
            <p>
              <strong>This process will:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-left max-w-2xl mx-auto">
              <li>Collect your name, email, and phone number</li>
              <li>Store your booking preferences and selected time slot</li>
              <li>Send you confirmation and reminder emails</li>
              <li>Use cookies to enhance your booking experience</li>
            </ul>
            <p>
              Your data is processed securely and used only for scheduling and consultation purposes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button 
              onClick={handleConsentAndProceed}
              className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90"
              aria-label="Accept data processing and proceed to booking"
            >
              Accept & Continue to Booking
            </Button>
            <Link to="/privacy">
              <Button 
                variant="outline"
                className="border-brand-silver bg-brand-silver text-black hover:bg-brand-silver/80 w-full sm:w-auto"
                aria-label="Read our privacy policy"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Privacy Policy
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (hasError) {
    return (
      <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Booking System Unavailable</h3>
          <p className="text-brand-silver mb-6">
            We're experiencing technical difficulties with our booking system. Please try again later or contact us directly.
          </p>
          <Link to="/contact">
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90">
              Contact Us Directly
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-brand-navy-light border-brand-silver/20 shadow-2xl">
      <CardContent className="p-8">
        <div className="relative w-full" style={{ minHeight: '600px' }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-navy-light rounded-lg">
              <div className="text-center">
                <Loader2 className="h-8 w-8 text-brand-lime mx-auto mb-4 animate-spin" />
                <p className="text-brand-silver">Loading booking system...</p>
              </div>
            </div>
          )}
          {hasConsent && (
            <iframe 
              src="https://11th-temple-ai-solutions.youcanbook.me/"
              width="100%" 
              height="600"
              frameBorder="0"
              title="Book a Consultation - Secure booking system powered by YouCanBook.me"
              className="rounded-lg"
              loading="lazy"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              aria-label="Booking calendar interface"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingSection;
