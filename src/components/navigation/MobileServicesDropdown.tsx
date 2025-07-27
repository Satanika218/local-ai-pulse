
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Service items for submenu - reordered per user requirements
const serviceItems = [
  { name: "Sales & Lead Tools", path: "/services/sales-lead-tools" },
  { name: "GDPR Compliance", path: "/services/gdpr-compliance" },
  { name: "Digital Skills for Workplace", path: "/services/digital-skills-workplace" },
  { name: "Local SEO AI", path: "/services/local-seo" },
  { name: "Process Automation", path: "/services/process-automation" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Customer Service Agents", path: "/services/customer-service" },
  { name: "Design & Marketing", path: "/services/design-marketing" },
  { name: "Website Creation", path: "/services/website-creation" },
];

const MobileServicesDropdown = ({
  isActive,
  closeMenu,
}: {
  isActive: (p: string) => boolean,
  closeMenu: () => void
}) => (
  <div className="w-full">
    <Link
      to="/services-overview"
      className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
        isActive("/services-overview") || serviceItems.some((srv) => isActive(srv.path))
          ? "text-brand-lime underline"
          : "text-white hover:text-brand-lime hover:underline"
      }`}
      onClick={closeMenu}
    >
      Services
    </Link>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-full flex justify-between items-center px-3 py-2 text-base transition-colors duration-200 outline-none text-brand-silver hover:text-brand-lime">
          <span>View All Services</span>
          <ChevronDown className="h-4 w-4 ml-2 text-brand-lime" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 ml-2 bg-brand-navy border border-brand-silver/30 mt-2 shadow-xl rounded-xl p-1 z-50">
        {serviceItems.map((service) => (
          <DropdownMenuItem asChild key={service.name}>
            <Link
              to={service.path}
              className={`block px-4 py-2 text-base transition-colors duration-200 rounded-md no-underline ${
                isActive(service.path)
                  ? "text-brand-lime underline bg-brand-lime/10"
                  : "text-brand-silver hover:text-brand-lime hover:bg-brand-lime/10"
              }`}
              onClick={closeMenu}
            >
              {service.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default MobileServicesDropdown;
