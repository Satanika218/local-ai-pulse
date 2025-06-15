
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

// Main navigation items (for both inline and mobile)
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  // "Services" handled as sub-menu
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

// Service items for the submenu
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

          {/* Inline navigation for md+ screens */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2 font-semibold">
            {navItems.map((item) =>
              item.name !== "Services" ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm xl:text-base rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-brand-lime underline"
                      : "text-white hover:text-brand-lime hover:underline"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                // Services sub-menu using shadcn/ui DropdownMenu
                <DropdownMenu key="services">
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`px-4 py-2 flex items-center text-sm xl:text-base rounded-md transition-colors duration-200 ${
                        serviceItems.some((srv) => isActive(srv.path))
                          ? "text-brand-lime underline"
                          : "text-white hover:text-brand-lime hover:underline"
                      }`}
                      aria-label="Services"
                    >
                      Services
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                  </DropdownMenuTrigger>
                  {/* Use brand-popover for consistent palette & full-width */}
                  <DropdownMenuContent className="w-64 bg-popover border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1">
                    {serviceItems.map((service) => (
                      <DropdownMenuItem asChild key={service.name}>
                        <Link
                          to={service.path}
                          className={`block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline ${
                            isActive(service.path)
                              ? "text-brand-lime underline bg-brand-navy-light"
                              : "text-brand-silver hover:text-brand-lime hover:bg-brand-navy-light"
                          }`}
                        >
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            )}
            {/* "Get Started" button (always visible on large screens) */}
            <Link to="/consultation" className="ml-2">
              <Button className="bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-sm xl:text-base whitespace-nowrap">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Burger and mobile actions */}
          <div className="flex items-center space-x-2 md:hidden">
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

        {/* Burger Menu (always renders for all breakpoints for accessibility) */}
        {isMenuOpen && (
          <div className="border-t border-brand-silver/20 bg-brand-navy-light md:hidden">
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
                {/* Brand palette for submenu */}
                <DropdownMenuContent className="w-64 ml-2 bg-popover border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem asChild key={service.name}>
                      <Link
                        to={service.path}
                        className={`block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline ${
                          isActive(service.path)
                            ? "text-brand-lime underline bg-brand-navy-light"
                            : "text-brand-silver hover:text-brand-lime hover:bg-brand-navy-light"
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
