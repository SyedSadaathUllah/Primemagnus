import { Link } from 'react-router-dom';
import { consultationPath } from '../consultation';
import {
  Hospital,
  MonitorCog,
  ShieldCheck,
  Globe,
  Search,
  Settings,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    title: 'Hospital Operations & Performance Improvement',
    description: 'Improve utilisation, patient processes and operational performance.',
    icon: Hospital,
  },
  {
    title: 'Digital Transformation & AI Enablement',
    description: 'Assess readiness and apply technology to practical hospital needs.',
    icon: MonitorCog,
  },
  {
    title: 'Quality, Governance & Accreditation',
    description: 'Strengthen governance, compliance and accreditation readiness.',
    icon: ShieldCheck,
  },
  {
    title: 'International Patient Programmes',
    description: 'Develop coordinated pathways for patients seeking care in India.',
    icon: Globe,
  },
];

const steps = [
  {
    title: 'Assess',
    description: 'Understand the current situation and identify key gaps.',
    icon: Search,
  },
  {
    title: 'Implement',
    description: 'Work with your teams to introduce practical improvements.',
    icon: Settings,
  },
  {
    title: 'Monitor',
    description: 'Track progress, measure impact and sustain the gains.',
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <div className="pb-4">
      <section className="relative overflow-hidden bg-[#04432E]">
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[280px] lg:min-h-[320px]">
          <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-9 sm:py-12 lg:py-16">
            <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-tight">
              Our Services
            </h1>
            <p className="mt-5 max-w-xl text-white/95 text-base sm:text-lg leading-relaxed">
              Integrated support to improve hospital operations, strengthen governance, enable practical digital adoption and develop international patient programmes.
            </p>
          </div>

          <div className="relative min-h-[200px] sm:min-h-[260px] lg:min-h-full">
            <img
              src="/images/services_corridor.jpg"
              alt="Hospital corridor"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-28 z-10 pointer-events-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                <path d="M0,0 L72,0 C48,32 18,68 0,100 Z" fill="#04432E" />
                <path
                  d="M72,0 C48,32 18,68 0,100"
                  stroke="#C9A24D"
                  strokeWidth="3.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14">
        <h2 className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">
          Where PMCG Can Help
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="relative flex flex-col bg-white rounded-2xl border border-gray-200/90 shadow-[0_6px_24px_-10px_rgba(4,67,46,0.18)] p-6 sm:p-7 min-h-[240px]"
              >
                <Icon className="w-9 h-9 text-[#0B6B3A] stroke-[1.6]" aria-hidden="true" />
                <h3 className="mt-4 font-heading font-bold text-[#04432E] text-xl leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[0.95rem] text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6">
        <div className="rounded-2xl bg-[#F3F5F4] border border-gray-200/80 px-5 sm:px-8 py-6 sm:py-7">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
            <div className="lg:w-52 flex-shrink-0 lg:pr-6 lg:border-r lg:border-gray-300">
              <h2 className="font-heading font-bold text-[#04432E] text-3xl sm:text-4xl">
                How We Work
              </h2>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-3 flex-1">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="w-11 h-11 rounded-full bg-[#0B6B3A] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white stroke-[2]" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#04432E] text-base">{step.title}</h3>
                        <p className="text-sm text-gray-600 leading-snug mt-0.5">{step.description}</p>
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <ChevronRight className="hidden lg:block w-5 h-5 text-gold flex-shrink-0" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to={consultationPath} className="inline-flex rounded-full bg-[#0B3B24] px-7 py-3 text-sm font-semibold text-white hover:bg-[#072818]">
            Discuss Your Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
