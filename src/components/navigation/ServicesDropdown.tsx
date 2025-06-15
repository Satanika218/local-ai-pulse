
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Service items for submenu
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

const ServicesDropdown = ({
  isActive,
}: {
  isActive: (p: string) => boolean
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="relative group">
        <Link
          to="/solutions"
          className={`px-4 py-2 flex items-center text-sm xl:text-base rounded-md transition-colors duration-200 select-none ${
            isActive("/services") || isActive("/solutions") || serviceItems.some((srv) => isActive(srv.path))
              ? "text-brand-lime underline"
              : "text-white hover:text-brand-lime hover:underline"
          }`}
          aria-label="Services"
          style={{ userSelect: 'none', cursor: 'pointer' }}
        >
          Services
          <ChevronDown className="h-4 w-4 ml-1" />
        </Link>
        <span className="absolute inset-0" tabIndex={-1}></span>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-64 bg-brand-navy border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1 z-50">
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
);

export default ServicesDropdown;
