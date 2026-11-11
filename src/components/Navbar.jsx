import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { consultationPath } from '../consultation';

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
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200/80 shadow-sm transition-all duration-300">
      <div className="max-w-[85rem] mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 xl:gap-0">
        {/* LOGO & BRAND */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 items-center group transition-transform duration-200"
        >
          <img
            src="/images/primemagnus-logo.png"
            alt="PrimeMagnus Care Global (PMCG)"
            className="h-12 w-12 shrink-0 sm:h-16 sm:w-16 rounded-full object-contain brightness-105 hue-rotate-[12deg] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="ml-2 sm:ml-3 text-[#0B3B24]">
            <span className="block font-heading text-lg sm:text-2xl sm:whitespace-nowrap font-semibold leading-none">
              PrimeMagnus Care Global
            </span>
            <span className="block mt-1.5 text-[9px] sm:text-[11px] leading-snug">
              Trusted Pathways. Ethical Care. Integrity in Motion.
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center space-x-4">
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

          <Link to={consultationPath} className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#0B3B24] px-5 py-2 text-sm font-medium text-white hover:bg-[#072818]">
            Book a Consultation
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden grid h-11 w-11 shrink-0 place-items-center rounded-lg text-[#0B3B24] hover:bg-gray-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-evergreen"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B3B24]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <nav id="mobile-navigation" aria-label="Mobile navigation"
        className={`absolute right-3 top-full mt-2 max-h-[min(24rem,55dvh)] w-64 max-w-[calc(100%-1.5rem)] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-xl border border-gray-200 bg-white p-2 shadow-lg sm:right-6 lg:right-8 xl:hidden ${
          mobileMenuOpen ? '' : 'hidden'
        }`}
      >
        <div className="flex flex-col">
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
              className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0B3B24] aria-[current=page]:bg-emerald-50 aria-[current=page]:text-[#0B3B24]"
            >
              {link.name}
            </Link>
          ))}
          <Link to={consultationPath} onClick={closeMenu} className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-[#0B3B24] px-4 py-2.5 text-sm font-medium text-white">
            Book a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}
