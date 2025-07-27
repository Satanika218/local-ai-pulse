
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
  { name: "Process Automation", path: "/services/process-automation" },
  { name: "Customer Service Agents", path: "/services/customer-service" },
  { name: "Local SEO AI", path: "/services/local-seo" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Website Creation", path: "/services/website-creation" },
  { name: "Sales & Lead Tools", path: "/services/sales-lead-tools" },
  { name: "Design & Marketing", path: "/services/design-marketing" },
  { name: "GDPR Compliance", path: "/services/gdpr-compliance" },
  { name: "Digital Skills for Workplace", path: "/services/digital-skills-workplace" },
];

const ServicesDropdown = ({
  isActive,
}: {
  isActive: (p: string) => boolean
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <div className="flex items-center group">
        <Link
          to="/services-overview"
          className={`px-4 py-2 flex items-center text-sm xl:text-base rounded-md transition-colors duration-200 ${
            isActive("/services-overview") || serviceItems.some((srv) => isActive(srv.path))
              ? "text-brand-lime underline"
              : "text-white hover:text-brand-lime hover:underline"
          }`}
        >
          Services
        </Link>
        <button className="p-1 hover:bg-brand-navy-light rounded">
          <ChevronDown className="h-4 w-4 text-white group-hover:text-brand-lime" />
        </button>
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-64 bg-brand-navy border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1 z-50">
      {serviceItems.map((service) => (
        <DropdownMenuItem asChild key={service.name}>
          <Link
            to={service.path}
            className={`block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline ${
              isActive(service.path)
                ? "text-brand-lime underline bg-brand-lime/10"
                : "text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10"
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
