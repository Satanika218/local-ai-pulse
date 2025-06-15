
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:max-w-md" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description">
      <Card className="bg-brand-navy-light border-brand-lime shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-brand-lime flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 id="cookie-banner-title" className="text-lg font-semibold text-white mb-2">
                Cookie Consent
              </h3>
              <p id="cookie-banner-description" className="text-brand-silver text-sm mb-4">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. This includes cookies from our booking system.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={handleAccept}
                  className="bg-brand-lime text-brand-navy hover:bg-brand-lime/90 flex-1"
                  aria-label="Accept all cookies"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={handleDecline}
                  variant="outline"
                  className="border-brand-silver text-brand-silver hover:bg-brand-silver/10 flex-1"
                  aria-label="Decline non-essential cookies"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
