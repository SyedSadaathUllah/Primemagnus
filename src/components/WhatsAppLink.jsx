import { whatsappUrl } from '../consultation';

export default function WhatsAppLink() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PrimeMagnus Care Global on WhatsApp (opens in a new tab)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full border-2 border-white bg-[#087A43] text-white shadow-lg transition-colors hover:bg-[#066237] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-evergreen sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8" aria-hidden="true">
        <path d="M21 11.8a9 9 0 0 1-13.4 7.9L3 21l1.3-4.5A9 9 0 1 1 21 11.8Z" />
        <path fill="currentColor" stroke="none" d="M9 7.2c-.2-.4-.4-.4-.7-.4-.8 0-1.6.9-1.6 2 0 1.3.9 2.8 2.3 4.2 1.5 1.5 3.3 2.5 4.7 2.6 1.3.1 2.5-.7 2.6-1.6.1-.3 0-.5-.4-.7l-2-1c-.3-.1-.5 0-.7.2l-.7.8c-.1.2-.3.2-.5.1-1.4-.6-2.5-1.7-3.2-3-.1-.2-.1-.4.1-.6l.6-.7c.2-.2.2-.4.1-.6Z" />
      </svg>
    </a>
  );
}
