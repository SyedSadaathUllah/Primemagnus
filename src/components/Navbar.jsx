import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Digital & AI', path: '/digital-ai' },
    { name: 'International Healthcare', path: '/international-healthcare' },
    { name: 'Case Studies', path: '/case-studies' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* LOGO & BRAND */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center group transition-transform duration-200"
        >
          <img
            src="/images/header_logo.png"
            alt="PrimeMagnus Care Global (PMCG)"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link) => {
            const isCurrentActive =
              link.name === 'Services'
                ? location.pathname === '/services'
                : link.path === '/'
                  ? location.pathname === '/'
                  : link.path !== '/services' && location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                aria-current={isCurrentActive ? 'page' : undefined}
                className={`text-sm font-medium transition-all duration-200 py-1 relative ${
                  isCurrentActive
                    ? 'text-[#0B3B24] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gold after:rounded-full'
                    : 'text-gray-800 hover:text-[#0B3B24]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#0B3B24] hover:bg-[#072818] text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow"
          >
            Contact
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#0B3B24] hover:bg-gray-100 transition-colors focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B3B24]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden shadow-lg ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              aria-current={
                (link.name === 'Services'
                  ? location.pathname === '/services'
                  : link.path === '/'
                    ? location.pathname === '/'
                    : link.path !== '/services' && location.pathname.startsWith(link.path))
                  ? 'page'
                  : undefined
              }
              className="py-2 text-sm font-medium text-gray-700 hover:text-[#0B3B24] border-b border-gray-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-3 inline-flex justify-center items-center py-2.5 px-4 rounded-full bg-[#0B3B24] text-white font-medium text-center text-sm shadow-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
