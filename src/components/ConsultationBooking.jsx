import { bookingEmbedUrl, bookingUrl } from '../consultation';

export default function ConsultationBooking() {
  return (
    <section id="book-a-consultation" aria-labelledby="booking-title" className="scroll-mt-32 mx-auto mt-12 max-w-[85rem] px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-gray-200 bg-[#F8FAF9] p-6 text-center sm:p-8">
        <h2 id="booking-title" className="font-heading text-3xl font-bold text-[#04432E]">Book a Consultation</h2>
        <iframe
          src={bookingEmbedUrl}
          title="PrimeMagnus consultation booking calendar"
          className="mt-6 h-[700px] w-full rounded-xl bg-white"
          loading="lazy"
        />
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-medium text-evergreen underline">
          Open booking calendar in a new tab
        </a>
      </div>
    </section>
  );
}
