
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Privacy <span className="text-brand-lime">Policy</span>
          </h1>
          
          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
                <p className="text-brand-silver mb-4">
                  We collect information you provide directly to us, such as when you schedule a consultation, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc list-inside text-brand-silver space-y-2 ml-4">
                  <li>Name and contact information</li>
                  <li>Business information and requirements</li>
                  <li>Communication preferences</li>
                  <li>Technical information about your browsing session</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Data</h2>
                <p className="text-brand-silver mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-brand-silver space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Schedule and conduct consultations</li>
                  <li>Communicate about our services</li>
                  <li>Analyze website usage and improve user experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-brand-silver mb-4">
                  Our booking system is powered by YouCanBook.me. When you schedule a consultation, 
                  your data is processed according to their privacy policy in addition to ours.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-brand-silver mb-4">
                  Under GDPR, you have the right to:
                </p>
                <ul className="list-disc list-inside text-brand-silver space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Delete your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-brand-silver">
                  For privacy-related questions or to exercise your rights, contact us at privacy@11thtemple.com
                </p>
              </section>

              <p className="text-brand-silver text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
