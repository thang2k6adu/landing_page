// components/Header.jsx
import { useState } from "react";
import Logo from "../Logo";
import MobileMenuButton from "../MobileMenuButton";
import NavItems from "../NavItems";
import MobileMenu from "../MobileMenu";
import LoginButton from "../LoginButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/home" },
    { id: "about", label: "About", href: "/about" },
    { id: "marketplace", label: "Marketplace", href: "/marketplace" },
    { id: "company", label: "Company", href: "/company" },
  ];

  const logoConfig = {
    logo1: "https://ript.vn/wp-content/uploads/2023/08/logo-ptit-removebg-preview.png",
    logo2: "http://ript.vn/wp-content/uploads/2023/08/RIPT-Logo-2-removebg-preview.png",
  };

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Logo
            logo1={logoConfig.logo1}
            logo2={logoConfig.logo2}
          />
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <MobileMenuButton
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <NavItems items={navItems} />
        </div>

        <LoginButton />
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}
