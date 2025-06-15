
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
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Process Automation", path: "/services/process-automation" },
    { name: "Customer Service Agents", path: "/services/customer-service" },
    { name: "Local SEO AI", path: "/services/local-seo" },
    { name: "Data Analytics", path: "/services/data-analytics" },
    { name: "Website Creation", path: "/services/website-creation" },
    { name: "Sales & Lead Tools", path: "/services/sales-lead-tools" },
    { name: "Design & Marketing", path: "/services/design-marketing" },
    { name: "Solutions", path: "/solutions" },
    { name: "Free SEO Audit", path: "/seo-audit" },
    { name: "Free Analytics Audit", path: "/analytics-audit" },
  ];

  const isActive = (path: string) => {
    if (path === '/services') {
      return location.pathname === '/services' || (location.pathname.startsWith('/services/') && location.pathname !== '/solutions');
    }
    return location.pathname === path;
  };

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    // Use a shorter timeout for better UX
    setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  return (
    <nav className="bg-brand-navy/95 backdrop-blur-md border-b border-brand-silver/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-fit">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/87c7e72a-88ad-4a5e-bd58-1bff5a3dee6b.png" 
                alt="11th Temple Solutions" 
                className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 drop-shadow-lg flex-shrink-0"
              />
              <div className="hidden sm:block">
                <div className="text-sm md:text-lg xl:text-xl font-bold text-white whitespace-nowrap">11th Temple</div>
                <div className="text-xs md:text-sm xl:text-base text-brand-lime -mt-1 whitespace-nowrap">Solutions</div>
              </div>
            </Link>
          </div>

          {/* Quick Navigation Items - Always visible */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 text-sm lg:text-base whitespace-nowrap px-2 py-1 ${
                  isActive(item.path)
                    ? "text-brand-lime"
                    : "text-white hover:text-brand-lime"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation with Dropdown */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-6 flex-shrink-0">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 transition-colors duration-200 text-sm xl:text-base whitespace-nowrap px-2 py-1 text-brand-silver hover:text-brand-lime">
                <span>Services Menu</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-brand-navy-light border border-brand-silver/20 rounded-lg shadow-xl z-50">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/consultation">
              <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-sm xl:text-base whitespace-nowrap">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-brand-silver hover:text-brand-lime flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brand-silver/20 bg-brand-navy-light">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                     <div>
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
                          isActive(item.path)
                            ? "text-brand-lime underline"
                            : "text-white hover:text-brand-lime hover:underline"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4">
                        {serviceItems.map((service) => (
                           <Link
                           key={service.name}
                           to={service.path}
                           className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
                             isActive(service.path)
                               ? "text-brand-lime underline"
                               : "text-white hover:text-brand-lime hover:underline"
                           }`}
                           onClick={() => setIsMenuOpen(false)}
                         >
                           - {service.name}
                         </Link>
                        ))}
                      </div>
                     </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
                        isActive(item.path)
                          ? "text-brand-lime underline"
                          : "text-white hover:text-brand-lime hover:underline"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
