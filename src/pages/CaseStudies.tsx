import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TestimonialForm from "@/components/TestimonialForm";

const CaseStudies = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Updated testimonials with new client feedback
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
    },
    {
      id: 3,
      name: "Oliver Harrington",
      title: "Marketing Director",
      rating: 5,
      text: "Working with 11th Temple Solutions transformed our digital presence completely. Their AI-driven approach to website optimization increased our conversion rates by 32% within just three months. What impressed me most was how they seamlessly integrated advanced technology while maintaining our brand's unique voice. Dan and Neil didn't just implement tools—they developed a comprehensive strategy that continues to deliver results long after the initial project was completed.",
      approved: true
    },
    {
      id: 4,
      name: "Sarah Pemberton",
      title: "CEO",
      rating: 5,
      text: "As a small business owner, I was skeptical about AI solutions—I worried they'd make our brand feel impersonal. 11th Temple proved me wrong entirely. Their team took the time to understand our company culture and created automated marketing campaigns that actually sound like us, just more consistent and at a scale we could never manage manually. Our customer engagement has increased dramatically, and I've been able to redirect my time to product development instead of social media management.",
      approved: true
    },
    {
      id: 5,
      name: "James Whitfield",
      title: "Operations Director",
      rating: 5,
      text: "The efficiency gains we've experienced since implementing 11th Temple's AI solutions have been nothing short of remarkable. Their system automated our documentation processes, reducing processing time by 78% and virtually eliminating errors. What would have required hiring three additional staff members is now handled seamlessly by their intelligent systems. The ROI has been exceptional, and Dan and Neil's ongoing support has been prompt and thorough.",
      approved: true
    },
    {
      id: 6,
      name: "Victoria Blackwell",
      title: "Head of Talent",
      rating: 5,
      text: "11th Temple revolutionized our recruitment process with their AI-powered candidate screening system. We were drowning in applications for each position, spending countless hours on initial reviews. Their solution not only saved us time but actually improved the quality of our shortlists by identifying promising candidates we might have overlooked using traditional methods. The system continues to learn from our hiring decisions, becoming more aligned with our company culture with each recruitment cycle.",
      approved: true
    },
    {
      id: 7,
      name: "Alistair Montgomery",
      title: "Business Owner",
      rating: 5,
      text: "As someone who was decidedly skeptical about AI marketing, I can now say I've been completely won over by the results 11th Temple Solutions delivered. Their targeted lead generation system identified precisely the type of clients we specialize in serving, and their automated follow-up sequences maintain the personal touch that's essential in our business. We've seen a 47% increase in qualified inquiries and a 28% improvement in conversion rates. The system effectively pays for itself many times over.",
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
              Client <span className="text-brand-lime">Testimonials</span>
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
              className="inline-flex items-center space-x-2 bg-brand-silver/20 text-brand-silver px-6 py-3 rounded-lg hover:bg-brand-silver/30 hover:text-white transition-colors duration-200 font-semibold border border-brand-silver/30"
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
                          {testimonials[currentTestimonial].title && (
                            <span>{testimonials[currentTestimonial].title}</span>
                          )}
                          {testimonials[currentTestimonial].company && (
                            <span>{testimonials[currentTestimonial].title ? ', ' : ''}{testimonials[currentTestimonial].company}</span>
                          )}
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
          
          <TestimonialForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
