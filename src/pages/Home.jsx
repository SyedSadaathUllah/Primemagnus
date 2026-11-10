import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TrendingUp,
  Globe,
  ShieldCheck,
  Cpu,
  Users,
  Coins,
  Monitor,
  Search,
  Settings,
  BarChart3
} from 'lucide-react';
import { HeadingDivider } from '../components/CardDivider';

export default function Home() {
  const whereWeHelpCards = [
    {
      title: "Hospital Operations & Performance Improvement",
      subtitle: "Improve utilisation, patient processes and operational performance.",
      icon: (
        <div className="flex items-end justify-center gap-1 w-8 h-8 text-[#0B4D32]">
          <span className="w-1.5 h-3 bg-[#0B4D32] rounded-xs"></span>
          <span className="w-1.5 h-5 bg-[#0B4D32] rounded-xs"></span>
          <span className="w-1.5 h-7 bg-[#0B4D32] rounded-xs"></span>
          <span className="w-1.5 h-4 bg-[#0B4D32] rounded-xs"></span>
        </div>
      ),
    },
    {
      title: "Digital Transformation & AI Enablement",
      subtitle: "Assess readiness and apply technology to practical hospital needs.",
      icon: (
        <div className="w-8 h-8 rounded-lg border-2 border-[#0B4D32] flex items-center justify-center p-1">
          <Settings className="w-5 h-5 text-[#0B4D32] stroke-[1.8]" />
        </div>
      ),
    },
    {
      title: "Quality, Governance & Accreditation",
      subtitle: "Strengthen systems, standards and organisational accountability.",
      icon: <ShieldCheck className="w-8 h-8 text-[#0B4D32] stroke-[1.6]" />,
    },
    {
      title: "International Patient Programmes",
      subtitle: "Develop coordinated pathways for patients seeking care in India.",
      icon: <Globe className="w-8 h-8 text-[#0B4D32] stroke-[1.6]" />,
    },
  ];

  const wholeHospitalAreas = [
    {
      title: "Operations",
      description: "Patient flow, capacity and resource utilisation.",
      icon: <Users className="w-6 h-6 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Financial Performance",
      description: "Revenue integrity, documentation, coding and billing.",
      icon: <Coins className="w-6 h-6 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Governance",
      description: "Standards, accountability and operational controls.",
      icon: <ShieldCheck className="w-6 h-6 text-[#0B4D32] stroke-[1.8]" />,
    },
    {
      title: "Technology",
      description: "Digital readiness, practical AI applications and workflow improvement.",
      icon: <Monitor className="w-6 h-6 text-[#0B4D32] stroke-[1.8]" />,
    },
  ];

  const progressSteps = [
    {
      title: "Understand",
      description: "Establish the operational situation, identify gaps and agree priorities.",
      icon: <Search className="w-5 h-5 text-white stroke-[2]" />,
    },
    {
      title: "Implement",
      description: "Work with the relevant teams to introduce practical changes.",
      icon: <Settings className="w-5 h-5 text-white stroke-[2]" />,
    },
    {
      title: "Monitor",
      description: "Track agreed measures, address gaps and strengthen ongoing accountability.",
      icon: <BarChart3 className="w-5 h-5 text-white stroke-[2]" />,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-12 font-body text-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EEF6F9] via-[#E6F1F5] to-[#F3F8FA] border-b border-gray-200/60">
        {/* Subtle Top Gold Accent Line */}
        <div className="absolute top-0 left-0 w-36 h-1 bg-gradient-to-r from-gold to-transparent"></div>

        <div className="max-w-[85rem] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center min-h-[520px]">
          {/* Left Text Column */}
          <div className="lg:col-span-7 px-6 sm:px-10 lg:pl-12 lg:pr-8 py-12 lg:py-16 z-10">
            {/* Category Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-wider text-[#0B4D32] uppercase mb-4">
              Healthcare Operations • Performance • Digital Enablement
            </p>

            {/* Main Headline */}
            <h1 className="no-heading-underline text-3xl sm:text-5xl lg:text-[3.25rem] font-heading font-bold text-[#11231A] tracking-tight leading-[1.12] mb-6">
              Better Hospital Operations.<br />
              Stronger Performance.
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-sm sm:text-base lg:text-[1.05rem] text-charcoal-light leading-relaxed max-w-xl mb-8">
              PMCG works with hospitals to improve operational efficiency, optimise the use of hospital resources, strengthen revenue performance and support the practical adoption of digital and AI solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0B3B24] hover:bg-[#072818] text-white font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <span className="text-base">→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3 rounded-full bg-white hover:bg-gray-50 text-[#0B3B24] border border-[#0B3B24] font-medium text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
              >
                Discuss an Engagement
              </Link>
            </div>
          </div>

          {/* Right Image Column with Angled Gold Curve */}
          <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full lg:min-h-[520px] overflow-hidden flex items-center justify-end">
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

            {/* Hospital Building Image */}
            <img
              src="/images/hero_hospital_hd.jpg"
              alt="Modern Hospital Facility"
              className="w-full h-full object-cover object-center lg:object-left shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* 2. SECTION: "Where PMCG Can Help" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with Matching Gradient Line (no dots) */}
        <HeadingDivider className="mb-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0B3B24] whitespace-normal">
            Where PMCG Can Help
          </h2>
        </HeadingDivider>

        {/* Section Introduction */}
        <p className="text-center text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10 px-4">
          Practical support for hospitals across operations, technology, governance and international healthcare.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whereWeHelpCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start group"
            >
              {/* Icon Container */}
              <div className="h-14 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B3B24] mb-2 leading-snug">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECTION: "Improving One Area Often Requires Looking at the Whole Hospital" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF3F5] rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 lg:pr-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-heading font-bold text-[#0B3B24] leading-[1.2] mb-5">
                Improving One Area Often<br className="hidden sm:inline" />
                Requires Looking at the<br className="hidden sm:inline" />
                Whole Hospital
              </h2>
              <p className="text-xs sm:text-sm lg:text-[0.95rem] text-gray-700 leading-relaxed">
                A hospital's performance is shaped by interconnected processes. Patient flow affects capacity. Documentation affects coding and revenue. Governance affects consistency. Technology must support the way people actually work.
              </p>
            </div>

            {/* Right 2x2 Feature Grid in Individual White Boxes */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {wholeHospitalAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-white/90 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-200 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {area.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B3B24] text-base sm:text-[1.05rem] mb-1 leading-snug">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: "Practical Involvement. Measurable Progress." */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Matching Gradient Line (no dots) */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <HeadingDivider className="mb-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0B3B24] whitespace-normal">
              Practical Involvement. Measurable Progress.
            </h2>
          </HeadingDivider>
          <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed px-4">
            PMCG works with hospital leadership and operational teams to move beyond identifying problems and support the implementation of agreed improvements.
          </p>
        </div>

        {/* 3 Step Process Cards with Gold Arrows */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          {progressSteps.map((step, idx) => (
            <div key={idx} className="w-full flex flex-col lg:flex-row items-center gap-4 flex-1">
              {/* Step Card */}
              <div className="w-full bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.05)] relative flex items-center justify-center px-20 lg:px-6 lg:pt-20 gap-4 flex-1 min-h-[110px]">
                {/* Green Circle Icon */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 lg:left-1/2 lg:top-6 lg:-translate-x-1/2 lg:translate-y-0 w-11 h-11 rounded-full bg-[#0B4D32] flex items-center justify-center shadow-sm">
                  {step.icon}
                </div>
                {/* Content */}
                <div className="w-full min-w-0 text-center">
                  <h3 className="font-bold text-[#0B3B24] text-base sm:text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Gold Arrow (between steps on Desktop) */}
              {idx < progressSteps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center text-gold px-1 flex-shrink-0">
                  <ArrowRight className="w-6 h-6 stroke-[2.2]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. BANNER: "Have a Hospital Challenge You Need to Address?" */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#093925] rounded-3xl overflow-hidden relative shadow-xl grid grid-cols-1 lg:grid-cols-12 min-h-[220px]">
          {/* Left Text Content */}
          <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12 z-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-heading font-bold text-white mb-3 leading-snug">
              Have a Hospital Challenge You Need to Address?
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-white/90 leading-relaxed max-w-2xl mb-6">
              Whether the priority is operational performance, revenue integrity, governance, digital adoption or international patient services, start a conversation with PMCG.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-gray-100 text-[#093925] font-semibold text-sm sm:text-base shadow-sm transition-all duration-200"
              >
                <span>Discuss an Engagement</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>

          {/* Right Corridor Photo with Angled Divider */}
          <div className="lg:col-span-4 relative h-48 lg:h-full min-h-[220px] overflow-hidden flex items-center justify-end">
            {/* Angled curved separator overlay (Desktop) */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-16 z-10 pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full fill-[#093925]"
              >
                <path d="M0,0 L60,0 C40,40 10,70 0,100 Z" />
                <path
                  d="M60,0 C40,40 10,70 0,100"
                  stroke="#C9A24D"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>

            {/* Hospital Corridor Image */}
            <img
              src="/images/cta_corridor_hd.jpg"
              alt="Medical Team in Hospital Corridor"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
