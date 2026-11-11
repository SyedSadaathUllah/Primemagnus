import { Link } from 'react-router-dom';
import { serviceConsultationPath } from '../consultation';
import { Hospital, UsersRound, ShieldCheck, HeartHandshake, Laptop, FilePlus2, ClipboardCheck, Bed, UserRoundCheck, ChevronRight } from 'lucide-react';

const support = [
  { title: 'Readiness & Programme Design', description: 'Assess existing arrangements and define the processes required for an effective international patient programme.', icon: Hospital },
  { title: 'Coordination & Care Delivery', description: 'Support coordination between patients, hospital teams and relevant service providers.', icon: UsersRound },
  { title: 'Governance & Accountability', description: 'Establish clear responsibilities, communication processes and oversight across the patient pathway.', icon: ShieldCheck },
  { title: 'Patient Experience & Continuity', description: 'Support clear communication, coordinated care and appropriate follow-up.', icon: HeartHandshake },
];
const pathway = [
  { title: 'Enquiry & Initial Information', description: 'Understand the patient’s enquiry and gather relevant information.', icon: Laptop },
  { title: 'Medical Records & Case Review', description: 'Coordinate the collection and routing of medical records for review by the hospital’s appropriate clinical team.', icon: FilePlus2 },
  { title: 'Hospital Assessment & Care Plan', description: 'Support communication of the hospital’s assessment and proposed care plan.', icon: ClipboardCheck },
  { title: 'Treatment Coordination', description: 'Coordinate agreed communications and practical arrangements across the patient journey.', icon: Bed },
  { title: 'Discharge, Follow-up & Continuity of Care', description: 'Support discharge communication and follow-up arrangements.', icon: UserRoundCheck },
];

export default function InternationalHealthcare() {
  return (
    <div>
      <section className="overflow-hidden bg-[#04432E]">
        <div className="max-w-[85rem] mx-auto grid lg:grid-cols-[1.1fr_1fr]">
          <div className="px-6 sm:px-10 lg:px-12 py-9 sm:py-12 lg:py-16 flex flex-col justify-center text-center">
            <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">International Patient Programmes &amp; Medical Value Travel</h1>
            <p className="mt-5 text-white/95 text-base sm:text-lg leading-relaxed">Structured, coordinated and patient-focused international care programmes for hospitals.</p>
          </div>
          <div className="relative min-h-[210px] sm:min-h-[320px] lg:min-h-full lg:border-l-[5px] border-gold">
            <img src="/images/international-healthcare-hero.png" alt="Doctor discussing international care arrangements with patients and a coordinator" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 space-y-12">
        <section aria-labelledby="hospital-support-title">
          <h2 id="hospital-support-title" className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">How We Support Hospitals</h2>
          <p className="max-w-4xl mx-auto mt-5 text-center text-gray-600 text-sm sm:text-base leading-relaxed">PMCG works with hospitals to design and strengthen international patient programmes, with clear processes for patient access, coordination, governance and continuity of care.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {support.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-gray-200 bg-[#F5F8F6] p-6 text-center shadow-sm">
                <Icon className="mx-auto w-10 h-10 text-[#0B6B3A] stroke-[1.6]" aria-hidden="true" />
                <h3 className="mt-4 font-heading font-bold text-[#04432E] text-xl leading-snug">{title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="patient-pathway-title">
          <h2 id="patient-pathway-title" className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">The Patient Pathway</h2>
          <p className="mt-5 text-center text-gray-600 text-sm sm:text-base leading-relaxed">A structured journey for international patients, from initial enquiry through treatment and post-treatment follow-up.</p>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-7">
            {pathway.map(({ title, description, icon: Icon }, index) => (
              <li key={title} className="relative rounded-2xl border border-gray-200 bg-[#F8FAF9] p-5 text-center shadow-sm">
                <Icon className="mx-auto w-10 h-10 text-[#0B6B3A] stroke-[1.6]" aria-hidden="true" />
                <h3 className="mt-4 font-heading font-bold text-[#04432E] text-xl leading-snug">{title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
                {index < pathway.length - 1 && <ChevronRight className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl overflow-hidden bg-[#04432E] grid lg:grid-cols-[1fr_240px]" aria-labelledby="international-cta-title">
          <div className="p-7 sm:p-10 text-center">
            <h2 id="international-cta-title" className="font-heading font-bold text-white text-2xl sm:text-3xl">Discuss an International Patient Programme</h2>
            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">Let’s explore how PMCG can help your hospital build or strengthen its international patient programme.</p>
            <Link to={serviceConsultationPath('International Patient Programme')} className="inline-flex items-center justify-center mt-6 rounded-full bg-white text-[#04432E] px-7 py-3 font-semibold text-sm hover:bg-[#F2EAD7] transition-colors">Discuss an International Patient Programme</Link>
          </div>
          <div className="hidden lg:block relative border-l-[5px] border-gold"><img src="/images/services_corridor.jpg" alt="Hospital care environment" className="absolute inset-0 w-full h-full object-cover" /></div>
        </section>
      </div>
    </div>
  );
}
