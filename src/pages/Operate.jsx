import { Link } from 'react-router-dom';
import {
  Compass,
  GitBranch,
  Gauge,
  UserCheck,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  Building,
  Target
} from 'lucide-react';
import CardDivider from '../components/CardDivider';

export default function Operate() {
  const coreAreas = [
    {
      id: "01",
      title: "Patient Flow",
      icon: Compass,
      subtitle: "Conversion & Journey Progression",
      description: "Assess how patients move from OPD to admission and discharge, pinpointing exact milestones where conversion is compromised.",
      keyPoints: [
        "OPD-to-Admission conversion leak analysis",
        "Diagnostic drop-off & referral tracking",
        "Discharge clearance & bed turnover friction",
        "Patient communication touchpoints",
      ],
    },
    {
      id: "02",
      title: "Process",
      icon: GitBranch,
      subtitle: "Workflow & Interdepartmental Handoffs",
      description: "Review workflows across clinical, administrative, and diagnostic departments to remove structural and operational bottlenecks.",
      keyPoints: [
        "Cross-departmental handoff protocols",
        "Emergency to IP admission velocity",
        "OR scheduling & turnaround workflows",
        "Pharmacy & billing verification sync",
      ],
    },
    {
      id: "03",
      title: "Performance",
      icon: Gauge,
      subtitle: "Capacity Utilisation & Revenue Capture",
      description: "Optimize utilisation of core high-capital assets—beds, operating theatres, diagnostic imaging—and plug silent billing gaps.",
      keyPoints: [
        "Surgical suite & OT block utilisation",
        "ICU and general ward bed management",
        "Diagnostic equipment idle-time reduction",
        "Revenue leakage & tariff schedule discipline",
      ],
    },
    {
      id: "04",
      title: "People & Accountability",
      icon: UserCheck,
      subtitle: "Alignment & Execution Ownership",
      description: "Align teams, department heads, and operational roles so clinical decisions translate directly into timely administrative execution.",
      keyPoints: [
        "Clear operational ownership & RACI matrix",
        "Daily operational cadence & standups",
        "Bridging doctor recommendations to execution",
        "Measurable departmental KPIs & transparency",
      ],
    },
  ];

  const doNotItems = [
    "Operate referral networks or patient commission models",
    "Engage in volume-based corridors or patient broker syndicates",
    "Compromise clinical autonomy or influence patient care decisions",
    "Prioritize short-term throughput over patient safety and compliance",
  ];

  const workflowSteps = [
    {
      step: "Phase 1",
      name: "On-Site Diagnostic",
      desc: "Comprehensive 2-week quantitative & qualitative mapping of patient flow, OT schedules, and admission conversion.",
    },
    {
      step: "Phase 2",
      name: "Bottleneck Quantification",
      desc: "Delivering an executive audit report detailing exact revenue leakage points and departmental blockages.",
    },
    {
      step: "Phase 3",
      name: "Execution Framework",
      desc: "Restructuring departmental handoffs, scheduling systems, and establishing daily accountability rhythms.",
    },
    {
      step: "Phase 4",
      name: "Governance & Review",
      desc: "Institutionalizing management dashboards and clinical governance reviews to ensure lasting performance.",
    },
  ];

  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* HEADER HERO SECTION */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 pt-8 md:pt-12 text-center">
        <div className="relative bg-white rounded-3xl shadow-xl px-6 sm:px-10 md:px-16 py-12 md:py-20 border border-gray-100">
          <div className="absolute left-0 top-6 bottom-12 w-1 gold-line-v rounded-r"></div>
          <div className="absolute right-0 top-6 bottom-12 w-1 gold-line-v rounded-l"></div>

          <div className="max-w-[75rem] mx-auto">
            <span className="text-gold uppercase tracking-wider font-semibold text-xs md:text-sm">
              Operational Methodology
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-evergreen mt-3 mb-6 leading-tight">
              Structured hospital operations improve performance and reduce revenue loss.
            </h1>

            <CardDivider className="my-8" />

            <p className="text-charcoal-light text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-4xl mx-auto">
              PMCG works with hospitals to identify breakdowns in patient flow, utilisation and execution, and fix them through structured operational and governance interventions.
            </p>
          </div>
        </div>
      </section>

      {/* HOW PMCG WORKS - 4 CORE PILLARS */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6">
        <div className="relative bg-white rounded-3xl shadow-xl px-6 sm:px-10 md:px-16 py-12 md:py-16 border border-gray-100">
          <div className="max-w-[75rem] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold uppercase tracking-wider font-semibold text-xs md:text-sm">
                Framework for Change
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-evergreen mt-1">
                How PMCG Works
              </h2>
              <p className="text-charcoal-muted text-sm md:text-base mt-2">
                All institutional improvements are engineered through four interconnected operating pillars:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreAreas.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="p-8 rounded-2xl bg-offwhite/50 border border-gray-200 hover:border-gold transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-evergreen text-gold flex items-center justify-center font-bold">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-heading text-2xl font-bold text-gray-300">
                          {pillar.id}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-evergreen mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-3">
                        {pillar.subtitle}
                      </p>

                      <p className="text-charcoal text-sm md:text-base leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <CardDivider className="my-3" />
                      <span className="text-xs font-semibold text-evergreen uppercase tracking-wide block mb-2">
                        Key Diagnostic Focus:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal-muted">
                        {pillar.keyPoints.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Divider */}
      <CardDivider className="my-10 max-w-[85rem] mx-auto px-4 sm:px-6" />

      {/* ENGAGEMENT LIFECYCLE */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6">
        <div className="relative bg-white rounded-3xl shadow-xl px-6 sm:px-10 md:px-16 py-12 md:py-16 border border-gray-100">
          <div className="max-w-[75rem] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-gold uppercase tracking-wider font-semibold text-xs md:text-sm">
                Structured Execution
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-evergreen mt-1">
                The Advisory Engagement Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((ws, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gold shadow-sm flex flex-col"
                >
                  <span className="text-xs font-bold text-gold uppercase tracking-wider mb-1">
                    {ws.step}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-evergreen mb-2">
                    {ws.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signature Divider */}
      <CardDivider className="my-10 max-w-[85rem] mx-auto px-4 sm:px-6" />

      {/* WHAT WE DO NOT - GOVERNANCE COMMITMENT */}
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6">
        <div className="relative bg-evergreen text-offwhite rounded-3xl shadow-xl px-6 sm:px-10 md:px-16 py-12 md:py-16 overflow-hidden">
          <div className="max-w-[75rem] mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Institutional Integrity Guarantee</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-offwhite mb-4">
                  What We Do Not
                </h2>
                <p className="text-offwhite/90 text-sm sm:text-base leading-relaxed mb-6">
                  PMCG does not operate referral networks, patient commission models, or volume-based corridors. Our work is strictly governance-led, operational, and focused exclusively on institutional performance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-offwhite/85">
                  {doNotItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-evergreen-dark/40 p-3 rounded-lg border border-evergreen-light/20">
                      <span className="text-gold font-bold">✕</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-auto p-6 sm:p-8 bg-evergreen-dark rounded-2xl border border-gold/30 text-center flex flex-col items-center">
                <Building className="w-12 h-12 text-gold mb-3" />
                <h3 className="font-heading text-xl font-bold text-offwhite mb-2">
                  Ready to Optimize?
                </h3>
                <p className="text-xs text-offwhite/70 max-w-xs mb-6">
                  Engage our team for an independent performance evaluation of your hospital's operations.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-evergreen font-semibold text-sm transition-all shadow-md"
                >
                  <span>Book Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

