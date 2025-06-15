
import React, { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

const ServicesChatbot = lazy(() => import('./ServicesChatbot'));

const LazyServicesChatbot = () => {
  return (
    <Suspense 
      fallback={
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-brand-navy-light border border-brand-lime rounded-full p-4">
            <Loader2 className="h-6 w-6 text-brand-lime animate-spin" />
          </div>
        </div>
      }
    >
      <ServicesChatbot />
    </Suspense>
  );
};

export default LazyServicesChatbot;
