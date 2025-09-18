// components/Header.jsx
import { useState } from 'react';
import Logo from '../Logo';
import MobileMenuButton from '../MobileMenuButton';
import NavItems from '../NavItems';
import MobileMenu from '../MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'features', label: 'Features', href: '#' },
    { id: 'marketplace', label: 'Marketplace', href: '#' },
    { id: 'company', label: 'Company', href: '#' },
  ];

  return (
    <header className="bg-gray-900">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Logo />
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

        {/* Login button (Desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
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