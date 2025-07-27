
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MobileServicesDropdown from "./MobileServicesDropdown";

const navItems = [
  { name: "Free Tools", path: "/free-tools" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Testimonials", path: "/case-studies" },
  { name: "Contact", path: "/contact" },
];

const BurgerMenu = ({
  isOpen,
  closeMenu,
  isActive,
}: {
  isOpen: boolean;
  closeMenu: () => void;
  isActive: (p: string) => boolean;
}) => {
  if (!isOpen) return null;
  return (
    <div className="border-t border-brand-silver/20 bg-brand-navy-light md:hidden z-50">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link
          key="Home-mobile"
          to="/"
          className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
            isActive("/")
              ? "text-brand-lime underline"
              : "text-white hover:text-brand-lime hover:underline"
          }`}
          onClick={closeMenu}
        >
          Home
        </Link>
        <MobileServicesDropdown isActive={isActive} closeMenu={closeMenu} />
        {navItems.map((item) => (
          <Link
            key={item.name + "-mobile"}
            to={item.path}
            className={`block px-3 py-2 text-base transition-colors duration-200 no-underline ${
              isActive(item.path)
                ? "text-brand-lime underline"
                : "text-white hover:text-brand-lime hover:underline"
            }`}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-2">
          <Link to="/consultation" onClick={closeMenu}>
            <Button className="w-full bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
