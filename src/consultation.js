const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '917981982043';
const openingMessage = 'Hello, I visited the PrimeMagnus Care Global website and would like to explore how your services could support our hospital or organisation.';

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(openingMessage)}`;
export const consultationPath = '/contact#book-a-consultation';
export const bookingUrl = 'https://calendar.app.google/xXejJCvHrEE6ZaNw9';
export const bookingEmbedUrl = import.meta.env.VITE_BOOKING_URL ||
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1nyDA6c8x1eiL6ovEpf8FTQBN4VSixzGXj9iUa42czL5hDP2EbCcsIT7MYUqzSIZYUq2L_N3Mw?gv=true';

export function serviceConsultationPath(service) {
  return `/contact?${new URLSearchParams({ service })}#book-a-consultation`;
}
