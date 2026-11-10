import { Link } from 'react-router-dom';
import { Network, Database, UsersRound, Cpu, Check } from 'lucide-react';

const focusAreas = [
  { title: 'Workflow Digitalisation', description: 'Review and improve workflows before identifying where digital tools can add value.', icon: Network },
  { title: 'Data & Reporting', description: 'Support more accurate, timely and actionable operational information.', icon: Database },
  { title: 'Patient Access & Coordination', description: 'Explore practical digital support for communication, access and coordination processes.', icon: UsersRound },
  { title: 'Practical AI Applications', description: 'Identify appropriate non-clinical opportunities, such as documentation support, administrative workflows and operational efficiency.', icon: Cpu },
];

const approach = [
  'Focus on practical, high-impact use cases.',
  'Align technology choices with actual hospital needs.',
  'Build on existing systems and workflows where appropriate.',
  'Define measures to evaluate efficiency and operational impact.',
];

export default function DigitalAI() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[#04432E]">
        <div className="max-w-[85rem] mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16 text-center">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight">Digital &amp; AI in Healthcare</h1>
            <p className="mt-5 text-white/95 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">Practical digital and AI adoption to support hospital efficiency, operational control and better-coordinated processes.</p>
          </div>
          <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full border-l-0 lg:border-l-[5px] border-gold">
            <img
              src="/images/digital-ai-hero.png"
              alt="Healthcare colleagues reviewing operational data on a hospital dashboard"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 xl:gap-8">
          <section aria-labelledby="digital-focus-title">
            <h2 id="digital-focus-title" className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">Our Focus Areas</h2>
            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-gray-200 bg-[#F8FAF9] p-5 text-center shadow-sm">
                  <Icon className="mx-auto w-9 h-9 text-[#0B6B3A] stroke-[1.6]" aria-hidden="true" />
                  <h3 className="mt-4 font-heading font-bold text-[#04432E] text-xl leading-snug">{title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="digital-approach-title" className="xl:border-l xl:border-gray-200 xl:pl-8">
            <h2 id="digital-approach-title" className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">The PMCG Approach</h2>
            <ul className="mt-7 space-y-5">
              {approach.map(item => <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 leading-relaxed"><Check className="w-5 h-5 mt-0.5 shrink-0 text-[#0B6B3A]" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </section>
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact?service=Digital%20%26%20AI%20Engagement" className="inline-flex justify-center rounded-full bg-[#0B3B24] px-7 py-3.5 text-white text-sm sm:text-base font-medium hover:bg-[#072818] transition-colors">Discuss a Digital &amp; AI Engagement</Link>
        </div>
      </div>
    </div>
  );
}
