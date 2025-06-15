
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // Services handled separately as sub-menu
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

const serviceItems = [
  { name: "Free SEO Audit", path: "/seo-audit" },
  { name: "Free Analytics Audit", path: "/analytics-audit" },
  { name: "Process Automation", path: "/services/process-automation" },
  { name: "Customer Service Agents", path: "/services/customer-service" },
  { name: "Local SEO AI", path: "/services/local-seo" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Website Creation", path: "/services/website-creation" },
  { name: "Sales & Lead Tools", path: "/services/sales-lead-tools" },
  { name: "Design & Marketing", path: "/services/design-marketing" },
  { name: "Solutions", path: "/solutions" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/services") {
      return (
        location.pathname === "/services" ||
        (location.pathname.startsWith("/services/") &&
          location.pathname !== "/solutions")
      );
    }
    return location.pathname === path;
  };

  // Desktop menu on all breakpoints now hidden; Burger handles all
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

          {/* Main nav hidden, replaced by burger */}
          <div className="hidden"></div>
          <div className="flex items-center space-x-2">
            <Link to="/consultation" className="hidden lg:block">
              <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-sm xl:text-base whitespace-nowrap">
                Get Started
              </Button>
            </Link>
            <button
              className="text-brand-silver hover:text-brand-lime flex-shrink-0 focus:outline-none"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Burger Menu (always renders for all breakpoints) */}
        {isMenuOpen && (
          <div className="border-t border-brand-silver/20 bg-brand-navy-light">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
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
              ))}
              {/* Services with sub-menu (dropdown) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`w-full flex justify-between items-center px-3 py-2 text-base transition-colors duration-200 ${
                      serviceItems.some((srv) => isActive(srv.path))
                        ? "text-brand-lime underline"
                        : "text-white hover:text-brand-lime hover:underline"
                    }`}
                  >
                    Services
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 ml-2">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem asChild key={service.name}>
                      <Link
                        to={service.path}
                        className={`block px-4 py-2 text-base transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg no-underline ${
                          isActive(service.path)
                            ? "text-brand-lime underline"
                            : "text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
