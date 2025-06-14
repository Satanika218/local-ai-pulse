
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-silver/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/dd8b5070-aff9-46a2-848d-770741ee222c.png" 
                alt="11th Temple Solutions" 
                className="h-8 w-8"
              />
              <div>
                <span className="text-lg font-bold text-white">11th Temple Solutions</span>
                <p className="text-brand-lime text-sm">Powering Human Potential</p>
              </div>
            </div>
            <p className="text-brand-silver mb-6 max-w-md">
              We specialize in delivering AI automation solutions tailored for local businesses, 
              combining cutting-edge technology with deep local market knowledge.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-brand-silver">
                <Mail className="h-4 w-4 text-brand-lime" />
                <span>hello@11thtemple.com</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-silver">
                <Phone className="h-4 w-4 text-brand-lime" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-brand-silver">
                <MapPin className="h-4 w-4 text-brand-lime" />
                <span>Serving Local Businesses Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-brand-silver hover:text-brand-lime transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-brand-silver hover:text-brand-lime transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-brand-silver hover:text-brand-lime transition-colors">Case Studies</Link></li>
              <li><Link to="/blog" className="text-brand-silver hover:text-brand-lime transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-brand-silver hover:text-brand-lime transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/process-automation" className="text-brand-silver hover:text-brand-lime transition-colors">Process Automation</Link></li>
              <li><Link to="/services/local-seo" className="text-brand-silver hover:text-brand-lime transition-colors">Local SEO AI</Link></li>
              <li><Link to="/services/customer-service" className="text-brand-silver hover:text-brand-lime transition-colors">Customer Service Bots</Link></li>
              <li><Link to="/services/data-analytics" className="text-brand-silver hover:text-brand-lime transition-colors">Data Analytics</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-silver/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-silver text-sm">
            © {currentYear} 11th Temple Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-brand-silver hover:text-brand-lime transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-lime transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-brand-silver hover:text-brand-lime transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
