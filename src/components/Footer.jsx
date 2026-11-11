export default function Footer() {
  return (
    <footer className="bg-[#052618] text-white pt-8 pb-20 sm:pb-8 border-t border-[#0b4d32]/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center space-y-2">
        {/* Gold Emblem / Icon in center */}
        <div className="w-20 h-20 rounded-full overflow-hidden mb-1">
          <img
            src="/images/primemagnus-logo.png"
            alt="PMCG Emblem"
            className="w-full h-full object-contain brightness-105 hue-rotate-[12deg]"
          />
        </div>

        {/* Tagline */}
        <p className="font-heading text-sm sm:text-base text-white/95 tracking-wide">
          Trusted Pathways. Ethical Care. Integrity in Motion.
        </p>

        {/* Signature Gold Dot Divider */}
        <div className="w-48 sm:w-64 my-1 flex items-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50"></div>
          <div className="mx-2.5 h-1.5 w-1.5 rounded-full bg-gold shadow-xs"></div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50"></div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60">
          © 2027 PrimeMagnus Care Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
