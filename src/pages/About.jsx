import { Link } from 'react-router-dom';
import {
  Building2,
  Building,
  Users,
  Monitor,
  Globe,
  Settings,
  Target,
  TrendingUp,
  ChevronRight,
  ShieldCheck,
  UserPlus
} from 'lucide-react';
import { HeadingDivider } from '../components/CardDivider';

export default function About() {
  const whoWeWorkWith = [
    {
      title: "Hospitals & Health Systems",
      icon: <Building2 className="w-8 h-8 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Tier-2 & Emerging Hospitals in India",
      icon: <Building className="w-8 h-8 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Investors in Healthcare",
      icon: <Users className="w-8 h-8 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Digital Health Companies",
      icon: <Monitor className="w-8 h-8 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "International Healthcare Partners",
      icon: <Globe className="w-8 h-8 text-[#0B4D32] stroke-[1.8]" />,
    },
  ];

  const approachSteps = [
    {
      name: "Assess",
      icon: <Settings className="w-5 h-5 text-[#0B4D32] stroke-[2]" />,
      desc: "Understand your current performance and priorities.",
    },
    {
      name: "Strengthen",
      icon: <Target className="w-5 h-5 text-[#0B4D32] stroke-[2]" />,
      desc: "Implement practical improvements with measurable outcomes.",
    },
    {
      name: "Sustain",
      icon: <TrendingUp className="w-5 h-5 text-[#0B4D32] stroke-[2]" />,
      desc: "Build capability for long-term performance and growth.",
    },
  ];

  const areasOfFocus = [
    {
      title: "Hospital Operations & Performance Improvement",
      icon: <Building2 className="w-7 h-7 text-white stroke-[1.8]" />,
    },
    {
      title: "Digital Transformation & AI Enablement",
      icon: <Monitor className="w-7 h-7 text-white stroke-[1.8]" />,
    },
    {
      title: "Quality, Governance & Accreditation",
      icon: <ShieldCheck className="w-7 h-7 text-white stroke-[1.8]" />,
    },
    {
      title: "International Patient Programmes",
      icon: <UserPlus className="w-7 h-7 text-white stroke-[1.8]" />,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-14 lg:space-y-16 pb-20 font-body text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEF6F9] via-[#E6F1F5] to-[#F3F8FA] border-b border-gray-200/60">
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center lg:min-h-[460px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 px-6 sm:px-10 lg:pl-12 lg:pr-8 py-9 sm:py-12 lg:py-16 z-10">
            {/* Eyebrow */}
            {/* <p className="text-xs sm:text-sm font-bold tracking-wider text-[#0B4D32] uppercase mb-4">
              ABOUT PMCG
            </p> */}

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-[#11231A] tracking-tight leading-[1.18] mb-4">
              A Healthcare Partner for<br className="hidden sm:inline" />
              Operational Excellence<br className="hidden sm:inline" />
              and Global Healthcare Access.
            </h1>

            {/* Gold Underline Accent Line */}

            {/* <p className="text-sm sm:text-base lg:text-lg text-charcoal-light leading-relaxed max-w-xl">
              Partnering with healthcare leaders to build accountable pathways, elevate institutional readiness, and drive sustainable performance.
            </p> */}
          </div>

          {/* Right Image Column with Angled Gold Curve */}
          <div className="lg:col-span-5 relative h-56 sm:h-80 lg:h-full lg:min-h-[460px] overflow-hidden flex items-center justify-end">
            {/* Angled curved separator overlay (Desktop) */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 z-10 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full fill-[#E6F1F5]"
              >
                <path d="M0,0 L65,0 C45,35 15,65 0,100 Z" />
                <path
                  d="M65,0 C45,35 15,65 0,100"
                  stroke="#C9A24D"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Doctors Consulting in Hallway Image */}
            <img
              src="/images/about_doctors_hd.jpg"
              alt="Medical Team Reviewing Clinical Data"
              className="w-full h-full object-cover object-center lg:object-left shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* 2. SECTION: "Who We Are" (Standalone One Below Another) */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl">
          <HeadingDivider className="mb-6 justify-center max-w-none mx-0 px-0">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3B24] whitespace-normal">
              Who We Are
            </h2>
          </HeadingDivider>
          <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-700 leading-relaxed">
            PrimeMagnus Care Global (PMCG) is a healthcare operations and international healthcare partner, working with hospitals, healthcare investors and digital health companies to improve operational performance, strengthen governance, support technology adoption and develop international healthcare opportunities.
          </p>
        </div>
      </section>

      {/* 3. SECTION: "Who We Work With" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <HeadingDivider className="mb-6 justify-start max-w-none mx-0 px-0">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3B24] whitespace-normal">
              Who We Work With
            </h2>
          </HeadingDivider>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {whoWeWorkWith.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-between min-h-[145px] group"
              >
                <div className="h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-xs sm:text-[13px] font-bold text-[#0B3B24] leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: "Our Approach" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <HeadingDivider className="mb-6 justify-start max-w-none mx-0 px-0">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3B24] whitespace-normal">
              Our Approach
            </h2>
          </HeadingDivider>

          {/* 3 Process Step Cards with Gold Chevrons */}
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="w-full flex flex-col lg:flex-row items-center gap-4 flex-1">
                {/* Step Card */}
                <div className="w-full bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] flex items-start gap-4 flex-1 min-h-[110px]">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0B4D32] flex items-center justify-center flex-shrink-0 mt-0.5 bg-emerald-50/50">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3B24] text-base sm:text-lg mb-1">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Gold Chevron between steps on Desktop */}
                {idx < approachSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-gold px-1 flex-shrink-0">
                    <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BANNER: "Our Areas of Focus" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#093925] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Title */}
          <div className="lg:w-48 flex-shrink-0 text-center lg:text-left">
            <h2 className="no-heading-underline font-heading font-bold text-2xl sm:text-3xl text-white leading-tight">
              Our Areas<br />of Focus
            </h2>
          </div>

          {/* Vertical Divider on Desktop */}
          {/* <div className="hidden lg:block w-px bg-white/20 self-stretch my-1"></div> */}

          {/* Right: 4 Focus Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 w-full">
            {areasOfFocus.map((focus, idx) => (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  {focus.icon}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-white leading-snug">
                  {focus.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: "Our Experience" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Hospital Corner Photo on Left */}
          <div className="lg:col-span-5 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md">
            <img
              src="/images/about_hospital_hd.jpg"
              alt="PMCG Hospital Partner Facility"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <HeadingDivider className="mb-4 justify-start max-w-none mx-0 px-0">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3B24] whitespace-normal">
                Our Experience
              </h2>
            </HeadingDivider>
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-gray-700 leading-relaxed">
              PMCG is founded on 22 years of healthcare experience across NHS England and private healthcare in the UAE. This experience encompasses hospital operations, quality management, governance and JCI accreditation, alongside an understanding of the operational requirements involved in delivering coordinated healthcare services.
            </p>
          </div>
        </div>
      </section>

      {/* 7. SECTION: "Our Commitment" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl">
          <HeadingDivider className="mb-4 justify-start max-w-none mx-0 px-0">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0B3B24] whitespace-normal">
              Our Commitment
            </h2>
          </HeadingDivider>
          <p className="text-center font-heading font-bold italic text-2xl sm:text-3xl lg:text-4xl text-[#0B3B24] leading-relaxed">
            Trusted Pathways. Ethical Care.<br />
            Integrity in Motion.
          </p>
        </div>
      </section>
    </div>
  );
}
