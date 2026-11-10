import { Link, useLocation } from 'react-router-dom';
import { CalendarCheck2 } from 'lucide-react';

export default function FloatingCTA() {
  const location = useLocation();

  // Hide on contact page
  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-6 z-40 group flex items-center gap-2.5 bg-evergreen hover:bg-gold text-offwhite hover:text-evergreen font-medium text-sm md:text-base px-5 py-3 md:px-6 md:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-gold/30 border border-gold/30"
      aria-label="Book a Performance Diagnostic"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
      </span>
      <CalendarCheck2 className="w-5 h-5 text-gold group-hover:text-evergreen transition-colors" />
      <span className="tracking-wide font-semibold">Book a Diagnostic</span>
    </Link>
  );
}

