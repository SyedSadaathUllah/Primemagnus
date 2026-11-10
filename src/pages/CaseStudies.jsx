import { Hospital, UsersRound, ShieldCheck } from 'lucide-react';

const studies = [
  {
    location: 'India — PMCG Engagement',
    title: 'Hospital Operations & Revenue Integrity',
    icon: Hospital,
    summary: 'A 100+ bed multi-specialty hospital required stronger operational controls and revenue integrity. The PMCG intervention focused on documentation completeness, coding accuracy, insurance query management and improved capture of billable activity.',
    measures: [
      ['Documentation completeness', 'Approximately 60–65% to 80–85%.'],
      ['Coding accuracy', 'Approximately 70–75% to 80–85%.'],
      ['Insurance query turnaround', 'Approximately 4–5 days to 2.5–3 days.'],
      ['Revenue capture', 'Reported improvement of approximately 8–12%.'],
      ['Claim deductions', 'Reported reduction of approximately 15–25%.'],
    ],
  },
  {
    location: 'UAE — Founder Experience',
    title: 'Operational & Financial Performance',
    icon: UsersRound,
    summary: 'Founder’s previous professional experience in a multi-specialty, insurance-driven healthcare environment. The work focused on operational and financial performance, revenue-cycle discipline and cost control.',
    measures: [
      ['EBITDA', 'AED 28 million to AED 31 million.'],
      ['Manpower cost', 'Approximately 47% to 38% of revenue.'],
      ['Insurance rejection rate', 'Approximately 7% to 1.6%.'],
    ],
  },
  {
    location: 'UK — Founder Experience',
    title: 'Governance & Quality',
    icon: ShieldCheck,
    summary: 'Within NHS England, the founder directly managed Bilborough Surgery and Radford Health Centre in Nottingham City. Both practices achieved Level 2 Advanced Quality Accreditation.',
    context: 'The two practices served patient populations of approximately 5,500 and 7,000 respectively. The accreditation claim applies to these two practices under the founder’s management.',
  },
];

export default function CaseStudies() {
  return (
    <div>
      <section className="overflow-hidden bg-[#04432E]">
        <div className="max-w-[85rem] mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight">Case Studies</h1>
            <p className="mt-5 text-white/95 text-base sm:text-lg leading-relaxed">Practical interventions. Measurable results.</p>
          </div>
          <div className="relative min-h-[280px] sm:min-h-[340px] lg:min-h-[360px] lg:border-l-[5px] border-gold">
            <img src="/images/case-studies-hero.png" alt="Healthcare consulting team reviewing a hospital performance dashboard" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {studies.map(({ location, title, icon: Icon, summary, measures, context }) => (
            <article key={location} className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_6px_24px_-10px_rgba(4,67,46,0.18)]">
              <Icon className="mx-auto w-10 h-10 text-[#0B6B3A] stroke-[1.6]" aria-hidden="true" />
              <h2 className="mt-5 font-heading font-bold text-[#04432E] text-2xl sm:text-3xl leading-tight">{location}</h2>
              <h3 className="mt-5 font-semibold text-[#04432E] text-lg leading-snug">{title}</h3>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">{summary}</p>
              {measures && (
                <div className="mt-6 rounded-xl bg-[#F3F7F4] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#04432E]">Reported measures</h4>
                  <dl className="mt-4 space-y-4">
                    {measures.map(([label, value]) => <div key={label}><dt className="text-sm font-semibold text-[#04432E]">{label}</dt><dd className="mt-1 text-sm text-gray-600 leading-relaxed">{value}</dd></div>)}
                  </dl>
                </div>
              )}
              {context && <div className="mt-6 rounded-xl bg-[#F3F7F4] p-4"><h4 className="text-xs font-semibold uppercase tracking-wider text-[#04432E]">Context</h4><p className="mt-4 text-sm text-gray-600 leading-relaxed">{context}</p></div>}
            </article>
          ))}
        </div>
        <aside className="mt-8 rounded-xl border border-[#C9A24D]/30 bg-[#FAF8F2] px-6 py-5 text-center text-sm text-gray-600 leading-relaxed">
          The UAE and UK examples describe the founder’s professional experience prior to the establishment of PMCG. The India example is presented as a PMCG engagement.
        </aside>
      </div>
    </div>
  );
}
