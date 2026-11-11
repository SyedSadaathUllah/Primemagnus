import { useMatch } from 'react-router-dom';
import { whatsappUrl } from '../consultation';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppLink() {
  const isContactPage = useMatch('/contact');
  if (isContactPage) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrimeMagnus Care Global on WhatsApp (opens in a new tab)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full border-2 border-white bg-[#087A43] text-white shadow-lg transition-colors hover:bg-[#066237] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-evergreen sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
