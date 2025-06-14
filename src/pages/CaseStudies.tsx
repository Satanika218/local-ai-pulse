
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Sample testimonials - in a real app, these would come from a backend
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Local Coffee House",
      rating: 5,
      text: "11th Temple Solutions transformed our customer service with their AI chatbot. We now handle 3x more inquiries while maintaining that personal touch our customers love.",
      approved: true
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "Chen's Auto Repair",
      rating: 5,
      text: "The process automation they implemented saved us 15 hours per week on scheduling and inventory management. ROI was visible within the first month!",
      approved: true
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-brand-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies & <span className="text-brand-lime">Success Stories</span>
            </h1>
            <p className="text-xl text-brand-silver max-w-3xl mx-auto">
              Discover how local businesses are transforming their operations and growing their communities with our AI solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="py-8 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-brand-silver text-lg">Read our reviews on</span>
            <a 
              href="https://uk.trustpilot.com/review/11thtemplesolutions.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#00b67a] text-white px-6 py-3 rounded-lg hover:bg-[#009c6b] transition-colors duration-200 font-semibold"
            >
              <span>Trustpilot</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our <span className="text-brand-lime">Clients Say</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              Real stories from real businesses that have transformed with our AI solutions.
            </p>
          </div>

          {testimonials.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <Card className="bg-brand-navy border-brand-silver/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative">
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-brand-lime fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-xl text-brand-silver italic mb-6 leading-relaxed">
                        "{testimonials[currentTestimonial].text}"
                      </blockquote>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-brand-lime">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>

                    {testimonials.length > 1 && (
                      <div className="flex justify-center items-center space-x-4 mt-8">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevTestimonial}
                          className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        
                        <div className="flex space-x-2">
                          {testimonials.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentTestimonial(index)}
                              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                                index === currentTestimonial ? 'bg-brand-lime' : 'bg-brand-silver/30'
                              }`}
                            />
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextTestimonial}
                          className="border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-navy"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-brand-silver text-lg">No testimonials available yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Testimonial Section */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Share Your <span className="text-brand-lime">Success Story</span>
          </h2>
          <p className="text-xl text-brand-silver mb-8">
            Have you worked with 11th Temple Solutions? We'd love to hear about your experience and share your success story with others.
          </p>
          
          <Card className="bg-brand-navy-light border-brand-silver/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-brand-lime mr-3" />
                <h3 className="text-2xl font-semibold text-white">Submit Your Testimonial</h3>
              </div>
              <p className="text-brand-silver mb-6 leading-relaxed">
                To submit a testimonial, please email us at{' '}
                <a 
                  href="mailto:11th-temple-solutions@mail.com" 
                  className="text-brand-lime hover:underline font-semibold"
                >
                  11th-temple-solutions@mail.com
                </a>
                {' '}with your story. Our team will review your submission and may contact you for approval before featuring it on our website.
              </p>
              <div className="bg-brand-navy border border-brand-silver/20 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Include in your email:</h4>
                <ul className="text-brand-silver text-left space-y-1">
                  <li>• Your name and business name</li>
                  <li>• A brief description of the services we provided</li>
                  <li>• The impact our solutions had on your business</li>
                  <li>• Permission to use your testimonial on our website</li>
                </ul>
              </div>
              <Button 
                size="lg" 
                className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold mt-6"
                onClick={() => window.location.href = 'mailto:11th-temple-solutions@mail.com?subject=Testimonial Submission&body=Dear 11th Temple Solutions team,%0D%0A%0D%0AI would like to submit a testimonial about my experience working with your company.%0D%0A%0D%0AName:%0D%0ABusiness:%0D%0AServices received:%0D%0ATestimonial:%0D%0A%0D%0AI give permission for this testimonial to be used on your website.%0D%0A%0D%0AThank you!'}
              >
                Send Testimonial Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Detailed Case Studies <span className="text-brand-lime">Coming Soon</span>
            </h2>
            <p className="text-xl text-brand-silver max-w-2xl mx-auto">
              We're currently compiling comprehensive case studies that showcase the specific challenges, solutions, and measurable results our clients have achieved. Check back soon for in-depth analysis and metrics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
