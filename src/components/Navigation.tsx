
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Process Automation", path: "/services/process-automation" },
    { name: "Local SEO AI", path: "/services/local-seo" },
    { name: "Customer Service Bots", path: "/services/customer-service" },
    { name: "Data Analytics", path: "/services/data-analytics" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brand-navy/95 backdrop-blur-md border-b border-brand-silver/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/dd8b5070-aff9-46a2-848d-770741ee222c.png" 
              alt="11th Temple Solutions" 
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-white">11th Temple</span>
              <span className="text-sm text-brand-lime block -mt-1">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-brand-silver hover:text-brand-lime transition-colors duration-200">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-brand-navy-light border border-brand-silver/20 rounded-lg shadow-xl z-50">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block px-4 py-2 text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-brand-lime"
                        : "text-brand-silver hover:text-brand-lime"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-silver hover:text-brand-lime"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-brand-silver/20 bg-brand-navy-light">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-brand-lime"
                      : "text-brand-silver hover:text-brand-lime"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
