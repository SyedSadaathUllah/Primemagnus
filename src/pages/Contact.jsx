import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

const emptyForm = { name: '', organisation: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [searchParams] = useSearchParams();
  const formRef = useRef(null);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const service = searchParams.get('service') || '';
  const isDigitalEnquiry = service === 'Digital Transformation & AI Enablement';
  const messagePrompt = isDigitalEnquiry
    ? 'Tell us about the operational challenge, technology requirement or opportunity you would like to explore.'
    : '';

  useEffect(() => {
    if (service && !isDigitalEnquiry) setFormData(prev => ({ ...prev, message: prev.message || `Enquiring about ${service}.` }));
  }, [service, isDigitalEnquiry]);

  const handleChange = event => setFormData(prev => ({ ...prev, [event.target.name]: event.target.value }));
  const handleSubmit = async event => {
    event.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    try {
      await emailjs.sendForm('service_8ks3ixs', 'template_8139cjg', formRef.current, '1lgQEuouowyGa-k5u');
      setStatus('success');
      setFormData(emptyForm);
    } catch {
      setStatus('error');
    }
  };

  const fieldClass = 'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-evergreen focus:border-transparent';

  return (
    <div>
      <section className="overflow-hidden bg-[#04432E]">
        <div className="max-w-[85rem] mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight">Contact Us</h1>
            <p className="mt-5 text-white/95 text-base sm:text-lg leading-relaxed">Let’s discuss how PMCG can support your hospital, programme or investment plan.</p>
          </div>
          <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[320px] lg:border-l-[5px] border-gold">
            <img src="/images/contact-hero.png" alt="Open notebook and pen on a sunlit meeting room table" className="absolute inset-0 w-full h-full object-cover object-[center_65%]" />
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
        <address className="not-italic space-y-7 py-4 text-[#04432E] lg:border-r lg:border-gray-200 lg:pr-10">
          <a href="mailto:azeem@primemagnuscareglobal.com" className="flex items-center gap-4 hover:underline"><Mail className="w-6 h-6 shrink-0" aria-hidden="true" /><span className="break-all">azeem@primemagnuscareglobal.com</span></a>
          <a href="tel:+917981982043" className="flex items-center gap-4 hover:underline"><Phone className="w-6 h-6 shrink-0" aria-hidden="true" /><span>India: +91 798 198 2043</span></a>
          <a href="tel:+971508810746" className="flex items-center gap-4 hover:underline"><Phone className="w-6 h-6 shrink-0" aria-hidden="true" /><span>UAE: +971 50 881 0746</span></a>
          <p className="flex items-center gap-4"><MapPin className="w-6 h-6 shrink-0" aria-hidden="true" /><span>Hyderabad, India</span></p>
        </address>

        <div className="rounded-2xl border border-gray-200 bg-[#F8FAF9] p-6 sm:p-8 shadow-sm">
          {status === 'success' ? (
            <div role="status" className="text-center py-8">
              <CheckCircle2 className="w-12 h-12 text-evergreen mx-auto mb-5" aria-hidden="true" />
              <p className="text-gray-700 leading-relaxed">Thank you for contacting PrimeMagnus Care Global. Your enquiry has been received. We will review the information and respond using the contact details provided.</p>
              <button type="button" onClick={() => setStatus('idle')} className="mt-6 rounded-full bg-evergreen text-white px-6 py-3 text-sm font-medium">Send Another Enquiry</button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              {service ? (
                <div className="sm:col-span-2">
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-[#04432E] mb-2">Enquiry Subject</label>
                  <input id="serviceInterest" name="serviceInterest" value={service} readOnly className={fieldClass} />
                </div>
              ) : <input type="hidden" name="serviceInterest" value="" />}
              {status === 'error' && <p role="alert" className="sm:col-span-2 rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-800">Your enquiry could not be sent. Please try again or email <a href="mailto:azeem@primemagnuscareglobal.com" className="underline">azeem@primemagnuscareglobal.com</a>.</p>}
              {[
                { name: 'name', label: 'Name', required: true, autoComplete: 'name', full: true },
                { name: 'organisation', label: 'Organisation', autoComplete: 'organization' },
                { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
                { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', full: true },
              ].map(field => <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                <label htmlFor={field.name} className="block text-sm font-medium text-[#04432E] mb-2">{field.label}{field.required && ' (required)'}</label>
                <input id={field.name} name={field.name} type={field.type || 'text'} required={field.required} autoComplete={field.autoComplete} value={formData[field.name]} onChange={handleChange} className={fieldClass} />
              </div>)}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#04432E] mb-2">Your Message (required)</label>
                <textarea id="message" name="message" rows={4} required value={formData.message} placeholder={messagePrompt} onChange={handleChange} className={`${fieldClass} resize-y`} />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0B3B24] text-white px-8 py-3 font-semibold text-sm hover:bg-[#072818] disabled:opacity-60 disabled:cursor-wait transition-colors">
                  {status === 'submitting' && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
                  {status === 'submitting' ? 'Sending Enquiry…' : 'Send Enquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
