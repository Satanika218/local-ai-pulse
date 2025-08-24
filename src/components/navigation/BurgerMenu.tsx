
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
    <div className="border-t border-brand-silver/20 bg-brand-navy-light md:hidden z-[100] fixed top-20 left-0 right-0 shadow-lg">
      <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto ios-safe-area">
        <Link
          key="Home-mobile"
          to="/"
          className={`mobile-nav-item block rounded-lg text-lg font-medium transition-colors duration-200 no-underline mobile-touch-target ${
            isActive("/")
              ? "text-brand-lime bg-brand-lime/10 underline"
              : "text-white hover:text-brand-lime hover:bg-white/5 hover:underline"
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
            className={`mobile-nav-item block rounded-lg text-lg font-medium transition-colors duration-200 no-underline mobile-touch-target ${
              isActive(item.path)
                ? "text-brand-lime bg-brand-lime/10 underline"
                : "text-white hover:text-brand-lime hover:bg-white/5 hover:underline"
            }`}
            onClick={closeMenu}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-4">
          <Link to="/consultation" onClick={closeMenu}>
            <Button className="mobile-cta bg-brand-lime text-brand-navy hover:bg-brand-lime-dark font-semibold text-lg py-4">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
