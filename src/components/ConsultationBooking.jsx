import { useState } from 'react';
import { bookingEmbedUrl, bookingUrl } from '../consultation';

export default function ConsultationBooking() {
  const [showMobileCalendar, setShowMobileCalendar] = useState(false);

  return (
    <section id="book-a-consultation" aria-labelledby="booking-title" className="scroll-mt-24 sm:scroll-mt-32 mx-auto mt-12 max-w-[85rem] px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col rounded-2xl border border-gray-200 bg-[#F8FAF9] px-1 py-5 text-center sm:p-8">
        <h2 id="booking-title" className="font-heading text-3xl font-bold text-[#04432E]">Book a Consultation</h2>
        <iframe
          src={bookingEmbedUrl}
          title="PrimeMagnus consultation booking calendar"
          className="mt-6 hidden h-[700px] w-full rounded-xl bg-white sm:block"
          loading="lazy"
        />
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center self-center rounded-full bg-evergreen px-5 text-sm font-medium text-white sm:min-h-0 sm:bg-transparent sm:p-0 sm:text-base sm:text-evergreen sm:underline">
          Open booking calendar in a new tab
        </a>
        <details className="mt-2 sm:hidden" onToggle={event => setShowMobileCalendar(event.currentTarget.open)}>
          <summary className="min-h-11 cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-evergreen">
            View calendar on this page
          </summary>
          {showMobileCalendar && (
            <iframe
              src={bookingEmbedUrl}
              title="PrimeMagnus consultation booking calendar"
              className="mt-2 h-[700px] w-full rounded-xl bg-white"
              loading="lazy"
            />
          )}
        </details>
      </div>
    </section>
  );
}
